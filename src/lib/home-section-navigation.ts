"use client";

import { scrollToAboutSection } from "@/lib/scroll-to-about";
import { scrollToContactSection } from "@/lib/scroll-to-contact";

export type HomeSectionHash = "#about" | "#contact";

function normalizeHash(hash: string) {
  return hash.trim().toLowerCase();
}

export function isHomeSectionHash(hash: string): hash is HomeSectionHash {
  const normalized = normalizeHash(hash);
  return normalized === "#about" || normalized === "#contact";
}

export function scrollToHomeSection(hash: HomeSectionHash) {
  if (hash === "#about") {
    scrollToAboutSection();
    return;
  }

  scrollToContactSection();
}

export function navigateToHomeSection(hash: HomeSectionHash) {
  history.pushState(null, "", hash);
  scrollToHomeSection(hash);
}

export function readHomeSectionFromLocation(): HomeSectionHash | null {
  const hash = normalizeHash(window.location.hash);
  if (isHomeSectionHash(hash)) {
    return hash;
  }

  const section = new URLSearchParams(window.location.search)
    .get("section")
    ?.toLowerCase();

  if (section === "about") {
    return "#about";
  }

  if (section === "contact") {
    return "#contact";
  }

  return null;
}

export function syncHomeSectionFromLocation() {
  const hash = readHomeSectionFromLocation();
  if (!hash) {
    return false;
  }

  if (normalizeHash(window.location.hash) !== hash) {
    history.replaceState(null, "", hash);
  }

  scrollToHomeSection(hash);
  return true;
}