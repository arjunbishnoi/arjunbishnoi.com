"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"

const icons = [
  {
    name: "Wise",
    bg: "#9FE870",
    logo: (
      <svg viewBox="0 0 46 28" className="w-[65%] h-[65%] fill-black" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h11.1l7.85 10.32L27.67 0H46L30.13 18.04l-6.84 7.82-3.15 2.14-3.15-2.14L3.41 11.52l13.68-.01L0 0z" />
      </svg>
    ),
  },
  {
    name: "Airbnb",
    bg: "#FF5A5F",
    logo: (
      <svg viewBox="0 0 24 24" className="w-[55%] h-[55%] fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.1c-.2 0-.4 0-.6.1-.2 0-.3.1-.5.2L2.7 8.3c-.4.2-.7.6-.8 1.1-.1.4 0 .9.2 1.3l2.8 5.6c.1.2.3.4.5.6.2.1.4.2.6.2h12c.2 0 .4-.1.6-.2s.4-.4.5-.6l2.8-5.6c.2-.4.3-.8.2-1.3-.1-.5-.4-.9-.8-1.1l-8.2-5.9c-.2-.1-.3-.2-.5-.2-.1-.1-.3-.1-.5-.1z" />
      </svg>
    ),
  },
  {
    name: "Dropbox",
    bg: "#0061FF",
    logo: (
      <svg viewBox="0 0 24 24" className="w-[50%] h-[50%] fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2l6 3.82L18 2l5 3.14L17 8.28l6 3.14L12 18.28l-11-6.86 6-3.14L2 5.14zM12 19L1 12.14V14l11 6.86L23 14v-1.86z" />
      </svg>
    ),
  },
  {
    name: "Shopify",
    bg: "#95bf47",
    logo: (
      <svg viewBox="0 0 24 24" className="w-[50%] h-[50%] fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5l10-5l-10-5zM2 17l10 5l10-5M2 12l10 5l10-5" />
      </svg>
    ),
  },
]

export function MobbinIconStack() {
  const [index, setIndex] = useState(0)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % icons.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"
  
  // Define background colors for light/dark modes
  const midBg = isDark ? "#8A8A8A" : "#999999"
  const backBg = isDark ? "#505050" : "#D1D1D1" // Colors swapped at user request

  return (
    <div className="relative w-14 h-14 md:w-[88px] md:h-[88px] flex items-center justify-center pointer-events-none select-none overflow-visible">
      <AnimatePresence initial={false} mode="popLayout">
        {icons.map((icon, i) => {
          const relPos = (i - index + icons.length) % icons.length
          const isFront = relPos === 0
          const isMid = relPos === 1
          const isBack = relPos === 2
          
          if (!(isFront || isMid || isBack)) return null

          return (
            <motion.div
              key={icon.name}
              initial={{ opacity: 0, scale: 0.5, y: -40 }}
              animate={{ 
                opacity: 1,
                scale: isFront ? 1 : isMid ? 0.85 : 0.7,
                y: isFront ? 0 : isMid ? -10 : -20,
                background: isFront ? icon.bg : isMid ? midBg : backBg,
                zIndex: 10 - relPos,
              }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[18px] md:rounded-[26.4px] shadow-sm transform-gpu"
            >
              <AnimatePresence>
                {isFront && (
                  <motion.div
                    key={`logo-${icon.name}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    {icon.logo}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
