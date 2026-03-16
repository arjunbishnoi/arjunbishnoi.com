"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

type AboutProfileCardProps = {
  className?: string
  imageSizes?: string
  priority?: boolean
}

export function AboutProfileCard({
  className,
  imageSizes = "(max-width: 768px) 342px, 400px",
  priority = false,
}: AboutProfileCardProps) {
  return (
    <figure
      className={cn(
        "relative w-full aspect-[4/5] overflow-hidden rounded-[40px] bg-[#e9e5de] dark:bg-zinc-900/70",
        className
      )}
    >
      <Image
        src="/arjun-bishnoi-portrait.jpg"
        alt="Portrait of Arjun Bishnoi"
        fill
        className="object-cover"
        sizes={imageSizes}
        priority={priority}
      />
      <figcaption className="absolute bottom-5 z-10 flex w-full flex-row flex-wrap items-center justify-center gap-x-2 px-5 text-center text-[14px] leading-[20px] tracking-[-0.015em] font-[440]">
        <span className="text-white">Arjun Bishnoi</span>
        <span className="text-white/[0.7]">Toronto, Canada</span>
      </figcaption>
    </figure>
  )
}
