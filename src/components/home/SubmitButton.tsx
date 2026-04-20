"use client";

import { useFormStatus } from "react-dom";
import { Loader2, Check } from "lucide-react";
import { FORM_BUTTON_TEXT_CLASSNAME } from "@/lib/home-title-styles";
import { cn } from "@/lib/utils";

interface SubmitButtonProps {
  isSuccess: boolean;
}

export function SubmitButton({ isSuccess }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={cn(
        `flex min-h-[3.25rem] w-full items-center justify-center rounded-[28px] border border-transparent bg-black px-8 py-3.5 ${FORM_BUTTON_TEXT_CLASSNAME} text-white shadow-none`,
        "transition-[background-color,border-color,transform] duration-200 ease-out",
        "hover:bg-zinc-900",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
        "active:scale-[0.99] active:border-black",
        "dark:bg-black dark:text-white dark:hover:bg-zinc-900 dark:focus-visible:outline-black",
        isSuccess &&
          "bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500/90 dark:text-white dark:hover:bg-emerald-500",
        pending && "cursor-not-allowed opacity-75",
      )}
      disabled={pending || isSuccess}
    >
      {pending && (
        <Loader2 className="-ml-1 mr-2.5 h-5 w-5 shrink-0 animate-spin text-white dark:text-zinc-900" />
      )}
      {isSuccess && <Check className="-ml-1 mr-2 h-5 w-5 shrink-0" />}
      <span>
        {pending
          ? "Sending..."
          : isSuccess
            ? "Message sent"
            : "Send message"}
      </span>
    </button>
  );
}
