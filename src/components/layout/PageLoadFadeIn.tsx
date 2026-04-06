"use client"

import React from "react"
import { motion, useReducedMotion } from "motion/react"
import { usePathname } from "next/navigation"

export function PageLoadFadeIn({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion()
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname}
      id="site-content"
      style={{ willChange: "transform, opacity" }}
      // No-op by default: hero/footer/stagger animations should control sequencing.
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        prefersReducedMotion ? { duration: 0 } : { duration: 0 }
      }
    >
      {children}
    </motion.div>
  )
}

