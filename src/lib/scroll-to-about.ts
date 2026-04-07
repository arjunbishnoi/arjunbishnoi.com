"use client";

/**
 * Scrolls to the correct "about" section based on screen size.
 * Desktop (lg+): centers the bento grid in the viewport.
 * Mobile: places the profile card top just below the floating header.
 */
export function scrollToAboutSection() {
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const target = document.querySelector(
    isDesktop ? "[data-about-desktop-grid]" : "[data-about-mobile]"
  ) as HTMLElement | null;
  const desktopBentoFallbackTarget = document.querySelector(
    "[data-about-desktop-bento]"
  ) as HTMLElement | null;
  const desktopFallbackTarget = document.querySelector(
    "[data-about-desktop]"
  ) as HTMLElement | null;
  const finalTarget = isDesktop
    ? target ?? desktopBentoFallbackTarget ?? desktopFallbackTarget
    : target;
  if (!finalTarget) return;

  // Wait for any animations/transitions to settle
  setTimeout(() => {
    const rect = finalTarget.getBoundingClientRect();
    const absoluteTop = rect.top + window.scrollY;

    if (isDesktop) {
      // Center the full desktop bento grid in the usable area below the floating header.
      const headerEl = document.querySelector("header");
      const headerBottom = headerEl?.getBoundingClientRect().bottom ?? 0;
      const contentTop = Math.min(window.innerHeight - 1, Math.max(0, headerBottom));
      const contentCenter = contentTop + (window.innerHeight - contentTop) / 2;
      const desiredTop = absoluteTop + rect.height / 2 - contentCenter;
      const maxTop = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      window.scrollTo({ top: Math.min(Math.max(0, desiredTop), maxTop), behavior: "smooth" });
    } else {
      // Place profile card top just below the floating header
      const headerOffset = 80;
      window.scrollTo({
        top: absoluteTop - headerOffset,
        behavior: "smooth",
      });
    }
  }, 150);
}
