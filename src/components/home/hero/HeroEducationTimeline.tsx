"use client"

import { motion } from "motion/react"
import {
  BADGE_TEXT_CLASSNAME,
  HERO_SECONDARY_TEXT_CLASSNAME,
  HERO_SUPPORTING_TEXT_CLASSNAME,
} from "@/lib/home-title-styles"
import { heroEducationItems } from "@/lib/content/hero-content"
import { cn } from "@/lib/utils"

type HeroEducationTimelineProps = {
  variant: "mobile" | "desktop"
  collapsedPreview?: boolean
}

export function HeroEducationTimeline({
  variant,
  collapsedPreview = false,
}: HeroEducationTimelineProps) {
  const isDesktop = variant === "desktop"
  const lineColorClassName = isDesktop ? "bg-[#bababa] dark:bg-zinc-600" : "bg-[#a8a8a8] dark:bg-zinc-500"
  const titleLeadingClassName = isDesktop ? "leading-[1.45]" : "leading-[1.52]"

  return (
    <div
      className={cn(
        "hero-education-card flex flex-col overflow-hidden",
        isDesktop
          ? "w-full relative aspect-square rounded-[40px] bg-[#e5e5e5] dark:bg-[#161616] border-0 pt-5 pb-5 pl-6 pr-8 xl:pt-7 xl:pb-7 xl:pl-7 xl:pr-9"
          : "relative rounded-[28px] bg-transparent border border-zinc-200/40 dark:bg-transparent dark:border-transparent pt-4 pb-1 pl-0 pr-5 ml-[-10px]"
      )}
    >
      <div className={cn("relative flex flex-col", isDesktop ? "flex-1 pt-1 pb-1" : "")}>
        {heroEducationItems.map((item, index) => {
          const isFirst = index === 0
          const isLast = index === heroEducationItems.length - 1
          const isDimmed = !isDesktop && collapsedPreview && index > 0

          return (
            <div
              key={item.title}
              className={cn(
                "flex flex-row items-start",
                isDesktop ? "gap-2 xl:gap-2.5" : "gap-2",
                isDesktop && !isLast ? "flex-1" : ""
              )}
            >
              <div
                className={cn(
                  "flex flex-col items-center shrink-0 relative",
                  isDesktop ? "w-5 h-full" : "self-stretch w-5"
                )}
              >
                {isFirst ? (
                  <div
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 w-[3px] z-0 rounded-t-full",
                      lineColorClassName,
                      isDesktop ? "top-[18px] bottom-0" : "top-[23px] bottom-0"
                    )}
                  />
                ) : isLast ? (
                  <div
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 w-[3px] z-0",
                      lineColorClassName,
                      isDesktop ? "top-0 bottom-[-100px] rounded-none" : "top-0 h-[12px] rounded-b-full"
                    )}
                  />
                ) : (
                  <div
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] z-0",
                      lineColorClassName
                    )}
                  />
                )}

                {isFirst ? (
                  <motion.div
                    className={cn(
                      "relative rounded-full shrink-0 z-10",
                      isDesktop ? "w-[14px] h-[14px] mt-[4px]" : "w-[14px] h-[14px] mt-[5px]"
                    )}
                    animate={{ backgroundColor: ["#FFFFFF", "#4EB627", "#FFFFFF"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                ) : (
                  <div
                    className={cn(
                      "relative rounded-full shrink-0 z-10",
                      lineColorClassName,
                      isDesktop ? "w-[12px] h-[12px] mt-[5px]" : "w-[12px] h-[12px] mt-[6px]"
                    )}
                  />
                )}
              </div>

              <div className={cn("flex-1 pt-0", !isDesktop && !isLast ? "pb-4" : "", !isDesktop && isLast ? "pb-1" : "")}>
                <p
                  className={cn(
                    HERO_SUPPORTING_TEXT_CLASSNAME,
                    titleLeadingClassName,
                    isDimmed ? "text-zinc-400 dark:text-zinc-500 transition-colors duration-300" : "text-zinc-900 dark:text-white"
                  )}
                >
                  {item.title}
                  {item.ongoing && (
                    <span
                      className={cn(
                        `ml-2 inline-flex items-center rounded-full border-[1px] border-black/80 dark:border-white/80 ${BADGE_TEXT_CLASSNAME} align-middle bg-transparent text-black dark:text-white`,
                        isDesktop
                          ? "px-2 py-0.5 text-[0.7rem] mb-0.5"
                          : "px-2 py-0.5 text-[0.65rem]"
                      )}
                    >
                      Ongoing
                    </span>
                  )}
                </p>
                <p
                  className={cn(
                    HERO_SECONDARY_TEXT_CLASSNAME,
                    isDimmed ? "text-zinc-400 dark:text-zinc-500 transition-colors duration-300" : "text-[#636366] dark:text-zinc-400"
                  )}
                >
                  {item.institution}
                </p>
                <p
                  className={cn(
                    HERO_SECONDARY_TEXT_CLASSNAME,
                    isDimmed ? "text-zinc-400 dark:text-zinc-500 transition-colors duration-300" : "text-[#636366] dark:text-zinc-400"
                  )}
                >
                  {item.credential}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
