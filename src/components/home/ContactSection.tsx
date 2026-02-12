"use client"

import { useState } from "react"
import { Loader2, Check } from "lucide-react"
import { cn } from "@/lib/utils"

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
    <section id="contact" ref={sectionRef} className="relative py-16 z-40 bg-background">
      {/* Static Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Contact</h2>
      </div>
      
      {/* Contact content */}
      <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-4">Get In Touch</h3>
          <p className="text-muted-foreground">
            I&apos;m currently open to new opportunities and collaborations. Whether you have a question, 
            a project in mind, or just want to say hello, feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
              <input 
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                type="text" 
                name="name"
                id="name" 
                className="block w-full rounded-md border-0 bg-muted text-foreground shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground/50"
                placeholder="Your name"
                required
                disabled={isLoading || isSuccess}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
              <input 
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                type="email" 
                name="email"
                id="email" 
                className="block w-full rounded-md border-0 bg-muted text-foreground shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground/50"
                placeholder="your.email@example.com"
                required
                disabled={isLoading || isSuccess}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
              <textarea 
                value={form.message}
                onChange={(e) => setForm({...form, message: e.target.value})}
                name="message"
                id="message" 
                rows={4} 
                className="block w-full rounded-md border-0 bg-muted text-foreground shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground/50"
                placeholder="Your message here..."
                required
                disabled={isLoading || isSuccess}
              />
            </div>
            
            <div>
              <button 
                type="submit" 
                className={cn(
                  "w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-content shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 flex items-center justify-center min-h-[44px]",
                  isSuccess && "bg-green-600 hover:bg-green-700 text-white",
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
