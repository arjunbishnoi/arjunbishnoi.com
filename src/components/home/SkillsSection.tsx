"use client"

import { shortSkillList } from "@/lib/site-data"
import { SkillListCard } from "@/components/skills/SkillListCard"

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-10 z-40 bg-background">
      {/* Static Header */}
      {/* Static Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-2 sm:pb-4">
        <h2 className="text-3xl font-bold sm:text-4xl text-foreground">Skills</h2>
      </div>
      
      {/* Skills content */}
      <div className="mx-auto max-w-7xl px-6 pt-6 sm:pt-8 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {shortSkillList.map((skillCategory) => (
            <SkillListCard 
              key={skillCategory.category} 
              category={skillCategory.category} 
              items={skillCategory.items} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
