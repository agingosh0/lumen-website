"use client"

import { useState, useEffect, useRef } from "react"

const stats = [
  {
    number: "500+",
    label: "Happy Clients",
    description: "Trusted by businesses across Saudi Arabia",
  },
  {
    number: "15+",
    label: "Years Experience",
    description: "Combined expertise in financial services",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
    description: "Consistently high satisfaction ratings",
  },
  {
    number: "100%",
    label: "Compliance Rate",
    description: "Perfect regulatory compliance record",
  },
]

// Helper function to parse number and suffix from string
function parseStatNumber(value: string): { number: number; suffix: string } {
  const match = value.match(/^(\d+)([+%]?)$/)
  if (match) {
    return {
      number: parseInt(match[1], 10),
      suffix: match[2] || "",
    }
  }
  return { number: 0, suffix: "" }
}

// Counter animation hook
function useCounterAnimation(
  target: number,
  duration: number = 2000,
  startAnimation: boolean = false
): number {
  const [count, setCount] = useState(0)
  const startTimeRef = useRef<number | null>(null)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!startAnimation) {
      setCount(0)
      return
    }

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime
      }

      const elapsed = currentTime - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * target)

      setCount(currentCount)

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [target, duration, startAnimation])

  return count
}

// Stat Card Component
function StatCard({
  stat,
  startAnimation,
}: {
  stat: { number: string; label: string; description: string }
  startAnimation: boolean
}) {
  const { number: targetNumber, suffix } = parseStatNumber(stat.number)
  const animatedCount = useCounterAnimation(targetNumber, 2000, startAnimation)

  return (
    <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-primary/10 hover:border-accent/40 group text-center">
      {/* Number */}
      <div className="mb-4">
        <span className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
          {animatedCount}
          {suffix}
        </span>
      </div>

      {/* Label */}
      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
        {stat.label}
      </h3>

      {/* Description */}
      <p className="text-foreground/70 text-sm leading-relaxed">
        {stat.description}
      </p>

      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  )
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="relative py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-2xl md:text-3xl font-extrabold text-accent uppercase tracking-wider mb-6">Our Impact</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
            Numbers That <span className="text-accent">Speak</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Our track record demonstrates our commitment to excellence and client success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} startAnimation={isVisible} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40"></div>
    </section>
  )
}

