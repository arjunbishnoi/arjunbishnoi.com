"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

const icons = [
  {
    name: "Swift",
    bg: "#F05138",
    logo: (
      <svg className="w-full h-full" viewBox="0 0 333334 333015" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="173948" y1="-2539.76" x2="125024" y2="274914">
            <stop offset="0" stopColor="#e5a235"/><stop offset="1" stopColor="#d23629"/>
          </linearGradient>
          <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="196383" y1="-1115.35" x2="137302" y2="333952">
            <stop offset="0" stopColor="#f9b13d"/><stop offset="1" stopColor="#e63830"/>
          </linearGradient>
        </defs>
        <g fillRule="nonzero">
          <path d="M73350 243h186101c41094-298 73883 32298 73883 73585v185770c0 40626-32789 73763-73883 73415H73350c-39718 0-72999-32789-72999-73415V73828C351 32541 33632-523 73350 243z" fill="url(#a)"/>
          <path d="M281382 272374s-12972-21008-34183-21008c-21660 0-32351 21008-75206 21008-92987 0-137068-76506-138071-78316 0 519 519 519 519 519L0 158396V73558C0 32462 33572 1 73099 1h66538l48550 49735c52 0 52-519 532-1015 110252 76190 74705 158613 74705 158613s30525 34574 17958 65042z" fill="url(#b)"/>
          <path d="M189263 49490c109868 74795 74378 157625 74378 157625s30534 34878 18035 65459c0 0-12991-21231-34161-21231-21219 0-33928 21231-75302 21231-94193 0-137215-78533-137215-78533 83546 56856 141921 16544 141921 16544C138636 188424 57167 83892 57167 83892c70392 59101 100324 74754 100324 74754-17690-14066-68076-87098-68076-87098 41046 40763 121543 98528 121543 98528 22163-64076-21694-120586-21694-120586z" fill="#fefefe"/>
        </g>
      </svg>
    ),
  },
  {
    name: "Kotlin",
    bg: "#FFFFFF",
    logo: (
      <svg className="w-[60%] h-[60%]" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="kotlin-grad" x1="500.003" x2="-.097" y1="579.106" y2="1079.206" gradientTransform="translate(15.534 -96.774) scale(.1939)" gradientUnits="userSpaceOnUse">
            <stop offset=".003" stopColor="#e44857"/>
            <stop offset=".469" stopColor="#c711e1"/>
            <stop offset="1" stopColor="#7f52ff"/>
          </linearGradient>
        </defs>
        <path fill="url(#kotlin-grad)" d="M112.484 112.484H15.516V15.516h96.968L64 64Zm0 0"/>
      </svg>
    ),
  },
  {
    name: "Figma",
    bg: "#9FE870",
    logo: (
      <svg className="w-[55%] h-[55%]" viewBox="0 0 346 512.36" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" xmlns="http://www.w3.org/2000/svg">
        <g fillRule="nonzero">
          <path fill="#00B6FF" d="M172.53 246.9c0-42.04 34.09-76.11 76.12-76.11h11.01c.3.01.63-.01.94-.01 47.16 0 85.4 38.25 85.4 85.4 0 47.15-38.24 85.39-85.4 85.39-.31 0-.64-.01-.95-.01l-11 .01c-42.03 0-76.12-34.09-76.12-76.12V246.9z"/>
          <path fill="#24CB71" d="M0 426.98c0-47.16 38.24-85.41 85.4-85.41l87.13.01v84.52c0 47.65-39.06 86.26-86.71 86.26C38.67 512.36 0 474.13 0 426.98z"/>
          <path fill="#FF7237" d="M172.53.01v170.78h87.13c.3-.01.63.01.94.01 47.16 0 85.4-38.25 85.4-85.4C346 38.24 307.76 0 260.6 0c-.31 0-.64.01-.95.01h-87.12z"/>
          <path fill="#FF3737" d="M0 85.39c0 47.16 38.24 85.4 85.4 85.4h87.13V.01H85.39C38.24.01 0 38.24 0 85.39z"/>
          <path fill="#874FFF" d="M0 256.18c0 47.16 38.24 85.4 85.4 85.4h87.13V170.8H85.39C38.24 170.8 0 209.03 0 256.18z"/>
        </g>
      </svg>
    ),
  },
]

export function MobbinIconStack() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % icons.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  // Use CSS variables for responsive offset to avoid SSR -> hydration shifts.
  // Defined in globals.css under `.mobbin-icon-stack`.
  const midY = "calc(var(--mobbin-icon-offset) * -1)"
  const backY = "calc(var(--mobbin-icon-offset) * -2)"

  return (
    <div className="mobbin-icon-stack relative w-14 h-14 md:w-[88px] md:h-[88px] lg:w-[68px] lg:h-[68px] xl:w-16 xl:h-16 flex items-center justify-center pointer-events-none select-none overflow-visible">
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
              initial={{
                opacity: 1,
                scale: isFront ? 1 : isMid ? 0.85 : 0.7,
                y: isFront ? 0 : isMid ? midY : backY,
                background: isFront
                  ? icon.bg
                  : isMid
                    ? "var(--mobbin-stack-mid-bg)"
                    : "var(--mobbin-stack-back-bg)",
              }}
              animate={{ 
                opacity: 1,
                scale: isFront ? 1 : isMid ? 0.85 : 0.7,
                y: isFront ? 0 : isMid ? midY : backY,
                background: isFront
                  ? icon.bg
                  : isMid
                    ? "var(--mobbin-stack-mid-bg)"
                    : "var(--mobbin-stack-back-bg)",
                zIndex: 10 - relPos,
              }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[18px] md:rounded-[26.4px] lg:rounded-[20px] xl:rounded-[18px] shadow-sm transform-gpu"
            >
              <AnimatePresence>
                {isFront && (
                  <motion.div
                    key={`logo-${icon.name}`}
                    initial={{ opacity: 1, scale: 1 }}
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
