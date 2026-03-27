"use client"

import { heroProfessionalTitles } from "@/lib/content/hero-content"
import { cn } from "@/lib/utils"

type HeroProfessionalTitlesProps = {
  variant: "mobile" | "desktop"
}

export function HeroProfessionalTitles({ variant }: HeroProfessionalTitlesProps) {
  const containerClassName =
    variant === "desktop"
      ? "flex flex-col gap-0 shrink-0 items-start text-left mb-2 xl:mb-3"
      : "flex flex-col items-center text-center gap-0 shrink-0"
  const rowClassName =
    variant === "desktop" ? "flex items-center justify-start w-full" : "flex items-center justify-center w-full"

  return (
    <div className={containerClassName}>
      {heroProfessionalTitles.map((title) => (
        <div key={title} className={rowClassName}>
          <span className={cn("hero-copy-unified text-zinc-900 dark:text-white leading-[1.6] tracking-[-0.015em] font-[600]")}>
            {title}
          </span>
        </div>
      ))}
    </div>
  )
}
