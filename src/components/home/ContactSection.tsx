"use client";

import { useState, useActionState } from "react";
import {
  ArrowUpRight,
  AtSign,
  Check,
  Download,
  Loader2,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { SocialBrandIcon } from "@/components/social/SocialBrandIcon";
import { socialLinks } from "@/lib/content/social-links";
import { cn } from "@/lib/utils";
import { submitContact } from "@/app/actions/contact";
import { SubmitButton } from "./SubmitButton";

const socialPillClass = cn(
  "group relative flex min-h-[4rem] w-full items-center gap-3 rounded-[32px] px-6 py-4 text-left shadow-none",
  "transition-[background-color,transform] duration-200 ease-out",
  "hover:scale-[0.995]",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-white",
);

const iconSvgClass =
  "block h-5 w-5 shrink-0 fill-current md:h-[1.375rem] md:w-[1.375rem]";
const iconLucideClass = "h-5 w-5 shrink-0 md:h-[1.375rem] md:w-[1.375rem]";
const contactRequestTimeoutMs = 10000;
const contactCardBaseClass =
  "bg-white dark:bg-white flex w-full flex-col rounded-[40px] border border-zinc-200/50 shadow-none dark:border-white/10";
const contactDesktopCardClass = cn(
  contactCardBaseClass,
  "max-w-[24rem] px-5 py-5 md:max-w-[26rem] md:px-6 md:py-6 lg:max-w-[27rem] xl:max-w-[28.5rem] xl:px-8 xl:py-6",
);

const socialCards = [
  {
    name: "GitHub",
    suffix: "/arjunbishnoi",
    href: socialLinks.github,
    kind: "brand" as const,
    brand: "github" as const,
    pillClassName:
      "bg-zinc-900 text-white hover:bg-black dark:bg-black dark:text-white dark:hover:bg-black",
    labelClassName: "text-white dark:text-white",
    suffixClassName: "text-white/65 dark:text-white/65",
  },
  {
    name: "LinkedIn",
    suffix: "/in/arjunbishnoi",
    href: socialLinks.linkedin,
    kind: "brand" as const,
    brand: "linkedin" as const,
    pillClassName:
      "bg-[#0A66C2] text-white hover:bg-[#0958a8] dark:bg-[#0A66C2] dark:text-white dark:hover:bg-[#0c78e1]",
    labelClassName: "text-white",
    suffixClassName: "text-white/70",
  },
  {
    name: "Behance",
    suffix: "/arjunbishnoi",
    href: socialLinks.behance,
    kind: "brand" as const,
    brand: "behance" as const,
    pillClassName:
      "bg-[#1769FF] text-white hover:bg-[#1158d6] dark:bg-[#1769FF] dark:text-white dark:hover:bg-[#3b82ff]",
    labelClassName: "text-white",
    suffixClassName: "text-white/70",
  },
  {
    name: "Resume",
    href: socialLinks.resume,
    kind: "download" as const,
    download: true,
    pillClassName:
      "bg-zinc-500 text-white hover:bg-zinc-600 dark:bg-zinc-600 dark:text-white dark:hover:bg-zinc-700",
    labelClassName: "text-white dark:text-white",
  },
  {
    name: "contact@arjunbishnoi.com",
    href: socialLinks.email,
    kind: "email" as const,
    pillClassName:
      "bg-zinc-500 text-white hover:bg-zinc-600 dark:bg-zinc-600 dark:text-white dark:hover:bg-zinc-700",
    labelClassName: "text-white dark:text-white",
  },
] as const;

export function ContactSection() {
  const sectionRef = null;
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [state, formAction] = useActionState(submitContact, {
    success: false,
    message: null,
    error: null,
  });

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const panelTransition = { type: "spring" as const, duration: 0.3, bounce: 0.1 };

  const toggleContactForm = () => {
    setIsContactFormOpen((previous) => !previous);
  };

  useEffect(() => {
    if (state.success) {
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => {
        setIsContactFormOpen(false);
      }, 3000);
    }
  }, [state.success]);

  const fieldClass = cn(
    "block min-h-[3.25rem] w-full rounded-[28px] border border-transparent bg-zinc-100 dark:bg-zinc-100 px-5 py-3.5 text-zinc-900 dark:text-zinc-950 shadow-none",
    "placeholder:text-zinc-500 transition-[box-shadow] duration-200",
    "outline-none focus:ring-1 focus:ring-zinc-400/50",
  );

  const contactFormListVariants = {
    open: {
      transition: { staggerChildren: 0.03, delayChildren: 0.05 },
    },
    closed: {
      transition: { staggerChildren: 0 },
    },
  };

  const contactFormItemVariants = {
    open: { 
      opacity: 1, 
      x: 0,
      y: 0, 
      transition: { type: "spring" as const, stiffness: 300, damping: 24 } 
    },
    closed: { 
      opacity: 0, 
      x: isDesktop ? 20 : 0,
      y: isDesktop ? 0 : -15, 
      transition: { duration: 0.08, ease: "easeOut" as const } 
    },
  };

  const contactForm = (
    <motion.form 
      action={formAction} 
      className="flex flex-col space-y-5 lg:space-y-3"
      variants={contactFormListVariants}
      initial="closed"
      animate={isContactFormOpen ? "open" : "closed"}
    >
      <motion.div variants={contactFormItemVariants}>
        <label
          htmlFor="name"
          className="mb-1.5 ml-1 block text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-600"
        >
          Name
        </label>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          type="text"
          name="name"
          id="name"
          className={fieldClass}
          placeholder="Your name"
          required
        />
      </motion.div>

      <motion.div variants={contactFormItemVariants}>
        <label
          htmlFor="email"
          className="mb-1.5 ml-1 block text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-600"
        >
          Email
        </label>
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          type="email"
          name="email"
          id="email"
          className={fieldClass}
          placeholder="your.email@example.com"
          required
        />
      </motion.div>

      <motion.div variants={contactFormItemVariants} className="flex flex-col">
        <label
          htmlFor="message"
          className="mb-1.5 ml-1 block text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-600"
        >
          Message
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          name="message"
          id="message"
          rows={3}
          className={cn(
            fieldClass,
            "min-h-[140px] resize-y lg:min-h-[130px] lg:h-[130px]",
          )}
          placeholder="Your message here..."
          required
        />
      </motion.div>

      <motion.div variants={contactFormItemVariants} className="pt-1">
        <SubmitButton isSuccess={state.success} />
        {state.error && (
          <p className="mt-3 text-center text-sm text-red-600 dark:text-red-400">
            {state.error}
          </p>
        )}
      </motion.div>
    </motion.form>
  );

  const socialGrid = (
    <div className="flex w-full flex-col gap-3 md:gap-3.5">
      {socialCards.map((card) => (
        <a
          key={card.name}
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          download={
            card.kind === "download"
              ? socialLinks.resumeDownloadName
              : undefined
          }
          className={cn(socialPillClass, card.pillClassName)}
          aria-label={`${card.name} profile`}
        >
          <div className="flex min-w-0 flex-1 items-center gap-3">
            {card.kind === "brand" ? (
              <SocialBrandIcon brand={card.brand} className={iconSvgClass} />
            ) : card.kind === "download" ? (
              <Download
                className={iconLucideClass}
                strokeWidth={1.85}
                aria-hidden
              />
            ) : (
              <AtSign
                className={iconLucideClass}
                strokeWidth={1.85}
                aria-hidden
              />
            )}
            <span className="flex min-w-0 items-center gap-1 truncate text-[0.95rem] font-semibold tracking-tight">
              <span className={cn("shrink-0", card.labelClassName)}>
                {card.name}
              </span>
              {"suffix" in card && card.suffix ? (
                <span
                  className={cn("truncate font-normal", card.suffixClassName)}
                >
                  {card.suffix}
                </span>
              ) : null}
            </span>
          </div>
          <ArrowUpRight
            className="h-5 w-5 shrink-0"
            strokeWidth={2.5}
            aria-hidden
          />
        </a>
      ))}

      <motion.div
        layout
        transition={{ layout: panelTransition }}
        className={cn(
          "relative z-10 flex w-full flex-col overflow-hidden transition-[background-color,transform] duration-200",
          "rounded-[32px] bg-white dark:bg-white shadow-none border border-transparent dark:border-white/10",
          !isContactFormOpen && "hover:scale-[0.995]"
        )}
      >
        <button
          type="button"
          onClick={toggleContactForm}
          className={cn(
            "flex min-h-[4rem] w-full items-center justify-between gap-3 px-6 py-4 text-left transition-colors duration-200 ease-out",
            "text-zinc-900 dark:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
          )}
          aria-expanded={isContactFormOpen}
          aria-controls="contact-form-panel"
        >
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <MessageSquare
              className={iconLucideClass}
              strokeWidth={1.85}
              aria-hidden
            />
            <span className="truncate text-[0.95rem] font-semibold tracking-tight">
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
            animate={isContactFormOpen ? "open" : "closed"}
            variants={{
              open: { scale: 1.15 },
              closed: { scale: 1 }
            }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            aria-hidden
          >
            <path d="M 7 17 L 17 7" />
            <motion.path
              variants={{
                closed: { d: "M 7 7 L 17 7 L 17 17" },
                open: { d: "M 7 7 L 12 12 L 17 17" }
              }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            />
          </motion.svg>
        </button>

        <AnimatePresence initial={false}>
          {isContactFormOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ 
                height: 0, 
                opacity: 0, 
                transition: panelTransition
              }}
              transition={panelTransition}
              className="relative z-0 w-full lg:hidden"
            >
              <div className="px-5 sm:px-6 pb-6 pt-1">
                {contactForm}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );



  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative z-40 bg-background pb-16 pt-2 md:pb-20 md:pt-16 lg:pb-24 lg:pt-20"
    >
      <div className="mx-auto max-w-7xl px-6 pb-3 sm:pb-4 lg:px-8 md:text-center md:pb-6 lg:pb-8">
        <h2 className="font-sans font-semibold text-black dark:text-white leading-[1.02] tracking-[-0.02em] sm:tracking-[-0.035em] md:tracking-[-0.04em] lg:tracking-[-0.038em] text-[2.2rem] md:text-4xl lg:text-5xl xl:text-6xl">
          Contact
        </h2>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-4 sm:pt-6 md:pt-2 lg:pt-2 lg:px-8">
        <div className="mx-auto max-w-[24rem] sm:max-w-[26rem] md:max-w-[27rem] lg:max-w-[55.5rem] xl:max-w-[58.75rem]">
          <motion.div
            layout
            className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full min-h-0 gap-7 md:gap-8 lg:gap-0"
            transition={panelTransition}
          >
            <motion.div
              layout
              className="flex w-full min-h-0 flex-col max-w-[24rem] sm:max-w-[26rem] md:max-w-[27rem] lg:max-w-[27rem] xl:max-w-[28.5rem] flex-shrink-0 relative z-10"
              transition={panelTransition}
            >
              {socialGrid}
            </motion.div>

            <AnimatePresence>
              {isContactFormOpen ? (
                <motion.div
                  id="contact-form-panel"
                  initial={{ opacity: 0, width: 0, marginLeft: 0, filter: "blur(8px)" }}
                  animate={{ opacity: 1, width: "auto", marginLeft: "1.5rem", filter: "blur(0px)" }}
                  exit={{ opacity: 0, width: 0, marginLeft: 0, filter: "blur(8px)" }}
                  transition={panelTransition}
                  className="hidden lg:flex min-h-0 flex-col overflow-visible origin-left relative z-0"
                >
                  <motion.div
                    initial={{ x: 30 }}
                    animate={{ x: 0 }}
                    exit={{ x: 30 }}
                    transition={panelTransition}
                    className="w-[27rem] xl:w-[28.5rem] flex-shrink-0"
                  >
                    <div
                      className={cn(
                        contactDesktopCardClass,
                        "mx-0 w-full lg:max-w-none xl:max-w-none",
                        !state.error ? "lg:h-[28.375rem]" : "lg:min-h-[28.375rem]"
                      )}
                    >
                      {contactForm}
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
