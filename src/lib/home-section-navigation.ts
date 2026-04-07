"use client";

import { scrollToAboutSection } from "@/lib/scroll-to-about";
import { scrollToContactSection } from "@/lib/scroll-to-contact";
import {
  isHomeSectionHash,
  parseHomeSectionFromValues,
  type HomeSectionHash,
} from "@/lib/home-section-parser";

export { isHomeSectionHash, parseHomeSectionFromValues };

function normalizeHash(hash: string) {
  return hash.trim().toLowerCase();
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
  return parseHomeSectionFromValues(window.location.hash, window.location.search);
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