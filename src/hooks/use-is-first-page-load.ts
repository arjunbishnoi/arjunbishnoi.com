"use client"

import { useState, useEffect } from "react"

export function useIsFirstPageLoad() {
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoadedOnce")
    if (hasLoaded) {
      setIsFirstLoad(false)
    } else {
      sessionStorage.setItem("hasLoadedOnce", "true")
      setIsFirstLoad(true)
    }
  }, [])

  return isFirstLoad
}
