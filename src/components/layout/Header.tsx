"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { X, Moon, Sun, Mail, Heart, ArrowUpRight } from "lucide-react"
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
    <header className="fixed w-full top-2 sm:top-4 z-50 flex justify-center pointer-events-none">
      <div className="w-full max-w-5xl px-6 mx-auto">
      <motion.div 
        className={cn(
          "overflow-hidden transition-[background-color,border-color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] pointer-events-auto w-full rounded-[2rem]",
          isScrolled || isMobileMenuOpen
            ? "backdrop-blur-md bg-white/80 dark:bg-black/80 border border-black/5 dark:border-white/10"
            : "bg-transparent border border-transparent"
        )}
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : "3.5rem"
        }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      >
        <div className="relative h-[3.5rem] w-full">
          {/* Logo - Anchored Left */}
          <div className="absolute left-5 lg:left-6 top-1/2 -translate-y-1/2" style={{ zIndex: 3 }}>
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
          <div className="hidden md:flex items-center absolute right-5 lg:right-6 top-1/2 -translate-y-1/2 space-x-4" style={{ zIndex: 2 }}>
             {mounted && (
                <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10 text-muted-foreground hover:text-foreground"
                aria-label="Toggle theme"
            >
                 {theme === "dark" ? <Sun className="w-[1.125rem] h-[1.125rem]" strokeWidth={2.8} /> : <Moon className="w-[1.125rem] h-[1.125rem]" strokeWidth={2} />}
            </button>
             )}
            
            <Link
                href="/#contact"
                className="flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10 text-muted-foreground hover:text-foreground"
                aria-label="Contact section"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                <Mail className="w-5 h-5" strokeWidth={2} />
            </Link>
          </div>

          {/* Mobile Actions - Anchored Right */}
          <div className="md:hidden flex items-center absolute right-3 top-1/2 -translate-y-1/2 space-x-1" style={{ zIndex: 2 }}>
             {mounted && (
                 <button
                 onClick={toggleTheme}
                 className="flex items-center justify-center w-10 h-10 rounded-full transition-colors text-muted-foreground active:text-foreground active:bg-black/5 dark:active:bg-white/10 focus:outline-none"
             >
                  {theme === "dark" ? <Sun className="w-[1.125rem] h-[1.125rem]" strokeWidth={2.8} /> : <Moon className="w-[1.125rem] h-[1.125rem]" strokeWidth={2} />}
             </button>
             )}
            
            <Link
                href="/#contact"
                className="flex items-center justify-center w-10 h-10 rounded-full transition-colors text-muted-foreground active:text-foreground active:bg-black/5 dark:active:bg-white/10 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                <Mail className="w-5 h-5" strokeWidth={2} />
            </Link>

            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-colors text-muted-foreground active:text-foreground active:bg-black/5 dark:active:bg-white/10 focus:outline-none"
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
                    className="md:hidden px-6 lg:px-8 pt-6 pb-6 w-full flex flex-col"
                >
                    <nav className="flex flex-col space-y-4">
                        {navigationItems.map((item, index) => (
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
                             initial={{ opacity: 0, y: -10 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: -10 }}
                             transition={{ 
                               delay: 0.05 + (navigationItems.length * 0.05), 
                               duration: 0.3, 
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
                         className="mt-8 pt-6 border-t border-black/5 dark:border-white/10 text-center text-sm font-medium text-muted-foreground flex items-center justify-center gap-1"
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.1, duration: 0.3 }}
                    >
                         made with <Heart className="w-4 h-4 text-red-500 fill-current pb-[1px]" /> by arjun
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
      </motion.div>
      </div>
    </header>
  )
}
