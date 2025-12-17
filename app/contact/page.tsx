import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <div className="relative">
        <Navbar />
        {/* Hero Section for Contact */}
        <section className="relative w-full pt-[140px] pb-24 overflow-hidden min-h-[500px] flex items-center">
          {/* Full Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('/modern-office-interior-saudi-arabia-financial-team.jpg')",
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
            <div className="max-w-4xl">
              {/* Header Label */}
              <div className="inline-block px-6 py-2.5 bg-cta-gradient rounded-full mb-6 shadow-md">
                <p className="text-sm font-bold text-white uppercase tracking-wider">Contact Us</p>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
                Start Your Financial <span className="text-accent">Transformation</span> Today
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                Reach out to discover personalized solutions tailored to your unique vision.
              </p>
            </div>
          </div>
        </section>
      </div>
      <ContactSection />
      <Footer />
    </main>
  )
}

