import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogsListingSection } from "@/components/blogs-listing-section"
import { getAllBlogs } from "@/lib/blogs-data"

export default async function BlogsPage() {
  const blogs = await getAllBlogs()
  
  return (
    <main className="min-h-screen bg-transparent">
      <div className="relative">
        <Navbar />
      </div>
      <BlogsListingSection blogs={blogs} />
      <Footer />
    </main>
  )
}
