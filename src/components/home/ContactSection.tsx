"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  AtSign,
  Check,
  Download,
  Loader2,
  MessageSquare,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SocialBrandIcon } from "@/components/social/SocialBrandIcon";
import { socialLinks } from "@/lib/content/social-links";
import { cn } from "@/lib/utils";

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
  "hero-bio-card flex w-full flex-col rounded-[40px] border border-zinc-200/50 shadow-none dark:border-white/10";
const contactDesktopCardClass = cn(
  contactCardBaseClass,
  "max-w-[24rem] px-5 py-5 md:max-w-[26rem] md:px-6 md:py-6 lg:h-[28.375rem] lg:max-w-[27rem] xl:h-[28.375rem] xl:max-w-[28.5rem] xl:px-8 xl:py-7",
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
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleContactForm = () => {
    setIsContactFormOpen((previous) => !previous);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    const abortController = new AbortController();
    const timeoutId = window.setTimeout(
      () => abortController.abort(),
      contactRequestTimeoutMs,
    );

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        signal: abortController.signal,
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: "New Portfolio Contact",
          _captcha: "false",
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok) {
        setIsSuccess(true);
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      } else {
        throw new Error(
          data?.error || data?.message || "Failed to send message",
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage(
        error instanceof DOMException && error.name === "AbortError"
          ? "The request took too long. Please try again."
          : "Something went wrong. Please try again later.",
      );
    } finally {
      window.clearTimeout(timeoutId);
      setIsLoading(false);
    }
  };

  const fieldClass = cn(
    "block min-h-[3.25rem] w-full rounded-[28px] border border-transparent bg-white px-5 py-3.5 text-foreground shadow-none",
    "placeholder:text-muted-foreground/45 transition-[box-shadow] duration-200",
    "outline-none focus:ring-1 focus:ring-zinc-400/30",
    "dark:bg-white/[0.04] dark:focus:ring-white/15",
  );

  const contactForm = (
    <form onSubmit={handleSubmit} className="flex h-full flex-col space-y-5 lg:space-y-4">
      <div>
        <label
          htmlFor="name"
          className="mb-2 ml-1 block text-sm font-medium tracking-wide text-foreground/80"
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
          disabled={isLoading || isSuccess}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 ml-1 block text-sm font-medium tracking-wide text-foreground/80"
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
          disabled={isLoading || isSuccess}
        />
      </div>

      <div className="flex min-h-0 flex-1 flex-col">
        <label
          htmlFor="message"
          className="mb-2 ml-1 block text-sm font-medium tracking-wide text-foreground/80"
        >
          Message
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          name="message"
          id="message"
          rows={4}
          className={cn(
            fieldClass,
            "min-h-[140px] flex-1 resize-y md:min-h-[168px] lg:min-h-[96px]",
          )}
          placeholder="Your message here..."
          required
          disabled={isLoading || isSuccess}
        />
      </div>

      <div className="pt-1">
        <button
          type="submit"
          className={cn(
            "flex min-h-[3.25rem] w-full items-center justify-center rounded-[28px] border border-transparent bg-black px-8 py-3.5 text-base font-semibold tracking-tight text-white shadow-none",
            "transition-[background-color,border-color,transform] duration-200 ease-out",
            "hover:bg-zinc-900",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
            "active:scale-[0.99] active:border-black",
            "dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 dark:focus-visible:outline-white dark:active:border-white",
            isSuccess &&
              "bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500/90 dark:text-white dark:hover:bg-emerald-500",
            isLoading && "cursor-not-allowed opacity-75",
          )}
          disabled={isLoading || isSuccess}
        >
          {isLoading && (
            <Loader2 className="-ml-1 mr-2.5 h-5 w-5 shrink-0 animate-spin text-white dark:text-zinc-900" />
          )}
          {isSuccess && <Check className="-ml-1 mr-2 h-5 w-5 shrink-0" />}
          <span>
            {isLoading
              ? "Sending..."
              : isSuccess
                ? "Message sent"
                : "Send message"}
          </span>
        </button>
        {errorMessage && (
          <p className="mt-3 text-center text-sm text-red-600 dark:text-red-400">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
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

      <div className="relative z-10 flex w-full flex-col">
        <button
          type="button"
          onClick={toggleContactForm}
          className={cn(
            socialPillClass,
            "relative z-10 bg-white text-zinc-900 hover:bg-zinc-100 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100",
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
          {isContactFormOpen ? (
            <X className="h-5 w-5 shrink-0" strokeWidth={2.5} aria-hidden />
          ) : (
            <ArrowUpRight
              className="h-5 w-5 shrink-0"
              strokeWidth={2.5}
              aria-hidden
            />
          )}
        </button>

        <AnimatePresence initial={false}>
          {isContactFormOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: "-3rem" }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="relative z-0 w-full overflow-hidden lg:hidden"
            >
              <div
                className={cn(
                  contactCardBaseClass,
                  "pt-[5rem] pb-6 px-5 sm:px-6 rounded-t-[32px] border-t-0 border-x border-b",
                )}
              >
                {contactForm}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
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
          <div
            className={cn(
              "grid grid-cols-1 gap-7 md:gap-8 lg:gap-6 xl:gap-7",
              isContactFormOpen ? "lg:grid-cols-2" : "lg:grid-cols-1",
            )}
          >
            <div className="flex w-full min-h-0 flex-col">
              <div
                className={cn(
                  "mx-auto flex w-full max-w-[24rem] flex-col sm:max-w-[26rem] md:max-w-[27rem] lg:max-w-[27rem] xl:max-w-[28.5rem]",
                  isContactFormOpen ? "lg:ml-0 lg:mr-auto" : "lg:mx-auto",
                )}
              >
                {socialGrid}
              </div>
            </div>

            {isContactFormOpen ? (
              <div
                id="contact-form-panel"
                className="hidden lg:flex w-full min-h-0 flex-col"
              >
                <div
                  className={cn(
                    contactDesktopCardClass,
                    "mx-auto lg:ml-auto lg:mr-0",
                  )}
                >
                  {contactForm}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
