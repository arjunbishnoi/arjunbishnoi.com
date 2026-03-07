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
          className="font-serif max-md:font-extrabold font-bold md:font-semibold text-[1.75rem] sm:text-[2.5rem] md:text-[3.125rem] lg:text-[3.75rem] xl:text-[4.25rem] leading-[1.1] whitespace-nowrap inline-block px-4 -mx-4 pb-2.5 max-md:subpixel-antialiased max-md:[-webkit-text-stroke:0.6px_transparent]"
          style={{
            background: "linear-gradient(to bottom, var(--hero-gradient-top) 0%, var(--hero-gradient-top) var(--hero-gradient-stop, 30%), var(--hero-gradient-bottom) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          <span className="block max-md:scale-y-[1.1] origin-center">AI-powered mobile apps.</span>
          <span className="block max-md:scale-y-[1.1] origin-center">Designed with precision.</span>
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
              "neu-raised neu-raised-accent transition-all duration-300 hover:scale-[1.02]"
            )}
          >
            {/* 1. Underlying Dreamy Glow Layer - No hard edges */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none animate-color-shift">
              <div className="absolute inset-0 bg-[var(--neu-surface)] transition-colors duration-500" />
              
              {/* Massive Hyper-Blurred Circular Blobs - Refined for Visible Multi-Shape Dynamics & High-Contrast Accents */}
              {/* Light Mode: Saturated Colorful Blobs with white "hotspot" accent */}
              <div 
                className="dark:hidden absolute inset-0 overflow-hidden pointer-events-none"
                style={{
                  maskImage: 'radial-gradient(ellipse at center, black 25%, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 25%, transparent 75%)'
                }}
              >
                <div className="absolute top-[10%] left-[5%] w-[50%] h-[50%] rounded-full bg-blue-500/40 animate-lava [--drift-name:drift-wide] [--drift-duration:12s] [--morph-name:morph] [--morph-duration:10s] [--color-duration:18s] [--glow-blur:80px] scale-125" style={{ filter: 'blur(var(--glow-blur))' }} />
                <div className="absolute bottom-[5%] right-[5%] w-[45%] h-[45%] rounded-full bg-purple-500/40 animate-lava [--drift-name:drift-wide] [--drift-duration:15s] [--morph-name:morph-alt] [--morph-duration:13s] [--color-duration:22s] [--drift-delay:1s] [--color-delay:2s] [--glow-blur:75px] scale-110" style={{ filter: 'blur(var(--glow-blur))' }} />
                <div className="absolute top-[25%] right-[5%] w-[40%] h-[40%] rounded-full bg-rose-500/40 animate-lava [--drift-name:drift-wide] [--drift-duration:14s] [--morph-name:morph] [--morph-duration:16s] [--color-duration:20s] [--drift-delay:2s] [--color-delay:4s] [--glow-blur:70px] scale-130" style={{ filter: 'blur(var(--glow-blur))' }} />
                <div className="absolute bottom-[15%] left-[10%] w-[35%] h-[35%] rounded-full bg-emerald-500/35 animate-lava [--drift-name:drift-wide] [--drift-duration:17s] [--morph-name:morph-alt] [--morph-duration:14s] [--color-duration:24s] [--drift-delay:3s] [--color-delay:6s] [--glow-blur:65px] scale-115" style={{ filter: 'blur(var(--glow-blur))' }} />
                {/* White Hotspot Accent */}
                <div className="absolute top-[30%] left-[30%] w-[30%] h-[30%] rounded-full bg-white/50 animate-lava [--drift-name:drift-wide] [--drift-duration:14s] [--morph-name:morph] [--morph-duration:18s] [--color-duration:30s] [--drift-delay:4s] [--glow-blur:50px] scale-140" style={{ filter: 'blur(var(--glow-blur))' }} />
              </div>

              {/* Dark Mode: Vibrant Multi-Shape Lava Lamp with black "void" accent */}
              <div 
                className="hidden dark:block absolute inset-0 overflow-hidden pointer-events-none"
                style={{
                  maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)'
                }}
              >
                <div className="absolute inset-0 bg-[#121212] transition-colors duration-500" />
                
                {/* Individual Blobs with black void for deep high-contrast depth */}
                <div className="absolute inset-0 opacity-100">
                  <div className="absolute top-[15%] left-[15%] w-[45%] h-[45%] rounded-full bg-blue-600/50 animate-lava [--drift-name:drift-wide] [--drift-duration:15s] [--morph-name:morph-alt] [--morph-duration:12s] [--color-duration:20s] [--glow-blur:70px] scale-120" style={{ filter: 'blur(var(--glow-blur))' }} />
                  <div className="absolute bottom-[5%] right-[10%] w-[40%] h-[40%] rounded-full bg-purple-600/50 animate-lava [--drift-name:drift-wide] [--drift-duration:18s] [--morph-name:morph] [--morph-duration:15s] [--color-duration:22s] [--drift-delay:2s] [--glow-blur:65px] scale-110" style={{ filter: 'blur(var(--glow-blur))' }} />
                  <div className="absolute top-[20%] right-[15%] w-[35%] h-[35%] rounded-full bg-rose-600/45 animate-lava [--drift-name:drift-wide] [--drift-duration:20s] [--morph-name:morph-alt] [--morph-duration:18s] [--color-duration:25s] [--drift-delay:4s] [--glow-blur:60px] scale-130" style={{ filter: 'blur(var(--glow-blur))' }} />
                  <div className="absolute bottom-[15%] left-[5%] w-[30%] h-[30%] rounded-full bg-emerald-600/40 animate-lava [--drift-name:drift-wide] [--drift-duration:22s] [--morph-name:morph] [--morph-duration:20s] [--color-duration:28s] [--drift-delay:6s] [--glow-blur:55px] scale-115" style={{ filter: 'blur(var(--glow-blur))' }} />
                  {/* Black Void Accent */}
                  <div className="absolute top-[40%] left-[40%] w-[25%] h-[25%] rounded-full bg-black/50 animate-lava [--drift-name:drift-wide] [--drift-duration:16s] [--morph-name:morph-alt] [--morph-duration:14s] [--color-duration:35s] [--drift-delay:5s] [--glow-blur:45px] scale-150" style={{ filter: 'blur(var(--glow-blur))' }} />
                </div>
              </div>
              
              {/* Grain/Noise Overlay - Softened significantly for dark mode to prevent spirals */}
              <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.02] mix-blend-overlay pointer-events-none z-[5]" 
                   style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
            </div>

            {/* 2. Neumorphic Surface Overlay (Concave Shadow Layer) */}
            {/* We use a semi-transparent surface so the glow bleeds through the 'bowl' */}
            <div 
              className="absolute inset-0 rounded-3xl pointer-events-none z-10 bg-[var(--neu-surface)]/10 dark:bg-[var(--neu-surface)]/10 shadow-[inset_16px_16px_40px_rgba(0,0,0,0.1),inset_-16px_-16px_40px_rgba(255,255,255,0.7)] dark:shadow-[inset_16px_16px_40px_rgba(0,0,0,0.65),inset_-16px_-16px_40px_rgba(255,255,255,0.04)]"
            />

            {/* 3. Content Layer */}
            <div className="absolute inset-4 md:inset-5 z-20 pointer-events-none flex items-center justify-center md:block">
              <ArrowUpRight className="md:hidden absolute top-0 right-0 w-4 h-4 text-zinc-500 dark:text-neutral-500 group-hover:text-zinc-700 dark:group-hover:text-neutral-400 transition-colors" />
              <div className="md:absolute md:bottom-0 md:left-0 text-center md:text-left">
                <span className="text-lg sm:text-xl md:text-base font-semibold text-zinc-900 dark:text-neutral-50 block">
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
