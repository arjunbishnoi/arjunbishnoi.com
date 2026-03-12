"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Mail, ArrowUpRight } from "lucide-react"
import { socialLinks } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const mobileMenuContainerRef = useRef<HTMLDivElement>(null)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const mobileMenuAnimationState = isMobileMenuOpen ? "open" : "closed"
  const menuPanelTransition = { type: "spring" as const, duration: 0.3, bounce: 0.1 }
  const mobileMenuPanelVariants = {
    open: { height: "auto" },
    closed: { height: "3.4375rem" },
  }
  type MobileMenuItem = {
    name: string
    href: string
    isDownload?: boolean
  }
  const mobileMenuItems: ReadonlyArray<MobileMenuItem> = [
    { name: 'Projects', href: '/projects' },
    { name: 'Mobile Apps', href: '/#mobile-apps' },
    { name: 'AI/ML', href: '/#ai-ml' },
    { name: 'Design', href: '/#design' },
    { name: 'Resume', href: socialLinks.resume, isDownload: true },
    { name: 'Contact', href: '/#contact' },
    { name: 'About', href: '/#about' },
    { name: 'Blog', href: '/blog' },
  ] as const
  const mobileMenuListVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.05 },
    },
    closed: {
      opacity: 0,
      transition: { staggerChildren: 0.03, staggerDirection: -1 as const },
    },
  }
  const mobileMenuItemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  }
  const mobileMenuSocialVariants = {
    open: { opacity: 1, y: 0, transition: { delay: 0.15 } },
    closed: { opacity: 0, y: -10 },
  }
  const mobileMenuIconTopVariants = {
    open: { rotate: [0, 0, 45], y: [0, 4, 4] },
    closed: { rotate: [45, 0, 0], y: [4, 4, 0] },
  }
  const mobileMenuIconBottomVariants = {
    open: { rotate: [0, 0, -45], y: [0, -4, -4] },
    closed: { rotate: [-45, 0, 0], y: [-4, -4, 0] },
  }

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

  // Close mobile menu when clicking/tapping outside of it.
  // Use click capture so timing matches the X button (also click-based),
  // and preventDefault so taps do not "fall through" to underlying links.
  useEffect(() => {
    if (!isMobileMenuOpen) {
      return
    }

    const handleOutsideInteraction = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Node)) {
        return
      }

      if (mobileMenuContainerRef.current?.contains(target)) {
        return
      }

      event.preventDefault()
      event.stopPropagation()
      setIsMobileMenuOpen(false)
    }

    document.addEventListener("click", handleOutsideInteraction, true)

    return () => {
      document.removeEventListener("click", handleOutsideInteraction, true)
    }
  }, [isMobileMenuOpen])

  // Shrink when scrolled (on all devices now)
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

  // Spacing model (mobile)
  const mobileLeftInset = 12
  const mobileRightInset = 12

  return (
    <header className="fixed w-full top-2 sm:top-4 md:top-5 lg:top-6 z-50 flex justify-center pointer-events-none">
      <div className={cn(
        "w-full mx-auto transition-[max-width,padding] duration-500 ease-soft-out px-6 md:max-w-[34.25rem] max-w-5xl"
      )}>
      <motion.div 
        ref={mobileMenuContainerRef}
        layout
        className={cn(
          "relative overflow-hidden transition-[background-color,border-color,backdrop-filter] duration-500 ease-soft-out pointer-events-auto w-full rounded-[2rem]",
          "backdrop-blur-2xl backdrop-brightness-[1.1] backdrop-saturate-[1.8] bg-white/90 dark:bg-black/90",
          "before:absolute before:inset-0 before:rounded-[2rem] before:opacity-[0.03] dark:before:opacity-[0.04] before:pointer-events-none before:z-[1]",
          "before:[background-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")]",
        )}
        initial={false}
        animate={mobileMenuAnimationState}
        variants={mobileMenuPanelVariants}
        transition={menuPanelTransition}
      >
        <div className="relative flex items-center justify-between h-[var(--navbar-height)] min-h-[var(--navbar-height)] w-full pl-0 pr-0 md:pl-0 md:pr-0 lg:pl-0 lg:pr-0">
          {/* Logo - Anchored Left */}
          <div
            className="flex-shrink-0 relative z-10 flex items-center justify-center translate-y-[1px]"
            style={{ left: `${mobileLeftInset}px` }}
          >
            <Link
              href="/"
              className="relative flex items-center cursor-pointer gap-2.5"
              aria-label="Go to homepage"
              onClick={handleLogoClick}
            >
              <div className="flex items-center justify-center w-10 h-10">
                <Image
                  src="/arjun-bishnoi-profile-square.jpg"
                  alt="Arjun Bishnoi"
                  width={34}
                  height={34}
                  className="w-[1.875rem] h-[1.875rem] rounded-full object-cover"
                  priority
                />
              </div>
              <span className="hidden sm:block text-[1.15rem] tracking-[-0.035em] font-sans font-semibold text-black dark:text-white mt-[-1px] whitespace-nowrap">
                arjunbishnoi
              </span>
            </Link>
          </div>

          {/* Actions - Anchored Right */}
          <div
            className="absolute top-0 bottom-0 flex items-center z-10"
            style={{ right: `${mobileRightInset}px` }}
          >
             {mounted && (
                  <motion.div layout transition={{ layout: menuPanelTransition }}>
                  <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-10 h-10 rounded-full transition-colors text-black dark:text-white focus:outline-none shrink-0 hover:bg-black/5 dark:hover:bg-white/10"
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
                  </motion.div>
             )}
            
            <AnimatePresence>
                {(pathname !== "/" || !showFullLogo) && (
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 48 }}
                        exit={{ width: 0 }}
                        transition={menuPanelTransition}
                        className="overflow-hidden flex items-center justify-end"
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={menuPanelTransition}
                            className="origin-right will-change-transform [backface-visibility:hidden]"
                        >
                            <Link
                                href="/#contact"
                                className="flex items-center justify-center w-10 h-10 rounded-full transition-colors text-black dark:text-white focus:outline-none shrink-0 hover:bg-black/5 dark:hover:bg-white/10"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <Mail className="w-5 h-5" strokeWidth={2} />
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div layout transition={{ layout: menuPanelTransition }}>
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="ml-1.5 flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-colors text-black dark:text-white focus:outline-none hover:bg-black/5 dark:hover:bg-white/10"
            >
                 <span className="sr-only">Open main menu</span>
                 <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 20 20"
                    initial={false}
                    animate={mobileMenuAnimationState}
                    className="w-[1.4375rem] h-[1.4375rem]"
                 >
                    <motion.path
                      d="M3.5 6H16.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}
                      variants={mobileMenuIconTopVariants}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.path
                      d="M3.5 14H16.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}
                      variants={mobileMenuIconBottomVariants}
                      transition={{ duration: 0.2 }}
                    />
                 </motion.svg>
            </button>
            </motion.div>
          </div>
        </div>

        {/* Menu Content */}
        <motion.div
          layout="position"
          initial={false}
          animate={mobileMenuAnimationState}
          className={cn(
            "pl-[17px] pr-[12px] pt-3 pb-[22px] w-full flex flex-col",
            isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          )}
        >
          <motion.ul
            className="flex flex-col space-y-3"
            variants={mobileMenuListVariants}
          >
            {mobileMenuItems.map((item) => (
              <motion.li
                key={item.name}
                variants={mobileMenuItemVariants}
              >
                {item.isDownload ? (
                  <a
                    href={item.href}
                    download={socialLinks.resumeDownloadName}
                    className="text-xl tracking-tight font-semibold transition-colors text-foreground hover:text-foreground inline-flex items-center gap-1 group"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="text-xl tracking-tight font-semibold transition-colors hover:text-foreground inline-flex items-center gap-1 group text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.li>
            ))}
          </motion.ul>

          {/* Social Icons Row */}
          <motion.div
            className="flex -ml-[17px] w-[calc(100%+29px)] items-center justify-center gap-[17px] mt-5 opacity-90"
            variants={mobileMenuSocialVariants}
          >
                        <a 
                            href="https://www.behance.net/arjunbishnoi" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center w-10 h-10 rounded-full text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
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
                            className="flex items-center justify-center w-10 h-10 rounded-full text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
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
                            className="flex items-center justify-center w-10 h-10 rounded-full text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            aria-label="LinkedIn"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <svg viewBox="0 0 24 24" className="w-[1.875rem] h-[1.875rem] fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
          </motion.div>
        </motion.div>
      </motion.div>
      </div>
    </header>
  )
}
