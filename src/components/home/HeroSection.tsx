"use client"

import React, { useState, useEffect } from "react"
import { socialLinks } from "@/lib/site-data"
import { Github, Linkedin, ArrowUpRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function HeroSection() {
  const [scrolledDown, setScrolledDown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolledDown(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-start min-h-[85vh] md:min-h-screen pt-20 bg-background">
      {/* Top area with title and paragraph */}
      <div className="mx-auto max-w-7xl px-4 pt-4 pb-2 sm:pb-4 lg:px-8 w-full">
        <div className="text-center w-full flex items-center justify-center flex-col">
          <div className="inline-block w-full text-center py-2 flex flex-col items-center justify-center">
            <h1 className="font-bold tracking-tight text-center max-w-full leading-none w-full text-foreground">
              {/* Mobile-first hero title with controlled line breaks and fluid typography */}
              <span className="flex flex-col items-center justify-center w-full gap-[0.05em] mb-2">
                <span 
                    className="block text-center w-full whitespace-nowrap leading-[0.95] pb-2"
                    style={{ fontSize: "clamp(1.5rem, 6vw, 3rem)" }}
                >
                    <span className="text-foreground">Mobile Apps, AI &amp; </span><span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-gradient bg-[length:200%_auto]">Design</span>
                </span>
              </span>
            </h1>
            <p className="-mt-0.5 sm:mt-0.5 text-sm sm:text-base text-muted-foreground font-medium">
                Consistent, hands-on, and always evolving.
            </p>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-6 mt-6 sm:mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {[
            { 
              href: "/mobile-apps", 
              label: "Cross-platform Mobile Apps", 
              accent: "iOS · Android · React Native",
              gradient: "from-blue-500/40 via-cyan-500/25 to-transparent dark:from-blue-500/30 dark:via-cyan-500/20",
              borderColor: "border-blue-500/20 dark:border-blue-500/30 hover:border-blue-500/50 dark:hover:border-blue-500/50"
            },
            { 
              href: "/ai-engineering", 
              label: "AI Engineering", 
              accent: "ML · LLMs · Intelligent Systems",
              gradient: "from-emerald-500/40 via-teal-500/25 to-transparent dark:from-emerald-500/30 dark:via-teal-500/20",
              borderColor: "border-emerald-500/20 dark:border-emerald-500/30 hover:border-emerald-500/50 dark:hover:border-emerald-500/50"
            },
            { 
              href: "/web-development", 
              label: "Web Development", 
              accent: "React · Next.js · Full-stack",
              gradient: "from-violet-500/40 via-purple-500/25 to-transparent dark:from-violet-500/30 dark:via-purple-500/20",
              borderColor: "border-violet-500/20 dark:border-violet-500/30 hover:border-violet-500/50 dark:hover:border-violet-500/50"
            },
            { 
              href: "/ui-ux-design", 
              label: "UI/UX Design", 
              accent: "Figma · Prototyping · Design Systems",
              gradient: "from-rose-500/40 via-pink-500/25 to-transparent dark:from-rose-500/30 dark:via-pink-500/20",
              borderColor: "border-rose-500/20 dark:border-rose-500/30 hover:border-rose-500/50 dark:hover:border-rose-500/50"
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative rounded-2xl border bg-gray-50/80 dark:bg-card/30 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-card/60 transition-all duration-300 overflow-hidden h-24 sm:h-28 md:h-56 lg:h-72 xl:h-80",
                item.borderColor
              )}
            >
              {/* Gradient background */}
              <div className={cn("absolute inset-0 bg-gradient-to-b opacity-80 group-hover:opacity-100 transition-opacity duration-300", item.gradient)} />
              
              <ArrowUpRight className="md:hidden absolute top-3 right-3 w-4 h-4 text-muted-foreground/40 group-hover:text-foreground/70 transition-colors z-10" />
              <div className="absolute inset-0 flex items-end px-4 pb-5 md:pb-5 md:pl-5 z-10">
                <div>
                  <span className="text-sm sm:text-base font-semibold text-foreground/80 group-hover:text-foreground transition-colors leading-tight block">
                    {item.label}
                  </span>
                  <span className="hidden md:block text-xs text-muted-foreground/50 group-hover:text-muted-foreground/70 transition-colors mt-1">
                    {item.accent}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Utility Cards */}
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-6 mt-3 sm:mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {/* Resume */}
          <a
            href={socialLinks.resume}
            download={socialLinks.resumeDownloadName}
            className="group relative rounded-2xl border border-border/75 bg-gray-50/60 dark:bg-card/20 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-card/50 hover:border-border transition-all duration-300 overflow-hidden
                       h-24 sm:h-28 md:h-56 lg:h-72 xl:h-80"
          >
            <ArrowUpRight className="md:hidden absolute top-3 right-3 w-4 h-4 text-muted-foreground/40 group-hover:text-foreground/70 transition-colors z-10" />
            <div className="absolute inset-0 flex items-end px-4 pb-5 md:pb-5 md:pl-5 z-10">
              <span className="text-sm sm:text-base font-semibold text-foreground/80 group-hover:text-foreground transition-colors leading-tight">
                Resume
              </span>
            </div>
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="group relative rounded-2xl border border-border/75 bg-gray-50/60 dark:bg-card/20 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-card/50 hover:border-border transition-all duration-300 overflow-hidden
                       h-24 sm:h-28 md:h-56 lg:h-72 xl:h-80"
          >
            <ArrowUpRight className="md:hidden absolute top-3 right-3 w-4 h-4 text-muted-foreground/40 group-hover:text-foreground/70 transition-colors z-10" />
            <div className="absolute inset-0 flex items-end px-4 pb-5 md:pb-5 md:pl-5 z-10">
              <span className="text-sm sm:text-base font-semibold text-foreground/80 group-hover:text-foreground transition-colors leading-tight">
                Contact
              </span>
            </div>
          </a>

          {/* Blog */}
          <Link
            href="/blog"
            className="group relative rounded-2xl border border-border/75 bg-gray-50/60 dark:bg-card/20 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-card/50 hover:border-border transition-all duration-300 overflow-hidden
                       h-24 sm:h-28 md:h-56 lg:h-72 xl:h-80"
          >
            <ArrowUpRight className="md:hidden absolute top-3 right-3 w-4 h-4 text-muted-foreground/40 group-hover:text-foreground/70 transition-colors z-10" />
            <div className="absolute inset-0 flex items-end px-4 pb-5 md:pb-5 md:pl-5 z-10">
              <span className="text-sm sm:text-base font-semibold text-foreground/80 group-hover:text-foreground transition-colors leading-tight">
                Blog
              </span>
            </div>
          </Link>

          {/* Socials */}
          <div className="h-24 sm:h-28 md:h-56 lg:h-72 xl:h-80 grid grid-cols-2 md:grid-cols-2 md:grid-rows-2 gap-3 sm:gap-4">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl border border-border/75 bg-gray-50/60 dark:bg-card/20 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-card/50 hover:border-border transition-all duration-300 flex items-center justify-center group/icon"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-muted-foreground group-hover/icon:text-foreground transition-colors" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="GitHub"
                className="rounded-xl border border-border/75 bg-gray-50/80 dark:bg-card/30 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-card/60 hover:border-border transition-all duration-300 flex items-center justify-center group/icon"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-muted-foreground group-hover/icon:text-foreground transition-colors" />
              </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="w-full flex flex-col items-center justify-center mb-0 pb-4 sm:pb-4 sm:mb-4 md:mb-6 mt-4 relative z-40">
        <div className={cn(
            "mt-8 pb-4 flex justify-center transition-opacity duration-300 lg:opacity-40 lg:hover:opacity-100",
            scrolledDown ? "opacity-0 pointer-events-none" : "opacity-70"
        )}>
          <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl pointer-events-none">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:opacity-30 opacity-60"
          style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
        />
      </div>
    </section>
  )
}
