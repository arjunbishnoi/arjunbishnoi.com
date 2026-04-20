"use client";

import { motion } from "motion/react";
import type { HeroSnapTransition } from "@/components/home/hero/types";
import {
  LANDING_HERO_STACK_CLASSNAME,
  LANDING_HERO_SUBTITLE_CLASSNAME,
  PAGE_HERO_TITLE_CLASSNAME,
} from "@/lib/home-title-styles";

type HeroIntroProps = {
  isFirstLoad: boolean;
  prefersReducedMotion: boolean;
  snapTransition: HeroSnapTransition;
};

export function HeroIntro({
  isFirstLoad,
  prefersReducedMotion,
  snapTransition,
}: HeroIntroProps) {
  return (
    <div className="w-full z-20 px-6 pt-[max(9rem,calc(env(safe-area-inset-top)+8.1rem))] md:pt-20 lg:pt-28 xl:pt-32 pb-0">
      <div className="w-full max-w-[1040px] mx-auto px-4 lg:px-6 text-center flex flex-col items-center">
        <div className={LANDING_HERO_STACK_CLASSNAME}>
          <motion.h1
            className={PAGE_HERO_TITLE_CLASSNAME}
            initial={
              isFirstLoad
                ? {
                    opacity: prefersReducedMotion ? 1 : 0,
                    y: prefersReducedMotion ? 0 : 16,
                  }
                : false
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...snapTransition, delay: 0.1 }}
          >
            <span className="inline">Arjun Bishnoi</span>
          </motion.h1>
          <motion.p
            className={LANDING_HERO_SUBTITLE_CLASSNAME}
            initial={
              isFirstLoad
                ? {
                    opacity: prefersReducedMotion ? 1 : 0,
                    y: prefersReducedMotion ? 0 : 14,
                  }
                : false
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...snapTransition, delay: 0.2 }}
          >
            <span className="block lg:inline">Developer and designer.</span>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
