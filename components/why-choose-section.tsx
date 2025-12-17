"use client"

import Image from "next/image"

const reasons = [
  {
    title: "Licensed in Saudi Arabia",
    description: "Fully licensed and regulated, operating under the highest compliance standards.",
    percentage: "100",
    image: "/img9.jpeg",
  },
  {
    title: "Experienced Professionals",
    description: "Specialized team with decades of combined expertise in financial advisory services.",
    percentage: "15+",
    image: "/img7.jpeg",
  },
  {
    title: "Client-Centric Approach",
    description: "Customized solutions designed to align precisely with your business objectives.",
    percentage: "98",
    image: "/img 5.jpeg",
  },
  {
    title: "Precision & Compliance",
    description: "Detail-oriented execution ensuring regulatory accuracy and compliance excellence.",
    percentage: "100",
    image: "/img28.jpeg",
  },
]

export function WhyChooseSection() {
  return (
    <section id="why" className="relative py-24 bg-[rgb(245,243,235)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content with Image */}
          <div className="relative">
            {/* Small Label - Optional, can be removed if not needed */}
            {/* <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Transparent process
            </p> */}

            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
              Why Choose LUMEN
            </h2>

            {/* Description */}
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Confidence, credibility, and financial excellence in every engagement.
            </p>

            {/* Image Container with Organic Shapes */}
            <div className="relative mt-8">
              {/* Organic curved shapes background - flowing borders */}
              <div className="absolute -bottom-12 -right-12 w-80 h-80 opacity-25 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
                  <path
                    d="M 0 200 Q 50 150 100 100 T 200 0 L 200 200 Z"
                    fill="rgba(184, 157, 24, 0.15)"
                  />
                </svg>
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
                  <path
                    d="M 0 200 Q 40 160 80 120 T 200 40 L 200 200 Z"
                    fill="rgba(7, 29, 73, 0.12)"
                  />
                </svg>
              </div>

              {/* Image with Play Button */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder Image - using a professional image */}
                <div className="relative w-full h-[500px] bg-gradient-to-br from-primary/20 to-accent/20">
                  <Image
                    src="/img 23.jpeg"
                    alt="Professional business meeting"
                    fill
                    className="object-cover"
                  />
                  
                  {/* Play Button Overlay */}
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div 
                        className="absolute inset-0 rounded-full blur-xl"
                        style={{
                          width: '100px',
                          height: '100px',
                          background: 'rgba(184, 157, 24, 0.3)',
                          transform: 'translate(-50%, -50%)',
                          left: '50%',
                          top: '50%',
                        }}
                      ></div>
                      <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                        
                        <svg 
                          className="w-8 h-8 text-accent ml-1" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Subtle pattern overlay */}
              <div 
                className="absolute top-4 right-4 w-32 h-32 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(7, 29, 73, 0.5) 1px, transparent 1px)',
                  backgroundSize: '12px 12px',
                }}
              ></div>
            </div>
          </div>

          {/* Right Column - Feature Cards Grid */}
          <div className="grid grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Image with semi-circular overlay */}
                <div className="relative mb-6 -mt-2">
                  {/* Image Container with semi-circular top */}
                  <div 
                    className="relative w-full h-40 overflow-hidden"
                    style={{
                      borderTopLeftRadius: '50%',
                      borderTopRightRadius: '50%',
                      borderBottomLeftRadius: '20px',
                      borderBottomRightRadius: '20px',
                    }}
                  >
                    <Image
                      src={reason.image}
                      alt={reason.title}
                      fill
                      className="object-cover"
                    />
                    
                    {/* Gradient overlay for better text visibility */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, rgba(184, 157, 24, 0.2) 0%, rgba(7, 29, 73, 0.3) 100%)`,
                      }}
                    ></div>
                    
                    {/* Inner circle with percentage - positioned at bottom center */}
                    {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-2 border-white"
                        style={{
                          background: `linear-gradient(135deg, rgba(184, 157, 24, 0.8) 0%, rgba(7, 29, 73, 0.95) 100%)`,
                        }}
                      >
                        {reason.percentage}%
                      </div>
                    </div> */}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary mb-3 text-center group-hover:text-accent transition-colors duration-300">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 leading-relaxed text-center text-sm">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40"></div>
    </section>
  )
}
