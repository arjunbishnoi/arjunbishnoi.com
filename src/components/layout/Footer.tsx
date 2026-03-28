import Link from "next/link"
import { SocialBrandIcon } from "@/components/social/SocialBrandIcon"
import { mainLinks } from "@/lib/content/main-links"
import { socialLinks } from "@/lib/content/social-links"

export function Footer() {
  const footerColorClass = "text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors"

  const footerSocialItems = [
    { name: "Behance", href: socialLinks.behance, brand: "behance" as const },
    { name: "GitHub", href: socialLinks.github, brand: "github" as const },
    { name: "LinkedIn", href: socialLinks.linkedin, brand: "linkedin" as const },
  ]

  return (
    <footer className="bg-[#121212] dark:bg-[#e0e0e0] transition-colors">
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-stretch gap-6 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6">
            <div className="order-2 flex items-center justify-center gap-3 md:order-1 md:justify-self-start">
              {footerSocialItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${footerColorClass}`}
                  aria-label={item.name}
                >
                  <SocialBrandIcon brand={item.brand} className="w-[1.875rem] h-[1.875rem]" />
                </a>
              ))}
            </div>

            <ul className="order-1 space-y-3 text-left md:order-2 md:justify-self-center md:space-y-0 md:flex md:flex-wrap md:items-center md:justify-center md:gap-x-8 md:gap-y-3">
              {mainLinks.map((item) => (
                <li key={item.name}>
                  {item.isDownload ? (
                    <a
                      href={item.href}
                      download={item.downloadName}
                      className={footerColorClass}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={footerColorClass}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <p className={`${footerColorClass} order-3 text-center md:justify-self-end md:text-right`}>
              Arjun Bishnoi © 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
