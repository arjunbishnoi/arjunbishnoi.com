"use client";

import { motion } from "motion/react";
import { heroDescription } from "@/lib/content/hero-content";
import { AboutProfileCard } from "@/components/home/AboutProfileCard";
import { HeroEducationTimeline } from "@/components/home/hero/HeroEducationTimeline";
import { HeroGithubActivityCard } from "@/components/home/hero/HeroGithubActivityCard";
import { HeroProfessionalTitles } from "@/components/home/hero/HeroProfessionalTitles";
import { HeroSkillsGrid } from "@/components/home/hero/HeroSkillsGrid";
import { HeroBentoRows } from "@/components/home/hero/HeroBentoRows";
import { HERO_MUTED_TEXT_CLASSNAME } from "@/lib/home-title-styles";
import type { HeroSnapTransition } from "@/components/home/hero/types";

type HeroDesktopLayoutProps = {
  isFirstLoad: boolean;
  prefersReducedMotion: boolean;
  snapTransition: HeroSnapTransition;
  viewAllBlobColors: string[];
  isDesktop: boolean;
};

export function HeroDesktopLayout({
  isFirstLoad,
  prefersReducedMotion,
  snapTransition,
  viewAllBlobColors,
  isDesktop,
}: HeroDesktopLayoutProps) {
  return (
    <motion.div
      data-about-desktop
      className="hidden lg:flex flex-col w-full z-20 pb-0 mt-12 xl:mt-14 items-center hero-flat-desktop"
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
      <div className="w-full max-w-[1040px] mx-auto px-4 lg:px-6">
        <div
          data-about-desktop-grid
          className="grid grid-cols-3 gap-6 xl:gap-7 items-start"
        >
          <div className="hero-bio-skills-merged-card col-span-1 self-stretch overflow-hidden bg-[#e5e5e5] dark:bg-[#161616] rounded-[40px] flex flex-col">
            <div className="pt-6 xl:pt-8 px-6 xl:px-8 text-left">
              <HeroProfessionalTitles variant="desktop" />

              <p className={HERO_MUTED_TEXT_CLASSNAME}>
                {heroDescription}
              </p>
            </div>

            <div className="mt-auto flex justify-center px-6 xl:px-8 pb-8 xl:pb-10 pt-6 xl:pt-8">
              <HeroSkillsGrid variant="desktop" />
            </div>
          </div>

          <div className="flex flex-col gap-6 xl:gap-7">
            <div
              data-about-desktop-bento
              className="w-full relative aspect-[4/5.6] lg:aspect-[4/5] neu-container overflow-visible rounded-[40px] xl:rounded-[40px] grid grid-rows-[34%_22%_22%_22%] lg:grid-rows-[40%_20%_20%_20%] shrink-0 min-h-0"
            >
              <HeroBentoRows
                variant="desktop"
                blobColors={viewAllBlobColors}
                socialAnchorId="hero-mail-anchor-desktop"
              />
            </div>

            <HeroGithubActivityCard />
          </div>

          <div className="flex flex-col gap-6 xl:gap-7 col-span-1 self-stretch">
            <HeroEducationTimeline variant="desktop" />

            <div className="w-full relative aspect-[4/5] rounded-[40px] xl:rounded-[40px] overflow-hidden neu-raised shadow-none border-none shrink-0 pointer-events-none select-none">
              <AboutProfileCard
                imageSizes="(max-width: 768px) 100vw, (min-width: 1024px) 342px, 342px"
                className="absolute inset-0 w-full h-full rounded-none"
                priority={isDesktop}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
