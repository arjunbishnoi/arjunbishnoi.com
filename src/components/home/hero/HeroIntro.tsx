"use client";

import { motion } from "motion/react";
import { MobbinIconStack } from "@/components/home/MobbinIconStack";
import type { HeroSnapTransition } from "@/components/home/hero/types";
import {
  HOME_SECTION_TITLE_CLASSNAME,
  HOME_TITLE_SUBTITLE_CLASSNAME,
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
    <div className="w-full z-20 px-6 pt-[max(6.85rem,calc(env(safe-area-inset-top)+5.95rem))] md:pt-14 lg:pt-16 xl:pt-20 pb-0">
      <div className="w-full max-w-[1040px] mx-auto px-4 lg:px-6 text-center flex flex-col items-center">
        <motion.div
          className="mt-1 sm:mt-2 md:mt-0 mb-5 sm:mb-6 md:mb-12 lg:mb-8 xl:mb-7 lg:scale-[0.88] xl:scale-[0.82] origin-center"
          initial={
            isFirstLoad
              ? {
                  opacity: prefersReducedMotion ? 1 : 0,
                  y: prefersReducedMotion ? 0 : 18,
                }
              : false
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...snapTransition, delay: 0 }}
        >
          <MobbinIconStack />
        </motion.div>
        <motion.h1
          className={HOME_SECTION_TITLE_CLASSNAME}
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
          className={HOME_TITLE_SUBTITLE_CLASSNAME}
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
  );
}
