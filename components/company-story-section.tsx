"use client"

import Image from "next/image"

export function CompanyStorySection() {
  return (
    <section className="relative py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-[700px] md:h-[800px]">
              <Image
                src="/img 5.jpeg"
                alt="LUMEN Office"
                width={1600}
                height={1200}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 opacity-20 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
                <path
                  d="M 0 200 Q 50 150 100 100 T 200 0 L 200 200 Z"
                  fill="rgba(184, 157, 24, 0.3)"
                />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div>
            {/* <div className="inline-block px-6 py-2.5 bg-cta-gradient rounded-full mb-6 shadow-md">
              <p className="text-sm font-bold text-white uppercase tracking-wider">Our Story</p>
            </div> */}

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
              A Foundation of Trust and Financial Excellence
            </h2>
            <div className="w-32 h-1 bg-accent mb-6"></div>

            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Founded with a vision to illuminate the path to financial success, LUMEN Audit & Advisory has grown from a small practice to a trusted partner for businesses across Saudi Arabia. Our journey began with a simple belief: that every business deserves access to expert financial guidance, regardless of size.
            </p>

            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Today, we combine decades of collective professional experience with advanced technology to provide comprehensive audit, tax, and advisory services. Licensed and established in Saudi Arabia, we bring a deep understanding of the Kingdom's regulatory framework, commercial environment, and evolving business landscape.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="h-2 w-2 bg-accent flex-shrink-0 mt-1.5"></div>
                <p className="text-primary font-semibold">Industry-leading expertise in audit, tax, and advisory</p>
              </div>
              <div className="flex gap-4">
                <div className="h-2 w-2 bg-accent flex-shrink-0 mt-1.5"></div>
                <p className="text-primary font-semibold">Client-centric approach with personalized solutions</p>
              </div>
              <div className="flex gap-4">
                <div className="h-2 w-2 bg-accent flex-shrink-0 mt-1.5"></div>
                <p className="text-primary font-semibold">Technology-enabled processes for efficiency and accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40"></div>
    </section>
  )
}

