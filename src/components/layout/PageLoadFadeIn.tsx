"use client"

import React from "react"
import { motion } from "motion/react"
import { usePathname } from "next/navigation"

let hasLoadedOnce = false

export function PageLoadFadeIn({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [shouldAnimate, setShouldAnimate] = React.useState(!hasLoadedOnce)

  React.useEffect(() => {
    hasLoadedOnce = true
  }, [])

  return (
    <motion.div
      key={pathname}
      id="site-content"
      style={{ willChange: "transform, opacity" }}
      initial={shouldAnimate ? { opacity: 0 } : false}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}
