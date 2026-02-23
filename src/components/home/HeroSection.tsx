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
      className="relative overflow-hidden flex flex-col items-center justify-start min-h-[85vh] md:min-h-0 pt-[5.5rem] md:pt-20"
      style={{ background: "var(--neu-surface)" }}
    >
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
                    <span className="text-foreground">Mobile Apps, AI &amp; Design</span>
                </span>
              </span>
            </h1>
            <p className="-mt-0.5 sm:mt-0.5 text-sm sm:text-base text-muted-foreground font-medium">
                Consistent, hands-on, and always evolving.
            </p>
          </div>
        </div>
      </div>

      {/* Service Cards — Neumorphic */}
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-6 mt-10 sm:mt-10 md:mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {/* Accent-fill service cards: Mobile Apps, AI, Design */}
          {([
            { 
              href: "/apps", 
              label: "Mobile Apps", 
              accent: "iOS · Android · React Native",
              solidAccent: "#e11d48",
            },
            { 
              href: "/ai", 
              label: "AI Engineering", 
              accent: "ML · LLMs · Intelligent Systems",
              solidAccent: "#7c3aed",
            },
            { 
              href: "/design", 
              label: "Design", 
              accent: "Prototyping · Design Systems",
              solidAccent: "#D4B818",
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
                className="absolute inset-[6px] rounded-[12px] pointer-events-none"
                style={{ 
                  backgroundColor: item.solidAccent,
                  boxShadow: "inset 2px 2px 4px rgba(0,0,0,0.3), inset -1px -1px 3px rgba(255,255,255,0.08)",
                }}
              />

              <ArrowUpRight className="md:hidden absolute top-3 right-3 w-4 h-4 text-white/60 group-hover:text-white transition-colors z-10" />
              <div className="absolute inset-0 flex items-end px-4 pb-5 md:pb-5 md:pl-5 z-10">
                <div>
                  <span className="text-sm sm:text-base font-semibold text-white leading-tight block">
                    {item.label}
                  </span>
                  <span className="hidden md:block text-xs text-white/70 group-hover:text-white/90 transition-colors mt-1">
                    {item.accent}
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {/* All Projects — unchanged neumorphic with dot pattern */}
          <Link
            href="/projects"
            className={cn(
              "group relative rounded-2xl overflow-hidden h-24 sm:h-28 md:h-56 lg:h-72 xl:h-80",
              "neu-raised"
            )}
          >
            {/* Dot grid — dense on mobile */}
            <div 
              className="absolute inset-[7px] pointer-events-none md:hidden"
              style={{
                backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1.2px, transparent 1.2px)",
                backgroundSize: "12px 12px",
                backgroundPosition: "center center",
                opacity: 0.12,
                maskImage: "linear-gradient(to bottom, black 35%, transparent 75%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 35%, transparent 75%)",
              }}
            />
            {/* Dot grid — spacious on desktop */}
            <div 
              className="absolute inset-[10px] pointer-events-none hidden md:block"
              style={{
                backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1.5px, transparent 1.5px)",
                backgroundSize: "20px 20px",
                backgroundPosition: "center center",
                opacity: 0.12,
                maskImage: "linear-gradient(to bottom, black 60%, transparent 85%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 85%)",
              }}
            />

            <ArrowUpRight className="md:hidden absolute top-3 right-3 w-4 h-4 text-muted-foreground/70 group-hover:text-foreground transition-colors z-10" />
            <div className="absolute inset-0 flex items-end px-4 pb-5 md:pb-5 md:pl-5 z-10">
              <div>
                <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-foreground transition-colors leading-tight block">
                  All Projects
                </span>
                <span className="hidden md:block text-xs text-muted-foreground/70 group-hover:text-muted-foreground transition-colors mt-1">
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
            {/* Abstract shape background */}
            <div className="absolute inset-0 opacity-80 transition-all duration-500">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 150" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <defs>
                  <linearGradient id="resume-mask-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="white" stopOpacity="1" />
                    <stop offset="40%" stopColor="white" stopOpacity="0.8" />
                    <stop offset="70%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <mask id="resume-mask">
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#resume-mask-gradient)" />
                  </mask>
                </defs>
                <g mask="url(#resume-mask)">
                  {/* Document with folded corner */}
                  <rect x="110" y="20" width="55" height="70" rx="4" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground/[0.18]" />
                  <path d="M145 20 L165 20 L165 40 Z" fill="currentColor" className="text-muted-foreground/[0.08]" />
                  <path d="M145 20 L145 40 L165 40" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/[0.15]" />
                  {/* Text lines on document */}
                  <rect x="120" y="48" width="30" height="2.5" rx="1.2" fill="currentColor" className="text-muted-foreground/[0.15]" />
                  <rect x="120" y="55" width="38" height="2.5" rx="1.2" fill="currentColor" className="text-muted-foreground/[0.12]" />
                  <rect x="120" y="62" width="24" height="2.5" rx="1.2" fill="currentColor" className="text-muted-foreground/[0.09]" />
                  <rect x="120" y="69" width="34" height="2.5" rx="1.2" fill="currentColor" className="text-muted-foreground/[0.1]" />
                  {/* Download arrow */}
                  <path d="M55 55 L55 75 M45 68 L55 78 L65 68" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground/[0.15]" />
                  <line x1="42" y1="82" x2="68" y2="82" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-muted-foreground/[0.12]" />
                  {/* Small decorative dots */}
                  <circle cx="160" cy="110" r="8" stroke="currentColor" strokeWidth="0.8" className="text-muted-foreground/[0.09]" />
                  <circle cx="30" cy="35" r="5" fill="currentColor" className="text-muted-foreground/[0.06]" />
                </g>
              </svg>
            </div>

            <ArrowUpRight className="md:hidden absolute top-3 right-3 w-4 h-4 text-muted-foreground/70 group-hover:text-foreground transition-colors z-10" />
            <div className="absolute inset-0 flex items-end px-4 pb-5 md:pb-5 md:pl-5 z-10">
              <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-foreground transition-colors leading-tight">
                Resume
              </span>
            </div>
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="group relative rounded-2xl overflow-hidden neu-raised md:h-[6.5rem] lg:h-[8.5rem] xl:h-[9.5rem]"
          >
            {/* Abstract shape background */}
            <div className="absolute inset-0 opacity-80 transition-all duration-500">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 150" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <defs>
                  <linearGradient id="contact-mask-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="white" stopOpacity="1" />
                    <stop offset="40%" stopColor="white" stopOpacity="0.8" />
                    <stop offset="70%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <mask id="contact-mask">
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#contact-mask-gradient)" />
                  </mask>
                </defs>
                <g mask="url(#contact-mask)">
                  {/* Envelope shape */}
                  <rect x="100" y="30" width="65" height="45" rx="5" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground/[0.18]" />
                  <path d="M100 35 L132.5 58 L165 35" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" className="text-muted-foreground/[0.15]" />
                  {/* @ symbol */}
                  <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground/[0.12]" />
                  <path d="M50 42 C43 42, 40 48, 40 52 C40 58, 45 60, 50 60 C55 60, 58 56, 58 52 L58 44" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" className="text-muted-foreground/[0.15]" />
                  {/* Chat bubble */}
                  <rect x="115" y="90" width="50" height="28" rx="10" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/[0.12]" />
                  <path d="M125 118 L130 128 L138 118" fill="currentColor" className="text-muted-foreground/[0.08]" />
                  {/* Dots inside chat */}
                  <circle cx="132" cy="104" r="2" fill="currentColor" className="text-muted-foreground/[0.15]" />
                  <circle cx="140" cy="104" r="2" fill="currentColor" className="text-muted-foreground/[0.12]" />
                  <circle cx="148" cy="104" r="2" fill="currentColor" className="text-muted-foreground/[0.09]" />
                  {/* Decorative */}
                  <circle cx="35" cy="110" r="6" fill="currentColor" className="text-muted-foreground/[0.06]" />
                </g>
              </svg>
            </div>

            <ArrowUpRight className="md:hidden absolute top-3 right-3 w-4 h-4 text-muted-foreground/70 group-hover:text-foreground transition-colors z-10" />
            <div className="absolute inset-0 flex items-end px-4 pb-5 md:pb-5 md:pl-5 z-10">
              <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-foreground transition-colors leading-tight">
                Contact
              </span>
            </div>
          </a>

          {/* Blog */}
          <Link
            href="/blog"
            className="group relative rounded-2xl overflow-hidden neu-raised md:h-[6.5rem] lg:h-[8.5rem] xl:h-[9.5rem]"
          >
            {/* Abstract shape background */}
            <div className="absolute inset-0 opacity-80 transition-all duration-500">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 150" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <defs>
                  <linearGradient id="blog-mask-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="white" stopOpacity="1" />
                    <stop offset="40%" stopColor="white" stopOpacity="0.8" />
                    <stop offset="70%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <mask id="blog-mask">
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#blog-mask-gradient)" />
                  </mask>
                </defs>
                <g mask="url(#blog-mask)">
                  {/* Large quotation mark */}
                  <path d="M110 30 C110 30, 100 30, 100 42 C100 50, 105 54, 112 54 C118 54, 122 50, 122 45 C122 40, 118 37, 114 37 C110 37, 108 40, 108 40" fill="currentColor" className="text-muted-foreground/[0.12]" />
                  <path d="M138 30 C138 30, 128 30, 128 42 C128 50, 133 54, 140 54 C146 54, 150 50, 150 45 C150 40, 146 37, 142 37 C138 37, 136 40, 136 40" fill="currentColor" className="text-muted-foreground/[0.09]" />
                  {/* Blog text lines */}
                  <rect x="30" y="40" width="45" height="3" rx="1.5" fill="currentColor" className="text-muted-foreground/[0.12]" />
                  <rect x="30" y="48" width="55" height="3" rx="1.5" fill="currentColor" className="text-muted-foreground/[0.09]" />
                  <rect x="30" y="56" width="35" height="3" rx="1.5" fill="currentColor" className="text-muted-foreground/[0.1]" />
                  {/* Pencil */}
                  <line x1="155" y1="80" x2="170" y2="65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted-foreground/[0.15]" />
                  <path d="M155 80 L152 85 L157 82 Z" fill="currentColor" className="text-muted-foreground/[0.12]" />
                  <line x1="168" y1="67" x2="172" y2="63" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-muted-foreground/[0.09]" />
                  {/* Decorative shapes */}
                  <circle cx="50" cy="100" r="10" stroke="currentColor" strokeWidth="0.8" className="text-muted-foreground/[0.09]" />
                  <rect x="130" y="100" width="30" height="20" rx="4" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-muted-foreground/[0.09]" />
                </g>
              </svg>
            </div>

            <ArrowUpRight className="md:hidden absolute top-3 right-3 w-4 h-4 text-muted-foreground/70 group-hover:text-foreground transition-colors z-10" />
            <div className="absolute inset-0 flex items-end px-4 pb-5 md:pb-5 md:pl-5 z-10">
              <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-foreground transition-colors leading-tight">
                Blog
              </span>
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
      <div className="w-full flex flex-col items-center justify-center mb-0 pb-3 sm:pb-3 sm:mb-3 md:mb-6 md:pb-0 mt-4 md:mt-16 relative z-40">
        <div className={cn(
            "mt-4 md:mt-2 pb-2 md:pb-0 flex justify-center transition-opacity duration-300 lg:opacity-40 lg:hover:opacity-100",
            scrolledDown ? "opacity-0 pointer-events-none" : "opacity-70"
        )}>
          <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  )
}
