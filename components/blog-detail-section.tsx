"use client"

import Image from "next/image"
import Link from "next/link"
import { BlogPost } from "@/lib/blogs-data"

interface BlogDetailSectionProps {
  blog: BlogPost
  relatedBlogs: BlogPost[]
}

export function BlogDetailSection({ blog, relatedBlogs }: BlogDetailSectionProps) {
  return (
    <section className="relative py-24 bg-transparent pt-44">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content Column */}
        <div className="lg:col-span-8">
          {/* Back Button */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors duration-300 mb-8 mt-4"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </Link>

          {/* Category Label */}
          <p className="text-xl md:text-2xl font-extrabold text-accent uppercase tracking-wider mb-4">{blog.category}</p>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 tracking-tight">
            {blog.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-primary/10">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-foreground/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-foreground/70">{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-foreground/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-foreground/70">{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-foreground/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-foreground/70">{blog.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-12 shadow-xl">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            <div
              className="text-foreground/80 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.content }}
              style={{
                lineHeight: "1.8",
              }}
            />
          </div>

          {/* Divider */}
          <div className="my-12 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40"></div>

          {/* Call to Action */}
          <div className="bg-white rounded-2xl p-8 border-2 border-primary/10 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Need Expert Financial Guidance?</h3>
            <p className="text-foreground/70 mb-6">
              Let's discuss how LUMEN can help your business thrive.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-cta-gradient hover:bg-cta-gradient-hover"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Sidebar - You may also like */}
        <div className="lg:col-span-4 space-y-8 mt-12 lg:mt-0">
          <div className="sticky top-40">
            <h3 className="text-2xl font-bold text-primary mb-6 pb-2 border-b-2 border-accent inline-block">
              You may also like:
            </h3>
            
            <div className="space-y-6">
              {relatedBlogs.map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  href={`/blogs/${relatedPost.slug}`}
                  className="block group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-accent/30"
                >
                  <div className="relative w-full h-40 overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold text-accent mb-2 uppercase tracking-wide">{relatedPost.category}</p>
                    <h4 className="text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300 line-clamp-2 leading-tight">
                      {relatedPost.title}
                    </h4>
                  </div>
                </Link>
              ))}
              
              {relatedBlogs.length === 0 && (
                <p className="text-foreground/60 italic">No related articles found at the moment.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40"></div>
    </section>
  )
}

