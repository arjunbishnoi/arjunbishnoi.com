"use client"

import { heroSkills } from "@/lib/site-data"
import { cn } from "@/lib/utils"

type HeroSkillsCardProps = {
  className?: string
}

export function HeroSkillsCard({ className }: HeroSkillsCardProps) {
  return (
    <div
      className={cn(
        "flex w-full aspect-[4/4.7] overflow-hidden rounded-[40px] bg-white p-5 text-black dark:bg-black dark:text-white sm:aspect-[4/5] sm:p-6 xl:p-7",
        className
      )}
    >
      <div className="grid h-full w-full grid-cols-3 place-items-center gap-x-3 gap-y-4.5 sm:gap-x-4 sm:gap-y-6 xl:gap-x-5 xl:gap-y-7">
        {heroSkills.map((skill) => (
          <div key={skill.name} className="flex h-full min-w-0 flex-col items-center justify-center text-center">
            <div className="flex h-[2.85rem] w-[2.85rem] items-center justify-center sm:h-[2.8rem] sm:w-[2.8rem] xl:h-[2.95rem] xl:w-[2.95rem]">
              <SkillIcon name={skill.name} logoUrl={skill.logoUrl} />
            </div>
            <span className="mt-1.5 text-[0.56rem] leading-[1.05] tracking-[-0.01em] text-zinc-500 dark:text-zinc-500 sm:text-[0.54rem] xl:text-[0.58rem]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function SkillIcon({ name, logoUrl }: { name: string; logoUrl: string }) {
  return (
    <img
      src={logoUrl}
      alt={name}
      className={cn(
        "object-contain opacity-85",
        name === "AI/ML"
          ? "h-[2.18rem] w-[2.18rem] sm:h-[2.15rem] sm:w-[2.15rem] xl:h-[2.25rem] xl:w-[2.25rem]"
          : "h-[1.96rem] w-[1.96rem] sm:h-[1.95rem] sm:w-[1.95rem] xl:h-[2.05rem] xl:w-[2.05rem]"
      )}
      loading="lazy"
      decoding="async"
    />
  )
}
