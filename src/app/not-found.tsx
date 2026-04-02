"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Footer } from "@/components/layout/Footer"
import { cn } from "@/lib/utils"

export default function NotFound() {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center px-6 text-center pt-24 pb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Page not found</h2>
        <p className="text-muted-foreground mb-8 md:mb-12 lg:mb-14 cursor-default text-base md:text-lg">The requested URL {pathname} does not exist.</p>
        <Link 
            href="/"
            className={cn(
              "flex-none h-12 lg:h-14 inline-flex items-center justify-center gap-2 md:gap-2.5 rounded-full bg-black text-white px-8 lg:px-8 text-[1rem] lg:text-[1.08rem] font-medium",
              "dark:bg-white dark:text-black",
              "transition-transform duration-200 active:scale-[0.98]"
            )}
        >
          Return home
        </Link>
      </div>
      <Footer />
    </div>
  )
}
