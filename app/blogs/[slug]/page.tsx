// 🔥 Force dynamic server on Vercel – no static build calls
export const dynamic = "force-dynamic";

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogDetailSection } from "@/components/blog-detail-section"
import { getBlogBySlug, getAllBlogs } from "@/lib/blogs-data"
import { notFound } from "next/navigation"

// ❌ REMOVE generateStaticParams – static build causes Strapi fail
// export async function generateStaticParams() {}

export async function generateMetadata({ params }: { params: { slug: string } }) {

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

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {

  // fetch current blog
  const blog = await getBlogBySlug(params.slug)

  if (!blog) {
    notFound()
  }

  // fetch related blogs
  const allBlogs = await getAllBlogs()

  // Filter out current blog
  const relatedBlogs = allBlogs
    .filter(b => b.slug !== blog.slug)
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />
      <BlogDetailSection blog={blog} relatedBlogs={relatedBlogs} />
      <Footer />
    </main>
  )
}
