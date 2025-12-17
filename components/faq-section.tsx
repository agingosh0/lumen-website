"use client"

import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    id: "01",
    question: "How do I get started with your team?",
    answer: "Getting started with LUMEN is straightforward. Simply reach out through our contact form or call us directly. We'll schedule an initial consultation to understand your business needs, discuss your goals, and outline how our services can support your financial objectives. Our team will guide you through the onboarding process and ensure a smooth transition.",
  },
  {
    id: "02",
    question: "How can your firm help with tax planning and compliance?",
    answer: "Our tax advisory team provides comprehensive tax planning and compliance services tailored to Saudi regulations. We help optimize your tax position through strategic planning, ensure full compliance with Zakat and tax obligations, prepare and file required returns, and provide ongoing advisory to minimize tax liabilities while maintaining regulatory compliance.",
  },
  {
    id: "03",
    question: "How do you ensure accuracy in accounting?",
    answer: "Accuracy is fundamental to our services. We employ rigorous quality control processes, utilize advanced accounting software and technology, conduct regular internal reviews, and maintain a team of certified professionals with extensive experience. Our systematic approach includes multiple checkpoints and verification processes to ensure every financial record is precise and reliable.",
  },
  {
    id: "04",
    question: "How often should audits be conducted?",
    answer: "The frequency of audits depends on your business requirements and regulatory obligations. For most companies, annual audits are standard. However, some businesses may require quarterly or semi-annual audits. We work with you to determine the optimal audit schedule based on your industry, size, compliance requirements, and strategic needs.",
  },
  {
    id: "05",
    question: "What is your approach to client confidentiality?",
    answer: "Client confidentiality is paramount at LUMEN. We adhere to strict professional standards and legal requirements for data protection. All client information is handled with the utmost discretion, secured through advanced encryption and access controls, and shared only with authorized team members on a need-to-know basis. We maintain comprehensive confidentiality agreements and regularly review our security protocols to protect your sensitive financial data.",
  },
]

export function FAQSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our services, processes, and how we can help your business thrive.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-12">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white rounded-2xl border-2 border-primary/10 px-6 py-4 shadow-md hover:shadow-lg transition-all duration-300 hover:border-accent/40"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-6 w-full">
                    <span className="text-foreground/40 font-semibold text-lg flex-shrink-0">
                      {faq.id}
                    </span>
                    <span className="text-lg font-semibold text-primary text-left flex-grow">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <div className="pl-16 pr-8">
                    <p className="text-foreground/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Footer Call to Action */}
        <div className="text-center">
          <p className="text-foreground/70 text-lg">
            If you can't find your answer, please{" "}
            <Link
              href="/contact"
              className="text-accent font-semibold hover:underline transition-colors duration-300"
            >
              Contact Us
            </Link>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40"></div>
    </section>
  )
}

