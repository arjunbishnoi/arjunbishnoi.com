"use client"

import Image from "next/image"
import { SKILL_LABEL_TEXT_CLASSNAME } from "@/lib/home-title-styles"
import { heroSkills } from "@/lib/content/skills"
import { cn } from "@/lib/utils"

type HeroSkillsGridProps = {
  variant: "mobile" | "desktop"
  className?: string
}

export function HeroSkillsGrid({ variant, className }: HeroSkillsGridProps) {
  const isDesktop = variant === "desktop"

  return (
    <div
      className={cn(
        "grid grid-cols-3 w-full",
        isDesktop
          ? "max-w-[280px] xl:max-w-[300px] gap-y-5 gap-x-6 xl:gap-y-6 xl:gap-x-8"
          : "max-w-[280px] gap-y-6 gap-x-8",
        className
      )}
    >
      {heroSkills.slice(0, isDesktop ? 15 : 18).map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity"
        >
          <div
            className={cn(
              "relative grayscale dark:invert-[0.92] dark:opacity-90",
              isDesktop ? "w-7 h-7 xl:w-8 xl:h-8" : "w-7 h-7"
            )}
          >
            <Image src={skill.logoUrl} alt={skill.name} fill className="object-contain" sizes="32px" />
          </div>
          <span
            className={cn(
              SKILL_LABEL_TEXT_CLASSNAME,
              isDesktop ? "text-[0.55rem] xl:text-[0.6rem]" : "text-[0.55rem]"
            )}
          >
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  )
}
