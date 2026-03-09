"use client"

import React, { useState, useEffect } from "react"
import { socialLinks } from "@/lib/site-data"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function HeroSection() {
  const [scrolledDown, setScrolledDown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolledDown(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      className="relative overflow-hidden flex flex-col items-center justify-center gap-3 md:gap-0 md:justify-start h-screen h-[100svh] [@supports(height:100dvh)]:h-[100dvh] md:h-auto pt-[env(safe-area-inset-top)] md:pt-16 lg:pt-20 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] md:pb-0"
      style={{ background: "var(--neu-surface)" }}
    >

      {/* Hero Title — vertically centered in the gap between header bar and cards */}
      <div className="hidden md:flex w-full max-w-5xl mx-auto px-6 sm:px-6 text-center items-center justify-center md:h-[16rem] lg:h-[18rem] xl:h-[20rem]">
        <h1
          className="font-serif max-md:font-extrabold font-bold md:font-semibold text-[1.625rem] sm:text-[2.35rem] md:text-[3.125rem] lg:text-[3.75rem] xl:text-[4.25rem] leading-[1.1] md:whitespace-nowrap inline-block px-4 -mx-4 pb-2.5 max-md:subpixel-antialiased max-md:[-webkit-text-stroke:0.6px_transparent]"
          style={{
            background: "linear-gradient(to bottom, var(--hero-gradient-top) 0%, var(--hero-gradient-top) var(--hero-gradient-stop, 30%), var(--hero-gradient-bottom) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          <span className="block">AI-powered mobile apps.</span>
          <span className="block">Designed with precision.</span>
        </h1>
      </div>

      {/* Mobile Design: Parent Neumorphic Container (Visible only on small screens) */}
      <div className="w-full max-w-md mx-auto px-6 mb-0 md:hidden">
        <div className="neu-container overflow-hidden pt-3">
          {/* Top: Raised All Projects rectangle */}
          <div className="px-3">
            <Link
              href="/projects"
              className="group relative block rounded-[32px] h-[clamp(7.25rem,19svh,10rem)] overflow-hidden neu-raised neu-mobile-neumorphic transform-gpu p-1"
            >
              {/* Aurora background */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none animate-color-shift">
                <div className="absolute inset-0 bg-[var(--neu-surface)]" />
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none saturate-[1.65] contrast-[1.1] dark:saturate-[1.9] dark:contrast-[1.15] dark:brightness-[1.2]"
                  style={{
                    maskImage: "radial-gradient(ellipse at center, black 40%, transparent 88%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 88%)",
                  }}
                >
                  <div className="absolute -top-[14%] -left-[10%] w-[62%] h-[72%] rounded-full mix-blend-multiply dark:mix-blend-screen bg-cyan-500/62 dark:bg-cyan-400/56 animate-lava [--drift-name:drift-wide] [--drift-duration:26s] [--morph-name:morph] [--morph-duration:24s] [--color-duration:44s] [--glow-blur:74px] scale-125" style={{ filter: "blur(var(--glow-blur))" }} />
                  <div className="absolute -top-[4%] right-[-12%] w-[58%] h-[68%] rounded-full mix-blend-multiply dark:mix-blend-screen bg-pink-500/58 dark:bg-pink-400/54 animate-lava [--drift-name:drift-wide] [--drift-duration:30s] [--morph-name:morph-alt] [--morph-duration:26s] [--color-duration:48s] [--drift-delay:2s] [--color-delay:3s] [--glow-blur:80px] scale-120" style={{ filter: "blur(var(--glow-blur))" }} />
                  <div className="absolute top-[30%] left-[18%] w-[48%] h-[55%] rounded-full mix-blend-multiply dark:mix-blend-screen bg-violet-500/56 dark:bg-violet-400/56 animate-lava [--drift-name:drift-wide] [--drift-duration:28s] [--morph-name:morph] [--morph-duration:22s] [--color-duration:46s] [--drift-delay:1.4s] [--color-delay:5s] [--glow-blur:76px] scale-125" style={{ filter: "blur(var(--glow-blur))" }} />
                  <div className="absolute bottom-[-14%] left-[4%] w-[56%] h-[66%] rounded-full mix-blend-multiply dark:mix-blend-screen bg-lime-500/44 dark:bg-lime-400/46 animate-lava [--drift-name:drift-wide] [--drift-duration:34s] [--morph-name:morph-alt] [--morph-duration:28s] [--color-duration:52s] [--drift-delay:3.2s] [--color-delay:7s] [--glow-blur:78px] scale-115" style={{ filter: "blur(var(--glow-blur))" }} />
                  <div className="absolute bottom-[-10%] right-[2%] w-[52%] h-[60%] rounded-full mix-blend-multiply dark:mix-blend-screen bg-orange-500/46 dark:bg-orange-400/50 animate-lava [--drift-name:drift-wide] [--drift-duration:32s] [--morph-name:morph] [--morph-duration:30s] [--color-duration:56s] [--drift-delay:4.1s] [--color-delay:9s] [--glow-blur:80px] scale-110" style={{ filter: "blur(var(--glow-blur))" }} />
                  <div className="absolute top-[18%] left-[38%] w-[28%] h-[34%] rounded-full mix-blend-multiply dark:mix-blend-screen bg-rose-400/48 dark:bg-rose-300/48 animate-lava [--drift-name:drift-wide] [--drift-duration:36s] [--morph-name:morph] [--morph-duration:32s] [--color-duration:58s] [--drift-delay:5s] [--glow-blur:54px] scale-140" style={{ filter: "blur(var(--glow-blur))" }} />
                </div>
                <div
                  className="absolute inset-0 opacity-[0.18] dark:opacity-[0.18] mix-blend-multiply dark:mix-blend-screen pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 18% 22%, rgba(59, 130, 246, 0.58), transparent 46%), radial-gradient(circle at 80% 24%, rgba(236, 72, 153, 0.52), transparent 50%), radial-gradient(circle at 58% 76%, rgba(234, 179, 8, 0.44), transparent 52%), radial-gradient(circle at 34% 74%, rgba(16, 185, 129, 0.4), transparent 50%), radial-gradient(circle at 68% 52%, rgba(168, 85, 247, 0.36), transparent 48%)",
                  }}
                />
              </div>

              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-1">
                  <span className="text-[1.1rem] tracking-[-0.005em] font-medium text-zinc-900 dark:text-white">View All Projects</span>
                  <ArrowUpRight className="w-5 h-5 text-zinc-900 dark:text-white" />
                </div>
              </div>
            </Link>
          </div>

          {/* Middle: Flat Grid of Categories (responsive row height) */}
          <div className="grid grid-cols-2">
            <Link href="/apps" className="flex items-center h-[clamp(6rem,12.8svh,6.6rem)] border-r border-b neu-separator text-zinc-900 dark:text-zinc-100 font-medium text-[0.95rem] active:bg-zinc-100/10 transition-colors">
              <div className="w-1/2 flex justify-center">
                <div className="w-8 text-left whitespace-nowrap">Mobile Apps</div>
              </div>
            </Link>
            <Link href="/ai" className="flex items-center h-[clamp(6rem,12.8svh,6.6rem)] border-b neu-separator text-zinc-900 dark:text-zinc-100 font-medium text-[0.95rem] active:bg-zinc-100/10 transition-colors">
              <div className="w-1/2 flex justify-center">
                <div className="w-8 text-left whitespace-nowrap">AI Engineering</div>
              </div>
            </Link>
            <Link href="/design" className="flex items-center h-[clamp(5.25rem,11svh,5.75rem)] border-r border-b neu-separator text-zinc-900 dark:text-zinc-100 font-medium text-[0.95rem] active:bg-zinc-100/10 transition-colors">
              <div className="w-1/2 flex justify-center">
                <div className="w-8 text-left whitespace-nowrap">Design</div>
              </div>
            </Link>
            <a href={socialLinks.resume} download={socialLinks.resumeDownloadName} className="flex items-center h-[clamp(5.25rem,11svh,5.75rem)] border-b neu-separator text-zinc-900 dark:text-zinc-100 font-medium text-[0.95rem] active:bg-zinc-100/10 transition-colors">
              <div className="w-1/2 flex justify-center">
                <div className="w-8 text-left whitespace-nowrap">Resume</div>
              </div>
            </a>
          </div>

          {/* Bottom: Social Icons Row (responsive row height) */}
          <div className="grid grid-cols-4">
            <a href={socialLinks.email} className="flex items-center justify-center h-[clamp(5.25rem,11svh,5.75rem)] border-r neu-separator group active:bg-zinc-100/10 transition-colors">
              <div className="w-11 h-11 rounded-full flex items-center justify-center transition-colors text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-0.4 4.25l-7.07 4.42c-0.32 0.2-0.74 0.2-1.06 0L4.4 8.25c-0.25-0.16-0.4-0.43-0.4-0.72 0-0.67 0.73-1.07 1.27-0.67L12 11l6.73-4.14c0.54-0.4 1.27 0 1.27 0.67 0 0.29-0.15 0.56-0.4 0.72z" />
                </svg>
              </div>
            </a>
            <a href="#contact" className="flex items-center justify-center h-[clamp(5.25rem,11svh,5.75rem)] border-r neu-separator group active:bg-zinc-100/10 transition-colors">
              <div className="w-11 h-11 rounded-full flex items-center justify-center transition-colors text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z" />
                </svg>
              </div>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-[clamp(5.25rem,11svh,5.75rem)] border-r neu-separator group active:bg-zinc-100/10 transition-colors">
              <div className="w-11 h-11 rounded-full flex items-center justify-center transition-colors text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
                <svg viewBox="0 0 24 24" className="w-[1.55rem] h-[1.55rem] fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-[clamp(5.25rem,11svh,5.75rem)] group active:bg-zinc-100/10 transition-colors">
              <div className="w-11 h-11 rounded-full flex items-center justify-center transition-colors text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
                <svg viewBox="0 0 24 24" className="w-[1.55rem] h-[1.55rem] fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Desktop/Bigger screens Design: (Hidden on mobile) */}
      <div className="hidden md:block w-full max-w-5xl mx-auto px-6 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 md:gap-5">
          {/* Accent-fill service cards: Mobile Apps, AI, Design */}
          {([
            { 
              href: "/apps", 
              label: "Mobile Apps", 
              accent: "iOS · Android · React Native",
              orderClass: "order-2 md:order-1",
            },
            { 
              href: "/ai", 
              label: "AI Engineering", 
              accent: "ML · LLMs · Intelligent Systems",
              orderClass: "order-3 md:order-2",
            },
            { 
              href: "/design", 
              label: "Design", 
              accent: "Prototyping · Design Systems",
              orderClass: "order-4 md:order-3",
            },
          ]).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative rounded-3xl overflow-hidden aspect-[2.15/1] md:aspect-auto h-auto md:h-36 lg:h-40",
                "neu-raised neu-raised-accent transition-all duration-500 ease-in-out",
                item.orderClass
              )}
            >
                <div className="absolute inset-4 md:inset-5 z-10 pointer-events-none">
                  <ArrowUpRight 
                    className="md:hidden absolute top-0 right-0 w-4 h-4 transition-colors opacity-70 group-hover:opacity-100 text-zinc-500 dark:text-zinc-400" 
                  />
                  <div className="absolute bottom-0 md:bottom-0 left-1.5 md:left-0">
                    <span 
                      className="text-sm sm:text-base font-semibold block text-zinc-900 dark:text-zinc-50"
                    >
                      {item.label}
                    </span>
                    <span 
                      className="hidden md:block text-xs text-zinc-800/70 dark:text-zinc-400/70 group-hover:text-zinc-800/90 dark:group-hover:text-zinc-400/90 transition-colors mt-1"
                    >
                      {item.accent}
                    </span>
                  </div>
                </div>
              </Link>
          ))}

          {/* All Projects — like other 3 rectangles with light gray background */}
          <Link
            href="/projects"
            className={cn(
              "group relative rounded-3xl overflow-hidden h-32 md:h-full col-span-2 md:col-span-1 md:row-span-2 order-1 md:order-4",
              "neu-raised neu-raised-accent neu-mobile-neumorphic transform-gpu mb-2 md:mb-0"
            )}
          >
            {/* 1. Underlying Dreamy Glow Layer - No hard edges */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none animate-color-shift">
              <div className="absolute inset-0 bg-[var(--neu-surface)] transition-colors duration-500" />
              <div 
                className="dark:hidden absolute inset-0 overflow-hidden pointer-events-none"
                style={{
                  maskImage: 'radial-gradient(ellipse at center, black 25%, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 25%, transparent 75%)'
                }}
              >
                <div className="absolute top-[10%] left-[5%] w-[50%] h-[50%] rounded-full bg-blue-500/40 animate-lava [--drift-name:drift-wide] [--drift-duration:12s] [--morph-name:morph] [--morph-duration:10s] [--color-duration:18s] [--glow-blur:80px] scale-125" style={{ filter: 'blur(var(--glow-blur))' }} />
                <div className="absolute bottom-[5%] right-[5%] w-[45%] h-[45%] rounded-full bg-purple-500/40 animate-lava [--drift-name:drift-wide] [--drift-duration:15s] [--morph-name:morph-alt] [--morph-duration:13s] [--color-duration:22s] [--drift-delay:1s] [--color-delay:2s] [--glow-blur:75px] scale-110" style={{ filter: 'blur(var(--glow-blur))' }} />
                <div className="absolute top-[25%] right-[5%] w-[40%] h-[40%] rounded-full bg-rose-500/40 animate-lava [--drift-name:drift-wide] [--drift-duration:14s] [--morph-name:morph] [--morph-duration:16s] [--color-duration:20s] [--drift-delay:2s] [--color-delay:4s] [--glow-blur:70px] scale-130" style={{ filter: 'blur(var(--glow-blur))' }} />
                <div className="absolute bottom-[15%] left-[10%] w-[35%] h-[35%] rounded-full bg-emerald-500/35 animate-lava [--drift-name:drift-wide] [--drift-duration:17s] [--morph-name:morph-alt] [--morph-duration:14s] [--color-duration:24s] [--drift-delay:3s] [--color-delay:6s] [--glow-blur:65px] scale-115" style={{ filter: 'blur(var(--glow-blur))' }} />
                <div className="absolute top-[30%] left-[30%] w-[30%] h-[30%] rounded-full bg-white/50 animate-lava [--drift-name:drift-wide] [--drift-duration:14s] [--morph-name:morph] [--morph-duration:18s] [--color-duration:30s] [--drift-delay:4s] [--glow-blur:50px] scale-140" style={{ filter: 'blur(var(--glow-blur))' }} />
              </div>
              <div 
                className="hidden dark:block absolute inset-0 overflow-hidden pointer-events-none"
                style={{
                  maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)'
                }}
              >
                <div className="absolute inset-0 bg-[#121212] transition-colors duration-500" />
                <div className="absolute inset-0 opacity-100">
                  <div className="absolute top-[15%] left-[15%] w-[45%] h-[45%] rounded-full bg-blue-600/50 animate-lava [--drift-name:drift-wide] [--drift-duration:15s] [--morph-name:morph-alt] [--morph-duration:12s] [--color-duration:20s] [--glow-blur:70px] scale-120" style={{ filter: 'blur(var(--glow-blur))' }} />
                  <div className="absolute bottom-[5%] right-[10%] w-[40%] h-[40%] rounded-full bg-purple-600/50 animate-lava [--drift-name:drift-wide] [--drift-duration:18s] [--morph-name:morph] [--morph-duration:15s] [--color-duration:22s] [--drift-delay:2s] [--glow-blur:65px] scale-110" style={{ filter: 'blur(var(--glow-blur))' }} />
                  <div className="absolute top-[20%] right-[15%] w-[35%] h-[35%] rounded-full bg-rose-600/45 animate-lava [--drift-name:drift-wide] [--drift-duration:20s] [--morph-name:morph-alt] [--morph-duration:18s] [--color-duration:25s] [--drift-delay:4s] [--glow-blur:60px] scale-130" style={{ filter: 'blur(var(--glow-blur))' }} />
                  <div className="absolute bottom-[15%] left-[5%] w-[30%] h-[30%] rounded-full bg-emerald-600/40 animate-lava [--drift-name:drift-wide] [--drift-duration:22s] [--morph-name:morph] [--morph-duration:20s] [--color-duration:28s] [--drift-delay:6s] [--glow-blur:55px] scale-115" style={{ filter: 'blur(var(--glow-blur))' }} />
                  <div className="absolute top-[40%] left-[40%] w-[25%] h-[25%] rounded-full bg-black/50 animate-lava [--drift-name:drift-wide] [--drift-duration:16s] [--morph-name:morph-alt] [--morph-duration:14s] [--color-duration:35s] [--drift-delay:5s] [--glow-blur:45px] scale-150" style={{ filter: 'blur(var(--glow-blur))' }} />
                </div>
              </div>
              <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.02] mix-blend-overlay pointer-events-none z-[5]" 
                   style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
            </div>
            <div 
              className="absolute inset-0 rounded-3xl pointer-events-none z-10 bg-[var(--neu-surface)]/10 dark:bg-[var(--neu-surface)]/10 shadow-[inset_16px_16px_40px_rgba(0,0,0,0.1),inset_-16px_-16px_40px_rgba(255,255,255,0.7)] dark:shadow-[inset_16px_16px_40px_rgba(0,0,0,0.65),inset_-16px_-16px_40px_rgba(255,255,255,0.04)]"
            />
            <div 
              className="absolute inset-0 rounded-3xl pointer-events-none z-[15] opacity-0 group-active:opacity-100 transition-opacity duration-0 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.1),inset_-6px_-6px_12px_rgba(255,255,255,0.7)] dark:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.5),inset_-6px_-6px_12px_rgba(255,255,255,0.05)]"
            />
            <div className="absolute inset-4 md:inset-5 z-20 pointer-events-none flex items-center justify-center md:block">
              <ArrowUpRight className="md:hidden absolute top-0 right-0 w-4 h-4 text-zinc-500 dark:text-neutral-500 group-hover:text-zinc-700 dark:group-hover:text-neutral-400 transition-colors" />
              <div className="md:absolute md:bottom-0 md:left-0 text-center md:text-left">
                <span className="text-lg sm:text-xl md:text-base font-semibold text-zinc-900 dark:text-neutral-50 block">
                  All Projects
                </span>
                <span className="hidden md:block text-xs text-zinc-800/70 dark:text-neutral-400/70 group-hover:text-zinc-800/90 dark:group-hover:text-neutral-400/90 transition-colors mt-1">
                  Portfolio · Case Studies
                </span>
              </div>
            </div>
          </Link>

          {/* Social Icons (Row 2: Shorter for squares) */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:gap-5 aspect-[2.15/1] md:aspect-auto h-auto md:h-24 lg:h-28 order-7 md:order-5">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-3xl flex items-center justify-center group active:bg-zinc-100/10 transition-all duration-500 ease-in-out neu-raised neu-raised-accent"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-zinc-500 dark:fill-zinc-400 group-hover:fill-zinc-900 dark:group-hover:fill-zinc-100 transition-colors duration-500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="GitHub"
                className="rounded-3xl flex items-center justify-center group active:bg-zinc-100/10 transition-all duration-500 ease-in-out neu-raised neu-raised-accent"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-zinc-500 dark:fill-zinc-400 group-hover:fill-zinc-900 dark:group-hover:fill-zinc-100 transition-colors duration-500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
          </div>

          {/* Resume - Bottom Left Alignment (Row 2) */}
          <a
            href={socialLinks.resume}
            download={socialLinks.resumeDownloadName}
            className="group relative rounded-3xl overflow-hidden aspect-[2.15/1] md:aspect-auto h-auto md:h-24 lg:h-28 order-5 md:order-6 flex flex-col justify-end p-4 md:p-5 transition-all duration-500 ease-in-out neu-raised neu-raised-accent"
          >
             <span className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-50 block">Resume</span>
          </a>

          {/* Contact - Bottom Left Alignment (Row 2) */}
          <a
            href="#contact"
            className="group relative rounded-3xl overflow-hidden aspect-[2.15/1] md:aspect-auto h-auto md:h-24 lg:h-28 order-6 md:order-7 flex flex-col justify-end p-4 md:p-5 transition-all duration-500 ease-in-out neu-raised neu-raised-accent"
          >
             <span className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-50 block">Contact</span>
          </a>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="w-full flex flex-col items-center justify-center mb-0 pb-0 sm:pb-0 sm:mb-0 md:mb-0 md:pb-0 mt-0 md:mt-8 relative z-40">
        <div className={cn(
            "mt-0 md:mt-2 pb-0 md:pb-0 flex justify-center transition-opacity duration-300 lg:opacity-40 lg:hover:opacity-100",
            scrolledDown ? "opacity-0 pointer-events-none" : "opacity-70"
        )}>
          <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  )
}























