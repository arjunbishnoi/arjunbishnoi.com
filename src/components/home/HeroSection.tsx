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
    <section className="relative overflow-hidden flex flex-col items-center justify-start min-h-[85vh] md:min-h-0 pt-20 bg-background">
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
              borderColor: "border-blue-500/20 dark:border-blue-500/30 hover:border-blue-500/50 dark:hover:border-blue-500/50",
              shapeElement: (
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 300" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                  {/* Floating phone screens / app cards */}
                  <rect x="110" y="30" width="50" height="80" rx="10" fill="currentColor" className="text-blue-400/[0.08] dark:text-blue-400/[0.1]" transform="rotate(12 135 70)" />
                  <rect x="120" y="40" width="50" height="80" rx="10" stroke="currentColor" strokeWidth="1.5" className="text-blue-400/[0.12] dark:text-blue-400/[0.15]" transform="rotate(12 145 80)" />
                  <rect x="30" y="60" width="44" height="72" rx="9" fill="currentColor" className="text-cyan-400/[0.07] dark:text-cyan-400/[0.09]" transform="rotate(-8 52 96)" />
                  <rect x="35" y="65" width="44" height="72" rx="9" stroke="currentColor" strokeWidth="1.2" className="text-cyan-400/[0.1] dark:text-cyan-400/[0.13]" transform="rotate(-8 57 101)" />
                  {/* Small dots for app icons */}
                  <circle cx="135" cy="55" r="4" fill="currentColor" className="text-blue-400/[0.15] dark:text-blue-400/[0.18]" />
                  <circle cx="148" cy="55" r="4" fill="currentColor" className="text-blue-300/[0.12] dark:text-blue-300/[0.15]" />
                  <circle cx="135" cy="68" r="4" fill="currentColor" className="text-cyan-400/[0.12] dark:text-cyan-400/[0.14]" />
                  <circle cx="148" cy="68" r="4" fill="currentColor" className="text-blue-400/[0.1] dark:text-blue-400/[0.12]" />
                  {/* Floating notification pill */}
                  <rect x="85" y="140" width="60" height="18" rx="9" fill="currentColor" className="text-blue-400/[0.06] dark:text-blue-400/[0.08]" />
                  <rect x="80" y="170" width="45" height="14" rx="7" fill="currentColor" className="text-cyan-400/[0.05] dark:text-cyan-400/[0.07]" />
                  {/* Decorative circles */}
                  <circle cx="160" cy="200" r="20" stroke="currentColor" strokeWidth="1" className="text-blue-400/[0.08] dark:text-blue-400/[0.1]" />
                  <circle cx="40" cy="180" r="14" fill="currentColor" className="text-cyan-400/[0.05] dark:text-cyan-400/[0.07]" />
                </svg>
              ),
            },
            { 
              href: "/ai-engineering", 
              label: "AI Engineering", 
              accent: "ML · LLMs · Intelligent Systems",
              gradient: "from-emerald-500/40 via-teal-500/25 to-transparent dark:from-emerald-500/30 dark:via-teal-500/20",
              borderColor: "border-emerald-500/20 dark:border-emerald-500/30 hover:border-emerald-500/50 dark:hover:border-emerald-500/50",
              shapeElement: (
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 300" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                  {/* Neural network nodes and connections */}
                  {/* Layer 1 nodes */}
                  <circle cx="40" cy="50" r="8" fill="currentColor" className="text-emerald-400/[0.1] dark:text-emerald-400/[0.12]" />
                  <circle cx="40" cy="100" r="6" fill="currentColor" className="text-teal-400/[0.08] dark:text-teal-400/[0.1]" />
                  <circle cx="40" cy="150" r="7" fill="currentColor" className="text-emerald-400/[0.09] dark:text-emerald-400/[0.11]" />
                  {/* Layer 2 nodes */}
                  <circle cx="110" cy="70" r="10" fill="currentColor" className="text-emerald-400/[0.12] dark:text-emerald-400/[0.15]" />
                  <circle cx="110" cy="130" r="8" fill="currentColor" className="text-teal-400/[0.1] dark:text-teal-400/[0.12]" />
                  {/* Layer 3 node */}
                  <circle cx="170" cy="100" r="12" fill="currentColor" className="text-emerald-400/[0.08] dark:text-emerald-400/[0.1]" />
                  <circle cx="170" cy="100" r="12" stroke="currentColor" strokeWidth="1.5" className="text-emerald-400/[0.12] dark:text-emerald-400/[0.15]" />
                  {/* Connection lines */}
                  <line x1="48" y1="50" x2="100" y2="70" stroke="currentColor" strokeWidth="1" className="text-emerald-400/[0.08] dark:text-emerald-400/[0.1]" />
                  <line x1="48" y1="50" x2="100" y2="130" stroke="currentColor" strokeWidth="0.8" className="text-teal-400/[0.06] dark:text-teal-400/[0.08]" />
                  <line x1="46" y1="100" x2="100" y2="70" stroke="currentColor" strokeWidth="0.8" className="text-emerald-400/[0.07] dark:text-emerald-400/[0.09]" />
                  <line x1="46" y1="100" x2="100" y2="130" stroke="currentColor" strokeWidth="1" className="text-teal-400/[0.08] dark:text-teal-400/[0.1]" />
                  <line x1="47" y1="150" x2="100" y2="130" stroke="currentColor" strokeWidth="0.8" className="text-emerald-400/[0.06] dark:text-emerald-400/[0.08]" />
                  <line x1="120" y1="70" x2="158" y2="100" stroke="currentColor" strokeWidth="1.2" className="text-emerald-400/[0.1] dark:text-emerald-400/[0.12]" />
                  <line x1="118" y1="130" x2="158" y2="100" stroke="currentColor" strokeWidth="1" className="text-teal-400/[0.08] dark:text-teal-400/[0.1]" />
                  {/* Pulsing data dots along connections */}
                  <circle cx="75" cy="60" r="2.5" fill="currentColor" className="text-emerald-400/[0.2] dark:text-emerald-400/[0.22]" />
                  <circle cx="75" cy="115" r="2" fill="currentColor" className="text-teal-400/[0.15] dark:text-teal-400/[0.18]" />
                  <circle cx="140" cy="85" r="2.5" fill="currentColor" className="text-emerald-400/[0.18] dark:text-emerald-400/[0.2]" />
                  {/* Scatter more subtle brain-like dots */}
                  <circle cx="150" cy="40" r="3" fill="currentColor" className="text-teal-400/[0.06] dark:text-teal-400/[0.08]" />
                  <circle cx="60" cy="200" r="5" fill="currentColor" className="text-emerald-400/[0.05] dark:text-emerald-400/[0.07]" />
                  <circle cx="140" cy="190" r="4" stroke="currentColor" strokeWidth="1" className="text-emerald-400/[0.08] dark:text-emerald-400/[0.1]" />
                </svg>
              ),
            },
            { 
              href: "/web-development", 
              label: "Web Development", 
              accent: "React · Next.js · Full-stack",
              gradient: "from-violet-500/40 via-purple-500/25 to-transparent dark:from-violet-500/30 dark:via-purple-500/20",
              borderColor: "border-violet-500/20 dark:border-violet-500/30 hover:border-violet-500/50 dark:hover:border-violet-500/50",
              shapeElement: (
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 300" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                  {/* Browser window shapes */}
                  <rect x="35" y="30" width="120" height="90" rx="8" stroke="currentColor" strokeWidth="1.5" className="text-violet-400/[0.12] dark:text-violet-400/[0.15]" />
                  {/* Browser tab bar */}
                  <line x1="35" y1="48" x2="155" y2="48" stroke="currentColor" strokeWidth="1" className="text-violet-400/[0.1] dark:text-violet-400/[0.12]" />
                  {/* Browser dots */}
                  <circle cx="48" cy="39" r="2.5" fill="currentColor" className="text-violet-400/[0.15] dark:text-violet-400/[0.18]" />
                  <circle cx="58" cy="39" r="2.5" fill="currentColor" className="text-purple-400/[0.12] dark:text-purple-400/[0.15]" />
                  <circle cx="68" cy="39" r="2.5" fill="currentColor" className="text-violet-400/[0.1] dark:text-violet-400/[0.12]" />
                  {/* Code bracket < /> */}
                  <path d="M70 65 L55 78 L70 91" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400/[0.15] dark:text-violet-400/[0.18]" />
                  <path d="M120 65 L135 78 L120 91" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400/[0.12] dark:text-purple-400/[0.15]" />
                  <line x1="100" y1="60" x2="90" y2="96" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-violet-400/[0.1] dark:text-violet-400/[0.13]" />
                  {/* Stacked layers behind */}
                  <rect x="45" y="140" width="100" height="60" rx="6" fill="currentColor" className="text-violet-400/[0.04] dark:text-violet-400/[0.06]" />
                  <rect x="50" y="145" width="100" height="60" rx="6" stroke="currentColor" strokeWidth="1" className="text-purple-400/[0.08] dark:text-purple-400/[0.1]" />
                  {/* Abstract code lines */}
                  <rect x="60" y="158" width="40" height="3" rx="1.5" fill="currentColor" className="text-violet-400/[0.08] dark:text-violet-400/[0.1]" />
                  <rect x="60" y="166" width="65" height="3" rx="1.5" fill="currentColor" className="text-purple-400/[0.06] dark:text-purple-400/[0.08]" />
                  <rect x="60" y="174" width="30" height="3" rx="1.5" fill="currentColor" className="text-violet-400/[0.07] dark:text-violet-400/[0.09]" />
                  {/* Floating curly brace */}
                  <path d="M165 150 C160 155, 155 160, 160 170 C155 170, 155 180, 165 185" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" className="text-violet-400/[0.1] dark:text-violet-400/[0.12]" />
                </svg>
              ),
            },
            { 
              href: "/ui-ux-design", 
              label: "UI/UX Design", 
              accent: "Figma · Prototyping · Design Systems",
              gradient: "from-rose-500/40 via-pink-500/25 to-transparent dark:from-rose-500/30 dark:via-pink-500/20",
              borderColor: "border-rose-500/20 dark:border-rose-500/30 hover:border-rose-500/50 dark:hover:border-rose-500/50",
              shapeElement: (
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 300" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                  {/* Overlapping design circles */}
                  <circle cx="80" cy="70" r="35" fill="currentColor" className="text-rose-400/[0.06] dark:text-rose-400/[0.08]" />
                  <circle cx="110" cy="55" r="28" fill="currentColor" className="text-pink-400/[0.05] dark:text-pink-400/[0.07]" />
                  <circle cx="130" cy="85" r="32" stroke="currentColor" strokeWidth="1.5" className="text-rose-400/[0.1] dark:text-rose-400/[0.13]" />
                  {/* Pen tool bezier curve */}
                  <path d="M40 110 C60 60, 120 160, 170 100" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-rose-400/[0.12] dark:text-rose-400/[0.15]" />
                  {/* Bezier control handles */}
                  <line x1="40" y1="110" x2="60" y2="60" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-pink-400/[0.1] dark:text-pink-400/[0.12]" />
                  <line x1="170" y1="100" x2="120" y2="160" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-pink-400/[0.1] dark:text-pink-400/[0.12]" />
                  {/* Handle anchor points */}
                  <circle cx="40" cy="110" r="3.5" fill="currentColor" className="text-rose-400/[0.18] dark:text-rose-400/[0.2]" />
                  <circle cx="60" cy="60" r="2.5" stroke="currentColor" strokeWidth="1.2" className="text-pink-400/[0.15] dark:text-pink-400/[0.18]" />
                  <circle cx="120" cy="160" r="2.5" stroke="currentColor" strokeWidth="1.2" className="text-pink-400/[0.15] dark:text-pink-400/[0.18]" />
                  <circle cx="170" cy="100" r="3.5" fill="currentColor" className="text-rose-400/[0.18] dark:text-rose-400/[0.2]" />
                  {/* Design grid/layout guide lines */}
                  <rect x="50" y="170" width="90" height="50" rx="4" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-rose-400/[0.08] dark:text-rose-400/[0.1]" />
                  <line x1="95" y1="170" x2="95" y2="220" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" className="text-pink-400/[0.06] dark:text-pink-400/[0.08]" />
                  <line x1="50" y1="195" x2="140" y2="195" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" className="text-pink-400/[0.06] dark:text-pink-400/[0.08]" />
                  {/* Color swatch circles */}
                  <circle cx="155" cy="180" r="8" fill="currentColor" className="text-rose-400/[0.08] dark:text-rose-400/[0.1]" />
                  <circle cx="155" cy="200" r="6" fill="currentColor" className="text-pink-400/[0.06] dark:text-pink-400/[0.08]" />
                  <circle cx="155" cy="215" r="4" fill="currentColor" className="text-rose-300/[0.05] dark:text-rose-300/[0.07]" />
                </svg>
              ),
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative rounded-2xl border bg-gray-100 dark:bg-card/60 backdrop-blur-sm hover:bg-gray-200/80 dark:hover:bg-card/80 transition-all duration-300 overflow-hidden h-24 sm:h-28 md:h-56 lg:h-72 xl:h-80",
                item.borderColor
              )}
            >
              {/* Gradient background */}
              <div className={cn("absolute inset-0 bg-gradient-to-b opacity-100 group-hover:brightness-110 transition-all duration-300", item.gradient)} />
              
              {/* Abstract shape background */}
              <div className="absolute inset-0 opacity-100 group-hover:brightness-125 transition-all duration-500">
                {item.shapeElement}
              </div>

              <ArrowUpRight className="md:hidden absolute top-3 right-3 w-4 h-4 text-muted-foreground/70 group-hover:text-foreground transition-colors z-10" />
              <div className="absolute inset-0 flex items-end px-4 pb-5 md:pb-5 md:pl-5 z-10">
                <div>
                  <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-foreground transition-colors leading-tight block">
                    {item.label}
                  </span>
                  <span className="hidden md:block text-xs text-muted-foreground/70 group-hover:text-muted-foreground transition-colors mt-1">
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
        {/* Desktop: 2-row layout to avoid tall socials stretching the row */}
        {/* Row 1: Resume, Contact, Blog + socials top half on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {/* Resume */}
          <a
            href={socialLinks.resume}
            download={socialLinks.resumeDownloadName}
            className="group relative rounded-2xl border border-border/75 bg-gray-50/60 dark:bg-card/20 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-card/50 hover:border-border transition-all duration-300 overflow-hidden
                       h-24 sm:h-28 md:h-[6.5rem] lg:h-[8.5rem] xl:h-[9.5rem]"
          >
            {/* Abstract shape background */}
            <div className="absolute inset-0 opacity-100 group-hover:brightness-125 transition-all duration-500">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 150" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                {/* Document with folded corner */}
                <rect x="110" y="20" width="55" height="70" rx="4" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground/[0.12]" />
                <path d="M145 20 L165 20 L165 40 Z" fill="currentColor" className="text-muted-foreground/[0.06]" />
                <path d="M145 20 L145 40 L165 40" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/[0.1]" />
                {/* Text lines on document */}
                <rect x="120" y="48" width="30" height="2.5" rx="1.2" fill="currentColor" className="text-muted-foreground/[0.1]" />
                <rect x="120" y="55" width="38" height="2.5" rx="1.2" fill="currentColor" className="text-muted-foreground/[0.08]" />
                <rect x="120" y="62" width="24" height="2.5" rx="1.2" fill="currentColor" className="text-muted-foreground/[0.06]" />
                <rect x="120" y="69" width="34" height="2.5" rx="1.2" fill="currentColor" className="text-muted-foreground/[0.07]" />
                {/* Download arrow */}
                <path d="M55 55 L55 75 M45 68 L55 78 L65 68" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground/[0.1]" />
                <line x1="42" y1="82" x2="68" y2="82" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-muted-foreground/[0.08]" />
                {/* Small decorative dots */}
                <circle cx="160" cy="110" r="8" stroke="currentColor" strokeWidth="0.8" className="text-muted-foreground/[0.06]" />
                <circle cx="30" cy="35" r="5" fill="currentColor" className="text-muted-foreground/[0.04]" />
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
            className="group relative rounded-2xl border border-border/75 bg-gray-50/60 dark:bg-card/20 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-card/50 hover:border-border transition-all duration-300 overflow-hidden
                       h-24 sm:h-28 md:h-[6.5rem] lg:h-[8.5rem] xl:h-[9.5rem]"
          >
            {/* Abstract shape background */}
            <div className="absolute inset-0 opacity-100 group-hover:brightness-125 transition-all duration-500">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 150" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                {/* Envelope shape */}
                <rect x="100" y="30" width="65" height="45" rx="5" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground/[0.12]" />
                <path d="M100 35 L132.5 58 L165 35" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" className="text-muted-foreground/[0.1]" />
                {/* @ symbol */}
                <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground/[0.08]" />
                <path d="M50 42 C43 42, 40 48, 40 52 C40 58, 45 60, 50 60 C55 60, 58 56, 58 52 L58 44" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" className="text-muted-foreground/[0.1]" />
                {/* Chat bubble */}
                <rect x="115" y="90" width="50" height="28" rx="10" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/[0.08]" />
                <path d="M125 118 L130 128 L138 118" fill="currentColor" className="text-muted-foreground/[0.06]" />
                {/* Dots inside chat */}
                <circle cx="132" cy="104" r="2" fill="currentColor" className="text-muted-foreground/[0.1]" />
                <circle cx="140" cy="104" r="2" fill="currentColor" className="text-muted-foreground/[0.08]" />
                <circle cx="148" cy="104" r="2" fill="currentColor" className="text-muted-foreground/[0.06]" />
                {/* Decorative */}
                <circle cx="35" cy="110" r="6" fill="currentColor" className="text-muted-foreground/[0.04]" />
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
            className="group relative rounded-2xl border border-border/75 bg-gray-50/60 dark:bg-card/20 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-card/50 hover:border-border transition-all duration-300 overflow-hidden
                       h-24 sm:h-28 md:h-[6.5rem] lg:h-[8.5rem] xl:h-[9.5rem]"
          >
            {/* Abstract shape background */}
            <div className="absolute inset-0 opacity-100 group-hover:brightness-125 transition-all duration-500">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 150" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                {/* Large quotation mark */}
                <path d="M110 30 C110 30, 100 30, 100 42 C100 50, 105 54, 112 54 C118 54, 122 50, 122 45 C122 40, 118 37, 114 37 C110 37, 108 40, 108 40" fill="currentColor" className="text-muted-foreground/[0.08]" />
                <path d="M138 30 C138 30, 128 30, 128 42 C128 50, 133 54, 140 54 C146 54, 150 50, 150 45 C150 40, 146 37, 142 37 C138 37, 136 40, 136 40" fill="currentColor" className="text-muted-foreground/[0.06]" />
                {/* Blog text lines */}
                <rect x="30" y="40" width="45" height="3" rx="1.5" fill="currentColor" className="text-muted-foreground/[0.08]" />
                <rect x="30" y="48" width="55" height="3" rx="1.5" fill="currentColor" className="text-muted-foreground/[0.06]" />
                <rect x="30" y="56" width="35" height="3" rx="1.5" fill="currentColor" className="text-muted-foreground/[0.07]" />
                {/* Pencil */}
                <line x1="155" y1="80" x2="170" y2="65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted-foreground/[0.1]" />
                <path d="M155 80 L152 85 L157 82 Z" fill="currentColor" className="text-muted-foreground/[0.08]" />
                <line x1="168" y1="67" x2="172" y2="63" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-muted-foreground/[0.06]" />
                {/* Decorative shapes */}
                <circle cx="50" cy="100" r="10" stroke="currentColor" strokeWidth="0.8" className="text-muted-foreground/[0.06]" />
                <rect x="130" y="100" width="30" height="20" rx="4" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" className="text-muted-foreground/[0.06]" />
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
          <div className="h-24 sm:h-28 grid grid-cols-2 gap-3 sm:gap-4 md:hidden">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl border border-border/75 bg-gray-50/60 dark:bg-card/20 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-card/50 hover:border-border transition-all duration-300 flex items-center justify-center group/icon"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground group-hover/icon:text-foreground transition-colors" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="GitHub"
                className="rounded-xl border border-border/75 bg-gray-50/80 dark:bg-card/30 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-card/60 hover:border-border transition-all duration-300 flex items-center justify-center group/icon"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground group-hover/icon:text-foreground transition-colors" />
              </a>
          </div>

          {/* Socials - desktop only: 2x1 column in the 4th grid cell */}
          <div className="hidden md:grid md:grid-cols-2 gap-3 sm:gap-4 md:h-[6.5rem] lg:h-[8.5rem] xl:h-[9.5rem]">
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
      <div className="w-full flex flex-col items-center justify-center mb-0 pb-3 sm:pb-3 sm:mb-3 md:mb-6 md:pb-0 mt-4 md:mt-16 relative z-40">
        <div className={cn(
            "mt-4 md:mt-2 pb-2 md:pb-0 flex justify-center transition-opacity duration-300 lg:opacity-40 lg:hover:opacity-100",
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
