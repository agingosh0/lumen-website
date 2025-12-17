"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { allServices } from "@/lib/services-data"

// Icon components for each service
const ServiceIcon = ({ serviceId }: { serviceId: string }) => {
  const iconClass = "w-12 h-12"
  
  switch (serviceId) {
    case "financial-audit":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    case "tax-zakat-advisory":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    case "compliance-risk-advisory":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    case "forensic-accounting":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    case "corporate-advisory":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    case "business-valuation":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    default:
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
  }
}

// Map services data to match the component format
const services = allServices.map((service) => ({
  id: service.id,
  slug: service.slug,
  title: service.title,
  description: service.shortDescription,
  image: service.image,
}))

export function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    onSelect() // Set initial index

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    // Auto-play functionality - carousel that loops from 5th to 1st
    const autoplay = setInterval(() => {
      const currentIdx = emblaApi.selectedScrollSnap()
      
      // Only show first 5 services (indices 0-4)
      if (currentIdx < 4) {
        // Move forward to next slide
        emblaApi.scrollNext()
      } else if (currentIdx === 4) {
        // At 5th image, jump directly to first image (index 0)
        emblaApi.scrollTo(0)
      }
    }, 2000) // Change slide every 2 seconds

    return () => clearInterval(autoplay)
  }, [emblaApi])

  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
            Core Services
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Comprehensive financial solutions designed to support your business at every stage of growth.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Positioned at extreme edges relative to carousel - Hidden on mobile */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute -left-16 md:-left-20 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 transform hover:scale-110"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute -right-16 md:-right-20 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 transform hover:scale-110"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5 pr-5 pl-5">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(33.333%-1.33rem)] min-w-0"
                >
                  <Link
                    href={"/services"}
                    onMouseEnter={() => setHoveredId(service.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="relative group cursor-pointer block"
                  >
                    <div className="relative rounded-2xl h-[550px] bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-primary/10 hover:border-accent/40 transform hover:scale-[1.02]">
                      {/* Image Container - Always visible, blurred on hover */}
                      <div className="absolute inset-0 transition-all duration-500">
                        <div className="relative w-full h-full">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className={`object-cover transition-all duration-500 ${hoveredId === service.id ? 'blur-md scale-110' : 'blur-0 scale-100'}`}
                          />
                          {/* Gradient overlay for better text readability */}
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-500 ${hoveredId === service.id ? 'opacity-80' : 'opacity-100'}`}></div>
                          {/* Title overlay on image - hidden on hover */}
                          <div className={`absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-300 ${hoveredId === service.id ? 'opacity-0' : 'opacity-100'}`}>
                            <h3 className="text-2xl font-bold text-white transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Content Container - Hidden by default, visible on hover */}
                      <div className={`absolute inset-0 p-8 flex flex-col justify-center transition-all duration-500 ${hoveredId === service.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        {/* Title */}
                        <h3 className="text-2xl font-bold text-primary mb-4 text-center transition-colors duration-300 drop-shadow-lg">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-white/90 leading-relaxed text-center drop-shadow-md">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40"></div>
    </section>
  )
}
