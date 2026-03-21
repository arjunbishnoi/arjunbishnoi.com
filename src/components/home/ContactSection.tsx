"use client"

import { useState } from "react"
import { Loader2, Check, Download, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { socialLinks } from "@/lib/site-data"

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

    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@arjunbishnoi.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
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
      setErrorMessage("Something went wrong. Please try again later.")
    } finally {
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
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(bentoTile, "text-zinc-900 dark:text-white")}
                aria-label="GitHub profile"
              >
                <svg viewBox="0 0 24 24" className={iconSvgClass} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-[0.8125rem] font-medium tracking-wide text-zinc-600 dark:text-zinc-300">
                  GitHub
                </span>
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(bentoTile, "text-[#0A66C2]")}
                aria-label="LinkedIn profile"
              >
                <svg viewBox="0 0 24 24" className={iconSvgClass} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="text-[0.8125rem] font-medium tracking-wide text-[#0A66C2]/90">LinkedIn</span>
              </a>

              <a
                href={socialLinks.behance}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(bentoTile, "text-[#1769FF]")}
                aria-label="Behance profile"
              >
                <svg viewBox="-40 -40 3413 3413" className={iconSvgClass} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm-408 1059c57 0 109 5 156 15s87 27 121 49c33 23 59 53 78 91 18 37 27 85 27 140 0 60-14 110-41 151-28 40-68 73-122 99 74 21 128 58 164 111s54 117 54 192c0 61-12 113-35 157-24 44-55 80-94 108s-85 49-136 62c-50 13-102 20-156 20H696V1060h563zm704 96h484v118h-484v-118zm108 890c36 35 87 52 154 52 48 0 90-12 124-36s55-50 63-77h209c-34 104-85 178-154 223s-153 67-250 67c-68 0-129-11-184-33s-101-53-140-93c-38-40-67-88-88-144-20-56-31-118-31-184 0-65 11-125 32-181 22-56 51-104 91-145 39-41 86-73 140-96 54-24 114-35 181-35 73 0 137 14 192 43 55 28 100 67 135 115s60 103 76 164 21 125 17 193h-624c0 68 23 133 59 167zm273-454c-28-31-76-48-134-48-38 0-69 6-94 19s-45 29-60 48-26 39-32 61c-6 21-10 40-11 57h387c-6-61-27-105-55-137zm-1118-50c47 0 85-11 116-33 30-22 45-58 45-108 0-28-5-51-15-69s-24-32-41-42-36-17-58-21-44-6-67-6H960v279h266zm14 508c26 0 50-2 73-8 24-5 44-13 62-25 17-12 32-27 43-48 11-20 16-46 16-77 0-61-17-105-52-132-34-26-80-39-137-39H960v329h281v1z"
                  />
                </svg>
                <span className="text-[0.8125rem] font-medium tracking-wide text-[#1769FF]/90">Behance</span>
              </a>

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
