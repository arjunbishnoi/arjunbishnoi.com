"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { MobileMenuContent } from "@/components/layout/header/MobileMenuContent";
import { cn } from "@/lib/utils";
import { useHeaderNavigation } from "@/components/layout/header/use-header-navigation";
import { useMobileMenuLifecycle } from "@/components/layout/header/use-mobile-menu-lifecycle";
import {
  menuPanelTransition,
  mobileMenuPanelVariants,
  mobileMenuIconTopVariants,
  mobileMenuIconBottomVariants,
  mobileLeftInset,
  mobileRightInset,
} from "@/components/layout/header/constants";

export function Header() {
  const {
    isMobileMenuOpen,
    mobileMenuAnimationState,
    mobileMenuContainerRef,
    setIsMobileMenuOpen,
    closeMobileMenuThen,
  } = useMobileMenuLifecycle();
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const [hasMounted, setHasMounted] = useState(false);

  const { handleLogoClick, handleNavClick } = useHeaderNavigation({
    pathname,
    router,
    closeMobileMenuThen,
    setIsMobileMenuOpen,
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const mobileMenuAriaLabel = isMobileMenuOpen
    ? "Close main menu"
    : "Open main menu";

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
                className="relative flex items-center cursor-pointer"
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
                  aria-controls="mobile-menu-panel"
                  aria-expanded={isMobileMenuOpen}
                  aria-label={mobileMenuAriaLabel}
                >
                  <span className="sr-only">{mobileMenuAriaLabel}</span>
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

          <MobileMenuContent
            isMobileMenuOpen={isMobileMenuOpen}
            mobileMenuAnimationState={mobileMenuAnimationState}
            onNavClick={handleNavClick}
            onCloseMenu={() => setIsMobileMenuOpen(false)}
          />
        </motion.div>
      </div>
    </header>
  );
}
