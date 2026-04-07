"use client";

import type { MouseEvent } from "react";
import { isHomeSectionHash, scrollToHomeSection } from "@/lib/home-section-navigation";

type RouterLike = {
  push: (href: string) => void;
};

type UseHeaderNavigationParams = {
  pathname: string;
  router: RouterLike;
  closeMobileMenuThen: (afterClose: () => void) => void;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
};

export function useHeaderNavigation({
  pathname,
  router,
  closeMobileMenuThen,
  setIsMobileMenuOpen,
}: UseHeaderNavigationParams) {
  const resetToHomeView = () => {
    if (pathname !== "/") {
      router.push("/");
      return;
    }

    if (window.location.hash) {
      history.replaceState(null, "", "/");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    closeMobileMenuThen(resetToHomeView);
  };

  const handleNavClick = (event: MouseEvent, href: string) => {
    const runHashScroll = (hash: string) => {
      const normalizedHash = hash.toLowerCase();
      if (isHomeSectionHash(normalizedHash)) {
        scrollToHomeSection(normalizedHash);
        return;
      }

      const el = document.querySelector(normalizedHash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (href.startsWith("/#") && pathname === "/") {
      event.preventDefault();
      const hash = href.slice(1);
      history.pushState(null, "", hash);

      closeMobileMenuThen(() => runHashScroll(hash));
      return;
    }

    setIsMobileMenuOpen(false);
  };

  return {
    handleLogoClick,
    handleNavClick,
  };
}
