"use client"

import React, { useState, useEffect } from "react"
import { socialLinks } from "@/lib/site-data"
import { ArrowUpRight, ChevronDown } from "lucide-react"
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
      className="relative overflow-hidden flex flex-col items-center md:h-auto md:pt-16 lg:pt-20 md:pb-0"
      style={{ background: "var(--neu-surface)" }}
    >

      {/* Hero Title — vertically centered in the gap between header bar and cards */}
      <div className="hidden md:flex w-full max-w-5xl mx-auto px-6 sm:px-6 text-center items-center justify-center md:h-[16rem] lg:h-[18rem] xl:h-[20rem]">
        <h1
          className="font-serif max-md:font-extrabold font-bold md:font-semibold text-[1.625rem] sm:text-[2.35rem] md:text-[3.125rem] lg:text-[3.75rem] xl:text-[4.25rem] leading-[1.1] md:whitespace-nowrap inline-block px-4 -mx-4 pb-2.5 max-md:subpixel-antialiased max-md:[-webkit-text-stroke:0.6px_transparent]"
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

      {/* Mobile Layout: title upper third, hero card around middle, arrow lower third */}
      <div className="md:hidden w-full z-20 px-6 pt-[max(7.75rem,calc(env(safe-area-inset-top)+6.85rem))] pb-[clamp(1.9rem,4.2svh,2.8rem)]">
        <div className="w-full max-w-md mx-auto px-2 text-center pointer-events-none">
          <p className="text-[1.35rem] sm:text-[1.45rem] leading-[1.15] tracking-[-0.01em] font-semibold text-black dark:text-white">
            AI-powered Mobile Apps.
          </p>
          <p className="mt-1 text-[1.35rem] sm:text-[1.45rem] leading-[1.15] tracking-[-0.01em] font-semibold text-zinc-500 dark:text-zinc-500">
            Designed with precision.
          </p>
        </div>

        {/* Mobile Design: Parent Neumorphic Container */}
        <div className="w-full max-w-md mx-auto self-start mt-[clamp(1.9rem,4.2svh,2.8rem)] flex flex-col items-center">
        <div className="w-full neu-container overflow-hidden pt-3">
          {/* Top: Raised All Projects rectangle */}
          <div className="px-3">
            <Link
              href="/projects"
              className="group relative block rounded-[32px] h-[clamp(7.25rem,19svh,10rem)] overflow-hidden neu-raised neu-mobile-neumorphic transform-gpu p-1"
            >
              {/* Aurora background */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none animate-color-shift">
                <div className="absolute inset-0 bg-[var(--neu-surface)]" />
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none saturate-[3] contrast-[1.2] dark:saturate-[2] dark:contrast-[1.05] dark:brightness-[1.4]"
                  style={{
                    maskImage: "radial-gradient(ellipse at center, black 30%, transparent 68%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 68%)",
                  }}
                >
                  <div className="absolute -top-[14%] -left-[10%] w-[62%] h-[72%] rounded-full mix-blend-multiply dark:mix-blend-screen bg-cyan-500/62 dark:bg-cyan-400/56 animate-lava [--drift-name:drift-orbit] [--drift-duration:8s] [--morph-name:morph] [--morph-duration:6s] [--color-duration:12s] [--glow-blur:74px] scale-125" style={{ filter: "blur(var(--glow-blur))" }} />
                  <div className="absolute -top-[4%] right-[-12%] w-[58%] h-[68%] rounded-full mix-blend-multiply dark:mix-blend-screen bg-pink-500/58 dark:bg-pink-400/54 animate-lava [--drift-name:drift-cross] [--drift-duration:10s] [--morph-name:morph-alt] [--morph-duration:7s] [--color-duration:14s] [--drift-delay:0.5s] [--color-delay:1s] [--glow-blur:80px] scale-120" style={{ filter: "blur(var(--glow-blur))" }} />
                  <div className="absolute top-[30%] left-[18%] w-[48%] h-[55%] rounded-full mix-blend-multiply dark:mix-blend-screen bg-violet-500/56 dark:bg-violet-400/56 animate-lava [--drift-name:drift-wide] [--drift-duration:9s] [--morph-name:morph] [--morph-duration:8s] [--color-duration:13s] [--drift-delay:0.4s] [--color-delay:1.5s] [--glow-blur:76px] scale-125" style={{ filter: "blur(var(--glow-blur))" }} />
                  <div className="absolute bottom-[-14%] left-[4%] w-[56%] h-[66%] rounded-full mix-blend-multiply dark:mix-blend-screen bg-lime-500/44 dark:bg-lime-400/46 animate-lava [--drift-name:drift-orbit] [--drift-duration:12s] [--morph-name:morph-alt] [--morph-duration:9s] [--color-duration:16s] [--drift-delay:1s] [--color-delay:2s] [--glow-blur:78px] scale-115" style={{ filter: "blur(var(--glow-blur))" }} />
                  <div className="absolute bottom-[-10%] right-[2%] w-[52%] h-[60%] rounded-full mix-blend-multiply dark:mix-blend-screen bg-orange-500/46 dark:bg-orange-400/50 animate-lava [--drift-name:drift-cross] [--drift-duration:11s] [--morph-name:morph] [--morph-duration:10s] [--color-duration:15s] [--drift-delay:1.2s] [--color-delay:2.5s] [--glow-blur:80px] scale-110" style={{ filter: "blur(var(--glow-blur))" }} />
                  <div className="absolute top-[18%] left-[38%] w-[28%] h-[34%] rounded-full mix-blend-multiply dark:mix-blend-screen bg-rose-400/65 dark:bg-rose-300/60 animate-lava [--drift-name:drift-wide] [--drift-duration:14s] [--morph-name:morph] [--morph-duration:8s] [--color-duration:18s] [--drift-delay:1.5s] [--glow-blur:54px] scale-140" style={{ filter: "blur(var(--glow-blur))" }} />
                </div>
                <div
                  className="absolute inset-0 opacity-[0.28] dark:opacity-[0.25] mix-blend-multiply dark:mix-blend-screen pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 18% 22%, rgba(59, 130, 246, 0.58), transparent 46%), radial-gradient(circle at 80% 24%, rgba(236, 72, 153, 0.52), transparent 50%), radial-gradient(circle at 58% 76%, rgba(234, 179, 8, 0.44), transparent 52%), radial-gradient(circle at 34% 74%, rgba(16, 185, 129, 0.4), transparent 50%), radial-gradient(circle at 68% 52%, rgba(168, 85, 247, 0.36), transparent 48%)",
                  }}
                />
              </div>

              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-1">
                  <span className="text-[1.1rem] tracking-[-0.005em] font-medium text-zinc-900 dark:text-white">View all projects</span>
                  <ArrowUpRight className="w-5 h-5 text-zinc-900 dark:text-white" />
                </div>
              </div>
            </Link>
          </div>

          <div className="h-2" />

          {/* Middle: Flat Grid of Categories (responsive row height) */}
          <div className="grid grid-cols-2">
            <Link href="/apps" className="flex items-center justify-center h-[clamp(5.65rem,12.1svh,6.15rem)] border-r border-b neu-separator text-zinc-900 dark:text-zinc-100 font-medium text-[0.95rem] text-center active:bg-zinc-100/10 transition-colors">
              <div className="whitespace-nowrap">Mobile Apps</div>
            </Link>
            <Link href="/ai" className="flex items-center justify-center h-[clamp(5.65rem,12.1svh,6.15rem)] border-b neu-separator text-zinc-900 dark:text-zinc-100 font-medium text-[0.95rem] text-center active:bg-zinc-100/10 transition-colors">
              <div className="whitespace-nowrap">AI/ML</div>
            </Link>
            <Link href="/design" className="flex items-center justify-center h-[clamp(4.75rem,10.1svh,5.15rem)] border-r border-b neu-separator text-zinc-900 dark:text-zinc-100 font-medium text-[0.95rem] text-center active:bg-zinc-100/10 transition-colors">
              <div className="whitespace-nowrap">Design</div>
            </Link>
            <a href={socialLinks.resume} download={socialLinks.resumeDownloadName} className="flex items-center justify-center h-[clamp(4.75rem,10.1svh,5.15rem)] border-b neu-separator text-zinc-900 dark:text-zinc-100 font-medium text-[0.95rem] text-center active:bg-zinc-100/10 transition-colors">
              <div className="whitespace-nowrap">Resume</div>
            </a>
          </div>

          {/* Bottom: Social Icons Row (responsive row height) */}
          <div className="grid grid-cols-4">
            <a href={socialLinks.email} className="flex items-center justify-center h-[clamp(4.75rem,10.1svh,5.15rem)] border-r neu-separator group active:bg-zinc-100/10 transition-colors">
              <div className="w-11 h-11 rounded-full flex items-center justify-center transition-colors text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
                <svg viewBox="0 0 24 24" className="block w-[1.6rem] h-[1.6rem] fill-current" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 2.75C5.38503 2.75 3.92465 3.15363 2.86466 4.1379C1.79462 5.13152 1.25 6.60705 1.25 8.5V15.5C1.25 17.393 1.79462 18.8685 2.86466 19.8621C3.92465 20.8464 5.38503 21.25 7 21.25H17C18.615 21.25 20.0754 20.8464 21.1353 19.8621C22.2054 18.8685 22.75 17.393 22.75 15.5V8.5C22.75 6.60705 22.2054 5.13152 21.1353 4.1379C20.0754 3.15363 18.615 2.75 17 2.75H7ZM19.2285 8.3623C19.5562 8.10904 19.6166 7.63802 19.3633 7.31026C19.1101 6.98249 18.6391 6.9221 18.3113 7.17537L12.7642 11.4616C12.3141 11.8095 11.6858 11.8095 11.2356 11.4616L5.6886 7.17537C5.36083 6.9221 4.88982 6.98249 4.63655 7.31026C4.38328 7.63802 4.44367 8.10904 4.77144 8.3623L10.3185 12.6486C11.3089 13.4138 12.691 13.4138 13.6814 12.6486L19.2285 8.3623Z"
                  />
                </svg>
              </div>
            </a>
            <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-[clamp(4.75rem,10.1svh,5.15rem)] border-r neu-separator group active:bg-zinc-100/10 transition-colors">
              <div className="w-11 h-11 rounded-full flex items-center justify-center transition-colors text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
                <svg viewBox="-40 -40 3413 3413" className="block w-[1.6rem] h-[1.6rem] fill-current" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm-408 1059c57 0 109 5 156 15s87 27 121 49c33 23 59 53 78 91 18 37 27 85 27 140 0 60-14 110-41 151-28 40-68 73-122 99 74 21 128 58 164 111s54 117 54 192c0 61-12 113-35 157-24 44-55 80-94 108s-85 49-136 62c-50 13-102 20-156 20H696V1060h563zm704 96h484v118h-484v-118zm108 890c36 35 87 52 154 52 48 0 90-12 124-36s55-50 63-77h209c-34 104-85 178-154 223s-153 67-250 67c-68 0-129-11-184-33s-101-53-140-93c-38-40-67-88-88-144-20-56-31-118-31-184 0-65 11-125 32-181 22-56 51-104 91-145 39-41 86-73 140-96 54-24 114-35 181-35 73 0 137 14 192 43 55 28 100 67 135 115s60 103 76 164 21 125 17 193h-624c0 68 23 133 59 167zm273-454c-28-31-76-48-134-48-38 0-69 6-94 19s-45 29-60 48-26 39-32 61c-6 21-10 40-11 57h387c-6-61-27-105-55-137zm-1118-50c47 0 85-11 116-33 30-22 45-58 45-108 0-28-5-51-15-69s-24-32-41-42-36-17-58-21-44-6-67-6H960v279h266zm14 508c26 0 50-2 73-8 24-5 44-13 62-25 17-12 32-27 43-48 11-20 16-46 16-77 0-61-17-105-52-132-34-26-80-39-137-39H960v329h281v1z"
                  />
                </svg>
              </div>
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-[clamp(4.75rem,10.1svh,5.15rem)] border-r neu-separator group active:bg-zinc-100/10 transition-colors">
              <div className="w-11 h-11 rounded-full flex items-center justify-center transition-colors text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
                <svg viewBox="0 0 24 24" className="block w-[1.6rem] h-[1.6rem] fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-[clamp(4.75rem,10.1svh,5.15rem)] group active:bg-zinc-100/10 transition-colors">
              <div className="w-11 h-11 rounded-full flex items-center justify-center transition-colors text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
                <svg viewBox="0 0 24 24" className="block w-[1.6rem] h-[1.6rem] fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
        </div>

      </div>

      {/* Desktop/Bigger screens Design: (Hidden on mobile) */}
      <div className="hidden md:block w-full max-w-5xl mx-auto px-6 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 md:gap-5">
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
              label: "AI/ML", 
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
                "group relative rounded-3xl overflow-hidden aspect-[2.15/1] md:aspect-auto h-auto md:h-36 lg:h-40",
                "neu-raised neu-raised-accent transition-all duration-500 ease-in-out",
                item.orderClass
              )}
            >
                <div className="absolute inset-4 md:inset-5 z-10 pointer-events-none">
                  <ArrowUpRight 
                    className="md:hidden absolute top-0 right-0 w-4 h-4 transition-colors opacity-70 group-hover:opacity-100 text-zinc-500 dark:text-zinc-400" 
                  />
                  <div className="absolute bottom-0 left-0 right-0 text-center">
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
              "group relative rounded-3xl overflow-hidden h-32 md:h-full col-span-2 md:col-span-1 md:row-span-2 order-1 md:order-4",
              "neu-raised neu-raised-accent neu-mobile-neumorphic transform-gpu mb-2 md:mb-0"
            )}
          >
            {/* 1. Underlying Dreamy Glow Layer - No hard edges */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none animate-color-shift">
              <div className="absolute inset-0 bg-[var(--neu-surface)] transition-colors duration-500" />
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
                <div className="absolute top-[30%] left-[30%] w-[30%] h-[30%] rounded-full bg-white/50 animate-lava [--drift-name:drift-wide] [--drift-duration:14s] [--morph-name:morph] [--morph-duration:18s] [--color-duration:30s] [--drift-delay:4s] [--glow-blur:50px] scale-140" style={{ filter: 'blur(var(--glow-blur))' }} />
              </div>
              <div 
                className="hidden dark:block absolute inset-0 overflow-hidden pointer-events-none"
                style={{
                  maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)'
                }}
              >
                <div className="absolute inset-0 bg-[#121212] transition-colors duration-500" />
                <div className="absolute inset-0 opacity-100">
                  <div className="absolute top-[15%] left-[15%] w-[45%] h-[45%] rounded-full bg-blue-600/50 animate-lava [--drift-name:drift-wide] [--drift-duration:15s] [--morph-name:morph-alt] [--morph-duration:12s] [--color-duration:20s] [--glow-blur:70px] scale-120" style={{ filter: 'blur(var(--glow-blur))' }} />
                  <div className="absolute bottom-[5%] right-[10%] w-[40%] h-[40%] rounded-full bg-purple-600/50 animate-lava [--drift-name:drift-wide] [--drift-duration:18s] [--morph-name:morph] [--morph-duration:15s] [--color-duration:22s] [--drift-delay:2s] [--glow-blur:65px] scale-110" style={{ filter: 'blur(var(--glow-blur))' }} />
                  <div className="absolute top-[20%] right-[15%] w-[35%] h-[35%] rounded-full bg-rose-600/45 animate-lava [--drift-name:drift-wide] [--drift-duration:20s] [--morph-name:morph-alt] [--morph-duration:18s] [--color-duration:25s] [--drift-delay:4s] [--glow-blur:60px] scale-130" style={{ filter: 'blur(var(--glow-blur))' }} />
                  <div className="absolute bottom-[15%] left-[5%] w-[30%] h-[30%] rounded-full bg-emerald-600/40 animate-lava [--drift-name:drift-wide] [--drift-duration:22s] [--morph-name:morph] [--morph-duration:20s] [--color-duration:28s] [--drift-delay:6s] [--glow-blur:55px] scale-115" style={{ filter: 'blur(var(--glow-blur))' }} />
                  <div className="absolute top-[40%] left-[40%] w-[25%] h-[25%] rounded-full bg-black/50 animate-lava [--drift-name:drift-wide] [--drift-duration:16s] [--morph-name:morph-alt] [--morph-duration:14s] [--color-duration:35s] [--drift-delay:5s] [--glow-blur:45px] scale-150" style={{ filter: 'blur(var(--glow-blur))' }} />
                </div>
              </div>
              <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.02] mix-blend-overlay pointer-events-none z-[5]" 
                   style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
            </div>
            <div 
              className="absolute inset-0 rounded-3xl pointer-events-none z-10 bg-[var(--neu-surface)]/10 dark:bg-[var(--neu-surface)]/10 shadow-[inset_16px_16px_40px_rgba(0,0,0,0.1),inset_-16px_-16px_40px_rgba(255,255,255,0.7)] dark:shadow-[inset_16px_16px_40px_rgba(0,0,0,0.65),inset_-16px_-16px_40px_rgba(255,255,255,0.04)]"
            />
            <div 
              className="absolute inset-0 rounded-3xl pointer-events-none z-[15] opacity-0 group-active:opacity-100 transition-opacity duration-0 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.1),inset_-6px_-6px_12px_rgba(255,255,255,0.7)] dark:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.5),inset_-6px_-6px_12px_rgba(255,255,255,0.05)]"
            />
            <div className="absolute inset-4 md:inset-5 z-20 pointer-events-none flex items-center justify-center md:block">
              <ArrowUpRight className="md:hidden absolute top-0 right-0 w-4 h-4 text-zinc-500 dark:text-neutral-500 group-hover:text-zinc-700 dark:group-hover:text-neutral-400 transition-colors" />
              <div className="md:absolute md:bottom-0 md:left-0 md:right-0 text-center">
                <span className="text-lg sm:text-xl md:text-base font-semibold text-zinc-900 dark:text-neutral-50 block">
                  All Projects
                </span>
                <span className="hidden md:block text-xs text-zinc-800/70 dark:text-neutral-400/70 group-hover:text-zinc-800/90 dark:group-hover:text-neutral-400/90 transition-colors mt-1">
                  Portfolio · Case Studies
                </span>
              </div>
            </div>
          </Link>

          {/* Social Icons (Row 2: Shorter for squares) */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:gap-5 aspect-[2.15/1] md:aspect-auto h-auto md:h-24 lg:h-28 order-7 md:order-5">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-3xl flex items-center justify-center group active:bg-zinc-100/10 transition-all duration-500 ease-in-out neu-raised neu-raised-accent"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-zinc-500 dark:fill-zinc-400 group-hover:fill-zinc-900 dark:group-hover:fill-zinc-100 transition-colors duration-500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="GitHub"
                className="rounded-3xl flex items-center justify-center group active:bg-zinc-100/10 transition-all duration-500 ease-in-out neu-raised neu-raised-accent"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-zinc-500 dark:fill-zinc-400 group-hover:fill-zinc-900 dark:group-hover:fill-zinc-100 transition-colors duration-500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
          </div>

          {/* Resume - Bottom Left Alignment (Row 2) */}
          <a
            href={socialLinks.resume}
            download={socialLinks.resumeDownloadName}
            className="group relative rounded-3xl overflow-hidden aspect-[2.15/1] md:aspect-auto h-auto md:h-24 lg:h-28 order-5 md:order-6 flex flex-col justify-end p-4 md:p-5 transition-all duration-500 ease-in-out neu-raised neu-raised-accent"
          >
             <span className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-50 block">Resume</span>
          </a>

          {/* Contact - Bottom Left Alignment (Row 2) */}
          <a
            href="#contact"
            className="group relative rounded-3xl overflow-hidden aspect-[2.15/1] md:aspect-auto h-auto md:h-24 lg:h-28 order-6 md:order-7 flex flex-col justify-end p-4 md:p-5 transition-all duration-500 ease-in-out neu-raised neu-raised-accent"
          >
             <span className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-50 block">Contact</span>
          </a>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="hidden md:flex w-full flex-col items-center justify-center mb-0 pb-0 sm:pb-0 sm:mb-0 md:mb-0 md:pb-0 mt-0 md:mt-8 relative z-40">
        <div className={cn(
            "mt-3 md:mt-2 pb-0 md:pb-0 flex justify-center transition-opacity duration-300 lg:opacity-40 lg:hover:opacity-100",
            scrolledDown ? "opacity-0 pointer-events-none" : "opacity-70"
        )}>
          <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  )
}


