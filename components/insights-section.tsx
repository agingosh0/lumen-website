import Image from "next/image"
import Link from "next/link"
import { BlogPost } from "@/lib/blogs-data"

interface InsightsSectionProps {
  insights: BlogPost[]
}

export function InsightsSection({ insights }: InsightsSectionProps) {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* <div className="inline-block px-6 py-2.5 bg-cta-gradient rounded-full mb-6 shadow-md">
            <p className="text-sm font-bold text-white uppercase tracking-wider">INSIGHTS</p>
          </div> */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
            Explore Our <span className="text-accent">Insights</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Discover valuable insights, updates, and expert advice to navigate challenges and drive business success forward.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {insights.map((insight) => (
            <Link
              key={insight.id}
              href={`/blogs/${insight.slug}`}
              className="relative group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-primary/10 hover:border-accent/40 block"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={insight.image}
                  alt={insight.category}
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                {/* Category Label Overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <div
                    className="px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, rgba(7, 29, 73, 0.95) 0%, rgba(184, 157, 24, 0.9) 100%)`,
                    }}
                  >
                    {insight.category}
                  </div>
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-foreground/60 mb-3 font-medium">{insight.date}</p>
                <p className="text-foreground/80 leading-relaxed">{insight.description}</p>
              </div>

              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/blogs"
            className="inline-block px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-cta-gradient hover:bg-cta-gradient-hover"
          >
            View All
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40"></div>
    </section>
  )
}

