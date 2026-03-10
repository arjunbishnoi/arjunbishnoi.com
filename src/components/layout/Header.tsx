"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { X, Moon, Sun, Mail, ArrowUpRight } from "lucide-react"
import { socialLinks } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  // Hydration fix for theme
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Track desktop breakpoint for logo behavior
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768)
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  // Lock scroll and toggle global menu-open state for page dimming.
  useEffect(() => {
    const root = document.documentElement

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    root.classList.toggle("mobile-menu-open", isMobileMenuOpen)

    return () => {
      document.body.style.overflow = ""
      root.classList.remove("mobile-menu-open")
    }
  }, [isMobileMenuOpen])

  // On desktop, always show full logo. On mobile, shrink when scrolled.
  const showFullLogo = !isScrolled || isMobileMenuOpen || isDesktop

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Spacing model (mobile): make the visual glyph-to-glyph gap the single standard.
  const mobileThemeIconSize = 18
  const mobileMenuIconSize = 24
  const mobileActionButtonSize = 40
  const mobileActionButtonGap = 8
  const mobileGlyphStandardSpacing =
    ((mobileActionButtonSize - mobileThemeIconSize) / 2) +
    mobileActionButtonGap +
    ((mobileActionButtonSize - mobileMenuIconSize) / 2)
  const mobileLeftInset = mobileGlyphStandardSpacing
  const mobileRightInset = mobileGlyphStandardSpacing - ((mobileActionButtonSize - mobileMenuIconSize) / 2)

  return (
    <header className="fixed w-full top-2 sm:top-4 md:top-5 lg:top-6 z-50 flex justify-center pointer-events-none">
      <div className={cn(
        "w-full mx-auto transition-[max-width,padding] duration-500 ease-soft-out px-6",
        isScrolled ? "max-w-7xl lg:px-8" : "md:max-w-[33rem] max-w-5xl"
      )}>
      <motion.div 
        layout
        className={cn(
          "relative overflow-hidden transition-[background-color,border-color] duration-500 ease-soft-out pointer-events-auto w-full rounded-[2rem]",
          "backdrop-blur-2xl backdrop-saturate-150 bg-white/70 dark:bg-black/70",
          "before:absolute before:inset-0 before:rounded-[2rem] before:opacity-[0.03] dark:before:opacity-[0.04] before:pointer-events-none before:z-[1]",
          "before:[background-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")]",
        )}
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : "3.5rem"
        }}
        transition={{ type: "spring", damping: 32, stiffness: 320 }}
      >
        <div className="relative flex items-center justify-between h-[calc(3.5rem-2px)] min-h-[calc(3.5rem-2px)] w-full pl-0 pr-0 md:pl-6 md:pr-4 lg:pl-7 lg:pr-5">
          {/* Logo - Anchored Left */}
          <div
            className="flex-shrink-0 relative z-10 md:static absolute inset-y-0 flex items-center justify-center"
            style={{ left: `${mobileLeftInset}px` }}
          >
            <Link
              href="/"
              className="relative block cursor-pointer"
              aria-label="Go to homepage"
              onClick={handleLogoClick}
            >
              <div className="relative flex items-center">
                <div className="md:hidden flex items-center justify-center">
                  <Image
                    src="/arjun-bishnoi-profile-square.jpg"
                    alt="Arjun Bishnoi"
                    width={34}
                    height={34}
                    className="w-[1.875rem] h-[1.875rem] rounded-full object-cover"
                    priority
                  />
                </div>
                {/* Logo Morphing Animation - Desktop */}
                <div className="hidden md:flex items-center text-lg font-bold font-sans translate-y-[1px] tracking-[-0.03em] md:text-xl md:font-semibold md:font-serif md:-translate-y-[1px] md:tracking-normal">
                  <motion.span layout className="text-foreground">a</motion.span>
                  <AnimatePresence initial={false}>
                    {showFullLogo && (
                      <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "auto", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                        className="text-foreground whitespace-nowrap overflow-hidden"
                      >
                        rjun
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <motion.span layout className="text-foreground">b</motion.span>
                  <AnimatePresence initial={false}>
                    {showFullLogo && (
                      <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "auto", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                        className="text-foreground whitespace-nowrap overflow-hidden"
                      >
                        ishnoi
                      </motion.span>
                    )}
                  </AnimatePresence>
                  {/* Underscore - Only on desktop */}
                  <motion.span layout className="hidden md:inline-block text-black dark:text-white font-bold ml-px">_</motion.span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Nav - Centered (hidden at top) */}
          <div className={cn(
            "hidden md:flex items-center justify-center absolute inset-0 pointer-events-none transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
            isScrolled ? "opacity-100" : "opacity-0"
          )} style={{ zIndex: 1 }}>
            <nav className={cn(
              "flex items-center space-x-8",
              isScrolled ? "pointer-events-auto" : "pointer-events-none"
            )}>
                <Link
                    href="/blog"
                    className="text-base font-semibold transition-colors text-foreground hover:text-foreground inline-flex items-center gap-1 group"
                >
                    Blog
                    <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity -mt-0.5" />
                </Link>
                <Link
                    href="/projects"
                    className="text-base font-semibold transition-colors text-foreground hover:text-foreground inline-flex items-center gap-1 group"
                >
                    Projects
                    <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity -mt-0.5" />
                </Link>
                <a
                    href={socialLinks.resume}
                    download={socialLinks.resumeDownloadName}
                    className="text-base font-semibold transition-colors text-foreground hover:text-foreground inline-flex items-center gap-1 group"
                >
                    Resume
                    <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity -mt-0.5" />
                </a>
                <Link
                    href="/#contact"
                    className="text-base font-semibold transition-colors text-foreground hover:text-foreground inline-flex items-center gap-1 group"
                >
                    Contact
                    <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity -mt-0.5" />
                </Link>
                <Link
                    href="/#about"
                    className="text-base font-semibold transition-colors text-foreground hover:text-foreground inline-flex items-center gap-1 group"
                >
                    About
                    <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity -mt-0.5" />
                </Link>
            </nav>
          </div>

          {/* Desktop Actions - Anchored Right */}
          <div className="hidden md:flex items-center space-x-1 flex-shrink-0 relative z-10">
             {mounted && (
                <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10 text-black dark:text-white"
                aria-label="Toggle theme"
            >
                 {theme === "dark" ? (
                   <motion.div key="sun" initial={{ rotate: -90, scale: 0, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }} exit={{ rotate: 90, scale: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}>
                     <Sun className="w-[1.125rem] h-[1.125rem]" strokeWidth={2.8} />
                   </motion.div>
                 ) : (
                   <motion.div key="moon" initial={{ rotate: 90, scale: 0, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }} exit={{ rotate: -90, scale: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}>
                     <Moon className="w-[1.125rem] h-[1.125rem]" strokeWidth={2} />
                   </motion.div>
                 )}
            </button>
             )}
            
            {/* Mail icon - only visible when scrolled */}
            <div className={cn(
              "flex items-center overflow-hidden transition-all duration-500 ease-soft-out",
              isScrolled ? "max-w-[50px] opacity-100" : "max-w-0 opacity-0 pointer-events-none"
            )}>
              <Link
                  href="/#contact"
                  className="flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10 text-black dark:text-white"
                  aria-label="Contact section"
                  onClick={() => setIsMobileMenuOpen(false)}
              >
                  <Mail className="w-5 h-5" strokeWidth={2} />
              </Link>
            </div>
          </div>

          {/* Mobile Actions - Anchored Right */}
          <div
            className="md:hidden absolute top-0 bottom-0 flex items-center z-10"
            style={{ right: `${mobileRightInset}px` }}
          >
             {mounted && (
                  <motion.div layout transition={{ layout: { duration: 0.5, ease: [0.32, 0.72, 0, 1] } }}>
                  <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-10 h-10 rounded-full transition-colors text-black dark:text-white active:bg-black/5 dark:active:bg-white/10 focus:outline-none shrink-0"
              >
                  {theme === "dark" ? (
                    <motion.div key="sun" initial={{ rotate: -90, scale: 0, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }} exit={{ rotate: 90, scale: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}>
                      <Sun className="w-[1.125rem] h-[1.125rem]" strokeWidth={2.8} />
                    </motion.div>
                  ) : (
                    <motion.div key="moon" initial={{ rotate: 90, scale: 0, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }} exit={{ rotate: -90, scale: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}>
                      <Moon className="w-[1.125rem] h-[1.125rem]" strokeWidth={2} />
                    </motion.div>
                  )}
             </button>
                 </motion.div>
             )}
            
            <AnimatePresence>
                {!showFullLogo && (
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 48 }}
                        exit={{ width: 0 }}
                        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                        className="overflow-hidden flex items-center justify-end"
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                            className="origin-right will-change-transform [backface-visibility:hidden]"
                        >
                            <Link
                                href="/#contact"
                                className="flex items-center justify-center w-10 h-10 rounded-full transition-colors text-black dark:text-white active:bg-black/5 dark:active:bg-white/10 focus:outline-none shrink-0"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <Mail className="w-5 h-5" strokeWidth={2} />
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div layout transition={{ layout: { duration: 0.5, ease: [0.32, 0.72, 0, 1] } }}>
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="ml-2 flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-colors text-black dark:text-white active:bg-black/5 dark:active:bg-white/10 focus:outline-none"
            >
                 <span className="sr-only">Open main menu</span>
                 <div className="relative w-6 h-6 flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={cn(
                            "w-6 h-6 absolute transition-all duration-300 ease-in-out",
                             isMobileMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                        )}
                    >
                        <line x1="3" x2="21" y1="8" y2="8" />
                        <line x1="3" x2="21" y1="16" y2="16" />
                    </svg>
                    <X 
                        className={cn(
                            "w-6 h-6 absolute transition-all duration-300 ease-in-out",
                            isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                        )}
                        strokeWidth={2}
                    />
                 </div>
            </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <AnimatePresence mode="wait">
            {isMobileMenuOpen && (
                <motion.div 
                    layout="position"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="md:hidden pl-7 pr-4 pt-2 pb-[22px] w-full flex flex-col"
                >
                    <nav className="flex flex-col space-y-3">
                        {[
                            { name: 'Blog', href: '/blog' },
                            { name: 'Projects', href: '/projects' },
                            { name: 'Mobile Apps', href: '/#mobile-apps' },
                            { name: 'AI/ML', href: '/#ai-ml' },
                            { name: 'Design', href: '/#design' },
                            { name: 'Resume', href: socialLinks.resume, isDownload: true },
                            { name: 'Contact', href: '/#contact' },
                            { name: 'About', href: '/#about' },
                        ].map((item, index) => (
                             <motion.div
                                key={item.name}
                                initial={{ opacity: 0, scale: 0.96, y: -10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.96, y: -10 }}
                                transition={{ 
                                  delay: index * 0.04,
                                  type: "spring",
                                  damping: 22,
                                  stiffness: 300
                                }}
                             >
                                {item.isDownload ? (
                                    <a 
                                        href={item.href} 
                                        download={socialLinks.resumeDownloadName}
                                        className="text-xl font-semibold transition-colors text-foreground hover:text-foreground inline-flex items-center gap-1 group"
                                    >
                                        {item.name}
                                    </a>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-xl font-semibold transition-colors hover:text-foreground inline-flex items-center gap-1 group text-foreground"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                             </motion.div>
                        ))}
                    </nav>

                    {/* Social Icons Row */}
                    <motion.div 
                        className="flex items-center gap-[17px] mt-3 opacity-90 -ml-[6px]"
                        initial={{ opacity: 0, scale: 0.96, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: -10 }}
                        transition={{ 
                            delay: 8 * 0.04, // Index 8 logically follows 0-7 from map
                            type: "spring",
                            damping: 22,
                            stiffness: 300
                        }}
                    >
                        <a 
                            href="mailto:arjunbishnoi@gmail.com" 
                            className="flex items-center justify-center w-10 h-10 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            aria-label="Email"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <svg viewBox="0 0 24 24" className="w-[1.95rem] h-[1.95rem] fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7 2.75C5.38503 2.75 3.92465 3.15363 2.86466 4.1379C1.79462 5.13152 1.25 6.60705 1.25 8.5V15.5C1.25 17.393 1.79462 18.8685 2.86466 19.8621C3.92465 20.8464 5.38503 21.25 7 21.25H17C18.615 21.25 20.0754 20.8464 21.1353 19.8621C22.2054 18.8685 22.75 17.393 22.75 15.5V8.5C22.75 6.60705 22.2054 5.13152 21.1353 4.1379C20.0754 3.15363 18.615 2.75 17 2.75H7ZM19.2285 8.3623C19.5562 8.10904 19.6166 7.63802 19.3633 7.31026C19.1101 6.98249 18.6391 6.9221 18.3113 7.17537L12.7642 11.4616C12.3141 11.8095 11.6858 11.8095 11.2356 11.4616L5.6886 7.17537C5.36083 6.9221 4.88982 6.98249 4.63655 7.31026C4.38328 7.63802 4.44367 8.10904 4.77144 8.3623L10.3185 12.6486C11.3089 13.4138 12.691 13.4138 13.6814 12.6486L19.2285 8.3623Z" />
                            </svg>
                        </a>
                        <a 
                            href="https://www.behance.net/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center w-10 h-10 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            aria-label="Behance"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <svg viewBox="-40 -40 3413 3413" className="w-[1.875rem] h-[1.875rem] fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm-408 1059c57 0 109 5 156 15s87 27 121 49c33 23 59 53 78 91 18 37 27 85 27 140 0 60-14 110-41 151-28 40-68 73-122 99 74 21 128 58 164 111s54 117 54 192c0 61-12 113-35 157-24 44-55 80-94 108s-85 49-136 62c-50 13-102 20-156 20H696V1060h563zm704 96h484v118h-484v-118zm108 890c36 35 87 52 154 52 48 0 90-12 124-36s55-50 63-77h209c-34 104-85 178-154 223s-153 67-250 67c-68 0-129-11-184-33s-101-53-140-93c-38-40-67-88-88-144-20-56-31-118-31-184 0-65 11-125 32-181 22-56 51-104 91-145 39-41 86-73 140-96 54-24 114-35 181-35 73 0 137 14 192 43 55 28 100 67 135 115s60 103 76 164 21 125 17 193h-624c0 68 23 133 59 167zm273-454c-28-31-76-48-134-48-38 0-69 6-94 19s-45 29-60 48-26 39-32 61c-6 21-10 40-11 57h387c-6-61-27-105-55-137zm-1118-50c47 0 85-11 116-33 30-22 45-58 45-108 0-28-5-51-15-69s-24-32-41-42-36-17-58-21-44-6-67-6H960v279h266zm14 508c26 0 50-2 73-8 24-5 44-13 62-25 17-12 32-27 43-48 11-20 16-46 16-77 0-61-17-105-52-132-34-26-80-39-137-39H960v329h281v1z" />
                            </svg>
                        </a>
                        <a 
                            href={socialLinks.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center w-10 h-10 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            aria-label="GitHub"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <svg viewBox="0 0 24 24" className="w-[1.875rem] h-[1.875rem] fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a 
                            href={socialLinks.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center w-10 h-10 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            aria-label="LinkedIn"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <svg viewBox="0 0 24 24" className="w-[1.875rem] h-[1.875rem] fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
      </motion.div>
      </div>
    </header>
  )
}
