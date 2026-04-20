"use client";

import Link from "next/link";
import { socialLinks } from "@/lib/content/social-links";
import { SocialBrandIcon } from "@/components/social/SocialBrandIcon";
import { cn } from "@/lib/utils";
import { navigateToHomeSection } from "@/lib/home-section-navigation";

type HeroSocialLinksRowProps = {
  variant: "mobile" | "desktop";
};

export function HeroSocialLinksRow({ variant }: HeroSocialLinksRowProps) {
  const isDesktop = variant === "desktop";
  const tileClassName = cn(
    "pill-interactive flex items-center justify-center group transition-colors",
    isDesktop ? "hover:bg-zinc-100/10" : "active:bg-zinc-100/10",
  );
  const iconWrapClassName = cn(
    "rounded-full flex items-center justify-center transition-colors",
    isDesktop ? "w-12 h-12 xl:w-14 xl:h-14" : "w-[3.4rem] h-[3.4rem]",
  );
  const iconClassName = isDesktop
    ? "block w-6 h-6 xl:w-7 xl:h-7 fill-current"
    : "block w-[1.75rem] h-[1.75rem] fill-current";

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateToHomeSection("#contact");
  };

  return (
    <div className="grid grid-cols-4 h-full">
      <a
        href={socialLinks.behance}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(tileClassName, "border-r neu-separator")}
      >
        <div
          className={cn(
            iconWrapClassName,
            "text-[#1769FF] group-hover:opacity-100 opacity-90",
          )}
        >
          <SocialBrandIcon brand="behance" className={iconClassName} />
        </div>
      </a>
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(tileClassName, "border-r neu-separator")}
      >
        <div
          className={cn(
            iconWrapClassName,
            "text-zinc-900 dark:text-white group-hover:opacity-100 opacity-90",
          )}
        >
          <SocialBrandIcon brand="github" className={iconClassName} />
        </div>
      </a>
      <Link
        href="/#contact"
        onClick={handleContactClick}
        className={cn(tileClassName, "border-r neu-separator")}
      >
        <div
          className={cn(
            iconWrapClassName,
            "text-zinc-900 dark:text-white group-hover:opacity-100 opacity-90",
          )}
        >
          <SocialBrandIcon brand="globe" className={iconClassName} />
        </div>
      </Link>
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={tileClassName}
      >
        <div
          className={cn(
            iconWrapClassName,
            "text-[#0A66C2] group-hover:opacity-100 opacity-90",
          )}
        >
          <SocialBrandIcon brand="linkedin" className={iconClassName} />
        </div>
      </a>
    </div>
  );
}
