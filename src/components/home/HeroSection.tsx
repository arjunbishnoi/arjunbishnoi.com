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
    <section
      className="relative overflow-hidden flex flex-col items-center justify-start pt-[6.5rem] md:pt-40 lg:pt-44 pb-14 md:pb-0"
      style={{ background: "var(--neu-surface)" }}
    >

      {/* Service Cards — Neumorphic */}
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-6 mt-10 sm:mt-10 md:mt-8">
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
                "group relative rounded-2xl overflow-hidden h-24 sm:h-28 md:h-56 lg:h-72 xl:h-80",
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
                    className="text-sm sm:text-base font-semibold leading-none block"
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
              "group relative rounded-2xl overflow-hidden h-24 sm:h-28 md:h-56 lg:h-72 xl:h-80",
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
                <span className="text-sm sm:text-base font-semibold text-zinc-900 leading-none block">
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
          {/* Resume */}
          <a
            href={socialLinks.resume}
            download={socialLinks.resumeDownloadName}
            className="group relative rounded-2xl overflow-hidden neu-raised md:h-[6.5rem] lg:h-[8.5rem] xl:h-[9.5rem]"
          >


            <div className="absolute inset-4 md:inset-5 z-10 pointer-events-none">
              <ArrowUpRight className="md:hidden absolute top-0 right-0 w-4 h-4 text-muted-foreground/70 group-hover:text-foreground transition-colors" />
              <div className="absolute bottom-0.5 left-0.5 md:bottom-0 md:left-0">
                <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-foreground transition-colors leading-none block">
                  Resume
                </span>
              </div>
            </div>
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="group relative rounded-2xl overflow-hidden neu-raised md:h-[6.5rem] lg:h-[8.5rem] xl:h-[9.5rem]"
          >


            <div className="absolute inset-4 md:inset-5 z-10 pointer-events-none">
              <ArrowUpRight className="md:hidden absolute top-0 right-0 w-4 h-4 text-muted-foreground/70 group-hover:text-foreground transition-colors" />
              <div className="absolute bottom-0.5 left-0.5 md:bottom-0 md:left-0">
                <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-foreground transition-colors leading-none block">
                  Contact
                </span>
              </div>
            </div>
          </a>

          {/* Blog */}
          <Link
            href="/blog"
            className="group relative rounded-2xl overflow-hidden neu-raised md:h-[6.5rem] lg:h-[8.5rem] xl:h-[9.5rem]"
          >


            <div className="absolute inset-4 md:inset-5 z-10 pointer-events-none">
              <ArrowUpRight className="md:hidden absolute top-0 right-0 w-4 h-4 text-muted-foreground/70 group-hover:text-foreground transition-colors" />
              <div className="absolute bottom-0.5 left-0.5 md:bottom-0 md:left-0">
                <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-foreground transition-colors leading-none block">
                  Blog
                </span>
              </div>
            </div>
          </Link>

          {/* Socials - mobile only: side by side in one cell */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:hidden">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="LinkedIn"
                className="aspect-square rounded-xl neu-flat flex items-center justify-center group/icon"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="GitHub"
                className="aspect-square rounded-xl neu-flat flex items-center justify-center group/icon"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
              </a>
          </div>

          {/* Socials - desktop only: 2x1 column in the 4th grid cell */}
          <div className="hidden md:grid md:grid-cols-2 gap-3 sm:gap-4 md:h-[6.5rem] lg:h-[8.5rem] xl:h-[9.5rem]">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl neu-flat flex items-center justify-center group/icon"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-muted-foreground" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="GitHub"
                className="rounded-xl neu-flat flex items-center justify-center group/icon"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-muted-foreground" />
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
