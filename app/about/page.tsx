import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHeroSection } from "@/components/about-hero-section"
import { CompanyStorySection } from "@/components/company-story-section"
import { ValuesSection } from "@/components/values-section"
import { ProcessSection } from "@/components/process-section"
import { StatsSection } from "@/components/stats-section"
import { WhyChooseSection } from "@/components/why-choose-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <div className="relative">
        <Navbar />
        <AboutHeroSection />
      </div>
      <CompanyStorySection />
      <ValuesSection />
      <ProcessSection />
      {/* <StatsSection /> */}
      <Footer />
    </main>
  )
}


