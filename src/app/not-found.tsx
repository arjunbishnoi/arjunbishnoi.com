"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import {
  EMPTY_STATE_TITLE_CLASSNAME,
  PILL_BUTTON_TEXT_CLASSNAME,
  SUBTLE_BODY_TEXT_CLASSNAME,
} from "@/lib/home-title-styles";
import { cn } from "@/lib/utils";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center px-6 text-center pt-24 pb-12">
        <h2 className={`mb-2 ${EMPTY_STATE_TITLE_CLASSNAME}`}>Page not found</h2>
        <p className={`mb-8 cursor-default md:mb-12 lg:mb-14 ${SUBTLE_BODY_TEXT_CLASSNAME}`}>
          The requested URL {pathname} does not exist.
        </p>
        <Link
          href="/"
          className={cn(
            `flex-none inline-flex h-12 items-center justify-center gap-2 rounded-full bg-black px-8 text-white ${PILL_BUTTON_TEXT_CLASSNAME} lg:h-14 lg:px-8`,
            "dark:bg-white dark:text-black",
            "transition-transform duration-200 active:scale-[0.98]",
          )}
        >
          Return home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
