"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const MENU_CLOSE_DELAY_MS = 360;

function releaseGlobalMenuLocks() {
  document.body.style.overflow = "";
  document.documentElement.classList.remove("mobile-menu-open");
}

export function useMobileMenuLifecycle() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuContainerRef = useRef<HTMLDivElement>(null);

  const closeMobileMenuThen = useCallback(
    (afterClose: () => void) => {
      if (!isMobileMenuOpen) {
        afterClose();
        return;
      }

      setIsMobileMenuOpen(false);
      window.setTimeout(() => {
        releaseGlobalMenuLocks();
        afterClose();
      }, MENU_CLOSE_DELAY_MS);
    },
    [isMobileMenuOpen],
  );

  // Lock page scroll and toggle global dimming state while mobile menu is open.
  useEffect(() => {
    const root = document.documentElement;
    let timeoutId: number;

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      root.classList.add("mobile-menu-open");
    } else {
      root.classList.remove("mobile-menu-open");
      timeoutId = window.setTimeout(() => {
        document.body.style.overflow = "";
      }, MENU_CLOSE_DELAY_MS);
    }

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isMobileMenuOpen]);

  // Failsafe cleanup on unmount.
  useEffect(() => {
    return () => {
      releaseGlobalMenuLocks();
    };
  }, []);

  // Handle browser restore flows (for example returning from PDFs).
  useEffect(() => {
    const syncFromPageRestore = () => {
      releaseGlobalMenuLocks();
      setIsMobileMenuOpen(false);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        syncFromPageRestore();
      }
    };

    window.addEventListener("pageshow", syncFromPageRestore);
    window.addEventListener("focus", syncFromPageRestore);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("pageshow", syncFromPageRestore);
      window.removeEventListener("focus", syncFromPageRestore);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Close mobile menu on outside click and prevent click-through.
  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handleOutsideInteraction = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) {
        return;
      }

      if (mobileMenuContainerRef.current?.contains(target)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      setIsMobileMenuOpen(false);
    };

    document.addEventListener("click", handleOutsideInteraction, true);

    return () => {
      document.removeEventListener("click", handleOutsideInteraction, true);
    };
  }, [isMobileMenuOpen]);

  return {
    isMobileMenuOpen,
    mobileMenuAnimationState: isMobileMenuOpen ? ("open" as const) : ("closed" as const),
    mobileMenuContainerRef,
    setIsMobileMenuOpen,
    closeMobileMenuThen,
  };
}
