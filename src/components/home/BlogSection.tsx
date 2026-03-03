"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

import { blogs } from "@/lib/site-data"
import { BlogCard } from "@/components/home/BlogCard"

export function BlogSection() {
  return (
    <section id="blog" className="relative py-0 bg-background">
      {/* Static Full-Width Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-4 pt-10 md:pt-10 lg:pt-12">
        <div className="flex items-center justify-between w-full relative">
          
          {/* Title Left */}
          <div className="flex items-center pr-4 pb-1">
            <span className="text-3xl font-bold sm:text-4xl text-foreground leading-normal">
              Blog
            </span>
          </div>

          {/* Button Right */}
          <Link
            href="/blog"
            className="group flex-none relative transition-all duration-300 ease-out"
            aria-label="View all posts"
          >
            <div
              className="relative z-10 flex items-center justify-center h-12 pl-6 pr-5 md:h-[56px] md:pl-8 md:pr-6 rounded-full transition-transform duration-300 active:scale-95 neu-raised"
              style={{
                "--neu-shadow-distance": "4px",
                "--neu-shadow-blur": "8px"
              } as React.CSSProperties}
            >
              <div
                className="absolute inset-[3px] md:inset-[4px] rounded-full pointer-events-none dark:bg-white bg-black"
                style={{
                  boxShadow: "inset 2px 2px 4px rgba(0,0,0,0.5), inset -1px -1px 3px rgba(255,255,255,0.15)",
                }}
              />
              <div className="relative z-10 flex items-center justify-center gap-1.5 transition-colors duration-300 text-white dark:text-black mt-[-1px]">
                <span className="font-semibold text-sm md:text-base mr-0.5 relative -translate-y-[1px]">View all</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 md:w-6 md:h-6"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          </Link>
          
        </div>
      </div>
      
      {/* Blogs content */}
      <div className="mx-auto max-w-7xl px-0 pt-4 lg:px-8 pb-10">
        <div 
          className="flex md:grid md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory px-6 md:px-0 scroll-pl-6 scroll-pr-6 md:scroll-pl-0 md:scroll-pr-0 pb-4 md:pb-0 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Hide scrollbar for Chrome, Safari and Opera via hidden style block */}
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {blogs.map((blog, index) => {
            const isLast = index === blogs.length - 1;
            return (
              <div 
                key={blog.id} 
                className={cn(
                  "snap-always w-[78vw] flex-none md:w-auto",
                  isLast ? "snap-end" : "snap-start"
                )}
              >
                <BlogCard blog={blog} />
              </div>
            );
          })}
          
          {/* Spacer to guarantee right padding for iOS Safari */}
          <div className="w-[1px] shrink-0 md:hidden" />
        </div>
      </div>
    </section>
  )
}
