"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
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

  return (
    <header className="fixed w-full top-2 sm:top-4 md:top-5 lg:top-6 z-50 flex justify-center pointer-events-none">
      <div className={cn(
        "w-full mx-auto transition-[max-width,padding] duration-500 ease-soft-out px-6",
        isScrolled ? "max-w-7xl lg:px-8" : "md:max-w-[33rem] max-w-5xl"
      )}>
      <motion.div 
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
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      >
        <div className="relative flex items-center justify-between h-[calc(3.5rem-2px)] min-h-[calc(3.5rem-2px)] w-full pl-6 pr-4 lg:pl-7 lg:pr-5">
          {/* Logo - Anchored Left */}
          <div className="flex-shrink-0 relative z-10">
            <Link 
              href="/" 
              className="text-xl font-bold md:font-semibold font-serif -translate-y-[1px] relative block cursor-pointer max-md:subpixel-antialiased max-md:[-webkit-text-stroke:0.4px]" 
              aria-label="Go to homepage"
              onClick={handleLogoClick}
            >
              <div className="relative flex items-center">
                 {/* Logo Morphing Animation - Framer Motion */}
                 <div className="flex items-center">
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
                    <motion.span layout className="text-black dark:text-white font-bold">_</motion.span>
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
          <div className="md:hidden absolute right-4 top-0 bottom-0 flex items-center z-10">
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
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="md:hidden pl-6 pr-4 pt-2 pb-9 w-full flex flex-col"
                >
                    <nav className="flex flex-col space-y-3">
                        {[
                            { name: 'Blog', href: '/blog' },
                            { name: 'Projects', href: '/projects' },
                            { name: 'Resume', href: socialLinks.resume, isDownload: true },
                            { name: 'Contact', href: '/#contact' },
                            { name: 'LinkedIn', href: socialLinks.linkedin, isExternal: true },
                            { name: 'Github', href: socialLinks.github, isExternal: true },
                            { name: 'About', href: '/#about' },
                        ].map((item, index) => (
                             <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ 
                                  delay: 0.05 + (index * 0.05),
                                  duration: 0.3,
                                  ease: [0.22, 1, 0.36, 1] 
                                }}
                             >
                                {item.isDownload ? (
                                    <a 
                                        href={item.href} 
                                        download={socialLinks.resumeDownloadName}
                                        className="text-xl font-semibold transition-colors text-foreground hover:text-foreground inline-flex items-center gap-1 group"
                                    >
                                        {item.name}
                                        <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity -mt-0.5" />
                                    </a>
                                ) : item.isExternal ? (
                                    <a 
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl font-semibold transition-colors text-foreground hover:text-foreground inline-flex items-center gap-1 group"
                                    >
                                        {item.name}
                                        <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity -mt-0.5" />
                                    </a>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-xl font-semibold transition-colors text-foreground hover:text-foreground inline-flex items-center gap-1 group"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                        <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity -mt-0.5" />
                                    </Link>
                                )}
                             </motion.div>
                        ))}
                    </nav>

                </motion.div>
            )}
        </AnimatePresence>
      </motion.div>
      </div>
    </header>
  )
}
