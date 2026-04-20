"use client";

import React, { useState, useEffect } from "react";
import { useReducedMotion } from "motion/react";
import {
  VIEWALL_BLOB_COLORS,
  shuffleColors,
  rotateColors,
} from "./hero/view-all-blob-colors";
import { HeroIntro } from "./hero/HeroIntro";
import { HeroMobileLayout } from "./hero/HeroMobileLayout";
import { HeroDesktopLayout } from "./hero/HeroDesktopLayout";
import type { HeroSnapTransition } from "./hero/types";
import { useIsFirstPageLoad } from "@/hooks/use-is-first-page-load";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useHomeSectionSync } from "@/hooks/use-home-section-sync";

const HERO_BIO_EXPANDED_STORAGE_KEY = "home.hero.bioExpanded";

export function HeroSection() {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [viewAllBlobColors, setViewAllBlobColors] =
    useState<string[]>(VIEWALL_BLOB_COLORS);
  const [bioExpanded, setBioExpanded] = useState(false);

  // Sync from sessionStorage after mount to avoid SSR/client hydration mismatch.
  useEffect(() => {
    const stored = sessionStorage.getItem(HERO_BIO_EXPANDED_STORAGE_KEY) === "true";
    if (stored) setBioExpanded(true);
  }, []);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isFirstLoad = useIsFirstPageLoad();
  useHomeSectionSync();

  useEffect(() => {
    sessionStorage.setItem(HERO_BIO_EXPANDED_STORAGE_KEY, String(bioExpanded));
  }, [bioExpanded]);

  const prefersReducedMotion = !!useReducedMotion();
  const snapTransition: HeroSnapTransition = prefersReducedMotion
    ? { duration: 0 }
    : {
        type: "spring" as const,
        // Refined for a smoother, premium feel: more damping for controlled motion, higher mass for presence.
        stiffness: 280,
        damping: 28,
        mass: 1,
      };

  useEffect(() => {
    const handleScroll = () => {
      setScrolledDown(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const shuffled = shuffleColors(VIEWALL_BLOB_COLORS);
    const unchanged = shuffled.every(
      (color, index) => color === VIEWALL_BLOB_COLORS[index],
    );

    // Guarantee a different starting arrangement on each load.
    if (unchanged) {
      const offset =
        Math.floor(Math.random() * (VIEWALL_BLOB_COLORS.length - 1)) + 1;
      setViewAllBlobColors(rotateColors(VIEWALL_BLOB_COLORS, offset));
      return;
    }

    setViewAllBlobColors(shuffled);
  }, []);

  return (
    <section
      className="home-stack-gap-after relative overflow-hidden flex flex-col items-center md:h-auto md:pt-20 lg:pt-[5.25rem] md:pb-6 lg:pb-10"
      style={{ background: "var(--neu-surface)" }}
    >
      <HeroIntro
        isFirstLoad={isFirstLoad}
        prefersReducedMotion={prefersReducedMotion}
        snapTransition={snapTransition}
      />

      <HeroMobileLayout
        isFirstLoad={isFirstLoad}
        prefersReducedMotion={prefersReducedMotion}
        snapTransition={snapTransition}
        viewAllBlobColors={viewAllBlobColors}
        bioExpanded={bioExpanded}
        isDesktop={isDesktop}
        scrolledDown={scrolledDown}
        onToggleBioExpanded={() => setBioExpanded((value) => !value)}
      />

      <HeroDesktopLayout
        isFirstLoad={isFirstLoad}
        prefersReducedMotion={prefersReducedMotion}
        snapTransition={snapTransition}
        viewAllBlobColors={viewAllBlobColors}
        isDesktop={isDesktop}
      />
    </section>
  );
}
