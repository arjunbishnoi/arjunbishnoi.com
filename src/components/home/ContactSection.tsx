"use client"

import { useState } from "react"
import { Loader2, Check, Download, Mail } from "lucide-react"
import { SocialBrandIcon } from "@/components/social/SocialBrandIcon"
import { cn } from "@/lib/utils"
import { socialLinks } from "@/lib/content/social-links"

/** Matches BlogCard / project card body copy */
const sectionBodyClass =
  "text-base md:text-lg text-foreground font-normal leading-relaxed"

/** Hero-style flat rectangles: rounded-[40px], white surface, subtle border — no neumorphic lift */
const bentoTile = cn(
  "group relative flex min-h-[100px] flex-col items-center justify-center gap-1 rounded-[40px] px-2.5 py-3 text-center",
  "sm:min-h-[108px] md:min-h-0 md:h-full md:min-h-[128px] md:gap-1.5 lg:min-h-[136px]",
  "border border-zinc-200/90 bg-white shadow-none",
  "transition-[border-color,background-color,transform] duration-200 ease-out",
  "hover:border-zinc-300 hover:bg-zinc-50/80",
  "dark:border-white/[0.12] dark:bg-white/[0.04] dark:hover:border-white/[0.18] dark:hover:bg-white/[0.07]",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-white",
)

const iconSvgClass = "block h-5 w-5 shrink-0 fill-current md:h-[1.375rem] md:w-[1.375rem]"
const iconLucideClass = "h-5 w-5 shrink-0 md:h-[1.375rem] md:w-[1.375rem]"
const contactRequestTimeoutMs = 10000
const socialCards = [
  {
    name: "GitHub",
    href: socialLinks.github,
    brand: "github" as const,
    tileClassName: "text-zinc-900 dark:text-white",
    labelClassName: "text-zinc-600 dark:text-zinc-300",
  },
  {
    name: "LinkedIn",
    href: socialLinks.linkedin,
    brand: "linkedin" as const,
    tileClassName: "text-[#0A66C2]",
    labelClassName: "text-[#0A66C2]/90",
  },
  {
    name: "Behance",
    href: socialLinks.behance,
    brand: "behance" as const,
    tileClassName: "text-[#1769FF]",
    labelClassName: "text-[#1769FF]/90",
  },
] as const

