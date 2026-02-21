"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { X, Moon, Sun, Mail, Download, Heart, ArrowUpRight } from "lucide-react"
import { navigationItems, socialLinks } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  // Hydration fix for theme
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const showFullLogo = !isScrolled || isMobileMenuOpen

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
    <header className="fixed w-full top-0 z-50">
      <div 
        className={cn(
          "backdrop-blur-md overflow-hidden transition-[background-color,height] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] bg-white/80 dark:bg-black/80"
        )}
        style={{
          height: isMobileMenuOpen ? "100vh" : "var(--navbar-height, 3.5rem)",
          minHeight: "var(--navbar-height, 3.5rem)",
        }}
      >
        <div className="mx-auto max-w-7xl h-[var(--navbar-height)] relative">
          {/* Logo - Anchored Left */}
          <div className="absolute left-6 lg:left-8 top-1/2 -translate-y-1/2" style={{ zIndex: 3 }}>
            <Link 
              href="/" 
              className="text-xl font-bold relative block cursor-pointer" 
              aria-label="Go to homepage"
              onClick={handleLogoClick}
            >
              <div className="relative h-6 flex items-center">
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
                    <motion.span layout className="text-muted-foreground">_</motion.span>
                 </div>
              </div>
            </Link>
          </div>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex items-center justify-center absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
            <nav className="flex items-center space-x-8 pointer-events-auto">
                {navigationItems.map(item => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground inline-flex items-center gap-0.5 group"
                    >
                        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                        <ArrowUpRight className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity -mt-1" />
                    </Link>
                ))}
            </nav>
          </div>

          {/* Desktop Actions - Anchored Right */}
          <div className="hidden md:flex items-center absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 space-x-4" style={{ zIndex: 2 }}>
             {mounted && (
                <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-8 h-8 rounded-md transition-colors hover:bg-black/5 dark:hover:bg-white/10 text-muted-foreground hover:text-foreground"
                aria-label="Toggle theme"
            >
                {theme === "dark" ? <Sun className="w-4 h-4" strokeWidth={2} /> : <Moon className="w-4 h-4" strokeWidth={2} />}
            </button>
             )}
            
            <Link
                href="/#contact"
                className="flex items-center justify-center w-8 h-8 rounded-md transition-colors hover:bg-black/5 dark:hover:bg-white/10 text-muted-foreground hover:text-foreground"
                aria-label="Contact section"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                <Mail className="w-4 h-4" strokeWidth={2} />
            </Link>

            <a
                href={socialLinks.resume}
                download={socialLinks.resumeDownloadName}
                 className="flex items-center justify-center w-8 h-8 rounded-md transition-colors hover:bg-black/5 dark:hover:bg-white/10 text-muted-foreground hover:text-foreground"
                 aria-label="Download Resume"
            >
                <Download className="w-4 h-4" strokeWidth={2} />
            </a>
          </div>

          {/* Mobile Actions - Anchored Right */}
          <div className="md:hidden flex items-center absolute right-4 top-1/2 -translate-y-1/2 space-x-4" style={{ zIndex: 2 }}>
             {mounted && (
                 <button
                 onClick={toggleTheme}
                 className="flex items-center justify-center w-8 h-8 rounded-md transition-colors text-muted-foreground active:text-foreground"
             >
                  {theme === "dark" ? <Sun className="w-4 h-4" strokeWidth={2} /> : <Moon className="w-4 h-4" strokeWidth={2} />}
             </button>
             )}
            
            <Link
                href="/#contact"
                className="flex items-center justify-center w-8 h-8 rounded-md transition-colors text-muted-foreground active:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                <Mail className="w-4 h-4" strokeWidth={2} />
            </Link>

            <a
                href={socialLinks.resume}
                download={socialLinks.resumeDownloadName}
                className="flex items-center justify-center w-8 h-8 rounded-md transition-colors text-muted-foreground active:text-foreground"
            >
                 <Download className="w-4 h-4" strokeWidth={2} />
            </a>

            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center justify-center w-8 h-8 rounded-md cursor-pointer transition-colors text-muted-foreground active:text-foreground"
            >
                 <span className="sr-only">Open main menu</span>
                 <div className="relative w-4 h-4 flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={cn(
                            "w-4 h-4 absolute transition-all duration-300 ease-in-out",
                             isMobileMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                        )}
                    >
                        <line x1="4" x2="20" y1="8" y2="8" />
                        <line x1="4" x2="20" y1="16" y2="16" />
                    </svg>
                    <X 
                        className={cn(
                            "w-4 h-4 absolute transition-all duration-300 ease-in-out",
                            isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                        )}
                        strokeWidth={2}
                    />
                 </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
            {isMobileMenuOpen && (
                <div className="md:hidden px-6 lg:px-8 pt-8 h-full flex flex-col">
                    <nav className="flex flex-col space-y-4">
                        {navigationItems.map((item, index) => (
                             <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ 
                                  delay: 0.05 + (index * 0.05), // Faster stagger
                                  duration: 0.35, // Faster duration
                                  ease: [0.22, 1, 0.36, 1] 
                                }}
                             >
                                <Link
                                    href={item.href}
                                    className="text-xl font-bold transition-colors text-muted-foreground hover:text-foreground inline-flex items-center gap-1 group"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                     {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                     <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity -mt-0.5" />
                                </Link>
                             </motion.div>
                        ))}
                        
                         <motion.div
                             initial={{ opacity: 0, y: -20 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: -20 }}
                             transition={{ 
                               delay: 0.05 + (navigationItems.length * 0.05), 
                               duration: 0.35, 
                               ease: [0.22, 1, 0.36, 1] 
                             }}
                         >
                            <a 
                                href={socialLinks.resume} 
                                download={socialLinks.resumeDownloadName}
                                className="text-xl font-bold transition-colors text-muted-foreground hover:text-foreground block"
                            >
                                Download Resume
                            </a>
                         </motion.div>
                    </nav>

                    <motion.div
                         className="mt-auto pb-32 text-center text-sm font-medium text-muted-foreground flex items-center justify-center gap-1"
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.3, duration: 0.4 }}
                    >
                         made with <Heart className="w-4 h-4 text-red-500 fill-current pb-[1px]" /> by arjun
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
      </div>
    </header>
  )
}
