"use client"

import React, { useState, useEffect } from "react"
import { socialLinks } from "@/lib/site-data"
import { Github, Linkedin, ArrowRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

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
    <section className="relative overflow-hidden flex flex-col items-center justify-start min-h-[85vh] md:min-h-screen pt-20 bg-background">
      {/* Top area with title and paragraph */}
      <div className="mx-auto max-w-7xl px-4 pt-4 pb-2 sm:pb-4 lg:px-8 w-full">
        <div className="text-center w-full flex items-center justify-center flex-col">
          <div className="inline-block w-full text-center py-2 flex flex-col items-center justify-center">
            <h1 className="font-bold tracking-tight text-center max-w-full leading-none w-full text-foreground">
              {/* Mobile-first hero title with controlled line breaks and fluid typography */}
              <span className="flex flex-col items-center justify-center w-full gap-[0.05em] mb-2">
                <span 
                    className="block text-center w-full whitespace-nowrap leading-[0.95]"
                    style={{ fontSize: "clamp(1.5rem, 6vw, 3rem)" }}
                >
                    Mobile, AI &amp; Web
                </span>
                <span 
                    className="block text-center w-full whitespace-nowrap leading-[0.95] bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-gradient bg-[length:200%_auto] pb-2" // Changed py-2 to pb-2
                    style={{ fontSize: "clamp(1.5rem, 6vw, 3rem)" }}
                >
                    Designer / Developer
                </span>
              </span>
            </h1>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg leading-tight text-muted-foreground w-[95%] max-w-md sm:w-auto sm:max-w-2xl font-medium px-2 sm:px-0">
              Mobile apps, AI, web and design.<br />Consistent, hands-on, and always evolving.
            </p>
          </div>
        </div>
      </div>
          
      {/* Social Links */}
      <div className="flex items-center justify-center space-x-8 mb-4 mt-auto">
        {/* LinkedIn */}
        <a 
          href={socialLinks.linkedin} 
          target="_blank" 
          rel="me noopener noreferrer"
          aria-label="Visit Arjun's LinkedIn profile"
          title="LinkedIn"
          className="h-12 w-12 md:h-16 md:w-16 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm hover:bg-gray-700/80 transition-colors group"
        >
          <Linkedin className="w-6 h-6 md:w-8 md:h-8 text-gray-300 group-hover:text-white transition-colors" />
        </a>
        
        {/* GitHub */}
        <a 
          href={socialLinks.github} 
          target="_blank" 
          rel="me noopener noreferrer"
          aria-label="Visit Arjun's GitHub profile"
          title="GitHub"
          className="h-12 w-12 md:h-16 md:w-16 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm hover:bg-gray-700/80 transition-colors group"
        >
          <Github className="w-6 h-6 md:w-8 md:h-8 text-gray-300 group-hover:text-white transition-colors" />
        </a>
      </div>
      
      {/* Bottom area with buttons and scroll arrow */}
      <div className="w-full flex flex-col items-center justify-center mb-0 pb-4 sm:pb-4 sm:mb-4 md:mb-6 mt-4 relative z-40">
        {/* Buttons */}
        <div className="flex items-center justify-center gap-x-6 flex-wrap gap-y-4">
          <a
            href={socialLinks.resume}
            className="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm transition-colors bg-primary text-primary-content hover:bg-transparent hover:text-primary border border-transparent hover:border-primary"
            aria-label="Download Arjun's resume as PDF"
            title="Download Resume"
            download
          >
            Download Resume
          </a>
          <a 
            href="#contact" 
            className="text-sm font-semibold leading-6 text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1" 
            aria-label="Jump to contact section" 
            title="Contact Me"
          >
            Contact Me <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        
        {/* Scroll down indicator */}
        <div className={cn(
            "mt-8 pb-4 flex justify-center transition-opacity duration-300 lg:opacity-40 lg:hover:opacity-100",
            scrolledDown ? "opacity-0 pointer-events-none" : "opacity-70"
        )}>
          <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl pointer-events-none">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:opacity-30 opacity-60"
          style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
        />
      </div>
    </section>
  )
}
