"use client"

// Icon components for each process step
const ProcessIcon = ({ stepId }: { stepId: string }) => {
  const iconClass = "w-8 h-8"
  
  switch (stepId) {
    case "understanding":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    case "planning":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      )
    case "execution":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg>
      )
    case "review":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
      )
    default:
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        </svg>
      )
  }
}

const processSteps = [
  {
    id: "understanding",
    number: "01",
    title: "Understanding Requirements",
    description: "We begin with a comprehensive consultation to gain a clear understanding of your business operations, challenges, and strategic objectives. This stage allows us to identify priorities, risks, and expectations.",
  },
  {
    id: "planning",
    number: "02",
    title: "Strategy Development",
    description: "Based on our assessment, we develop a tailored strategy aligned with your business goals, regulatory obligations, and operational requirements.",
  },
  {
    id: "execution",
    number: "03",
    title: "Execution",
    description: "Our team executes the agreed plan using proven methodologies, industry best practices, and advanced tools, ensuring accuracy, consistency, and timely delivery.",
  },
  {
    id: "review",
    number: "04",
    title: "Review & Support",
    description: "We present clear outcomes and insights, followed by continuous advisory support to enable informed decision-making and sustained business improvement.",
  },
]

export function ProcessSection() {
  return (
    <section className="relative py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-2xl md:text-3xl font-extrabold text-accent uppercase tracking-wider mb-6">Our Process</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
            Experience Our Impact Through <span className="text-accent">Them</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            We are a dedicated team of experienced auditors and financial professionals committed to building lasting relationships with our clients. From startups to unique needs.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-primary/10 hover:border-accent/40 overflow-hidden flex items-start gap-6">
                {/* Left Side - Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-accent/10 flex items-center justify-center text-accent transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                    <span className="text-3xl md:text-4xl font-bold">{step.number}</span>
                  </div>
                </div>

                {/* Right Side - Text Content */}
                <div className="flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40"></div>
    </section>
  )
}

