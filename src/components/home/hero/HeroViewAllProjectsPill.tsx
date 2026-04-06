"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

type HeroViewAllProjectsPillProps = {
  variant: "mobile" | "desktop"
  blobColors: string[]
}

const blobClassNames = [
  "absolute -top-[14%] -left-[10%] w-[62%] h-[72%] rounded-full mix-blend-multiply dark:mix-blend-screen animate-lava [--drift-name:drift-orbit] [--drift-duration:8s] [--morph-name:morph] [--morph-duration:6s] [--color-duration:12s] [--glow-blur:74px] scale-125",
  "absolute -top-[4%] right-[-12%] w-[58%] h-[68%] rounded-full mix-blend-multiply dark:mix-blend-screen animate-lava [--drift-name:drift-cross] [--drift-duration:10s] [--morph-name:morph-alt] [--morph-duration:7s] [--color-duration:14s] [--drift-delay:0.5s] [--color-delay:1s] [--glow-blur:80px] scale-120",
  "absolute top-[30%] left-[18%] w-[48%] h-[55%] rounded-full mix-blend-multiply dark:mix-blend-screen animate-lava [--drift-name:drift-wide] [--drift-duration:9s] [--morph-name:morph] [--morph-duration:8s] [--color-duration:13s] [--drift-delay:0.4s] [--color-delay:1.5s] [--glow-blur:76px] scale-125",
  "absolute bottom-[-14%] left-[4%] w-[56%] h-[66%] rounded-full mix-blend-multiply dark:mix-blend-screen animate-lava [--drift-name:drift-orbit] [--drift-duration:12s] [--morph-name:morph-alt] [--morph-duration:9s] [--color-duration:16s] [--drift-delay:1s] [--color-delay:2s] [--glow-blur:78px] scale-115",
  "absolute bottom-[-10%] right-[2%] w-[52%] h-[60%] rounded-full mix-blend-multiply dark:mix-blend-screen animate-lava [--drift-name:drift-cross] [--drift-duration:11s] [--morph-name:morph] [--morph-duration:10s] [--color-duration:15s] [--drift-delay:1.2s] [--color-delay:2.5s] [--glow-blur:80px] scale-110",
  "absolute top-[18%] left-[38%] w-[28%] h-[34%] rounded-full mix-blend-multiply dark:mix-blend-screen animate-lava [--drift-name:drift-wide] [--drift-duration:14s] [--morph-name:morph] [--morph-duration:8s] [--color-duration:18s] [--drift-delay:1.5s] [--glow-blur:54px] scale-140",
]
const smoothTransitionTiming = { transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }

export function HeroViewAllProjectsPill({ variant, blobColors }: HeroViewAllProjectsPillProps) {
  const isDesktop = variant === "desktop"

  return (
    <div className={cn("relative h-full", isDesktop ? "p-2.5 xl:p-3.5 pb-2 xl:pb-2.5" : "p-3 pb-2.5")}>
      <Link
        href="/projects"
        className={cn(
          "group hero-viewall-pill relative z-20 block w-full h-full neu-raised transform-gpu will-change-transform",
          isDesktop ? "rounded-[30px] xl:rounded-[36px]" : "neu-mobile-neumorphic rounded-[30px]"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 z-0 overflow-hidden pointer-events-none animate-color-shift",
            isDesktop ? "rounded-[30px] xl:rounded-[36px]" : "rounded-[30px]"
          )}
          style={{ isolation: "isolate", WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}
        >
          <div className="hero-viewall-surface absolute inset-0 bg-transparent" />
          <div
            className={cn(
              "absolute inset-0 overflow-hidden pointer-events-none saturate-[3] contrast-[1.2] transition-[filter] duration-700 dark:opacity-85 dark:saturate-[4] dark:contrast-[1.25]",
              isDesktop && "group-hover:saturate-[8] group-hover:contrast-[1.5] group-hover:brightness-[1.25]"
            )}
            style={{
              maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
              ...smoothTransitionTiming,
            }}
          >
            {blobClassNames.map((blobClassName, index) => (
              <div
                key={blobClassName}
                className={cn(blobClassName, blobColors[index])}
                style={{ filter: "blur(var(--glow-blur))" }}
              />
            ))}
          </div>
          <div
            className={cn(
              "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.28),transparent_75%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.22),transparent_70%)] pointer-events-none transition-opacity duration-700 z-[1]",
              isDesktop && "animate-glow-pulse"
            )}
            style={smoothTransitionTiming}
          />
          <div
            className={cn(
              "absolute inset-0 opacity-[0.28] dark:opacity-[0.25] mix-blend-multiply dark:mix-blend-screen pointer-events-none transition-opacity duration-700",
              isDesktop && "group-hover:opacity-[0.42]"
            )}
            style={{
              backgroundImage:
                "radial-gradient(circle at 18% 22%, rgba(59, 130, 246, 0.58), transparent 46%), radial-gradient(circle at 80% 24%, rgba(236, 72, 153, 0.52), transparent 50%), radial-gradient(circle at 58% 76%, rgba(234, 179, 8, 0.44), transparent 52%), radial-gradient(circle at 34% 74%, rgba(16, 185, 129, 0.4), transparent 50%), radial-gradient(circle at 68% 52%, rgba(168, 85, 247, 0.36), transparent 48%)",
              ...smoothTransitionTiming,
            }}
          />
          <div
            className={cn(
              "absolute inset-0 pointer-events-none bg-white/0 transition-colors duration-700 z-[1]",
              isDesktop && "group-hover:bg-white/[0.28] dark:group-hover:bg-white/[0.12]"
            )}
            style={smoothTransitionTiming}
          />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
          <div className={cn("flex items-center", isDesktop ? "gap-2 xl:gap-2.5" : "gap-1.5")}>
            <span
              className={cn(
                "tracking-[-0.005em] font-semibold text-zinc-900 dark:text-white",
                isDesktop ? "text-[1.2rem] xl:text-[1.3rem]" : "text-[1.125rem]"
              )}
            >
              View all projects
            </span>
            <ArrowUpRight
              className={cn(
                "text-zinc-900 dark:text-white",
                isDesktop ? "w-5 h-5 xl:w-6 xl:h-6" : "w-5 h-5"
              )}
              strokeWidth={2.5}
            />
          </div>
        </div>
      </Link>
      <div
        className={cn(
          "absolute bottom-0 left-0 w-1/2 border-r neu-separator pointer-events-none",
          isDesktop ? "h-2 xl:h-2.5" : "h-2.5"
        )}
      />
    </div>
  )
}
