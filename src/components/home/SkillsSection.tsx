"use client"

import { shortSkillList } from "@/lib/site-data"
import { StickyHeader } from "@/components/layout/StickyHeader"
import { SkillListCard } from "@/components/skills/SkillListCard"

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-16 bg-background">
      {/* Sticky header */}
      <StickyHeader title="Skills" to="/skills" />
      
      {/* Skills content */}
      <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
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
