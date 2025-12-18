// Make blog listing page also dynamic
export const dynamic = "force-dynamic";

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogsListingSection } from "@/components/blogs-listing-section"
import { getAllBlogs } from "@/lib/blogs-data"

export default async function BlogsPage() {
  const blogs = await getAllBlogs()

  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />
      <BlogsListingSection blogs={blogs} />
      <Footer />
    </main>
  )
}
