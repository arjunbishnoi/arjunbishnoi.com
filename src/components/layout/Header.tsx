"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { SocialBrandIcon } from "@/components/social/SocialBrandIcon";
import { mainLinks } from "@/lib/content/main-links";
import { scrollToAboutSection } from "@/lib/scroll-to-about";
import { scrollToContactSection } from "@/lib/scroll-to-contact";
import { cn } from "@/lib/utils";
import {
  menuPanelTransition,
  mobileMenuPanelVariants,
  mobileMenuListVariants,
  mobileMenuItemVariants,
  mobileMenuSocialVariants,
  mobileMenuIconTopVariants,
  mobileMenuIconBottomVariants,
  menuSocialItems,
  mobileLeftInset,
  mobileRightInset,
} from "@/components/layout/header/constants";

export function Header() {
  const MENU_CLOSE_DELAY_MS = 360;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuContainerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const [hasMounted, setHasMounted] = useState(false);

  const mobileMenuAnimationState = isMobileMenuOpen ? "open" : "closed";

  const releaseGlobalMenuLocks = () => {
    document.body.style.overflow = "";
    document.documentElement.classList.remove("mobile-menu-open");
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Lock scroll and toggle global menu-open state for page dimming.
  useEffect(() => {
    const root = document.documentElement;
    let timeoutId: number;

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      root.classList.add("mobile-menu-open");
    } else {
      root.classList.remove("mobile-menu-open");
      // Delay restoring scrollbar until closing animation finishes
      // to prevent centering layout shifts from moving menu items left
      timeoutId = window.setTimeout(() => {
        document.body.style.overflow = "";
      }, MENU_CLOSE_DELAY_MS);
    }

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isMobileMenuOpen]);

  // Failsafe unmount cleanup
  useEffect(() => {
    return () => {
      releaseGlobalMenuLocks();
    };
  }, []);

  // Browser back/forward restore (for example when returning from PDFs)
  // can keep global locks or stale UI state. Force-reset on return to tab/page.
  useEffect(() => {
    const syncFromPageRestore = () => {
      releaseGlobalMenuLocks();
      setIsMobileMenuOpen(false);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        syncFromPageRestore();
      }
    };

    window.addEventListener("pageshow", syncFromPageRestore);
    window.addEventListener("focus", syncFromPageRestore);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("pageshow", syncFromPageRestore);
      window.removeEventListener("focus", syncFromPageRestore);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

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

  const closeMobileMenuThen = (afterClose: () => void) => {
    if (!isMobileMenuOpen) {
      afterClose();
      return;
    }

    setIsMobileMenuOpen(false);
    window.setTimeout(() => {
      releaseGlobalMenuLocks();
      afterClose();
    }, MENU_CLOSE_DELAY_MS);
  };

  const resetToHomeView = () => {
    if (pathname !== "/") {
      router.push("/");
      return;
    }

    if (window.location.hash) {
      history.replaceState(null, "", "/");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    closeMobileMenuThen(resetToHomeView);
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    const runHashScroll = (hash: string) => {
      if (hash === "#about") {
        scrollToAboutSection();
        return;
      }

      if (hash === "#contact") {
        scrollToContactSection();
        return;
      }

      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

    // For hash links on the current page, handle scroll manually
    // because Next.js Link doesn't trigger native hashchange
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const hash = href.slice(1); // e.g. "#about"
      history.pushState(null, "", hash);

      closeMobileMenuThen(() => runHashScroll(hash));
      return;
    }

    setIsMobileMenuOpen(false);
  };
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed w-full top-2 sm:top-4 md:top-5 lg:top-6 z-50 flex justify-center pointer-events-none">
      <div
        className={cn(
          "w-full mx-auto transition-[max-width,padding] duration-500 ease-soft-out px-6 md:max-w-[36rem] lg:max-w-[38rem] xl:max-w-[40rem] max-w-5xl",
        )}
      >
        <motion.div
          ref={mobileMenuContainerRef}
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
              className="flex-shrink-0 relative z-10 flex items-center justify-center md:!left-[8px] transition-all duration-300"
              style={{ left: `${mobileLeftInset}px` }}
            >
              <Link
                href="/"
                className="relative flex items-center cursor-pointer gap-2.5"
                aria-label="Go to homepage"
                onClick={handleLogoClick}
              >
                <motion.div
                  className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12"
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
                    className="w-[1.875rem] h-[1.875rem] md:w-[2.25rem] md:h-[2.25rem] rounded-full object-cover"
                    priority
                  />
                </motion.div>
                <span className="hidden sm:block lg:hidden text-[1.15rem] tracking-[-0.035em] font-sans font-semibold transition-colors duration-500 ease-soft-out text-black dark:text-white whitespace-nowrap">
                  Arjun Bishnoi
                </span>
              </Link>
            </div>

            {/* Actions - Anchored Right */}
            <div
              className="absolute top-0 bottom-0 z-10 flex items-center justify-end gap-1 sm:gap-1.5 md:!right-[8px]"
              style={{ right: `${mobileRightInset}px` }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                <button
                  onClick={toggleTheme}
                  className="relative flex items-center justify-center w-full h-full rounded-full transition-colors duration-500 ease-soft-out text-black dark:text-white focus:outline-none"
                  aria-label="Toggle theme"
                >
                  <AnimatePresence initial={false}>
                    {(!hasMounted || resolvedTheme === "dark") && (
                      <motion.div
                        key="sun"
                        className={cn(
                          "absolute inset-0 flex items-center justify-center",
                          !hasMounted && "hidden dark:flex",
                        )}
                        initial={
                          hasMounted
                            ? { rotate: 90, scale: 0, opacity: 0 }
                            : false
                        }
                        animate={{ rotate: 0, scale: 1, opacity: 1 }}
                        exit={{ rotate: -90, scale: 0, opacity: 0 }}
                        transition={{
                          duration: 0.25,
                          ease: [0.32, 0.72, 0, 1],
                        }}
                      >
                        <Sun
                          className="w-[1.125rem] h-[1.125rem] md:w-[1.35rem] md:h-[1.35rem]"
                          strokeWidth={2.8}
                        />
                      </motion.div>
                    )}
                    {(!hasMounted || resolvedTheme !== "dark") && (
                      <motion.div
                        key="moon"
                        className={cn(
                          "absolute inset-0 flex items-center justify-center",
                          !hasMounted && "dark:hidden flex",
                        )}
                        initial={
                          hasMounted
                            ? { rotate: 90, scale: 0, opacity: 0 }
                            : false
                        }
                        animate={{ rotate: 0, scale: 1, opacity: 1 }}
                        exit={{ rotate: -90, scale: 0, opacity: 0 }}
                        transition={{
                          duration: 0.25,
                          ease: [0.32, 0.72, 0, 1],
                        }}
                      >
                        <Moon
                          className="w-[1.125rem] h-[1.125rem] md:w-[1.35rem] md:h-[1.35rem]"
                          strokeWidth={2.1}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="flex items-center justify-center w-full h-full rounded-full cursor-pointer transition-colors duration-500 ease-soft-out text-black dark:text-white focus:outline-none"
                >
                  <span className="sr-only">Open main menu</span>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 20 20"
                    initial={false}
                    animate={mobileMenuAnimationState}
                    className="w-[1.4375rem] h-[1.4375rem] md:w-[1.7rem] md:h-[1.7rem]"
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
              </div>
            </div>
          </div>

          {/* Menu Content */}
          <motion.div
            initial={false}
            animate={mobileMenuAnimationState}
            className={cn(
              "pl-[17px] pr-[12px] pb-[22px] w-full flex flex-col pt-6",
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
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xl tracking-tight font-semibold transition-colors text-foreground hover:text-foreground inline-flex items-center gap-1 group"
                    >
                      {item.name}
                    </a>
                  ) : item.href.toLowerCase().endsWith(".pdf") ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xl tracking-tight font-semibold transition-colors hover:text-foreground inline-flex items-center gap-1 group text-foreground"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-xl tracking-tight font-semibold transition-colors hover:text-foreground inline-flex items-center gap-1 group text-foreground"
                      onClick={(e) => handleNavClick(e, item.href)}
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
