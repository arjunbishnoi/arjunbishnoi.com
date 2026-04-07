import Link from "next/link";
import type { MouseEvent } from "react";
import { motion } from "motion/react";
import { SocialBrandIcon } from "@/components/social/SocialBrandIcon";
import { mainLinks } from "@/lib/content/main-links";
import {
  menuSocialItems,
  mobileMenuListVariants,
  mobileMenuItemVariants,
  mobileMenuSocialVariants,
} from "@/components/layout/header/constants";

type MobileMenuContentProps = {
  isMobileMenuOpen: boolean;
  mobileMenuAnimationState: "open" | "closed";
  onNavClick: (event: MouseEvent, href: string) => void;
  onCloseMenu: () => void;
};

export function MobileMenuContent({
  isMobileMenuOpen,
  mobileMenuAnimationState,
  onNavClick,
  onCloseMenu,
}: MobileMenuContentProps) {
  return (
    <motion.div
      initial={false}
      animate={mobileMenuAnimationState}
      className={[
        "pl-[17px] pr-[12px] pb-[22px] w-full flex flex-col pt-6",
        isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
    >
      <motion.ul
        className="flex flex-col space-y-3"
        variants={mobileMenuListVariants}
      >
        {mainLinks.map((item) => (
          <motion.li key={item.name} variants={mobileMenuItemVariants}>
            {item.isDownload ? (
              <a
                href={item.href}
                download={item.downloadName}
                onClick={onCloseMenu}
                className="text-xl tracking-tight font-semibold transition-colors text-foreground hover:text-foreground inline-flex items-center gap-1 group"
              >
                {item.name}
              </a>
            ) : item.href.toLowerCase().endsWith(".pdf") ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onCloseMenu}
                className="text-xl tracking-tight font-semibold transition-colors hover:text-foreground inline-flex items-center gap-1 group text-foreground"
              >
                {item.name}
              </a>
            ) : (
              <Link
                href={item.href}
                className="text-xl tracking-tight font-semibold transition-colors hover:text-foreground inline-flex items-center gap-1 group text-foreground"
                onClick={(event) => onNavClick(event, item.href)}
              >
                {item.name}
              </Link>
            )}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        className="flex -ml-[17px] w-[calc(100%+29px)] items-center justify-center gap-[17px] mt-5 opacity-90"
        variants={mobileMenuSocialVariants}
      >
        {menuSocialItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            aria-label={item.name}
            onClick={onCloseMenu}
          >
            <SocialBrandIcon
              brand={item.brand}
              className="w-[1.875rem] h-[1.875rem]"
            />
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
}
