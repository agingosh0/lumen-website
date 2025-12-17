import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogDetailSection } from "@/components/blog-detail-section"
import { getBlogBySlug, getAllBlogs } from "@/lib/blogs-data"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const blogs = await getAllBlogs()
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const blog = await getBlogBySlug(params.slug)
  
  if (!blog) {
    return {
      title: "Blog Not Found",
    }
  }

  return {
    title: `${blog.title} | LUMEN Audit & Advisory`,
    description: blog.description,
  }
}

export default async function BlogDetailPage(props: { 
  params: Promise<{ slug: string }> 
}) {
  const params = await props.params
  
  const [blog, allBlogs] = await Promise.all([
    getBlogBySlug(params.slug),
    getAllBlogs()
  ])

  if (!blog) {
    notFound()
  }

  // Filter out the current blog and get 3 "You may also like" posts
  const relatedBlogs = allBlogs
    .filter(b => b.slug !== blog.slug)
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-transparent">
      <div className="relative">
        <Navbar />
      </div>
      <BlogDetailSection blog={blog} relatedBlogs={relatedBlogs} />
      <Footer />
    </main>
  )
}
