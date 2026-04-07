"use client"

import { useEffect } from "react"
import { syncHomeSectionFromLocation } from "@/lib/home-section-navigation"

export function useHomeSectionSync() {
  useEffect(() => {
    const handleSectionLocationChange = () => {
      syncHomeSectionFromLocation()
    }

    handleSectionLocationChange()
    window.addEventListener("hashchange", handleSectionLocationChange)
    window.addEventListener("popstate", handleSectionLocationChange)

    return () => {
      window.removeEventListener("hashchange", handleSectionLocationChange)
      window.removeEventListener("popstate", handleSectionLocationChange)
    }
  }, [])
}
