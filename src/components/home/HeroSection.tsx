"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { socialLinks, projects, heroSkills } from "@/lib/site-data"
import { cn } from "@/lib/utils"
import { MobbinIconStack } from "./MobbinIconStack"
import { AboutProfileCard } from "./AboutProfileCard"

const VIEWALL_BLOB_COLORS = [
  "bg-cyan-500/62",
  "bg-pink-500/58",
  "bg-violet-500/56",
  "bg-lime-500/44",
  "bg-orange-500/46",
  "bg-rose-400/65",
]

function shuffleColors(colors: string[]) {
  const next = [...colors]
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[next[i], next[j]] = [next[j], next[i]]
  }
  return next
}

function rotateColors(colors: string[], offset: number) {
  const next = [...colors]
  const shift = ((offset % next.length) + next.length) % next.length
  return next.map((_, i) => next[(i + shift) % next.length])
}

export function HeroSection() {
  const [scrolledDown, setScrolledDown] = useState(false)
  const [viewAllBlobColors, setViewAllBlobColors] = useState<string[]>(VIEWALL_BLOB_COLORS)
  const [bioExpanded, setBioExpanded] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const snapTransition = prefersReducedMotion
    ? { duration: 0 }
    : {
        type: "spring" as const,
        // Softer spring + a bit more damping reduction = more visible bounce, less "snappy-fast"
        stiffness: 360,
        damping: 20,
        mass: 0.85,
      }

  useEffect(() => {
    const handleScroll = () => {
      setScrolledDown(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const shuffled = shuffleColors(VIEWALL_BLOB_COLORS)
    const unchanged = shuffled.every((color, index) => color === VIEWALL_BLOB_COLORS[index])

    // Guarantee a different starting arrangement on each load.
    if (unchanged) {
      const offset = Math.floor(Math.random() * (VIEWALL_BLOB_COLORS.length - 1)) + 1
      setViewAllBlobColors(rotateColors(VIEWALL_BLOB_COLORS, offset))
      return
    }

    setViewAllBlobColors(shuffled)
  }, [])

  return (
    <section
      className="relative overflow-hidden flex flex-col items-center md:h-auto md:pt-16 lg:pt-20 md:pb-0"
      style={{ background: "var(--neu-surface)" }}
    >

      {/* Universal Hero Title */}
      <div className="w-full z-20 px-6 pt-[max(6.85rem,calc(env(safe-area-inset-top)+5.95rem))] md:pt-14 lg:pt-16 xl:pt-20 pb-0">
        <div className="w-full max-w-[1040px] mx-auto px-4 lg:px-6 text-center flex flex-col items-center">
          <motion.div
            className="mt-1 sm:mt-2 md:mt-0 mb-5 sm:mb-6 md:mb-12 lg:mb-8 xl:mb-7 lg:scale-[0.88] xl:scale-[0.82] origin-center"
            initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...snapTransition, delay: 0 }}
          >
            <MobbinIconStack />
          </motion.div>
          <motion.h1
            className="font-sans font-semibold whitespace-nowrap text-[1.86rem] sm:text-[2.78rem] md:text-[3rem] lg:text-[2.8rem] xl:text-[3.1rem] leading-[1.02] tracking-[-0.05em] sm:tracking-[-0.035em] md:tracking-[-0.04em] lg:tracking-[-0.038em]"
            initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...snapTransition, delay: 0.16 }}
          >
            <span className="inline text-black dark:text-white">Developer </span>
            <span className="inline text-black dark:text-white">& Designer</span>
          </motion.h1>
          <motion.p
            className="mt-1.5 text-center text-base leading-[1.28] md:mt-3 md:text-xl lg:text-xl xl:text-[1.35rem] md:leading-relaxed opacity-90 lg:max-w-none lg:whitespace-nowrap lg:mb-4 xl:mb-6"
            initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...snapTransition, delay: 0.24 }}
          >
            <span className="block lg:inline">Mobile Apps, AI &amp; Design.</span>
          </motion.p>
        </div>
      </div>

      {/* Mobile Stack Layout */}
      <motion.div
        className="w-full z-20 px-6 pb-8 lg:hidden flex flex-col items-center"
        initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...snapTransition, delay: 0.42 }}
      >
        
        {/* 1. Interactive Featured Bento Grid (Restored to Top) */}
        <div className="w-[95%] sm:w-[94%] mx-auto mt-10 mb-0 flex flex-col items-center hero-mobile-main-shape-wrap">
          <div className="w-full neu-container overflow-visible aspect-[342/355] grid grid-rows-[45%_18.33%_18.33%_18.33%]">
            {/* Row 1: Flat All Projects rectangle */}
            <div className="relative h-full p-3 pb-2.5">
              <Link
                href="/projects"
                className="group hero-viewall-pill neu-mobile-neumorphic relative z-20 block w-full h-full rounded-[30px] overflow-hidden transform-gpu transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
              >
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none animate-color-shift">
                  <div className="hero-viewall-surface absolute inset-0 bg-transparent" />
                  <div
                    className="absolute inset-0 overflow-hidden pointer-events-none saturate-[3] contrast-[1.2] group-hover:saturate-[6.2] group-hover:contrast-[1.34] group-hover:brightness-[1.2] transition-[filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] dark:opacity-85 dark:saturate-[4] dark:contrast-[1.25]"
                    style={{
                      maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
                      WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
                    }}
                  >
                    <div className={`absolute -top-[14%] -left-[10%] w-[62%] h-[72%] rounded-full mix-blend-multiply dark:mix-blend-screen ${viewAllBlobColors[0]} animate-lava [--drift-name:drift-orbit] [--drift-duration:8s] [--morph-name:morph] [--morph-duration:6s] [--color-duration:12s] [--glow-blur:74px] scale-125`} style={{ filter: "blur(var(--glow-blur))" }} />
                    <div className={`absolute -top-[4%] right-[-12%] w-[58%] h-[68%] rounded-full mix-blend-multiply dark:mix-blend-screen ${viewAllBlobColors[1]} animate-lava [--drift-name:drift-cross] [--drift-duration:10s] [--morph-name:morph-alt] [--morph-duration:7s] [--color-duration:14s] [--drift-delay:0.5s] [--color-delay:1s] [--glow-blur:80px] scale-120`} style={{ filter: "blur(var(--glow-blur))" }} />
                    <div className={`absolute top-[30%] left-[18%] w-[48%] h-[55%] rounded-full mix-blend-multiply dark:mix-blend-screen ${viewAllBlobColors[2]} animate-lava [--drift-name:drift-wide] [--drift-duration:9s] [--morph-name:morph] [--morph-duration:8s] [--color-duration:13s] [--drift-delay:0.4s] [--color-delay:1.5s] [--glow-blur:76px] scale-125`} style={{ filter: "blur(var(--glow-blur))" }} />
                    <div className={`absolute bottom-[-14%] left-[4%] w-[56%] h-[66%] rounded-full mix-blend-multiply dark:mix-blend-screen ${viewAllBlobColors[3]} animate-lava [--drift-name:drift-orbit] [--drift-duration:12s] [--morph-name:morph-alt] [--morph-duration:9s] [--color-duration:16s] [--drift-delay:1s] [--color-delay:2s] [--glow-blur:78px] scale-115`} style={{ filter: "blur(var(--glow-blur))" }} />
                    <div className={`absolute bottom-[-10%] right-[2%] w-[52%] h-[60%] rounded-full mix-blend-multiply dark:mix-blend-screen ${viewAllBlobColors[4]} animate-lava [--drift-name:drift-cross] [--drift-duration:11s] [--morph-name:morph] [--morph-duration:10s] [--color-duration:15s] [--drift-delay:1.2s] [--color-delay:2.5s] [--glow-blur:80px] scale-110`} style={{ filter: "blur(var(--glow-blur))" }} />
                    <div className={`absolute top-[18%] left-[38%] w-[28%] h-[34%] rounded-full mix-blend-multiply dark:mix-blend-screen ${viewAllBlobColors[5]} animate-lava [--drift-name:drift-wide] [--drift-duration:14s] [--morph-name:morph] [--morph-duration:8s] [--color-duration:18s] [--drift-delay:1.5s] [--glow-blur:54px] scale-140`} style={{ filter: "blur(var(--glow-blur))" }} />
                  </div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.28),transparent_75%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.22),transparent_70%)] pointer-events-none transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-[1] animate-glow-pulse" />
                  <div
                    className="absolute inset-0 opacity-[0.28] dark:opacity-[0.25] group-hover:opacity-[0.42] mix-blend-multiply dark:mix-blend-screen pointer-events-none transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 18% 22%, rgba(59, 130, 246, 0.58), transparent 46%), radial-gradient(circle at 80% 24%, rgba(236, 72, 153, 0.52), transparent 50%), radial-gradient(circle at 58% 76%, rgba(234, 179, 8, 0.44), transparent 52%), radial-gradient(circle at 34% 74%, rgba(16, 185, 129, 0.4), transparent 50%), radial-gradient(circle at 68% 52%, rgba(168, 85, 247, 0.36), transparent 48%)",
                    }}
                  />
                  <div className="absolute inset-0 pointer-events-none bg-white/0 group-hover:bg-white/[0.12] dark:group-hover:bg-white/[0.06] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                </div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[1.125rem] tracking-[-0.005em] font-semibold text-zinc-900 dark:text-white">View all projects</span>
                    <ArrowUpRight className="w-5 h-5 text-zinc-900 dark:text-white" strokeWidth={2.5} />
                  </div>
                </div>
              </Link>
              {/* Mobile: match divider to the view-all pill bottom edge (bottom padding gap) */}
              <div className="absolute bottom-0 left-0 w-1/2 h-2.5 border-r neu-separator pointer-events-none" />
            </div>
            <div className="grid grid-cols-2">
              <Link href="/apps" className="flex items-center justify-center border-r border-b neu-separator text-zinc-900 dark:text-white font-medium text-[0.95rem] text-center active:bg-zinc-100/10 transition-colors">
                <div className="whitespace-nowrap">Mobile Apps</div>
              </Link>
              <Link href="/ai" className="flex items-center justify-center border-b neu-separator text-zinc-900 dark:text-white font-medium text-[0.95rem] text-center active:bg-zinc-100/10 transition-colors">
                <div className="whitespace-nowrap">AI/ML</div>
              </Link>
            </div>
            <div className="grid grid-cols-2">
              <Link href="/design" className="flex items-center justify-center border-r border-b neu-separator text-zinc-900 dark:text-white font-medium text-[0.95rem] text-center active:bg-zinc-100/10 transition-colors">
                <div className="whitespace-nowrap">Design</div>
              </Link>
              <a href={socialLinks.resume} download={socialLinks.resumeDownloadName} className="flex items-center justify-center border-b neu-separator text-zinc-900 dark:text-white font-medium text-[0.95rem] text-center active:bg-zinc-100/10 transition-colors">
                <div className="whitespace-nowrap">Resume</div>
              </a>
            </div>
            <div className="grid grid-cols-4">
              <Link href="#contact" className="flex items-center justify-center border-r neu-separator group active:bg-zinc-100/10 transition-colors">
                <div className="w-11 h-11 rounded-full flex items-center justify-center transition-colors text-rose-500 group-hover:opacity-100 opacity-90">
                  <svg viewBox="0 0 24 24" className="block w-[1.4rem] h-[1.4rem] fill-current" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7 2.75C5.38503 2.75 3.92465 3.15363 2.86466 4.1379C1.79462 5.13152 1.25 6.60705 1.25 8.5V15.5C1.25 17.393 1.79462 18.8685 2.86466 19.8621C3.92465 20.8464 5.38503 21.25 7 21.25H17C18.615 21.25 20.0754 20.8464 21.1353 19.8621C22.2054 18.8685 22.75 17.393 22.75 15.5V8.5C22.75 6.60705 22.2054 5.13152 21.1353 4.1379C20.0754 3.15363 18.615 2.75 17 2.75H7ZM19.2285 8.3623C19.5562 8.10904 19.6166 7.63802 19.3633 7.31026C19.1101 6.98249 18.6391 6.9221 18.3113 7.17537L12.7642 11.4616C12.3141 11.8095 11.6858 11.8095 11.2356 11.4616L5.6886 7.17537C5.36083 6.9221 4.88982 6.98249 4.63655 7.31026C4.38328 7.63802 4.44367 8.10904 4.77144 8.3623L10.3185 12.6486C11.3089 13.4138 12.691 13.4138 13.6814 12.6486L19.2285 8.3623Z" />
                  </svg>
                </div>
              </Link>
              <a href={socialLinks.behance} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border-r neu-separator group active:bg-zinc-100/10 transition-colors">
                <div className="w-11 h-11 rounded-full flex items-center justify-center transition-colors text-[#1769FF] group-hover:opacity-100 opacity-90">
                  <svg viewBox="-40 -40 3413 3413" className="block w-[1.4rem] h-[1.4rem] fill-current" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm-408 1059c57 0 109 5 156 15s87 27 121 49c33 23 59 53 78 91 18 37 27 85 27 140 0 60-14 110-41 151-28 40-68 73-122 99 74 21 128 58 164 111s54 117 54 192c0 61-12 113-35 157-24 44-55 80-94 108s-85 49-136 62c-50 13-102 20-156 20H696V1060h563zm704 96h484v118h-484v-118zm108 890c36 35 87 52 154 52 48 0 90-12 124-36s55-50 63-77h209c-34 104-85 178-154 223s-153 67-250 67c-68 0-129-11-184-33s-101-53-140-93c-38-40-67-88-88-144-20-56-31-118-31-184 0-65 11-125 32-181 22-56 51-104 91-145 39-41 86-73 140-96 54-24 114-35 181-35 73 0 137 14 192 43 55 28 100 67 135 115s60 103 76 164 21 125 17 193h-624c0 68 23 133 59 167zm273-454c-28-31-76-48-134-48-38 0-69 6-94 19s-45 29-60 48-26 39-32 61c-6 21-10 40-11 57h387c-6-61-27-105-55-137zm-1118-50c47 0 85-11 116-33 30-22 45-58 45-108 0-28-5-51-15-69s-24-32-41-42-36-17-58-21-44-6-67-6H960v279h266zm14 508c26 0 50-2 73-8 24-5 44-13 62-25 17-12 32-27 43-48 11-20 16-46 16-77 0-61-17-105-52-132-34-26-80-39-137-39H960v329h281v1z" />
                  </svg>
                </div>
              </a>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border-r neu-separator group active:bg-zinc-100/10 transition-colors">
                <div className="w-11 h-11 rounded-full flex items-center justify-center transition-colors text-zinc-900 dark:text-white group-hover:opacity-100 opacity-90">
                  <svg viewBox="0 0 24 24" className="block w-[1.4rem] h-[1.4rem] fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center group active:bg-zinc-100/10 transition-colors">
                <div className="w-11 h-11 rounded-full flex items-center justify-center transition-colors text-[#0A66C2] group-hover:opacity-100 opacity-90">
                  <svg viewBox="0 0 24 24" className="block w-[1.4rem] h-[1.4rem] fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* 2. Profile Card */}
        <div id="about" className="lg:hidden scroll-mt-24" />
        <AboutProfileCard
          imageSizes="(max-width: 768px) 100vw, 342px"
          className="mt-6 lg:hidden relative z-10"
          priority
        />

        {/* 3. Unified Mobile Bio + Education Card */}
        <div className="home-mobile-bio-shell hero-bio-card w-full -mt-16 relative z-0 rounded-t-[32px] rounded-b-[40px] bg-[#d6d6d6] dark:bg-black border border-zinc-200/50 border-t-0 dark:border-white/10 flex flex-col overflow-hidden shadow-none">
          <div className={cn("flex flex-col pt-[84px] px-8 text-left transition-all duration-500", bioExpanded ? "pb-10" : "pb-6")}>
            <div className="flex flex-col gap-5">
              {/* Mission Title */}

              {/* Professional Titles */}
              <div className="flex flex-col items-center text-center gap-0 shrink-0">
                {["Cross-platform App Developer", "AI Engineer", "UI/UX Designer"].map((title, idx) => (
                  <div key={idx} className="flex items-center justify-center">
                    <span className="text-zinc-900 dark:text-white text-[14.5px] leading-[1.6] tracking-[-0.015em] font-[600]">{title}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-[0.85rem] font-normal leading-[1.6] text-zinc-900 dark:text-zinc-300">
                I build cross-platform mobile apps at the intersection of AI and design. Functional, intelligent and crafted with precision.
              </p>

              {/* Education block: collapsed shows clipped/faded preview; expanded reveals full timeline + skills below */}
              <div className="relative w-full">
                <motion.div
                  className="w-full relative"
                  initial={{ opacity: 0, height: "7rem" }}
                  animate={{ opacity: 1, height: bioExpanded ? "auto" : "7rem" }}
                  transition={{ 
                    opacity: { duration: prefersReducedMotion ? 0 : 0.22 },
                    height: { type: "spring", duration: 0.4, bounce: 0.15 }
                  }}
                >
                <div className="hero-education-card relative rounded-[28px] bg-[#d6d6d6] border border-zinc-200/40 dark:bg-transparent dark:border-transparent pt-4 pb-1 pl-0 pr-5 flex flex-col overflow-hidden ml-[-10px]">
                  {/* Milestone 1 */}
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-col items-center w-5 shrink-0">
                      <motion.div 
                        className="w-[14px] h-[14px] relative top-[3px] rounded-full shrink-0" 
                        animate={{ backgroundColor: ["#FFFFFF", "#4EB627", "#FFFFFF"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <div className="flex-1 w-[3px] mt-[13.5px] mb-[6px] bg-[#B4B4BB] rounded-full translate-x-[0.5px]" />
                    </div>
                    <div className="flex-1 pt-0 pb-4">
                      <p className="text-[14.5px] font-[600] text-zinc-900 dark:text-white tracking-[-0.015em] leading-[1.4]">Applied A.I. Solutions Development</p>
                      <p className="text-[0.85rem] font-normal leading-[1.4] text-zinc-600 dark:text-zinc-400">George Brown College, Toronto</p>
                      <p className="text-[0.85rem] font-normal leading-[1.4] text-zinc-600 dark:text-zinc-400 flex items-center">
                        Postgraduate
                        <span className="ml-2.5 inline-flex items-center px-2 py-0.5 rounded-full border-[1.5px] border-[#4EB627]/60 text-[0.65rem] font-semibold tracking-wider leading-none align-middle bg-[#E1E1E1] text-[#4EB627]">
                          Ongoing
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Milestone 2 */}
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-col items-center w-5 shrink-0">
                      <div className="w-[12px] h-[12px] relative top-[4px] rounded-full bg-[#B4B4BB] shrink-0" />
                      <div className="flex-1 w-[3px] mt-[13.5px] mb-[6px] bg-[#B4B4BB] rounded-full translate-x-[0.5px]" />
                    </div>
                    <div className="flex-1 pt-0 pb-4">
                      <p className={cn(
                        "text-[14.5px] font-[600] tracking-[-0.015em] leading-[1.4] transition-colors duration-300",
                        !bioExpanded ? "text-zinc-400 dark:text-zinc-500" : "text-zinc-900 dark:text-white"
                      )}>
                        Mobile Application Development and Strategy
                      </p>
                      <p className={cn(
                        "text-[0.85rem] font-normal leading-[1.4] transition-colors duration-300",
                        !bioExpanded ? "text-zinc-400 dark:text-zinc-500" : "text-zinc-600 dark:text-zinc-400"
                      )}>
                        George Brown College, Toronto
                      </p>
                      <p className={cn(
                        "text-[0.85rem] font-normal leading-[1.4] transition-colors duration-300",
                        !bioExpanded ? "text-zinc-400 dark:text-zinc-500" : "text-zinc-600 dark:text-zinc-400"
                      )}>
                        Postgraduate
                      </p>
                    </div>
                  </div>

                  {/* Milestone 3 */}
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-col items-center w-5 shrink-0">
                      <div className="w-[12px] h-[12px] relative top-[4px] rounded-full bg-[#B4B4BB] shrink-0" />
                    </div>
                    <div className="flex-1 pt-0">
                      <p className={cn(
                        "text-[14.5px] font-[600] tracking-[-0.015em] leading-[1.4] transition-colors duration-300",
                        !bioExpanded ? "text-zinc-400 dark:text-zinc-500" : "text-zinc-900 dark:text-white"
                      )}>
                        B.Sc. Information Technology
                      </p>
                      <p className={cn(
                        "text-[0.85rem] font-normal leading-[1.4] transition-colors duration-300",
                        !bioExpanded ? "text-zinc-400 dark:text-zinc-500" : "text-zinc-600 dark:text-zinc-400"
                      )}>
                        Amity University, Noida
                      </p>
                      <p className={cn(
                        "text-[0.85rem] font-normal leading-[1.4] transition-colors duration-300",
                        !bioExpanded ? "text-zinc-400 dark:text-zinc-500" : "text-zinc-600 dark:text-zinc-400"
                      )}>
                        Graduation
                      </p>
                    </div>
                  </div>
                </div>

                {/* Always render the rest (skills) below inside the same block so parent width accurately collapses/expands smoothly */}
                <div className="hero-skills-card pt-8 pb-4 flex justify-center w-full">
                  <div className="grid grid-cols-3 gap-y-6 gap-x-8 w-full max-w-[280px]">
                    {heroSkills.slice(0, 15).map((skill, i) => (
                      <div key={i} className="flex flex-col items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                        <div className="w-7 h-7 relative grayscale dark:invert-[0.92] dark:opacity-90">
                          <Image src={skill.logoUrl} alt={skill.name} fill className="object-contain" unoptimized />
                        </div>
                        <span className="text-[0.55rem] font-bold text-zinc-600 dark:text-zinc-400 text-center leading-tight tracking-[0.02em]">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                </motion.div>
              </div>
            </div>
          </div>
          {/* View more / View less pill button - stays at the end of the rectangle */}
          <motion.div 
            className="relative z-40 flex justify-center mb-5"
            initial={false}
            animate={{ marginTop: bioExpanded ? "1.25rem" : "-0.5rem" }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
          >
            <button
              type="button"
              onClick={() => setBioExpanded((v) => !v)}
              className={cn(
                "z-20 w-fit mx-auto flex items-center justify-center gap-2 rounded-full bg-black text-white px-5 py-2.5 text-[0.85rem] font-medium",
                "dark:bg-white dark:text-black",
                "transition-transform duration-200 active:scale-[0.98]"
              )}
              aria-expanded={bioExpanded}
            >
              {bioExpanded ? "View less" : "View more"}
              <ChevronDown
                className={cn("w-4 h-4 transition-transform duration-200", bioExpanded && "rotate-180")}
                strokeWidth={2.25}
              />
            </button>
          </motion.div>

          <AnimatePresence>
            {!bioExpanded && (
              <>
                <motion.div 
                   className="pointer-events-none absolute inset-x-0 bottom-0 h-[150px] rounded-b-[40px] z-30 dark:hidden block"
                   style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(214, 214, 214, 0.2) 30%, rgba(214, 214, 214, 0.85) 75%, #d6d6d6 100%)' }}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.3 }}
                 />
                 <motion.div 
                   className="pointer-events-none absolute inset-x-0 bottom-0 h-[150px] rounded-b-[40px] z-30 dark:block hidden"
                   style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0.85) 75%, black 100%)' }}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.3 }}
                 />
              </>
            )}
          </AnimatePresence>
        </div>


      </motion.div>

      {/* Desktop 2-Row 3-Column Cinematic Layout */}
      <motion.div
        className="hidden lg:flex flex-col w-full z-20 pb-0 mt-12 xl:mt-14 items-center scroll-mt-28 hero-flat-desktop"
        id="about"
        initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...snapTransition, delay: 0.42 }}
      >
        <div className="w-full max-w-[1040px] mx-auto px-4 lg:px-6">
          
          <div className="grid grid-cols-3 gap-6 xl:gap-7 items-start">
            
            {/* COLUMN 1: Bio + Skills (Merged) */}
            <div className="hero-bio-skills-merged-card col-span-1 self-stretch overflow-hidden bg-[#dedede] dark:bg-[#202020] rounded-[40px] flex flex-col">
              {/* Top Section: Bio */}
              <div className="pt-10 xl:pt-12 px-6 xl:px-8 text-left">
                {/* 3 Professional Titles */}
                <div className="flex flex-col gap-0 shrink-0 items-start text-left mb-5 xl:mb-6">
                  {[
                    "Cross-platform App Developer",
                    "AI Engineer",
                    "UI/UX Designer"
                  ].map((title, idx) => (
                    <div key={idx} className="flex items-center justify-start w-full">
                      <span className="text-zinc-900 dark:text-white text-[15px] xl:text-[15.5px] leading-[1.6] tracking-[-0.015em] font-[600]">
                        {title}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Short Description */}
                <p className="text-[0.9rem] xl:text-[0.95rem] font-normal leading-[1.6] text-zinc-900 dark:text-zinc-100">
                  I build cross-platform mobile apps at the intersection of AI and design. Functional, intelligent and crafted with precision.
                </p>
              </div>

              {/* Bottom Section: Skills */}
              <div className="flex-1 flex items-center justify-center p-8 pt-4 xl:pt-6">
                <div className="grid grid-cols-3 gap-y-6 gap-x-8 xl:gap-y-7 xl:gap-x-10 w-full max-w-[280px] xl:max-w-[300px]">
                  {heroSkills.slice(0, 15).map((skill, i) => (
                    <div key={i} className="flex flex-col items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                      <div className="w-7 h-7 xl:w-8 xl:h-8 relative grayscale dark:invert-[0.92] dark:opacity-90">
                        <Image src={skill.logoUrl} alt={skill.name} fill className="object-contain" unoptimized />
                      </div>
                      <span className="text-[0.55rem] xl:text-[0.6rem] font-bold text-zinc-600 dark:text-zinc-400 text-center leading-tight tracking-[0.02em]">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* COLUMN 2: Bento (Row 1) + Featured project (Row 2) */}
            <div className="flex flex-col gap-6 xl:gap-7">
              {/* ROW 1: Interactive Bento */}
              <div className="w-full relative aspect-[4/5] neu-container overflow-visible rounded-[40px] xl:rounded-[40px] grid grid-rows-[40%_20%_20%_20%] shrink-0 min-h-0">
                  {/* Row 1: Raised All Projects rectangle */}
                  <div className="relative h-full p-2.5 xl:p-3.5 pb-2 xl:pb-2.5">
                    <Link
                      href="/projects"
                      className="group hero-viewall-pill relative z-20 block w-full h-full rounded-[30px] xl:rounded-[36px] overflow-hidden transform-gpu transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
                    >
                      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none animate-color-shift">
                        <div className="hero-viewall-surface absolute inset-0 bg-transparent" />
                        <div
                          className="absolute inset-0 overflow-hidden pointer-events-none saturate-[3] contrast-[1.2] group-hover:saturate-[6.2] group-hover:contrast-[1.34] group-hover:brightness-[1.2] transition-[filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] dark:opacity-85 dark:saturate-[4] dark:contrast-[1.25]"
                          style={{
                            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
                            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
                          }}
                        >
                          <div className={`absolute -top-[14%] -left-[10%] w-[62%] h-[72%] rounded-full mix-blend-multiply dark:mix-blend-screen ${viewAllBlobColors[0]} animate-lava [--drift-name:drift-orbit] [--drift-duration:8s] [--morph-name:morph] [--morph-duration:6s] [--color-duration:12s] [--glow-blur:74px] scale-125`} style={{ filter: "blur(var(--glow-blur))" }} />
                          <div className={`absolute -top-[4%] right-[-12%] w-[58%] h-[68%] rounded-full mix-blend-multiply dark:mix-blend-screen ${viewAllBlobColors[1]} animate-lava [--drift-name:drift-cross] [--drift-duration:10s] [--morph-name:morph-alt] [--morph-duration:7s] [--color-duration:14s] [--drift-delay:0.5s] [--color-delay:1s] [--glow-blur:80px] scale-120`} style={{ filter: "blur(var(--glow-blur))" }} />
                          <div className={`absolute top-[30%] left-[18%] w-[48%] h-[55%] rounded-full mix-blend-multiply dark:mix-blend-screen ${viewAllBlobColors[2]} animate-lava [--drift-name:drift-wide] [--drift-duration:9s] [--morph-name:morph] [--morph-duration:8s] [--color-duration:13s] [--drift-delay:0.4s] [--color-delay:1.5s] [--glow-blur:76px] scale-125`} style={{ filter: "blur(var(--glow-blur))" }} />
                          <div className={`absolute bottom-[-14%] left-[4%] w-[56%] h-[66%] rounded-full mix-blend-multiply dark:mix-blend-screen ${viewAllBlobColors[3]} animate-lava [--drift-name:drift-orbit] [--drift-duration:12s] [--morph-name:morph-alt] [--morph-duration:9s] [--color-duration:16s] [--drift-delay:1s] [--color-delay:2s] [--glow-blur:78px] scale-115`} style={{ filter: "blur(var(--glow-blur))" }} />
                          <div className={`absolute bottom-[-10%] right-[2%] w-[52%] h-[60%] rounded-full mix-blend-multiply dark:mix-blend-screen ${viewAllBlobColors[4]} animate-lava [--drift-name:drift-cross] [--drift-duration:11s] [--morph-name:morph] [--morph-duration:10s] [--color-duration:15s] [--drift-delay:1.2s] [--color-delay:2.5s] [--glow-blur:80px] scale-110`} style={{ filter: "blur(var(--glow-blur))" }} />
                          <div className={`absolute top-[18%] left-[38%] w-[28%] h-[34%] rounded-full mix-blend-multiply dark:mix-blend-screen ${viewAllBlobColors[5]} animate-lava [--drift-name:drift-wide] [--drift-duration:14s] [--morph-name:morph] [--morph-duration:8s] [--color-duration:18s] [--drift-delay:1.5s] [--glow-blur:54px] scale-140`} style={{ filter: "blur(var(--glow-blur))" }} />
                        </div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.28),transparent_75%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.22),transparent_70%)] pointer-events-none transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-[1] animate-glow-pulse" />
                        <div
                          className="absolute inset-0 opacity-[0.28] dark:opacity-[0.25] group-hover:opacity-[0.42] mix-blend-multiply dark:mix-blend-screen pointer-events-none transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle at 18% 22%, rgba(59, 130, 246, 0.58), transparent 46%), radial-gradient(circle at 80% 24%, rgba(236, 72, 153, 0.52), transparent 50%), radial-gradient(circle at 58% 76%, rgba(234, 179, 8, 0.44), transparent 52%), radial-gradient(circle at 34% 74%, rgba(16, 185, 129, 0.4), transparent 50%), radial-gradient(circle at 68% 52%, rgba(168, 85, 247, 0.36), transparent 48%)",
                          }}
                        />
                        <div className="absolute inset-0 pointer-events-none bg-white/0 group-hover:bg-white/[0.12] dark:group-hover:bg-white/[0.06] transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                      </div>
                      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                        <div className="flex items-center gap-2 xl:gap-2.5">
                          <span className="text-[1.2rem] xl:text-[1.3rem] tracking-[-0.005em] font-semibold text-zinc-900 dark:text-white">View all projects</span>
                          <ArrowUpRight className="w-5 h-5 xl:w-6 xl:h-6 text-zinc-900 dark:text-white" strokeWidth={2.5} />
                        </div>
                      </div>
                    </Link>
                    {/* Draw divider only in the bottom-padding gap so it stops at the view-all section bottom */}
                    <div className="absolute bottom-0 left-0 w-1/2 h-2 xl:h-2.5 border-r neu-separator pointer-events-none" />
                  </div>
                  <div className="grid grid-cols-2">
                    <Link href="/apps" className="flex items-center justify-center border-r border-b neu-separator text-zinc-900 dark:text-white font-medium text-[0.81rem] xl:text-[0.86rem] hover:bg-zinc-100/10 transition-colors">
                      <div className="whitespace-nowrap">Mobile Apps</div>
                    </Link>
                    <Link href="/ai" className="flex items-center justify-center border-b neu-separator text-zinc-900 dark:text-white font-medium text-[0.81rem] xl:text-[0.86rem] hover:bg-zinc-100/10 transition-colors">
                      <div className="whitespace-nowrap">AI/ML</div>
                    </Link>
                  </div>
                  <div className="grid grid-cols-2">
                    <Link href="/design" className="flex items-center justify-center border-r border-b neu-separator text-zinc-900 dark:text-white font-medium text-[0.81rem] xl:text-[0.86rem] hover:bg-zinc-100/10 transition-colors">
                      <div className="whitespace-nowrap">Design</div>
                    </Link>
                    <a href={socialLinks.resume} download={socialLinks.resumeDownloadName} className="flex items-center justify-center border-b neu-separator text-zinc-900 dark:text-white font-medium text-[0.81rem] xl:text-[0.86rem] hover:bg-zinc-100/10 transition-colors">
                      <div className="whitespace-nowrap">Resume</div>
                    </a>
                  </div>
                  <div className="grid grid-cols-4">
                    <Link href="#contact" className="flex items-center justify-center border-r neu-separator group hover:bg-zinc-100/10 transition-colors">
                      <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full flex items-center justify-center transition-colors text-rose-500 group-hover:opacity-100 opacity-90 group-hover:scale-110">
                        <svg viewBox="0 0 24 24" className="block w-6 h-6 xl:w-7 xl:h-7 fill-current" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path fillRule="evenodd" clipRule="evenodd" d="M7 2.75C5.38503 2.75 3.92465 3.15363 2.86466 4.1379C1.79462 5.13152 1.25 6.60705 1.25 8.5V15.5C1.25 17.393 1.79462 18.8685 2.86466 19.8621C3.92465 20.8464 5.38503 21.25 7 21.25H17C18.615 21.25 20.0754 20.8464 21.1353 19.8621C22.2054 18.8685 22.75 17.393 22.75 15.5V8.5C22.75 6.60705 22.2054 5.13152 21.1353 4.1379C20.0754 3.15363 18.615 2.75 17 2.75H7ZM19.2285 8.3623C19.5562 8.10904 19.6166 7.63802 19.3633 7.31026C19.1101 6.98249 18.6391 6.9221 18.3113 7.17537L12.7642 11.4616C12.3141 11.8095 11.6858 11.8095 11.2356 11.4616L5.6886 7.17537C5.36083 6.9221 4.88982 6.98249 4.63655 7.31026C4.38328 7.63802 4.44367 8.10904 4.77144 8.3623L10.3185 12.6486C11.3089 13.4138 12.691 13.4138 13.6814 12.6486L19.2285 8.3623Z" />
                        </svg>
                      </div>
                    </Link>
                    <a href={socialLinks.behance} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border-r neu-separator group hover:bg-zinc-100/10 transition-colors">
                      <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full flex items-center justify-center transition-colors text-[#1769FF] group-hover:opacity-100 opacity-90 group-hover:scale-110">
                        <svg viewBox="-40 -40 3413 3413" className="block w-6 h-6 xl:w-7 xl:h-7 fill-current" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path fillRule="evenodd" clipRule="evenodd" d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm-408 1059c57 0 109 5 156 15s87 27 121 49c33 23 59 53 78 91 18 37 27 85 27 140 0 60-14 110-41 151-28 40-68 73-122 99 74 21 128 58 164 111s54 117 54 192c0 61-12 113-35 157-24 44-55 80-94 108s-85 49-136 62c-50 13-102 20-156 20H696V1060h563zm704 96h484v118h-484v-118zm108 890c36 35 87 52 154 52 48 0 90-12 124-36s55-50 63-77h209c-34 104-85 178-154 223s-153 67-250 67c-68 0-129-11-184-33s-101-53-140-93c-38-40-67-88-88-144-20-56-31-118-31-184 0-65 11-125 32-181 22-56 51-104 91-145 39-41 86-73 140-96 54-24 114-35 181-35 73 0 137 14 192 43 55 28 100 67 135 115s60 103 76 164 21 125 17 193h-624c0 68 23 133 59 167zm273-454c-28-31-76-48-134-48-38 0-69 6-94 19s-45 29-60 48-26 39-32 61c-6 21-10 40-11 57h387c-6-61-27-105-55-137zm-1118-50c47 0 85-11 116-33 30-22 45-58 45-108 0-28-5-51-15-69s-24-32-41-42-36-17-58-21-44-6-67-6H960v279h266zm14 508c26 0 50-2 73-8 24-5 44-13 62-25 17-12 32-27 43-48 11-20 16-46 16-77 0-61-17-105-52-132-34-26-80-39-137-39H960v329h281v1z" />
                        </svg>
                      </div>
                    </a>
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border-r neu-separator group hover:bg-zinc-100/10 transition-colors">
                      <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full flex items-center justify-center transition-colors text-zinc-900 dark:text-white group-hover:opacity-100 opacity-90 group-hover:scale-110">
                        <svg viewBox="0 0 24 24" className="block w-6 h-6 xl:w-7 xl:h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </div>
                    </a>
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center group hover:bg-zinc-100/10 transition-colors">
                      <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full flex items-center justify-center transition-colors text-[#0A66C2] group-hover:opacity-100 opacity-90 group-hover:scale-110">
                        <svg viewBox="0 0 24 24" className="block w-6 h-6 xl:w-7 xl:h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>

              {/* ROW 2: Featured Project (Square) — swapped with education (column 3 row 1) */}
              <div className="w-full relative aspect-square rounded-[40px] xl:rounded-[40px] overflow-hidden neu-raised shadow-none border-none shrink-0 pointer-events-none select-none">
                <Image 
                  src={projects[0].image} 
                  alt={projects[0].title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* COLUMN 3: Education + Profile */}
            <div className="flex flex-col gap-6 xl:gap-7 col-span-1 self-stretch">
              {/* TOP CARD: Education Timeline Card (Moved from top left) */}
              <div className="hero-education-card w-full relative aspect-square rounded-[40px] bg-[#dedede] dark:bg-[#202020] border-0 pt-5 pb-5 pl-6 pr-8 xl:pt-7 xl:pb-7 xl:pl-7 xl:pr-9 flex flex-col overflow-hidden">
                <div className="relative flex-1 flex flex-col pt-1 pb-1">
                  {/* Milestone 1 */}
                  <div className="flex flex-row gap-2 xl:gap-2.5 flex-1">
                    <div className="flex flex-col items-center w-5 shrink-0 h-full">
                      <motion.div 
                        className="w-[14px] h-[14px] relative top-[3px] rounded-full shrink-0" 
                        animate={{ backgroundColor: ["#FFFFFF", "#4EB627", "#FFFFFF"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <div className="flex-1 w-[3px] mt-[13.5px] mb-[6px] bg-[#B4B4BB] rounded-full translate-x-[0.5px]" />
                    </div>
                    <div className="flex-1 pt-0">
                      <p className="text-[14.5px] xl:text-[15px] font-[600] text-zinc-900 dark:text-white tracking-[-0.015em] leading-[1.3]">
                        Applied A.I. Solutions Development
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full border-[1.5px] border-[#4EB627]/60 text-[0.7rem] font-semibold tracking-wider leading-none align-middle mb-0.5 bg-[#E1E1E1] text-[#4EB627]">
                          Ongoing
                        </span>
                      </p>
                      <p className="text-[0.85rem] xl:text-[0.9rem] font-normal leading-[1.3] text-zinc-600 dark:text-zinc-400">George Brown College, Toronto</p>
                      <p className="text-[0.85rem] xl:text-[0.9rem] font-normal leading-[1.3] text-zinc-600 dark:text-zinc-400">Postgraduate</p>
                    </div>
                  </div>

                  {/* Milestone 2 */}
                  <div className="flex flex-row gap-2 xl:gap-2.5 flex-1">
                    <div className="flex flex-col items-center w-5 shrink-0 h-full">
                      <div className="w-[12px] h-[12px] relative top-[4px] rounded-full bg-[#B4B4BB] shrink-0" />
                      <div className="flex-1 w-[3px] mt-[13.5px] mb-[6px] bg-[#B4B4BB] rounded-full translate-x-[0.5px]" />
                    </div>
                    <div className="flex-1 pt-0">
                      <p className="text-[14.5px] xl:text-[15px] font-[600] text-zinc-900 dark:text-white tracking-[-0.015em] leading-[1.3]">Mobile Application Development and Strategy</p>
                      <p className="text-[0.85rem] xl:text-[0.9rem] font-normal leading-[1.3] text-zinc-600 dark:text-zinc-400">George Brown College, Toronto</p>
                      <p className="text-[0.85rem] xl:text-[0.9rem] font-normal leading-[1.3] text-zinc-600 dark:text-zinc-400">Postgraduate</p>
                    </div>
                  </div>

                  {/* Milestone 3 */}
                  <div className="flex flex-row gap-2 xl:gap-2.5">
                    <div className="flex flex-col items-center w-5 shrink-0 h-full">
                      <div className="w-[12px] h-[12px] relative top-[4px] rounded-full bg-[#B4B4BB] shrink-0" />
                    </div>
                    <div className="flex-1 pt-0">
                      <p className="text-[14.5px] xl:text-[15px] font-[600] text-zinc-900 dark:text-white tracking-[-0.015em] leading-[1.3]">B.Sc. Information Technology</p>
                      <p className="text-[0.85rem] xl:text-[0.9rem] font-normal leading-[1.3] text-zinc-600 dark:text-zinc-400">Amity University, Noida</p>
                      <p className="text-[0.85rem] xl:text-[0.9rem] font-normal leading-[1.3] text-zinc-600 dark:text-zinc-400">Graduation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROW 2: Profile Card */}
              <div className="w-full relative aspect-[4/5] rounded-[40px] xl:rounded-[40px] overflow-hidden neu-raised shadow-none border-none shrink-0 pointer-events-none select-none">
                  <AboutProfileCard
                    imageSizes="(min-width: 1280px) 21rem, 19.5rem"
                    className="absolute inset-0 w-full h-full rounded-none"
                    priority
                  />
              </div>
            </div>

          </div>
        </div>
      </motion.div>

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
