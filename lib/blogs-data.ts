import { fetchAPI, getStrapiMedia } from "./strapi"

export interface BlogPost {
  id: string
  slug: string
  title: string
  category: string
  date: string
  description: string
  image: string
  content: string
  author: string
  readTime: string
}

// Simple Markdown to HTML converter to avoid external dependencies for now
function simpleMarkdownToHtml(markdown: string): string {
  if (!markdown) return ""
  
  let html = markdown
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold mt-6 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mt-8 mb-4">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mt-8 mb-6">$1</h1>')
    // Bold
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    // Lists (basic support)
    .replace(/^\- (.*$)/gim, '<li class="ml-4">$1</li>')
    // Paragraphs (double newlines)
    .replace(/\n\n/gim, '</p><p class="mb-4">')
    // Single newlines to breaks
    .replace(/\n/gim, '<br />')

  // Wrap in p tag if not starting with tag
  if (!html.trim().startsWith('<')) {
    html = `<p class="mb-4">${html}</p>`
  }
  
  return html
}

export async function getAllBlogs(): Promise<BlogPost[]> {
  try {
    const data = await fetchAPI("/articles", { populate: "*" })
    
    if (!data?.data) {
      return []
    }
    
    return data.data.map((item: any) => mapStrapiToBlogPost(item))
  } catch (error) {
    console.error("Error fetching blogs:", error)
    return []
  }
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    const data = await fetchAPI("/articles", { 
      filters: { slug },
      populate: "*" 
    })
    
    if (!data?.data || data.data.length === 0) {
      return undefined
    }

    // Since Strapi returns an array even for filtered results, grab the first one
    return mapStrapiToBlogPost(data.data[0])
  } catch (error) {
    console.error(`Error fetching blog with slug ${slug}:`, error)
    return undefined
  }
}

function mapStrapiToBlogPost(item: any): BlogPost {
  // In Strapi v5, attributes are typically spread on the item itself for JSON:API format,
  // OR nested if using the REST API without flattening.
  // The log shows they are DIRECTLY on the item.
  // item.attributes fallback is for v4.
  const attrs = item.attributes || item
  
  // Extract content from dynamic zone blocks
  let content = ""
  if (attrs.blocks) {
    attrs.blocks.forEach((block: any) => {
      if (block.__component === "shared.rich-text") {
        content += simpleMarkdownToHtml(block.body)
      }
      // Add more block handlers here if needed (e.g., shared.media, shared.quote)
    })
  } else {
    // Fallback if no blocks: use description or check for a 'content' field if schema changed
    if (!content && attrs.description) {
        content = `<p>${attrs.description}</p>`
    }
  }

  // Handle Cover Image
  // Log structure: cover: { id, documentId, url, formats: { ... } }
  let imageUrl = ""
  if (attrs.cover) {
     if (typeof attrs.cover.url === 'string') {
        imageUrl = getStrapiMedia(attrs.cover.url) || ""
     } else if (attrs.cover.data?.attributes?.url) {
        // v4 structure
        imageUrl = getStrapiMedia(attrs.cover.data.attributes.url) || ""
     } else if (attrs.cover.formats?.medium?.url) {
        imageUrl = getStrapiMedia(attrs.cover.formats.medium.url) || ""
     }
  }
  if (!imageUrl) imageUrl = "/placeholder.jpg"


  // Handle Category
  // Log doesn't show category field yet, but logic should be safe
  let categoryName = "General"
  if (attrs.category) {
      if (typeof attrs.category.name === 'string') {
          categoryName = attrs.category.name
      } else if (attrs.category.data?.attributes?.name) {
          categoryName = attrs.category.data.attributes.name
      }
  }

  // Handle Author
  let authorName = "LUMEN Team"
  if (attrs.author) {
      if (typeof attrs.author.name === 'string') {
          authorName = attrs.author.name
      } else if (attrs.author.data?.attributes?.name) {
          authorName = attrs.author.data.attributes.name
      }
  }

  // Handle ID: v5 uses documentId for unique identification in some contexts, but id is also there.
  // Let's ensure we have a string.
  const id = item.documentId || item.id

  return {
    id: id ? id.toString() : "",
    slug: attrs.slug,
    title: attrs.title,
    category: categoryName,
    date: attrs.publishedAt ? new Date(attrs.publishedAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }) : "Unknown Date",
    description: attrs.description || "",
    image: imageUrl,
    content: content,
    author: authorName,
    readTime: content ? `${Math.ceil(content.replace(/<[^>]*>/g, '').split(' ').length / 200)} min read` : "5 min read",
  }
}
