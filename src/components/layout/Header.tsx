"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Mail } from "lucide-react";
import { SocialBrandIcon } from "@/components/social/SocialBrandIcon";
import { mainLinks } from "@/lib/content/main-links";
import { socialLinks } from "@/lib/content/social-links";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuContainerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(false);

  const mobileMenuAnimationState = isMobileMenuOpen ? "open" : "closed";
  const menuPanelTransition = {
    type: "spring" as const,
    duration: 0.3,
    bounce: 0.1,
  };
  const mobileMenuPanelVariants = {
    open: { height: "auto" },
    closed: { height: "3.25rem" },
  };
  const mobileMenuListVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.05 },
    },
    closed: {
      opacity: 0,
      transition: { staggerChildren: 0.03, staggerDirection: -1 as const },
    },
  };
  const mobileMenuItemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };
  const menuSocialItems = [
    { name: "Behance", href: socialLinks.behance, brand: "behance" as const },
    { name: "GitHub", href: socialLinks.github, brand: "github" as const },
    {
      name: "LinkedIn",
      href: socialLinks.linkedin,
      brand: "linkedin" as const,
    },
  ] as const;
  const mobileMenuSocialVariants = {
    open: { opacity: 1, y: 0, transition: { delay: 0.15 } },
    closed: { opacity: 0, y: -10 },
  };
  const mobileMenuIconTopVariants = {
    open: { rotate: [0, 0, 45], y: [0, 4, 4] },
    closed: { rotate: [45, 0, 0], y: [4, 4, 0] },
  };
  const mobileMenuIconBottomVariants = {
    open: { rotate: [0, 0, -45], y: [0, -4, -4] },
    closed: { rotate: [-45, 0, 0], y: [-4, -4, 0] },
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Lock scroll and toggle global menu-open state for page dimming.
  useEffect(() => {
    const root = document.documentElement;

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    root.classList.toggle("mobile-menu-open", isMobileMenuOpen);

    return () => {
      document.body.style.overflow = "";
      root.classList.remove("mobile-menu-open");
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking/tapping outside of it.
  // Use click capture so timing matches the X button (also click-based),
  // and preventDefault so taps do not "fall through" to underlying links.
  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handleOutsideInteraction = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) {
        return;
      }

      if (mobileMenuContainerRef.current?.contains(target)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      setIsMobileMenuOpen(false);
    };

    document.addEventListener("click", handleOutsideInteraction, true);

    return () => {
      document.removeEventListener("click", handleOutsideInteraction, true);
    };
  }, [isMobileMenuOpen]);

  // Shrink when scrolled (on all devices now)
  const showFullLogo = !isScrolled || isMobileMenuOpen;
  const isMailShown = pathname !== "/" || !showFullLogo;

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // Spacing model (mobile)
  const mobileLeftInset = 8;
  const mobileRightInset = 8;

  return (
    <header className="fixed w-full top-2 sm:top-4 md:top-5 lg:top-6 z-50 flex justify-center pointer-events-none">
      <div
        className={cn(
          "w-full mx-auto transition-[max-width,padding] duration-500 ease-soft-out px-6 md:max-w-[34.25rem] max-w-5xl",
        )}
      >
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
              className="flex-shrink-0 relative z-10 flex items-center justify-center"
              style={{ left: `${mobileLeftInset}px` }}
            >
              <Link
                href="/"
                className="relative flex items-center cursor-pointer gap-2.5"
                aria-label="Go to homepage"
                onClick={handleLogoClick}
              >
                <motion.div
                  className="flex items-center justify-center w-10 h-10"
                  initial={false}
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  variants={{
                    open: { scale: 1.5, y: 1.5 },
                    closed: { scale: 1, y: 0 },
                  }}
                  transition={menuPanelTransition}
                  style={{ transformOrigin: "top left" }}
                >
                  <Image
                    src="/arjun-bishnoi-logo-circle.png"
                    alt="Arjun Bishnoi"
                    width={34}
                    height={34}
                    className="w-[1.875rem] h-[1.875rem] rounded-full object-cover"
                    priority
                  />
                </motion.div>
                <span className="hidden sm:block lg:hidden text-[1.15rem] tracking-[-0.035em] font-sans font-semibold text-black dark:text-white whitespace-nowrap">
                  Arjun Bishnoi
                </span>
              </Link>
            </div>

            {/* Actions - Anchored Right */}
            <div
              className="absolute top-0 bottom-0 flex items-center z-10"
              style={{ right: `${mobileRightInset}px` }}
            >
              <motion.div layout transition={{ layout: menuPanelTransition }}>
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-10 h-10 rounded-full transition-colors text-black dark:text-white focus:outline-none shrink-0"
                  aria-label="Toggle theme"
                >
                  {resolvedTheme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={
                        hasMounted
                          ? { rotate: -90, scale: 0, opacity: 0 }
                          : { rotate: 0, scale: 1, opacity: 1 }
                      }
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      exit={{ rotate: 90, scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                    >
                      <Sun
                        className="w-[1.125rem] h-[1.125rem]"
                        strokeWidth={2.8}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={
                        hasMounted
                          ? { rotate: 90, scale: 0, opacity: 0 }
                          : { rotate: 0, scale: 1, opacity: 1 }
                      }
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      exit={{ rotate: -90, scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                    >
                      <Moon
                        className="w-[1.125rem] h-[1.125rem]"
                        strokeWidth={2.1}
                      />
                    </motion.div>
                  )}
                </button>
              </motion.div>

              <AnimatePresence>
                {isMailShown && (
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
                        className="flex items-center justify-center w-10 h-10 rounded-full transition-colors text-black dark:text-white focus:outline-none shrink-0"
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
                  className="ml-1.5 flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-colors text-black dark:text-white focus:outline-none"
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
                      d="M3.5 6H15.9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transformOrigin: "50% 50%",
                        transformBox: "fill-box",
                      }}
                      variants={mobileMenuIconTopVariants}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.path
                      d="M3.5 14H15.9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transformOrigin: "50% 50%",
                        transformBox: "fill-box",
                      }}
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
              "pl-[17px] pr-[12px] pb-[22px] w-full flex flex-col",
              isMobileMenuOpen ? "pt-6" : "pt-3",
              isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none",
            )}
          >
            <motion.ul
              className="flex flex-col space-y-3"
              variants={mobileMenuListVariants}
            >
              {mainLinks.map((item) => (
                <motion.li key={item.name} variants={mobileMenuItemVariants}>
                  {item.isDownload ? (
                    <a
                      href={item.href}
                      download={item.downloadName}
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
              {menuSocialItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  aria-label={item.name}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <SocialBrandIcon
                    brand={item.brand}
                    className="w-[1.875rem] h-[1.875rem]"
                  />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
