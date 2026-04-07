"use client";

import { runAfterScrollSettle, smoothScrollTo } from "@/lib/scroll-utils";

const MOBILE_HEADER_OFFSET = 104;
const DESKTOP_HEADER_OFFSET = 96;

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
  runAfterScrollSettle(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const headerOffset = isDesktop
      ? DESKTOP_HEADER_OFFSET
      : MOBILE_HEADER_OFFSET;

    const rect = target.getBoundingClientRect();
    const absoluteTop = rect.top + window.scrollY;
    const desiredTop = absoluteTop - headerOffset;

    smoothScrollTo(desiredTop);
  });
}