"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { shortSkillList } from "@/lib/site-data"

export function HomeAboutMobile() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Image corner radius to match featured project images
  const imgRadius = 40

  return (
    <section 
      id="about"
      ref={containerRef}
      className="pt-4 md:pt-8 pb-14 flex flex-col items-center bg-background overflow-hidden w-full relative px-6"
    >
      <div
        className="w-full max-w-[342px] text-black dark:text-white overflow-hidden flex flex-col items-center rounded-[40px]"
      >
        {/* Profile Image Wrap */}
        <div 
          style={{
            borderRadius: imgRadius,
          }}
          className="w-full aspect-square relative overflow-hidden bg-zinc-100/50 dark:bg-zinc-900/50"
        >
          <Image
            src="/arjun-bishnoi-profile-square.jpg"
            alt="Arjun Bishnoi"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 342px, 400px"
            priority
          />
        </div>

        {/* Text Area */}
        <div className="flex flex-col items-center w-full px-4 pt-8 pb-10">
          <h2 className="text-3xl font-bold mb-6 tracking-tight text-center">
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
                        className="px-3 py-1 text-xs border border-black/20 dark:border-white/20 rounded-full"
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
      </div>
    </section>
  )
}
