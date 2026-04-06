"use client";

import { useEffect } from "react";
import { useTheme } from "@/components/theme-provider";

/**
 * Dynamically updates the <meta name="theme-color"> tag to match
 * the active theme. This ensures the Safari status bar on iPhone
 * reflects the correct color when the user toggles light/dark mode
 * on the site (not just the system preference).
 */
export function ThemeColorMeta() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // Match the exact neumorphic surface background colors to eliminate the top status bar "filling" line
    const color = resolvedTheme === "dark" ? "#1e1e22" : "#e0e5ec";

    // Update existing theme-color meta tags or create one
    const existingMetas = document.querySelectorAll('meta[name="theme-color"]');
    if (existingMetas.length > 0) {
      existingMetas.forEach((meta) => {
        meta.setAttribute("content", color);
        // Remove media attribute so it applies unconditionally
        meta.removeAttribute("media");
      });
    } else {
      const meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.content = color;
      document.head.appendChild(meta);
    }
  }, [resolvedTheme]);

  return null;
}
