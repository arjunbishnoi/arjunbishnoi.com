"use client";

import { motion } from "motion/react";
import { MobbinIconStack } from "@/components/home/MobbinIconStack";
import type { HeroSnapTransition } from "@/components/home/hero/types";

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
          className="font-sans font-semibold whitespace-nowrap text-[2.4rem] sm:text-[3.5rem] md:text-[3.8rem] lg:text-[4rem] xl:text-[4.5rem] leading-[1.02] tracking-[-0.05em] sm:tracking-[-0.035em] md:tracking-[-0.04em] lg:tracking-[-0.038em]"
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
          <span className="inline text-black dark:text-white">
            Arjun Bishnoi
          </span>
        </motion.h1>
        <motion.p
          className="mt-1.5 text-center text-base leading-[1.28] md:mt-3 md:text-xl lg:text-xl xl:text-[1.35rem] md:leading-relaxed text-zinc-500 dark:text-zinc-400 lg:max-w-none lg:whitespace-nowrap lg:mb-4 xl:mb-6"
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
