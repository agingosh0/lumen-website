"use client"

import Image from "next/image"

const testimonials = [
  {
    text: "The LUMEN team is friendly and easy to work with. They've taken a lot of the stress out of managing our finances. They are making the whole process smoother and simpler for us.",
    name: "Sarah Thomas",
    title: "Audit & Compliance Officer",
    company: "Doha International School",
    avatar: "/placeholder-user.jpg",
  },
  {
    text: "LUMEN now handles our accounting, and it's been great for our business. They're accurate, give us timely updates, and make managing our finances much simpler.",
    name: "Javed Malik",
    title: "Director of Finance",
    company: "MetroTech Solutions",
    avatar: "/placeholder-user.jpg",
  },
  {
    text: "Working with LUMEN has transformed our financial operations. Their expertise in tax advisory and compliance has been invaluable, and their team's professionalism is unmatched.",
    name: "Aisha Rahman",
    title: "HR Manager",
    company: "Qatar",
    avatar: "/placeholder-user.jpg",
  },
  {
    text: "LUMEN's forensic accounting services helped us identify and resolve critical financial discrepancies. Their attention to detail and thorough analysis saved our company significant resources.",
    name: "Mohammed Al-Hashimi",
    title: "CFO",
    company: "Al-Rashid Group",
    avatar: "/placeholder-user.jpg",
  },
  {
    text: "The tax advisory team at LUMEN provided exceptional guidance during our expansion. Their knowledge of Saudi tax regulations is outstanding, and they made complex matters easy to understand.",
    name: "Fatima Al-Zahra",
    title: "Finance Director",
    company: "TechVenture Saudi",
    avatar: "/placeholder-user.jpg",
  },
  {
    text: "We've been working with LUMEN for over three years, and their audit services have been consistently excellent. They provide clear, actionable insights that help us improve our operations.",
    name: "Ahmed Al-Mansouri",
    title: "Managing Director",
    company: "Gulf Manufacturing Co.",
    avatar: "/placeholder-user.jpg",
  },
  {
    text: "LUMEN's compliance advisory helped us navigate complex regulatory requirements. Their proactive approach and expert guidance ensured we stayed ahead of compliance issues.",
    name: "Nora Al-Khaldi",
    title: "Operations Manager",
    company: "Saudi Logistics Partners",
    avatar: "/placeholder-user.jpg",
  },
  {
    text: "The business valuation services from LUMEN were comprehensive and professional. Their detailed analysis provided us with the clarity we needed for our strategic decisions.",
    name: "Khalid Al-Otaibi",
    title: "CEO",
    company: "Innovation Hub Riyadh",
    avatar: "/placeholder-user.jpg",
  },
  {
    text: "LUMEN's corporate advisory team guided us through a complex merger. Their strategic insights and financial expertise were instrumental in the successful completion of the deal.",
    name: "Layla Al-Saud",
    title: "Board Member",
    company: "Arabian Ventures",
    avatar: "/placeholder-user.jpg",
  },
  {
    text: "We appreciate LUMEN's client-centric approach. They take time to understand our business and provide tailored solutions that address our specific needs and challenges.",
    name: "Omar Al-Zahrani",
    title: "Finance Manager",
    company: "Desert Trading Company",
    avatar: "/placeholder-user.jpg",
  },
  {
    text: "The accuracy and timeliness of LUMEN's financial reporting have been exceptional. Their team is responsive, professional, and always delivers high-quality work.",
    name: "Mariam Al-Ghamdi",
    title: "Controller",
    company: "Saudi Retail Group",
    avatar: "/placeholder-user.jpg",
  },
  {
    text: "LUMEN's expertise in risk management has been invaluable. Their comprehensive risk assessments help us make informed decisions and protect our business interests.",
    name: "Yusuf Al-Mutairi",
    title: "Risk Officer",
    company: "Gulf Financial Services",
    avatar: "/placeholder-user.jpg",
  },
  {
    text: "Working with LUMEN has been a game-changer for our startup. Their financial advisory services helped us secure funding and establish strong financial foundations.",
    name: "Hala Al-Shammari",
    title: "Co-Founder",
    company: "TechStart Saudi",
    avatar: "/placeholder-user.jpg",
  },
  {
    text: "LUMEN's team demonstrates exceptional professionalism and expertise. Their audit reports are thorough, and their recommendations have significantly improved our internal controls.",
    name: "Faisal Al-Rashid",
    title: "Internal Audit Director",
    company: "Saudi Energy Corp",
    avatar: "/placeholder-user.jpg",
  },
  {
    text: "The tax planning strategies recommended by LUMEN have optimized our tax position while ensuring full compliance. Their proactive approach saves us time and resources.",
    name: "Reem Al-Fahad",
    title: "Tax Manager",
    company: "Arabian Holdings",
    avatar: "/placeholder-user.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-[rgb(245,243,235)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Section - Title and Graphic */}
          <div className="relative">
            {/* Header Label */}

            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
              Client Satisfaction in <span className="text-accent">Their Words</span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Discover what our clients say about our services, expertise, and the results we've delivered together.
            </p>

            {/* World Map Graphic with Avatars */}
            <div className="relative mt-12">
              {/* Simplified World Map Background */}
              <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/img-map.jpg"
                  alt="World Map"
                  fill
                  className="object-cover opacity-75"
                />
              </div>

              {/* Client Avatars positioned on map */}
            </div>
          </div>

          {/* Right Section - Testimonial Cards with Infinite Scroll */}
          <div className="relative h-[700px] overflow-hidden">
            {/* Gradient overlays for fade effect */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling container */}
            <div 
              className="space-y-6 animate-scroll-up"
              style={{
                animation: 'scrollUp 60s linear infinite',
              }}
            >
              {/* First set of testimonials */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`first-${index}`}
                  className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 group"
                >
                  {/* Quotation Mark Icon */}
                  <div className="absolute top-6 left-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    <svg
                      className="w-16 h-16 text-accent"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Testimonial Content */}
                  <div className="relative z-10 pl-4">
                    {/* Testimonial Text */}
                    <p className="text-foreground/80 leading-relaxed mb-6 text-base">
                      {testimonial.text}
                    </p>

                    {/* Client Information */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-accent/30">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-primary">{testimonial.name}</p>
                        <p className="text-sm text-foreground/60">
                          {testimonial.title}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Top accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}

              {/* Duplicated set for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`second-${index}`}
                  className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 group"
                >
                  {/* Quotation Mark Icon */}
                  <div className="absolute top-6 left-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    <svg
                      className="w-16 h-16 text-accent"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Testimonial Content */}
                  <div className="relative z-10 pl-4">
                    {/* Testimonial Text */}
                    <p className="text-foreground/80 leading-relaxed mb-6 text-base">
                      {testimonial.text}
                    </p>

                    {/* Client Information */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-accent/30">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-primary">{testimonial.name}</p>
                        <p className="text-sm text-foreground/60">
                          {testimonial.title}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Top accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

