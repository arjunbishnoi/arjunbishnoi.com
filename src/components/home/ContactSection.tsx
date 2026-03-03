"use client"

import { useState } from "react"
import Image from "next/image"
import { Loader2, Check, Download, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { socialLinks } from "@/lib/site-data"

// import { useStickyObserver } from "@/hooks/use-sticky-observer"

export function ContactSection() {
  // const sectionRef = useStickyObserver('Contact')
  const sectionRef = null; // Placeholder
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage("")
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/contact@arjunbishnoi.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: 'New Portfolio Contact',
          _captcha: 'false'
        })
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setIsSuccess(true)
        setForm({ name: '', email: '', message: '' })
        
        // Reset button state after 3 seconds
        setTimeout(() => {
          setIsSuccess(false)
        }, 3000)
      } else {
        throw new Error(data.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setErrorMessage('Something went wrong. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-10 z-40 bg-background">
      {/* Static Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-2 sm:pb-4">
        <h2 className="text-[1.625rem] md:text-3xl lg:text-4xl text-black dark:text-white font-bold tracking-normal leading-normal">Contact</h2>
      </div>
      
      {/* Contact content */}
      <div className="mx-auto max-w-7xl px-6 pt-6 sm:pt-8 lg:px-8">
        <div className="max-w-2xl mx-auto text-left sm:text-center mb-16">
          <p className="text-xl md:text-2xl text-foreground font-normal mb-8 leading-relaxed">
            I&apos;m currently open to new opportunities and collaborations. Whether you have a question, 
            a project in mind, or just want to say hello, feel free to reach out!
          </p>

          {/* Social & Direct Contact Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 mb-2 mt-4 w-full">
            {/* Top row on mobile: Social + Resume */}
            <div className="flex gap-3 md:gap-4 w-full sm:w-auto">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center aspect-square h-[3.25rem] sm:h-14 md:h-[3.75rem] rounded-2xl neu-raised group/icon transition-all shrink-0"
                aria-label="GitHub Profile"
              >
                <Image src="/github-icon.png" alt="GitHub" width={28} height={28} className="w-6 h-6 sm:w-7 sm:h-7 object-contain filter brightness-0 dark:invert opacity-70 group-hover/icon:opacity-100 transition-all" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center aspect-square h-[3.25rem] sm:h-14 md:h-[3.75rem] rounded-2xl neu-raised group/icon transition-all shrink-0"
                aria-label="LinkedIn Profile"
              >
                <Image src="/linkedin-icon.png" alt="LinkedIn" width={28} height={28} className="w-6 h-6 sm:w-7 sm:h-7 object-contain filter brightness-0 dark:invert opacity-70 group-hover/icon:opacity-100 transition-all" />
              </a>

              <a
                href={socialLinks.resume}
                download={socialLinks.resumeDownloadName}
                className="flex flex-1 sm:flex-auto items-center justify-center gap-2 px-6 h-[3.25rem] sm:h-14 md:h-[3.75rem] rounded-2xl neu-raised text-foreground transition-all font-medium text-base sm:text-lg whitespace-nowrap group/icon"
              >
                <Download className="w-5 h-5 sm:w-6 sm:h-6 opacity-70 group-hover/icon:opacity-100 transition-all" />
                <span>Resume</span>
              </a>
            </div>

            {/* Bottom row on mobile: Email */}
            <a
              href={socialLinks.email}
              className="flex w-full sm:w-auto items-center justify-center gap-2 px-6 h-[3.25rem] sm:h-14 md:h-[3.75rem] rounded-2xl neu-raised text-foreground transition-all font-medium text-base sm:text-lg whitespace-nowrap group/icon"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 opacity-70 group-hover/icon:opacity-100 transition-all" />
              <span>contact@arjunbishnoi.com</span>
            </a>
          </div>
        </div>
        
        <div className="max-w-xl mx-auto mt-12 border-t border-border/50 pt-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-base font-medium text-foreground mb-1.5 ml-1">Name</label>
              <input 
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                type="text" 
                name="name"
                id="name" 
                className="block w-full rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50/60 dark:bg-white/5 backdrop-blur-sm text-foreground shadow-sm px-5 py-3.5 focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white placeholder:text-muted-foreground/50 transition-all outline-none"
                placeholder="Your name"
                required
                disabled={isLoading || isSuccess}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-base font-medium text-foreground mb-1.5 ml-1">Email</label>
              <input 
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                type="email" 
                name="email"
                id="email" 
                className="block w-full rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50/60 dark:bg-white/5 backdrop-blur-sm text-foreground shadow-sm px-5 py-3.5 focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white placeholder:text-muted-foreground/50 transition-all outline-none"
                placeholder="your.email@example.com"
                required
                disabled={isLoading || isSuccess}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-base font-medium text-foreground mb-1.5 ml-1">Message</label>
              <textarea 
                value={form.message}
                onChange={(e) => setForm({...form, message: e.target.value})}
                name="message"
                id="message" 
                rows={4} 
                className="block w-full rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50/60 dark:bg-white/5 backdrop-blur-sm text-foreground shadow-sm px-5 py-3.5 focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white placeholder:text-muted-foreground/50 transition-all outline-none resize-y"
                placeholder="Your message here..."
                required
                disabled={isLoading || isSuccess}
              />
            </div>
            
            <div className="pt-2">
              <button 
                type="submit" 
                className={cn(
                  "w-full rounded-2xl bg-black dark:bg-white px-5 py-4 text-base font-bold text-white dark:text-black shadow-sm hover:bg-black/90 dark:hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white transition-all duration-300 flex items-center justify-center min-h-[3.5rem]",
                  isSuccess && "bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 text-white dark:text-black",
                  isLoading && "opacity-80 cursor-not-allowed"
                )}
                disabled={isLoading || isSuccess}
              >
                {/* Loading Spinner */}
                {isLoading && <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />}
                
                {/* Success Icon */}
                {isSuccess && <Check className="-ml-1 mr-2 h-5 w-5" />}
                
                {/* Button Text */}
                <span>
                    {isLoading ? 'Sending...' : isSuccess ? 'Message Sent!' : 'Send Message'}
                </span>
              </button>
              {errorMessage && <p className="mt-2 text-sm text-red-500 text-center">{errorMessage}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
