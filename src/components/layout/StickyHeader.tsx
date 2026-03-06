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



  const STICKY_THRESHOLD = 80 // Increased to clear the floating header margin

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
                "transition-all duration-0 h-16 flex items-center",
                isStuck 
                ? "fixed md:relative left-0 right-0 z-40 justify-center pointer-events-none md:pointer-events-auto md:!top-auto"
                : "absolute md:relative inset-0 z-30 justify-center"
            )}
            style={{ top: isStuck ? "calc(var(--navbar-height, 3.5rem) + 1.25rem)" : "0" }}
        >
            <div
                className={cn(
                    "w-full max-w-7xl px-6 lg:px-8 flex items-center justify-center pointer-events-auto transition-opacity duration-300",
                    (isStuck) ? "opacity-100" : "opacity-100"
                )}
            >
                <div className="w-full flex justify-center transition-all duration-700 ease-soft-out">
                     <Link
                        href={to}
                        className={cn(
                            "group flex items-center relative transition-all duration-700 ease-soft-out border",
                            isStuck
                             ? cn(
                                 "backdrop-blur-md rounded-full shadow-lg transition-all",
                                 "md:w-full md:px-0 md:bg-transparent md:border-transparent md:shadow-none md:rounded-none", // Desktop sticky: full width, transparent
                                 "w-[150px] pl-6 pr-2 py-2", // Mobile sticky: pill shape
                                 mounted && theme === "dark" 
                                    ? "bg-black/80 border-white/10 hover:bg-white/10 md:bg-transparent md:border-transparent md:hover:bg-transparent" 
                                    : "bg-white/80 border-black/5 hover:bg-black/5 md:bg-transparent md:border-transparent md:hover:bg-transparent"
                               )
                             : "w-full bg-transparent border-transparent"
                        )}
                     >
                        {/* Gradient fade layer for smoother transition to neumorphic button */}
                        <div 
                          className={cn(
                            "absolute inset-0 rounded-full md:hidden pointer-events-none transition-opacity duration-700",
                            isStuck ? "opacity-100" : "opacity-0"
                          )}
                          style={{
                            background: "linear-gradient(to right, transparent 30%, var(--neu-surface) 80%)"
                          }}
                        />

                        {/* Title - MOBILE MORPHING ANIMATED */}
                        <div 
                          className={cn(
                            "relative z-10 overflow-hidden flex items-center transition-all duration-500 ease-soft-out md:hidden", 
                            isStuck 
                            ? "flex-grow pl-1 pr-0" 
                            : "flex-grow-0 pl-0 pr-4"
                          )}
                        >
                          <span 
                            className={cn(
                              "whitespace-nowrap transition-all duration-500 ease-soft-out", 
                              isStuck ? "text-sm font-medium -translate-y-[1px]" : "text-2xl font-bold translate-y-0",
                              mounted && theme === "dark" 
                                ? (isStuck ? "text-white group-hover:text-white" : "text-white group-hover:text-accent")
                                : (isStuck ? "text-foreground group-hover:text-foreground" : "text-foreground group-hover:text-accent")
                            )}
                          >
                           {title}
                          </span>
                        </div>

                         {/* Title (Large / Unstuck State - DESKTOP STATIC) */}
                        <div
                            className={cn(
                                "hidden md:flex overflow-hidden items-center transition-all pr-4 max-w-[500px] opacity-100"
                            )}
                        >
                            <span
                                className={cn(
                                    "text-2xl font-bold whitespace-nowrap transition-all ease-out",
                                    mounted && theme === "dark" ? "text-white group-hover:text-accent" : "text-foreground group-hover:text-accent"
                                )}
                            >
                                {title}
                            </span>
                        </div>

                        {/* Arrow (Circle Background) - Neumorphic design with inset fill */}
                        <div 
                          className={cn(
                              "relative z-10 flex-none flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full ml-auto transition-transform duration-300 active:scale-95",
                              "neu-raised"
                          )}
                          style={{
                              "--neu-shadow-distance": "4px",
                              "--neu-shadow-blur": "8px"
                          } as React.CSSProperties}
                        >
                            {/* Inset black/white fill for contrast matching the hero rectangles */}
                            <div 
                              className="absolute inset-[3px] md:inset-[4px] rounded-full pointer-events-none"
                              style={{ 
                                backgroundColor: mounted && theme === "dark" ? "#ffffff" : "#000000",
                                boxShadow: mounted && theme === "dark" 
                                   ? "inset 1px 1px 3px rgba(0,0,0,0.2), inset -1px -1px 3px rgba(255,255,255,0.5)" 
                                   : "inset 2px 2px 4px rgba(0,0,0,0.5), inset -1px -1px 3px rgba(255,255,255,0.15)",
                              }}
                            />
                            <span 
                            className={cn(
                                "relative z-10 transition-colors duration-300",
                                mounted && theme === "dark" ? "text-black" : "text-white"
                            )}
                            >
                             <ArrowRight className="w-5 h-5 md:w-6 md:h-6" /> 
                            </span>
                        </div>
                     </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
