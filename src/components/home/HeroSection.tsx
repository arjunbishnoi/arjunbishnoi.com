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
      className="relative overflow-hidden flex flex-col items-center justify-start pt-[5.5rem] md:pt-20 lg:pt-24 pb-14 md:pb-0"
      style={{ background: "var(--neu-surface)" }}
    >

      {/* Hero Title — vertically centered in the gap between header bar and cards */}
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-6 text-center flex items-center justify-center h-[9rem] sm:h-[14rem] md:h-[16rem] lg:h-[18rem] xl:h-[20rem]">
        <h1
          className="font-serif max-md:font-extrabold font-bold md:font-semibold text-[1.75rem] sm:text-[2.5rem] md:text-[3.125rem] lg:text-[3.75rem] xl:text-[4.25rem] leading-[1.1] whitespace-nowrap inline-block pb-2 max-md:subpixel-antialiased max-md:[-webkit-text-stroke:0.75px_transparent]"
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
              solidAccent: "#FCA5B2",
              foregroundColor: "#4A0F16",
            },
            { 
              href: "/ai", 
              label: "AI Engineering", 
              accent: "ML · LLMs · Intelligent Systems",
              solidAccent: "#CEC4FF",
              foregroundColor: "#1D0D49",
            },
            { 
              href: "/design", 
              label: "Design", 
              accent: "Prototyping · Design Systems",
              solidAccent: "#FCE09D",
              foregroundColor: "#4D3300",
            },
          ]).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative rounded-2xl overflow-hidden h-24 sm:h-28 md:h-36 lg:h-40 xl:h-44",
                "neu-raised neu-raised-accent"
              )}
            >
              {/* Inset accent fill — leaves a visible rim of the neumorphic surface as a border */}
              <div 
                className="absolute inset-[4px] rounded-[12px] pointer-events-none"
                style={{ 
                  backgroundColor: item.solidAccent,
                  boxShadow: "inset 2px 2px 4px rgba(0,0,0,0.3), inset -1px -1px 3px rgba(255,255,255,0.08)",
                }}
              />

              <div className="absolute inset-4 md:inset-5 z-10 pointer-events-none">
                <ArrowUpRight 
                  className="md:hidden absolute top-0 right-0 w-4 h-4 transition-colors opacity-70 group-hover:opacity-100" 
                  style={{ color: item.foregroundColor }}
                />
                <div className="absolute bottom-0.5 left-0.5 md:bottom-0 md:left-0">
                  <span 
                    className="text-sm sm:text-base font-semibold block"
                    style={{ color: item.foregroundColor }}
                  >
                    {item.label}
                  </span>
                  <span 
                    className="hidden md:block text-xs transition-colors mt-1 opacity-70 group-hover:opacity-100"
                    style={{ color: item.foregroundColor }}
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
              "group relative rounded-2xl overflow-hidden h-24 sm:h-28 md:h-36 lg:h-40 xl:h-44",
              "neu-raised neu-raised-accent"
            )}
          >
            {/* Inset accent fill for light gray */}
            <div 
              className="absolute inset-[4px] rounded-[12px] pointer-events-none"
              style={{ 
                backgroundColor: "#d4d4d8",
                boxShadow: "inset 2px 2px 4px rgba(0,0,0,0.3), inset -1px -1px 3px rgba(255,255,255,0.08)",
              }}
            />

            <div className="absolute inset-4 md:inset-5 z-10 pointer-events-none">
              <ArrowUpRight className="md:hidden absolute top-0 right-0 w-4 h-4 text-zinc-500 group-hover:text-zinc-700 transition-colors" />
              <div className="absolute bottom-0.5 left-0.5 md:bottom-0 md:left-0">
                <span className="text-sm sm:text-base font-semibold text-zinc-900 block">
                  All Projects
                </span>
                <span className="hidden md:block text-xs text-zinc-800/70 group-hover:text-zinc-800/90 transition-colors mt-1">
                  Portfolio · Case Studies
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Utility Cards — Neumorphic */}
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-6 mt-3 sm:mt-4">
        <div className="grid auto-rows-fr grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {/* Blog — Desktop: 1st, Mobile: 3rd */}
          <Link
            href="/blog"
            className="group relative rounded-2xl overflow-hidden neu-raised md:h-[5.5rem] lg:h-[6rem] xl:h-[6.5rem] order-2 md:order-1"
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

          {/* Resume — Desktop: 2nd, Mobile: 2nd */}
          <a
            href={socialLinks.resume}
            download={socialLinks.resumeDownloadName}
            className="group relative rounded-2xl overflow-hidden neu-raised md:h-[5.5rem] lg:h-[6rem] xl:h-[6.5rem] order-1 md:order-2"
          >


            <div className="absolute inset-4 md:inset-5 z-10 pointer-events-none">
              <ArrowUpRight className="md:hidden absolute top-0 right-0 w-4 h-4 text-muted-foreground/70 group-hover:text-foreground transition-colors" />
              <div className="absolute bottom-0.5 left-0.5 md:bottom-0 md:left-0">
                <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-foreground transition-colors block">
                  Resume
                </span>
              </div>
            </div>
          </a>

          {/* Contact — Desktop: 3rd, Mobile: 1st */}
          <a
            href="#contact"
            className="group relative rounded-2xl overflow-hidden neu-raised md:h-[5.5rem] lg:h-[6rem] xl:h-[6.5rem] order-3 md:order-3"
          >


            <div className="absolute inset-4 md:inset-5 z-10 pointer-events-none">
              <ArrowUpRight className="md:hidden absolute top-0 right-0 w-4 h-4 text-muted-foreground/70 group-hover:text-foreground transition-colors" />
              <div className="absolute bottom-0.5 left-0.5 md:bottom-0 md:left-0">
                <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-foreground transition-colors block">
                  Contact
                </span>
              </div>
            </div>
          </a>

          {/* Socials - mobile only: side by side in one cell */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:hidden order-4">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="LinkedIn"
                className="aspect-square rounded-xl neu-flat flex items-center justify-center group/icon"
              >
                <Image src="/linkedin-icon.png" alt="LinkedIn" width={36} height={36} className="w-7 h-7 sm:w-9 sm:h-9 object-contain filter brightness-0 dark:invert opacity-70 group-hover/icon:opacity-100 transition-all" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="GitHub"
                className="aspect-square rounded-xl neu-flat flex items-center justify-center group/icon"
              >
                <Image src="/github-icon.png" alt="GitHub" width={36} height={36} className="w-7 h-7 sm:w-9 sm:h-9 object-contain filter brightness-0 dark:invert opacity-70 group-hover/icon:opacity-100 transition-all" />
              </a>
          </div>

          {/* Socials - desktop only: 2x1 column in the 4th grid cell */}
          <div className="hidden md:grid md:grid-cols-2 gap-3 sm:gap-4 md:h-[5.5rem] lg:h-[6rem] xl:h-[6.5rem] order-4">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl neu-flat flex items-center justify-center group/icon"
              >
                <Image src="/linkedin-icon.png" alt="LinkedIn" width={44} height={44} className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 object-contain filter brightness-0 dark:invert opacity-70 group-hover/icon:opacity-100 transition-all" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="GitHub"
                className="rounded-xl neu-flat flex items-center justify-center group/icon"
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
