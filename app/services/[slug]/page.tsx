import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { allServices, getServiceBySlug, getAllServiceSlugs, type Service } from "@/lib/services-data"

// Generate static params for all services
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)
  
  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.title} | LUMEN Audit & Advisory`,
    description: service.shortDescription,
  }
}

function getIconComponent(iconName: string) {
  const iconProps = {
    className: "w-6 h-6",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  }

  switch (iconName) {
    case "check":
      return (
        <svg {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case "shield":
      return (
        <svg {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    case "chart":
      return (
        <svg {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    case "document":
      return (
        <svg {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    default:
      return (
        <svg {...iconProps}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
  }
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />

      {/* Header/Banner Section */}
      <section className="relative w-full bg-primary-gradient py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {service.title}
            </h1>
            {/* Breadcrumbs */}
            <nav className="flex items-center justify-center gap-2 text-white/90 text-sm md:text-base">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/60">/</span>
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <span className="text-white/60">/</span>
              <span className="text-white">{service.title}</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Left Column - Sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="bg-primary-sidebar rounded-xl p-6 shadow-xl">
                  {/* Service List */}
                  <div className="space-y-2 mb-6">
                    {allServices.map((s) => (
                      <Link
                        key={s.id}
                        href={`/services/${s.slug}`}
                        className={`block px-4 py-3 rounded-lg transition-all duration-300 text-sm ${
                          s.slug === service.slug
                            ? "bg-accent text-primary font-semibold shadow-lg"
                            : "text-white hover:bg-white/10"
                        }`}
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>

                  {/* Contact Us Button */}
                  <Link
                    href="/contact"
                    className="block w-full py-3 px-6 rounded-lg font-semibold text-white text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-primary-button-gradient"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Service Details */}
            <div className="md:col-span-3">
              {/* Service Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {service.title}
              </h2>

              {/* Service Image */}
              <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description Paragraphs */}
              <div className="prose prose-lg max-w-none mb-12">
                {service.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-foreground/80 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Features Section */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                  Key Features
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.keyFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-6 bg-white rounded-xl border-2 border-primary/10 hover:border-accent/40 hover:shadow-lg transition-all duration-300"
                    >
                      {/* Icon */}
                      <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        {getIconComponent(feature.icon)}
                      </div>
                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="font-bold text-primary mb-2 text-lg">{feature.title}</h4>
                        <p className="text-foreground/70 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Process Section */}
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                  Our Process
                </h3>
                <div className="space-y-10">
                  {service.processSteps.map((step, index) => (
                    <div key={index} className="flex gap-6">
                      {/* Step Number */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                          <span className="text-3xl font-bold text-gray-400">{step.number}</span>
                        </div>
                      </div>
                      {/* Step Content */}
                      <div className="flex-1 pt-2">
                        <h4 className="text-xl font-bold text-primary mb-3">{step.title}</h4>
                        <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-primary-gradient rounded-xl p-8 md:p-12 text-center shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Discuss Your Needs?
                </h3>
                <p className="text-white/90 mb-8 text-base md:text-lg max-w-2xl mx-auto">
                  Contact us today for a free consultation and discover how our {service.title.toLowerCase()} services can benefit your business.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-cta-gradient hover:bg-cta-gradient-hover"
                >
                  Get a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

