"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";

type WorkShareButtonProps = {
  title: string;
};

export function WorkShareButton({ title }: WorkShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // Fall through to clipboard copy when native share is dismissed or unavailable.
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // No-op: button remains clickable even if clipboard is blocked.
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="pill-interactive flex h-10 items-center justify-center gap-2 rounded-full bg-black px-5 text-[0.85rem] font-medium tracking-[-0.018em] text-white dark:bg-white dark:text-black md:h-12 md:gap-2.5 md:px-7 md:text-[1rem] lg:h-14 lg:px-8 lg:text-[1.08rem]"
      aria-label="Share this work"
    >
      {copied ? "Copied link" : "Share"}
      <Share2
        className="h-4 w-4 shrink-0 md:h-5 md:w-5 lg:h-[1.35rem] lg:w-[1.35rem]"
        strokeWidth={2.25}
        aria-hidden
      />
    </button>
  );
}
