"use client";

export const SCROLL_SETTLE_DELAY_MS = 150;

export function getMaxScrollTop() {
  return Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight,
  );
}

export function clampScrollTop(top: number) {
  return Math.min(Math.max(0, top), getMaxScrollTop());
}

export function smoothScrollTo(top: number) {
  window.scrollTo({
    top: clampScrollTop(top),
    behavior: "smooth",
  });
}

export function runAfterScrollSettle(callback: () => void) {
  window.setTimeout(callback, SCROLL_SETTLE_DELAY_MS);
}