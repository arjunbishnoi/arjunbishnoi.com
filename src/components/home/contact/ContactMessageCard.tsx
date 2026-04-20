import type { ReactNode } from "react";
import { MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { COMPACT_TITLE_TEXT_CLASSNAME } from "@/lib/home-title-styles";
import { cn } from "@/lib/utils";
import {
  iconLucideClass,
  panelTransition,
} from "@/components/home/contact/contact-config";

type ContactMessageCardProps = {
  isOpen: boolean;
  onToggle: () => void;
  mobileForm: ReactNode;
};

export function ContactMessageCard({
  isOpen,
  onToggle,
  mobileForm,
}: ContactMessageCardProps) {
  return (
    <motion.div
      layout
      transition={{ layout: panelTransition }}
      className={cn(
        "relative z-10 flex w-full flex-col overflow-hidden transition-[background-color,transform] duration-200",
        "rounded-[32px] bg-white dark:bg-white shadow-none border border-transparent dark:border-white/10",
        !isOpen && "hover:scale-[0.995]",
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "flex min-h-[4rem] w-full items-center justify-between gap-3 px-6 py-4 text-left transition-colors duration-200 ease-out",
          "text-zinc-900 dark:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900",
        )}
        aria-expanded={isOpen}
        aria-controls="contact-form-panel"
      >
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <MessageSquare
            className={iconLucideClass}
            strokeWidth={1.85}
            aria-hidden
          />
          <span className={`truncate ${COMPACT_TITLE_TEXT_CLASSNAME}`}>
            Send message
          </span>
        </div>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 shrink-0"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { scale: 1.15 },
            closed: { scale: 1 },
          }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          aria-hidden
        >
          <path d="M 7 17 L 17 7" />
          <motion.path
            variants={{
              closed: { d: "M 7 7 L 17 7 L 17 17" },
              open: { d: "M 7 7 L 12 12 L 17 17" },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
          />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{
              height: 0,
              opacity: 0,
              transition: panelTransition,
            }}
            transition={panelTransition}
            className="relative z-0 w-full lg:hidden"
          >
            <div className="px-5 sm:px-6 pb-6 pt-1">{mobileForm}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