export function ContactSection() {
  const sectionRef = null
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage("")
    const abortController = new AbortController()
    const timeoutId = window.setTimeout(() => abortController.abort(), contactRequestTimeoutMs)

    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@arjunbishnoi.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        signal: abortController.signal,
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: "New Portfolio Contact",
          _captcha: "false",
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        setForm({ name: "", email: "", message: "" })

        setTimeout(() => {
          setIsSuccess(false)
        }, 3000)
      } else {
        throw new Error(data.message || "Failed to send message")
      }
    } catch (error) {
      console.error("Submission error:", error)
      setErrorMessage(
        error instanceof DOMException && error.name === "AbortError"
          ? "The request took too long. Please try again."
          : "Something went wrong. Please try again later."
      )
    } finally {
      window.clearTimeout(timeoutId)
      setIsLoading(false)
    }
  }

  const fieldClass = cn(
    "block w-full rounded-[28px] border border-zinc-200/90 bg-white px-5 py-3.5 text-foreground shadow-none",
    "placeholder:text-muted-foreground/45 transition-[border-color,box-shadow] duration-200",
    "outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400/30",
    "dark:border-white/[0.12] dark:bg-white/[0.04] dark:focus:border-white/25 dark:focus:ring-white/15",
  )

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative z-40 bg-background pb-24 pt-2 max-md:pb-20 md:pb-32 md:pt-6 lg:pb-40 lg:pt-8"
    >
      <div className="mx-auto max-w-7xl px-6 pb-3 sm:pb-4 lg:px-8">
        <h2 className="text-[1.625rem] font-bold tracking-tight text-black md:text-3xl lg:text-4xl dark:text-white">
          Contact
        </h2>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-4 sm:pt-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          {/* Left: copy + bento */}
          <div className="flex min-h-0 flex-col gap-7 lg:h-full lg:gap-8">
            <p className={cn(sectionBodyClass, "text-left text-foreground/90 sm:text-center lg:text-left")}>
              I&apos;m currently open to new opportunities and collaborations. Whether you have a question, a
              project in mind, or just want to say hello, feel free to reach out!
            </p>

            <div
              className={cn(
                "grid w-full min-h-0 grid-cols-2",
                /* One gap value for both axes — reads even on every breakpoint */
                "gap-4",
                "md:grid-cols-3 auto-rows-auto",
                "lg:flex-1",
              )}
            >
              {socialCards.map((card) => (
                <a
                  key={card.name}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(bentoTile, card.tileClassName)}
                  aria-label={`${card.name} profile`}
                >
                  <SocialBrandIcon brand={card.brand} className={iconSvgClass} />
                  <span className={cn("text-[0.8125rem] font-medium tracking-wide", card.labelClassName)}>
                    {card.name}
                  </span>
                </a>
              ))}

              <a
                href={socialLinks.resume}
                download={socialLinks.resumeDownloadName}
                className={cn(
                  bentoTile,
                  "flex-row gap-2.5 text-zinc-900 dark:text-white md:col-span-2 md:gap-3",
                )}
              >
                <Download className={iconLucideClass} strokeWidth={1.85} aria-hidden />
                <span className="text-[0.9375rem] font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  Resume
                </span>
              </a>

              <a href={socialLinks.email} className={cn(bentoTile, "col-span-2 text-rose-500 md:col-span-1")}>
                <Mail className={iconLucideClass} strokeWidth={1.85} aria-hidden />
                <span className="max-w-full truncate px-1 text-[0.7rem] font-medium leading-snug sm:text-xs md:text-[0.8125rem]">
                  contact@arjunbishnoi.com
                </span>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="flex w-full min-h-0 flex-col lg:h-full lg:pl-2 xl:pl-6">
            <form onSubmit={handleSubmit} className="flex flex-1 flex-col space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 ml-1 block text-sm font-medium tracking-wide text-foreground/80">
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
                <label htmlFor="email" className="mb-2 ml-1 block text-sm font-medium tracking-wide text-foreground/80">
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
                <label htmlFor="message" className="mb-2 ml-1 block text-sm font-medium tracking-wide text-foreground/80">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  name="message"
                  id="message"
                  rows={4}
                  className={cn(fieldClass, "min-h-[140px] flex-1 resize-y md:min-h-[168px] lg:min-h-[184px]")}
                  placeholder="Your message here..."
                  required
                  disabled={isLoading || isSuccess}
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  className={cn(
                    "flex min-h-[3.25rem] w-full items-center justify-center rounded-[40px] border border-black bg-black px-8 py-3.5 text-base font-semibold tracking-tight text-white shadow-none",
                    "transition-[background-color,border-color,transform] duration-200 ease-out",
                    "hover:border-zinc-800 hover:bg-zinc-900",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
                    "active:scale-[0.99]",
                    "dark:border-white/20 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 dark:hover:border-white/30 dark:focus-visible:outline-white",
                    isSuccess &&
                      "border-emerald-600 bg-emerald-600 text-white hover:border-emerald-700 hover:bg-emerald-700 dark:border-emerald-400/50 dark:bg-emerald-500/90 dark:text-white dark:hover:bg-emerald-500",
                    isLoading && "cursor-not-allowed opacity-75",
                  )}
                  disabled={isLoading || isSuccess}
                >
                  {isLoading && (
                    <Loader2 className="-ml-1 mr-2.5 h-5 w-5 shrink-0 animate-spin text-white dark:text-zinc-900" />
                  )}
                  {isSuccess && <Check className="-ml-1 mr-2 h-5 w-5 shrink-0" />}
                  <span>{isLoading ? "Sending…" : isSuccess ? "Message sent" : "Send message"}</span>
                </button>
                {errorMessage && (
                  <p className="mt-3 text-center text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
