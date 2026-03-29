"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import { heroDescription } from "@/lib/content/hero-content"
import { projects } from "@/lib/content/projects"
import { socialLinks } from "@/lib/content/social-links"
import { MobbinIconStack } from "./MobbinIconStack"
import { AboutProfileCard } from "./AboutProfileCard"
import { HeroEducationTimeline } from "./hero/HeroEducationTimeline"
import { HeroProfessionalTitles } from "./hero/HeroProfessionalTitles"
import { HeroSkillsGrid } from "./hero/HeroSkillsGrid"
import { HeroSocialLinksRow } from "./hero/HeroSocialLinksRow"
import { HeroViewAllProjectsPill } from "./hero/HeroViewAllProjectsPill"

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
      className="relative overflow-hidden flex flex-col items-center md:h-auto md:pt-16 lg:pt-20 pb-2 md:pb-6 lg:pb-10"
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
                        className="font-sans font-semibold whitespace-nowrap text-[2.4rem] sm:text-[3.5rem] md:text-[3.8rem] lg:text-[4rem] xl:text-[4.5rem] leading-[1.02] tracking-[-0.05em] sm:tracking-[-0.035em] md:tracking-[-0.04em] lg:tracking-[-0.038em]"
            initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...snapTransition, delay: 0.16 }}
          >
            <span className="inline text-black dark:text-white">Arjun Bishnoi</span>

          </motion.h1>
          <motion.p
            className="mt-1.5 text-center text-base leading-[1.28] md:mt-3 md:text-xl lg:text-xl xl:text-[1.35rem] md:leading-relaxed text-zinc-500 dark:text-zinc-400 lg:max-w-none lg:whitespace-nowrap lg:mb-4 xl:mb-6"
            initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...snapTransition, delay: 0.24 }}
          >
            <span className="block lg:inline">{"Developer & Designer."}</span>
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
        <div className="w-[95%] sm:w-[94%] mx-auto mt-4 mb-0 flex flex-col items-center hero-mobile-main-shape-wrap">
          <div className="w-full neu-container overflow-visible aspect-[4/4.2] grid grid-rows-[40%_20%_20%_20%]">
            <HeroViewAllProjectsPill variant="mobile" blobColors={viewAllBlobColors} />
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
            <HeroSocialLinksRow variant="mobile" />
          </div>
        </div>

        {/* 2. Profile Card */}
        <div id="about" className="lg:hidden scroll-mt-24" />
        <AboutProfileCard
          imageSizes="(max-width: 768px) 100vw, 342px"
          className="mt-4 lg:hidden relative z-10"
          priority
        />

        {/* 3. Unified Mobile Bio + Education Card */}
        <div className="home-mobile-bio-shell hero-bio-card w-full -mt-16 relative z-0 rounded-t-[32px] rounded-b-[40px] border border-zinc-200/50 border-t-0 dark:border-white/10 flex flex-col overflow-hidden shadow-none">
          <div className={cn("flex flex-col pt-[84px] px-8 text-left transition-all duration-500", bioExpanded ? "pb-0" : "pb-6")}>
            <div className="flex flex-col">
              <HeroProfessionalTitles variant="mobile" />

              {/* Description */}
              <p className="hero-copy-unified mt-[10px] text-left font-normal leading-[1.6] text-[#636366] dark:text-zinc-400">
                {heroDescription}
              </p>

              {/* Education block: collapsed shows clipped/faded preview; expanded reveals full timeline + skills below */}
              <div className="relative w-full mt-[20px]">
                <motion.div
                  className="w-full relative"
                  initial={{ opacity: 0, height: "7rem" }}
                  animate={{ opacity: 1, height: bioExpanded ? "auto" : "7rem" }}
                  transition={{ 
                    opacity: { duration: prefersReducedMotion ? 0 : 0.22 },
                    height: { type: "spring", duration: 0.4, bounce: 0.15 }
                  }}
                >
                <HeroEducationTimeline variant="mobile" collapsedPreview={!bioExpanded} />

                {/* Always render the rest (skills) below inside the same block so parent width accurately collapses/expands smoothly */}
                <div className={cn("hero-skills-card pt-8 flex justify-center w-full", bioExpanded ? "pb-0" : "pb-4")}>
                  <HeroSkillsGrid variant="mobile" />
                </div>
                </motion.div>
              </div>
            </div>
          </div>
          {/* View more / View less pill button - stays at the end of the rectangle */}
          <motion.div 
            className="relative z-40 flex justify-center mb-5"
            initial={false}
            animate={{ marginTop: bioExpanded ? "2.75rem" : "-0.5rem" }}
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
                    style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(206, 206, 206, 0.2) 30%, rgba(206, 206, 206, 0.85) 75%, #cecece 100%)' }}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.3 }}
                 />
                  <motion.div 
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[150px] rounded-b-[40px] z-30 dark:block hidden"
                    style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(38, 38, 38, 0.2) 30%, rgba(38, 38, 38, 0.85) 75%, #262626 100%)' }}
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
            <div className="hero-bio-skills-merged-card col-span-1 self-stretch overflow-hidden bg-[#e5e5e5] dark:bg-[#161616] rounded-[40px] flex flex-col">
              {/* Top Section: Bio */}
              <div className="pt-6 xl:pt-8 px-6 xl:px-8 text-left">
                <HeroProfessionalTitles variant="desktop" />

                {/* Short Description */}
                <p className="hero-copy-unified font-normal leading-[1.6] text-[#636366] dark:text-zinc-400">
                  {heroDescription}
                </p>
              </div>

              {/* Bottom Section: Skills */}
              <div className="mt-auto flex justify-center px-6 xl:px-8 pb-8 xl:pb-10 pt-6 xl:pt-8">
                <HeroSkillsGrid variant="desktop" />
              </div>
            </div>

            {/* COLUMN 2: Bento (Row 1) + Featured project (Row 2) */}
            <div className="flex flex-col gap-6 xl:gap-7">
              {/* ROW 1: Interactive Bento */}
              <div className="w-full relative aspect-[4/5.6] lg:aspect-[4/5] neu-container overflow-visible rounded-[40px] xl:rounded-[40px] grid grid-rows-[34%_22%_22%_22%] lg:grid-rows-[40%_20%_20%_20%] shrink-0 min-h-0">
                  <HeroViewAllProjectsPill variant="desktop" blobColors={viewAllBlobColors} />
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
                  <HeroSocialLinksRow variant="desktop" />
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
              <HeroEducationTimeline variant="desktop" />

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
      <div className="hidden md:flex lg:hidden w-full flex-col items-center justify-center mb-0 pb-0 sm:pb-0 sm:mb-0 md:mb-0 md:pb-0 mt-0 md:mt-8 relative z-40">
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
