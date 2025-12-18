"use client"

import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-gradient text-white relative">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <img
                src="/logo-lumen-1.svg"
                alt="LUMEN Logo"
                className="h-12 md:h-12 w-auto"
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              Illuminating financial clarity & strategic growth for businesses in Saudi Arabia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors">
                  Financial Audit
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors">
                  Tax Advisory
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors">
                  Compliance
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors">
                  Forensic Accounting
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-white/70 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/70 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Jeddah, Saudi Arabia</li>
              <li>+966 12 345 6789</li>
              <li>hello@lumenadvisory.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
          <p>&copy; {currentYear} LUMEN Audit & Advisory. All rights reserved.</p>
        </div>
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
    </footer>
  )
}
