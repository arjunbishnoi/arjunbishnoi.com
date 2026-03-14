"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { shortSkillList } from "@/lib/site-data"

export function HomeAboutMobile() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start center"]
  })

  // Create a progress MotionValue for the expansion range
  const expansionProgress = useTransform(scrollYProgress, [0.6, 0.9], [0, 1])

  // Width expands from content width to full screen
  const width = useTransform(expansionProgress, (p: number) => {
    const currentMargin = (1 - p) * 48
    return `calc(100vw - ${currentMargin}px)`
  })

  // Image stays constant at card width
  const imgWidth = "calc(100vw - 48px)"

  // Uniform Padding (24px side, 26px top for visual balance)
  const paddingTop = useTransform(expansionProgress, [0, 1], [0, 26])
  const paddingX = useTransform(expansionProgress, [0, 1], [0, 24])
  const paddingBottom = useTransform(expansionProgress, [0, 1], [0, 40])
  
  // Stronger upward translation to push image UP relative to the world
  const y = useTransform(expansionProgress, [0, 1], [0, -50])

  // Concentric corner radii: colRadius grows from 40 to 66 to keep 40px imgRadius concentric (40 + 26 = 66)
  const colRadius = useTransform(expansionProgress, [0, 1], [40, 66])
  const imgRadius = 40

  // Section padding grows to push Hero UP and offset the column's upward movement
  const sectionPaddingTop = useTransform(expansionProgress, [0, 1], [16, 80])

  return (
    <motion.section 
      id="about"
      ref={containerRef}
      style={{ paddingTop: sectionPaddingTop }}
      className="pb-10 flex flex-col items-center bg-background overflow-hidden w-full relative"
    >
      <motion.div
        style={{
          width,
          borderRadius: colRadius,
          paddingTop,
          paddingBottom,
          paddingLeft: paddingX,
          paddingRight: paddingX,
          y,
        }}
        className="bg-black dark:bg-white text-white dark:text-black overflow-hidden flex flex-col items-center"
      >
        {/* Profile Image Wrap */}
        <motion.div 
          style={{
            width: imgWidth,
            height: imgWidth,
            borderRadius: imgRadius,
          }}
          className="mb-8 relative overflow-hidden bg-zinc-900/50 dark:bg-zinc-100/50"
        >
          <Image
            src="/arjun-bishnoi-profile-square.jpg"
            alt="Arjun Bishnoi"
            fill
            className="object-cover"
            sizes="(max-width: 768px) calc(100vw - 48px), 400px"
            priority
          />
        </motion.div>

        {/* Text Area */}
        <div className="flex flex-col items-center max-w-2xl px-4">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">
            Arjun Bishnoi
          </h2>
          
          <div className="space-y-4 text-center text-base md:text-lg leading-relaxed opacity-90">
            <p>
              I build cross-platform mobile apps, work with AI engineering, and design user interfaces. 
              Whether I am making native apps for iOS and Android, using React Native, or creating 
              design systems, I focus on building tools that look good and are easy to use.
            </p>
            <p>
              Right now, I am studying Applied A.I. Solutions Development at George Brown College 
              to learn how to add smart, AI-driven features to the products I build.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="mt-12 w-full">
            <h3 className="text-xl font-bold mb-6 text-center opacity-80 uppercase tracking-widest text-sm">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {shortSkillList.map((group) => (
                <div key={group.category} className="flex flex-col items-center md:items-start w-full">
                  <span className="text-xs font-bold mb-3 opacity-50 uppercase tracking-wider">{group.category}</span>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {group.items.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-xs border border-white/20 dark:border-black/20 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
