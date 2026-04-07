"use client";

import Link from "next/link";
import { socialLinks } from "@/lib/content/social-links";
import { HeroSocialLinksRow } from "@/components/home/hero/HeroSocialLinksRow";
import { HeroViewAllProjectsPill } from "@/components/home/hero/HeroViewAllProjectsPill";

type HeroBentoRowsProps = {
  variant: "mobile" | "desktop";
  blobColors: string[];
  socialAnchorId: string;
};

export function HeroBentoRows({
  variant,
  blobColors,
  socialAnchorId,
}: HeroBentoRowsProps) {
  const isDesktop = variant === "desktop";
  const linkClass = isDesktop
    ? "flex items-center justify-center border-r border-b neu-separator text-zinc-900 dark:text-white font-medium text-[0.81rem] xl:text-[0.86rem] hover:bg-zinc-100/10 transition-colors"
    : "flex items-center justify-center border-r border-b neu-separator text-zinc-900 dark:text-white font-medium text-[0.95rem] text-center active:bg-zinc-100/10 transition-colors";
  const rightLinkClass = isDesktop
    ? "flex items-center justify-center border-b neu-separator text-zinc-900 dark:text-white font-medium text-[0.81rem] xl:text-[0.86rem] hover:bg-zinc-100/10 transition-colors"
    : "flex items-center justify-center border-b neu-separator text-zinc-900 dark:text-white font-medium text-[0.95rem] text-center active:bg-zinc-100/10 transition-colors";

  return (
    <>
      <HeroViewAllProjectsPill variant={variant} blobColors={blobColors} />
      <div className="grid grid-cols-2">
        <Link href="/apps" className={linkClass}>
          <div className="whitespace-nowrap">Mobile Apps</div>
        </Link>
        <Link href="/ai" className={rightLinkClass}>
          <div className="whitespace-nowrap">AI/ML</div>
        </Link>
      </div>
      <div className="grid grid-cols-2">
        <Link href="/design" className={linkClass}>
          <div className="whitespace-nowrap">Design</div>
        </Link>
        <a
          href={socialLinks.resume}
          target="_blank"
          rel="noopener noreferrer"
          className={rightLinkClass}
        >
          <div className="whitespace-nowrap">Resume</div>
        </a>
      </div>
      <div id={socialAnchorId} className="h-full">
        <HeroSocialLinksRow variant={variant} />
      </div>
    </>
  );
}
