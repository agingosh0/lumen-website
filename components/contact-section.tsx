"use client"

import type React from "react"

import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "Configuration Error",
        description: "EmailJS environment variables are missing. Please check your configuration.",
        variant: "destructive",
      })
      console.error("EmailJS env vars missing")
      setIsSubmitting(false)
      return
    }

    if (!formRef.current) return

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      )

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you shortly.",
        variant: "default",
      })

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      })
    } catch (error) {
      console.error("EmailJS Error:", error)
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-[rgb(245,243,235)]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-2xl md:text-3xl font-extrabold text-accent uppercase tracking-wider mb-6">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
            Ready to Transform Your Financial Strategy?
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Reach out to discuss how LUMEN can support your business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="p-8 rounded-2xl bg-white border-2 border-primary/10 shadow-md">
            <h3 className="text-2xl font-semibold text-primary mb-8 relative">
              Contact Information
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-accent"></span>
            </h3>

            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold text-accent mb-2">Location</p>
                <p className="text-primary text-lg">Jeddah, Saudi Arabia</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-accent mb-2">Phone</p>
                <p className="text-primary text-lg">+966 12 345 6789</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-accent mb-2">Email</p>
                <p className="text-primary text-lg">hello@lumenadvisory.com</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-accent mb-2">Business Hours</p>
                <p className="text-primary">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                <p className="text-primary">Friday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-white border-2 border-primary/10 shadow-md">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border-2 border-primary/20 bg-white text-primary placeholder-primary/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@company.com"
                  className="w-full px-4 py-3 border-2 border-primary/20 bg-white text-primary placeholder-primary/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full px-4 py-3 border-2 border-primary/20 bg-white text-primary placeholder-primary/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your needs"
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-primary/20 bg-white text-primary placeholder-primary/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 rounded-lg"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-accent text-primary font-semibold hover:bg-accent/90 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40"></div>
    </section>
  )
}
