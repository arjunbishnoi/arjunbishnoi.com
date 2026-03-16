"use client"

import React, { useRef } from "react"
import { AboutProfileCard } from "./AboutProfileCard"
import { HeroSkillsCard } from "./HeroSkillsCard"

export function HomeAboutMobile() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section 
      id="about"
      ref={containerRef}
      className="pt-6 md:pt-10 pb-14 flex flex-col items-center bg-background overflow-hidden w-full relative px-6"
    >
      <div
        className="w-full max-w-[342px] lg:max-w-5xl text-black dark:text-white overflow-hidden flex flex-col items-center"
      >
        <AboutProfileCard className="lg:hidden" priority />
        <HeroSkillsCard className="mt-6 lg:hidden" />
      </div>
    </section>
  )
}
