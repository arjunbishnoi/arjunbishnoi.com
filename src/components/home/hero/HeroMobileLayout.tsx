"use client";

import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { heroDescription } from "@/lib/content/hero-content";
import { AboutProfileCard } from "@/components/home/AboutProfileCard";
import { HeroEducationTimeline } from "@/components/home/hero/HeroEducationTimeline";
import { HeroProfessionalTitles } from "@/components/home/hero/HeroProfessionalTitles";
import { HeroSkillsGrid } from "@/components/home/hero/HeroSkillsGrid";
import { HeroBentoRows } from "@/components/home/hero/HeroBentoRows";
import type { HeroSnapTransition } from "@/components/home/hero/types";

type HeroMobileLayoutProps = {
  isFirstLoad: boolean;
  prefersReducedMotion: boolean;
  snapTransition: HeroSnapTransition;
  viewAllBlobColors: string[];
  bioExpanded: boolean;
  isDesktop: boolean;
  scrolledDown: boolean;
  onToggleBioExpanded: () => void;
};

export function HeroMobileLayout({
  isFirstLoad,
  prefersReducedMotion,
  snapTransition,
  viewAllBlobColors,
  bioExpanded,
  isDesktop,
  scrolledDown,
  onToggleBioExpanded,
}: HeroMobileLayoutProps) {
  return (
    <>
      <motion.div
        className="w-full z-20 px-6 pb-8 lg:hidden flex flex-col items-center"
        initial={
          isFirstLoad
            ? {
                opacity: prefersReducedMotion ? 1 : 0,
                y: prefersReducedMotion ? 0 : 26,
              }
            : false
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...snapTransition, delay: 0.3 }}
      >
        <div className="w-[95%] sm:w-[94%] mx-auto mt-10 mb-0 flex flex-col items-center hero-mobile-main-shape-wrap">
          <div className="w-full neu-container overflow-visible aspect-[4/4.2] grid grid-rows-[40%_20%_20%_20%]">
            <HeroBentoRows
              variant="mobile"
              blobColors={viewAllBlobColors}
              socialAnchorId="hero-mail-anchor"
            />
          </div>
        </div>

        <div data-about-mobile />
        <AboutProfileCard
          imageSizes="(max-width: 768px) 100vw, (min-width: 1024px) 342px, 342px"
          className="mt-6 lg:hidden relative z-10"
          priority={!isDesktop}
        />

        <div className="home-mobile-bio-shell hero-bio-card w-full -mt-16 relative z-0 rounded-t-[32px] rounded-b-[40px] border border-zinc-200/50 border-t-0 dark:border-white/10 flex flex-col overflow-hidden shadow-none">
          <div
            className={cn(
              "flex flex-col pt-[84px] px-8 text-left transition-all duration-500",
              bioExpanded ? "pb-0" : "pb-6",
            )}
          >
            <div className="flex flex-col">
              <HeroProfessionalTitles variant="mobile" />

              <p className="hero-copy-unified mt-[10px] text-left font-normal leading-[1.6] text-[#636366] dark:text-zinc-400">
                {heroDescription}
              </p>

              <div className="relative w-full mt-[20px]">
                <motion.div
                  className="w-full relative"
                  initial={{ opacity: 0, height: "7rem" }}
                  animate={{
                    opacity: 1,
                    height: bioExpanded ? "auto" : "7rem",
                  }}
                  transition={{
                    opacity: { duration: prefersReducedMotion ? 0 : 0.22 },
                    height: { type: "spring", duration: 0.4, bounce: 0.15 },
                  }}
                >
                  <HeroEducationTimeline
                    variant="mobile"
                    collapsedPreview={!bioExpanded}
                  />

                  <div
                    className={cn(
                      "hero-skills-card pt-8 flex justify-center w-full",
                      bioExpanded ? "pb-0" : "pb-4",
                    )}
                  >
                    <HeroSkillsGrid variant="mobile" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            className="relative z-40 flex justify-center mb-5"
            initial={false}
            animate={{ marginTop: bioExpanded ? "2.75rem" : "-0.5rem" }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
          >
            <button
              type="button"
              onClick={onToggleBioExpanded}
              className={cn(
                "z-20 w-fit mx-auto flex items-center justify-center gap-2 rounded-full bg-black text-white px-5 py-2.5 text-[0.85rem] font-medium",
                "dark:bg-white dark:text-black",
                "transition-transform duration-200 active:scale-[0.98]",
              )}
              aria-expanded={bioExpanded}
            >
              {bioExpanded ? "View less" : "View more"}
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  bioExpanded && "rotate-180",
                )}
                strokeWidth={2.25}
              />
            </button>
          </motion.div>

          <AnimatePresence>
            {!bioExpanded && (
              <>
                <motion.div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[150px] rounded-b-[40px] z-30 dark:hidden block"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 0%, rgba(206, 206, 206, 0.2) 30%, rgba(206, 206, 206, 0.85) 75%, #cecece 100%)",
                  }}
                  initial={isFirstLoad ? { opacity: 0 } : false}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[150px] rounded-b-[40px] z-30 dark:block hidden"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 0%, rgba(38, 38, 38, 0.2) 30%, rgba(38, 38, 38, 0.85) 75%, #262626 100%)",
                  }}
                  initial={isFirstLoad ? { opacity: 0 } : false}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <div className="hidden md:flex lg:hidden w-full flex-col items-center justify-center mb-0 pb-0 sm:pb-0 sm:mb-0 md:mb-0 md:pb-0 mt-0 md:mt-8 relative z-40">
        <div
          className={cn(
            "mt-3 md:mt-2 pb-0 md:pb-0 flex justify-center transition-opacity duration-300 lg:opacity-40 lg:hover:opacity-100",
            scrolledDown ? "opacity-0 pointer-events-none" : "opacity-70",
          )}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </>
  );
}
