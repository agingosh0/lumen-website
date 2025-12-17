import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ClientsSection } from "@/components/clients-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { InsightsSection } from "@/components/insights-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { getAllBlogs } from "@/lib/blogs-data"

export default async function Home() {
  const blogs = await getAllBlogs()
  const recentInsights = blogs.slice(0, 3)

  return (
    <main className="min-h-screen bg-transparent">
      <div className="relative">
        <Navbar />
        <HeroSection />
      </div>
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ClientsSection />
      <InsightsSection insights={recentInsights} />
      {/* <TestimonialsSection /> */}
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
