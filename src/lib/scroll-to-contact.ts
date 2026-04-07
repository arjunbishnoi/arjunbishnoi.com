"use client";

/**
 * Scrolls to the contact heading with responsive behavior.
 * Mobile/small screens: keep the heading below the floating header with extra breathing room.
 * Desktop: target the heading position but clamp to page bottom if needed.
 */
export function scrollToContactSection() {
  const heading = document.querySelector(
    "[data-contact-heading]",
  ) as HTMLElement | null;

  const fallbackSection = document.querySelector("#contact") as HTMLElement | null;
  const target = heading ?? fallbackSection;
  if (!target) return;

  // Wait for route/layout transitions to settle before measuring.
  setTimeout(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const headerOffset = isDesktop ? 96 : 104;

    const rect = target.getBoundingClientRect();
    const absoluteTop = rect.top + window.scrollY;
    const desiredTop = Math.max(0, absoluteTop - headerOffset);
    const maxTop = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight,
    );

    window.scrollTo({
      top: Math.min(desiredTop, maxTop),
      behavior: "smooth",
    });
  }, 150);
}