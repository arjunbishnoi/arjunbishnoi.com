"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

/**
 * Dynamically updates the <meta name="theme-color"> tag to match
 * the active theme. This ensures the Safari status bar on iPhone
 * reflects the correct color when the user toggles light/dark mode
 * on the site (not just the system preference).
 */
export function ThemeColorMeta() {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const color = resolvedTheme === "dark" ? "#000000" : "#ffffff"

    // Update existing theme-color meta tags or create one
    const existingMetas = document.querySelectorAll('meta[name="theme-color"]')
    if (existingMetas.length > 0) {
      existingMetas.forEach((meta) => {
        meta.setAttribute("content", color)
        // Remove media attribute so it applies unconditionally
        meta.removeAttribute("media")
      })
    } else {
      const meta = document.createElement("meta")
      meta.name = "theme-color"
      meta.content = color
      document.head.appendChild(meta)
    }
  }, [resolvedTheme])

  return null
}
