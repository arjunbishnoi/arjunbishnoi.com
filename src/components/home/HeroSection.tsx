"use client"

import React, { useState, useEffect } from "react"
import { socialLinks } from "@/lib/site-data"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

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
    <section
      className="relative overflow-hidden flex flex-col items-center justify-start pt-[4.75rem] md:pt-16 lg:pt-20 pb-14 md:pb-0"
      style={{ background: "var(--neu-surface)" }}
    >

      {/* Hero Title — vertically centered in the gap between header bar and cards */}
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-6 text-center flex items-center justify-center h-[9rem] sm:h-[14rem] md:h-[16rem] lg:h-[18rem] xl:h-[20rem]">
        <h1
          className="font-serif max-md:font-extrabold font-bold md:font-semibold text-[1.875rem] sm:text-[2.5rem] md:text-[3.125rem] lg:text-[3.75rem] xl:text-[4.25rem] leading-[1.1] whitespace-nowrap inline-block px-4 -mx-4 pb-2 max-md:subpixel-antialiased max-md:[-webkit-text-stroke:0.6px_transparent]"
          style={{
            background: "linear-gradient(to bottom, var(--hero-gradient-top) 0%, var(--hero-gradient-top) var(--hero-gradient-stop, 30%), var(--hero-gradient-bottom) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          <span className="block">AI-powered mobile apps.</span>
          <span className="block">Designed with precision.</span>
        </h1>
      </div>

      {/* Service Cards — Neumorphic */}
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {/* Accent-fill service cards: Mobile Apps, AI, Design */}
          {([
            { 
              href: "/apps", 
              label: "Mobile Apps", 
              accent: "iOS · Android · React Native",
              orderClass: "order-2 md:order-1",
            },
            { 
              href: "/ai", 
              label: "AI Engineering", 
              accent: "ML · LLMs · Intelligent Systems",
              orderClass: "order-3 md:order-2",
            },
            { 
              href: "/design", 
              label: "Design", 
              accent: "Prototyping · Design Systems",
              orderClass: "order-4 md:order-3",
            },
          ]).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative rounded-3xl overflow-hidden aspect-[2.15/1] md:aspect-auto h-auto md:h-36 lg:h-40 xl:h-44",
                "neu-raised neu-raised-accent",
                item.orderClass
              )}
            >
              {/* Inset accent fill — leaves a visible rim of the neumorphic surface as a border */}
              {/* Removed the inset border from these 3 cards */}

                <div className="absolute inset-4 md:inset-5 z-10 pointer-events-none">
                  <ArrowUpRight 
                    className="md:hidden absolute top-0 right-0 w-4 h-4 transition-colors opacity-70 group-hover:opacity-100 text-zinc-500 dark:text-zinc-400" 
                  />
                  <div className="absolute bottom-0 md:bottom-0 left-1.5 md:left-0">
                    <span 
                      className="text-sm sm:text-base font-semibold block text-zinc-900 dark:text-zinc-50"
                    >
                      {item.label}
                    </span>
                    <span 
                      className="hidden md:block text-xs text-zinc-800/70 dark:text-zinc-400/70 group-hover:text-zinc-800/90 dark:group-hover:text-zinc-400/90 transition-colors mt-1"
                    >
                      {item.accent}
                    </span>
                  </div>
                </div>
              </Link>
          ))}

          {/* All Projects — like other 3 rectangles with light gray background */}
          <Link
            href="/projects"
            className={cn(
              "group relative rounded-3xl overflow-hidden h-32 sm:h-36 md:h-36 lg:h-40 xl:h-44 col-span-2 md:col-span-1 order-1 md:order-4",
              "neu-raised neu-raised-accent"
            )}
          >
            {/* Inset accent fill for light gray */}
            <div 
              className="absolute inset-[6px] rounded-[18px] pointer-events-none bg-[#cccccc] dark:bg-[#181818]"
              style={{ 
                boxShadow: "inset 4px 4px 10px rgba(0,0,0,0.15), inset -4px -4px 10px rgba(255,255,255,0.5)",
              }}
            />

            <div className="absolute inset-4 md:inset-5 z-10 pointer-events-none">
              <ArrowUpRight className="md:hidden absolute top-0 right-0 w-4 h-4 text-zinc-500 dark:text-neutral-500 group-hover:text-zinc-700 dark:group-hover:text-neutral-400 transition-colors" />
              <div className="absolute bottom-0.5 left-1.5 md:bottom-0 md:left-0">
                <span className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-neutral-50 block">
                  All Projects
                </span>
                <span className="hidden md:block text-xs text-zinc-800/70 dark:text-neutral-400/70 group-hover:text-zinc-800/90 dark:group-hover:text-neutral-400/90 transition-colors mt-1">
                  Portfolio · Case Studies
                </span>
              </div>
            </div>
          </Link>
          {/* Blog — Desktop: 1st, Mobile: hidden */}
          <Link
            href="/blog"
            className="hidden md:block group relative rounded-3xl overflow-hidden neu-raised md:h-[5.5rem] lg:h-[6rem] xl:h-[6.5rem] md:order-5"
          >


            <div className="absolute inset-4 md:inset-5 z-10 pointer-events-none">
              <ArrowUpRight className="md:hidden absolute top-0 right-0 w-4 h-4 text-muted-foreground/70 group-hover:text-foreground transition-colors" />
              <div className="absolute bottom-0.5 left-0.5 md:bottom-0 md:left-0">
                <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-foreground transition-colors block">
                  Blog
                </span>
              </div>
            </div>
          </Link>

          {/* Resume — Desktop: 2nd, Mobile: 5th */}
          <a
            href={socialLinks.resume}
            download={socialLinks.resumeDownloadName}
            className="group relative rounded-3xl overflow-hidden neu-raised aspect-[2.15/1] md:aspect-auto h-auto md:h-[5.5rem] lg:h-[6rem] xl:h-[6.5rem] order-5 md:order-6"
          >


            <div className="absolute inset-4 md:inset-5 z-10 pointer-events-none">
              <ArrowUpRight className="md:hidden absolute top-0 right-0 w-4 h-4 text-muted-foreground/70 group-hover:text-foreground transition-colors" />
              <div className="absolute bottom-0 md:bottom-0 left-1.5 md:left-0">
                <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-foreground transition-colors block">
                  Resume
                </span>
              </div>
            </div>
          </a>

          {/* Contact — Desktop: 3rd, Mobile: 6th */}
          <a
            href="#contact"
            className="group relative rounded-3xl overflow-hidden neu-raised aspect-[2.15/1] md:aspect-auto h-auto md:h-[5.5rem] lg:h-[6rem] xl:h-[6.5rem] order-6 md:order-7"
          >


            <div className="absolute inset-4 md:inset-5 z-10 pointer-events-none">
              <ArrowUpRight className="md:hidden absolute top-0 right-0 w-4 h-4 text-muted-foreground/70 group-hover:text-foreground transition-colors" />
              <div className="absolute bottom-0 md:bottom-0 left-1.5 md:left-0">
                <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-foreground transition-colors block">
                  Contact
                </span>
              </div>
            </div>
          </a>

          {/* Socials - unified for mobile and desktop */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 aspect-[2.15/1] md:aspect-auto h-auto md:h-[5.5rem] lg:h-[6rem] xl:h-[6.5rem] order-7 md:order-8">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-3xl neu-flat flex items-center justify-center group/icon"
              >
                <Image src="/linkedin-icon.png" alt="LinkedIn" width={44} height={44} className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 object-contain filter brightness-0 dark:invert opacity-70 group-hover/icon:opacity-100 transition-all" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="GitHub"
                className="rounded-3xl neu-flat flex items-center justify-center group/icon"
              >
                <Image src="/github-icon.png" alt="GitHub" width={44} height={44} className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 object-contain filter brightness-0 dark:invert opacity-70 group-hover/icon:opacity-100 transition-all" />
              </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="w-full flex flex-col items-center justify-center mb-0 pb-0 sm:pb-0 sm:mb-0 md:mb-0 md:pb-0 mt-8 md:mt-16 relative z-40">
        <div className={cn(
            "mt-4 md:mt-2 pb-0 md:pb-0 flex justify-center transition-opacity duration-300 lg:opacity-40 lg:hover:opacity-100",
            scrolledDown ? "opacity-0 pointer-events-none" : "opacity-70"
        )}>
          <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  )
}
