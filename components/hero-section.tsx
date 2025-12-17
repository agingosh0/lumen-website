"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full pt-20 sm:pt-24 md:pt-[140px] pb-12 md:pb-24 overflow-hidden min-h-[500px] md:min-h-[700px] lg:min-h-[900px] flex items-center">
      {/* Full Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src="/banner-10.png"
          alt="Hero Banner"
          fill
          priority
          className="object-cover object-[80%_center] md:object-center"
          sizes="100vw"
          quality={90}
        />
        {/* Gradient overlay - darker on left, lighter on right to show woman */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 w-full z-10 pt-4 md:pt-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center min-h-[400px] md:min-h-[600px] lg:min-h-[700px]">
          {/* Left Column - Text Content */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Main Heading with Horizontal Line */}
            <div className="mb-4 md:mb-6 flex items-center gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight">
                Illuminating Your <span className="text-accent">Financial Path</span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-10 leading-relaxed">
              Expert Audit and Advisory Services Strengthening Financial Confidence
            </p>

            {/* Buttons */}
            <Link href="/contact" className="text-primary font-semibold transition-all duration-300 whitespace-nowrap">
            <div className="flex flex-row items-center gap-2 sm:gap-3">
              <button className="px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-accent text-primary font-semibold hover:bg-accent/90 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl text-xs sm:text-sm md:text-base whitespace-nowrap">
                Free Consultation
              </button>
              <button className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-accent text-primary font-semibold hover:bg-accent/90 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
            </Link>
          </div>

          {/* Right Column - Empty, image shows through background */}
          <div className="hidden md:block">
            {/* Woman's image will be visible through the background */}
          </div>
        </div>
      </div>
    </section>
  )
}
