"use client"

import React, { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { useActiveSection } from "@/hooks/use-active-section"

interface StickyHeaderProps {
  title: string
  to: string
}

export function StickyHeader({ title, to }: StickyHeaderProps) {
  const placeholderRef = useRef<HTMLDivElement>(null)
  const [isStuck, setIsStuck] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  

  const setSectionStuck = useActiveSection((state) => state.setSectionStuck)



  const STICKY_THRESHOLD = 60 // Matches top: calc(3.5rem + 0.25rem) approx 60px to prevent jump

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const checkStickiness = () => {
      if (!placeholderRef.current) return
      
      const rect = placeholderRef.current.getBoundingClientRect()
      const isAtOrAboveStickyPos = rect.top <= STICKY_THRESHOLD
      
      
      if (isAtOrAboveStickyPos !== isStuck) {
        setIsStuck(isAtOrAboveStickyPos)
        setSectionStuck(title, isAtOrAboveStickyPos)
      }
    }

    window.addEventListener("scroll", checkStickiness, { passive: true })
    checkStickiness() // Check on mount

    return () => {
      window.removeEventListener("scroll", checkStickiness)
      // Cleanup: ensure we unstick if unmounting while stuck? 
      // Actually, if we unmount, we might want to remove from store.
      // But standard navigating away clears state anyway if store resets? 
      // Zustand store is global, so we should probably clear it.
      // But multiple sticky headers exist on page.
      // Let's just follow Vue logic which didn't explicit cleanup state on unmount 
      // (except implicit inactivity).
      // Actually, Vue logic:
      // setSectionStuck(props.title, isStuck.value)
      // If component unmounts, isStuck becomes irrelevant?
      setSectionStuck(title, false)
    }
  }, [title, isStuck, setSectionStuck])

  return (
    // Placeholder to maintain layout space
    <div ref={placeholderRef} className="h-16 relative z-30">
        <div
            className={cn(
                "transition-all duration-0 h-16 flex items-center", // Added h-16 and flex items-center
                isStuck 
                ? "fixed left-0 right-0 z-40 justify-center pointer-events-none"
                : "absolute inset-0 z-30 justify-center"
            )}
            style={{ top: isStuck ? "calc(var(--navbar-height, 3.5rem) + 0.25rem)" : "0" }}
        >
            <div
                className={cn(
                    "w-full max-w-7xl px-6 lg:px-8 flex items-center justify-center pointer-events-auto transition-opacity duration-300",
                    (isStuck) ? "opacity-100" : "opacity-100"
                )}
            >
                <div className="w-full flex justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                     <Link
                        href={to}
                        className={cn(
                            "group flex items-center relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] border",
                            isStuck
                             ? cn(
                                 "backdrop-blur-md rounded-full pl-6 pr-2 py-2 shadow-lg w-[150px]",
                                 mounted && theme === "dark" 
                                    ? "bg-black/80 border-white/10 hover:bg-white/10" 
                                    : "bg-white/80 border-black/5 hover:bg-black/5"
                               )
                             : "w-full bg-transparent border-transparent"
                        )}
                     >
                        <div 
                          className={cn(
                            "overflow-hidden flex items-center flex-grow transition-all ease-[cubic-bezier(0.32,0.72,0,1)] py-1",
                            isStuck 
                            ? "duration-500 delay-400 opacity-100" 
                            : "max-w-0 duration-300 opacity-0"
                          )}
                        >
                          <span 
                            className={cn(
                              "text-sm font-medium whitespace-nowrap transition-all ease-out pl-0 -translate-y-[1px]", 
                              mounted && theme === "dark" ? "text-white group-hover:text-white" : "text-foreground group-hover:text-foreground",
                              isStuck ? "opacity-100 duration-300 delay-500" : "opacity-0 duration-200"
                            )}
                          >
                           {title}
                          </span>
                        </div>
                        
                         {/* Title (Large / Unstuck State) */}
                        <div
                            className={cn(
                                "overflow-hidden flex items-center transition-all ease-[cubic-bezier(0.32,0.72,0,1)] pr-4",
                                isStuck ? "max-w-0 duration-500 opacity-0" : "max-w-[500px] duration-500 opacity-100"
                            )}
                        >
                            {!isStuck && (
                                <span
                                    className={cn(
                                        "text-2xl font-bold whitespace-nowrap transition-all ease-out delay-200",
                                        mounted && theme === "dark" ? "text-white group-hover:text-accent" : "text-foreground group-hover:text-accent"
                                    )}
                                >
                                    {title}
                                </span>
                            )}
                        </div>

                        {/* Arrow (Circle Background) - Always visible */}
                        <div 
                          className={cn(
                              "flex-none flex items-center justify-center w-8 h-8 rounded-full ml-auto transition-all duration-300 scale-100 opacity-100", // Always visible
                              mounted && theme === "dark" ? "bg-white" : "bg-black"
                          )}
                        >
                            <span 
                            className={cn(
                                "transition-colors duration-300",
                                mounted && theme === "dark" ? "text-black" : "text-white"
                            )}
                            >
                             <ArrowRight className="w-5 h-5" /> 
                            </span>
                        </div>
                     </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
