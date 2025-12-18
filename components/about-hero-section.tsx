"use client"

import Image from "next/image"
import Link from "next/link"

export function AboutHeroSection() {
  return (
    <section className="relative w-full pt-[300px] pb-24 overflow-hidden min-h-[600px] flex items-center">
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/hands - about us.jpg')",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
        <div className="max-w-4xl">
          {/* Header Label */}
          {/* <div className="inline-block px-6 py-2.5 bg-cta-gradient rounded-full mb-6 shadow-md">
            <p className="text-sm font-bold text-white uppercase tracking-wider">About LUMEN</p>
          </div> */}

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Built on Trust. Driven by <span className="text-accent">Expertise</span>.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
            We are a dedicated team of experienced auditors and financial professionals committed to building long-term partnerships with our clients. From startups to established enterprises, we deliver expert solutions precisely aligned with each client's unique business needs.
          </p>

          {/* Buttons */}
          <div className="flex flex-row items-center gap-4">
            <Link href="/contact" className="px-6 py-3 md:px-8 md:py-4 bg-accent text-primary font-semibold hover:bg-accent/90 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl">
              Free Consultation
            </Link>
            <Link href="/services" className="px-6 py-3 md:px-8 md:py-4 border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-300 rounded-lg">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

