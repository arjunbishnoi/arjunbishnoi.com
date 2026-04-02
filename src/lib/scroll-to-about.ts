"use client";

/**
 * Scrolls to the correct "about" section based on screen size.
 * Desktop (lg+): centers the bento grid in the viewport.
 * Mobile: places the profile card top just below the floating header.
 */
export function scrollToAboutSection() {
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const target = document.querySelector(
    isDesktop ? "[data-about-desktop]" : "[data-about-mobile]"
  ) as HTMLElement | null;
  if (!target) return;

  // Wait for any animations/transitions to settle
  setTimeout(() => {
    const rect = target.getBoundingClientRect();
    const absoluteTop = rect.top + window.scrollY;

    if (isDesktop) {
      // Center the bento grid vertically in the viewport
      const offset = absoluteTop - (window.innerHeight - rect.height) / 2;
      window.scrollTo({ top: Math.max(0, offset), behavior: "smooth" });
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
