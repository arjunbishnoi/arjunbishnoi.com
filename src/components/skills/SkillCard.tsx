"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface SkillItem {
  name: string
  level: string
  percentage: number
  details: string
}

interface SkillGroup {
  name: string
  items: SkillItem[]
}

interface SkillCardProps {
  group: SkillGroup
}

export function SkillCard({ group }: SkillCardProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-card/50 rounded-lg p-6 h-full border border-border/50">
      <h3 className="text-xl font-semibold text-accent mb-4">{group.name}</h3>
      <div className="space-y-6">
        {group.items.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-foreground font-medium">{item.name}</span>
              <span className="text-muted-foreground text-sm">{item.level}</span>
            </div>
            <div 
              className="w-full bg-muted rounded-full h-2 overflow-hidden"
              role="progressbar"
              aria-label={item.name}
              aria-valuenow={item.percentage}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div 
                className={cn(
                  "bg-accent h-2 rounded-full transition-all duration-1000 ease-out",
                  mounted ? "w-full" : "w-0" // We'll use style for exact width, but w-0 for initial state
                )} 
                style={{ width: mounted ? `${item.percentage}%` : '0%' }}
              />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {item.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
