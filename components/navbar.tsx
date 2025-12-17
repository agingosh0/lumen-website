"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  
  // Apply footer background color on services and blogs pages
  const needsBackground = pathname?.startsWith("/services") || pathname?.startsWith("/blogs")
  const navBackgroundClass = needsBackground 
    ? "bg-primary-gradient shadow-lg" 
    : "bg-transparent"

  return (
    <nav className={`absolute top-0 left-0 right-0 w-full z-50 ${navBackgroundClass}`}>
      {/* Top Header Row */}
      <div className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between text-sm">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-6">
            <a href="mailto:hello@lumenadvisory.com" className="text-white hover:text-accent transition-colors">
              hello@lumenadvisory.com
            </a>
            <a href="tel:+966123456789" className="text-white hover:text-accent transition-colors">
              +966 12 345 6789
            </a>
          </div>

          {/* Right: Social Media + Contact Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Social Media Links */}
            {/* <div className="flex items-center gap-4">
              <a href="#" className="text-white hover:text-accent transition-colors text-sm">
                Instagram
              </a>
              <span className="w-px h-4 bg-white/30"></span>
              <a href="#" className="text-white hover:text-accent transition-colors text-sm">
                Facebook
              </a>
              <span className="w-px h-4 bg-white/30"></span>
              <a href="#" className="text-white hover:text-accent transition-colors text-sm">
                WhatsApp
              </a>
            </div> */}
            <Link href="/contact" className="px-4 py-1.5 bg-accent text-primary font-semibold text-sm hover:bg-accent/90 transition-all duration-300 rounded">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/logo-lumen-1.svg"
                alt="LUMEN Logo"
                width={350}
                height={120}
                className="h-12 md:h-12 w-auto drop-shadow-[0_0_15px_rgba(184,157,24,0.4)] group-hover:drop-shadow-[0_0_25px_rgba(184,157,24,0.6)] transition-all duration-300"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold text-white hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-semibold text-white hover:text-accent transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-sm font-semibold text-white hover:text-accent transition-colors">
              Services
            </Link>
            {/* <Link href="#why" className="text-sm font-semibold text-white hover:text-accent transition-colors">
              Why LUMEN
            </Link> */}
            <Link href="/blogs" className="text-sm font-semibold text-white hover:text-accent transition-colors">
              Blogs
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`md:hidden ${needsBackground ? 'bg-primary-gradient' : 'bg-black/95'} backdrop-blur-sm border-t border-white/20 py-4 px-6 space-y-4`}>
          <Link href="/about" className="block text-sm font-semibold text-white hover:text-accent transition-colors">
            About Us
          </Link>
          <Link
            href="/services"
            className="block text-sm font-semibold text-white hover:text-accent transition-colors"
          >
            Services
          </Link>
          {/* <Link href="#why" className="block text-sm font-semibold text-white hover:text-accent transition-colors">
            Why LUMEN
          </Link> */}
          <Link href="/blogs" className="block text-sm font-semibold text-white hover:text-accent transition-colors">
            Blogs
          </Link>
          <Link href="/contact" className="block text-sm font-semibold text-white hover:text-accent transition-colors">
            Contact
          </Link>
          <Link href="/contact" className="block w-full mt-4 px-4 py-2 bg-accent text-primary font-semibold text-sm hover:bg-accent/90 transition-all duration-300 rounded text-center">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  )
}
