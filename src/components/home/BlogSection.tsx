"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { BlogCard } from "@/components/home/BlogCard"
import { blogs } from "@/lib/content/blogs"

export function BlogSection() {
  return (
    <section id="blog" className="home-stack-gap-after relative py-0 bg-background">
      {/* Static Full-Width Header — no top padding <md; gap from Projects is margin-only */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-4 pt-0 md:pt-8 lg:pt-10">
        <div className="flex items-center justify-between w-full relative">
          
          {/* Title Left */}
          <div className="flex items-center pr-4 pb-1">
            <span className="text-[1.625rem] md:text-3xl lg:text-4xl text-black dark:text-white font-bold">
              Blog
            </span>
          </div>

          {/* View all pill (matches home bio CTA) */}
          <Link
            href="/blog"
            className={cn(
              "flex-none flex items-center justify-center gap-2 rounded-full bg-black text-white px-5 py-2.5 text-[0.85rem] font-medium",
              "dark:bg-white dark:text-black",
              "transition-transform duration-200 active:scale-[0.98]"
            )}
            aria-label="View all posts"
          >
            View all
            <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.25} aria-hidden />
          </Link>
          
        </div>
      </div>
      
      {/* Blogs content */}
      <div className="mx-auto max-w-7xl px-0 pt-4 lg:px-8 pb-0 md:pb-6">
        <div 
          className="flex md:grid md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory px-6 md:px-0 scroll-pl-6 scroll-pr-6 md:scroll-pl-0 md:scroll-pr-0 pb-0 scrollbar-hide"
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
