"use client"

import { useEffect, useRef } from "react"

export function usePersistedHorizontalScroll(storageKey: string) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const savedScrollLeft = sessionStorage.getItem(storageKey)
    if (savedScrollLeft !== null) {
      const value = Number(savedScrollLeft)
      if (!Number.isNaN(value)) {
        requestAnimationFrame(() => {
          container.scrollLeft = value
        })
      }
    }

    let frameId = 0
    const handleScroll = () => {
      if (frameId) {
        cancelAnimationFrame(frameId)
      }

      frameId = requestAnimationFrame(() => {
        sessionStorage.setItem(storageKey, String(container.scrollLeft))
      })
    }

    container.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId)
      }
      container.removeEventListener("scroll", handleScroll)
    }
  }, [storageKey])

  return containerRef
}