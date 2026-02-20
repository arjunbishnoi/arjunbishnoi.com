import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Development | Arjun Bishnoi",
  description: "Modern web development with React, Next.js, Vue.js, and full-stack technologies.",
  robots: { index: false, follow: true },
}

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Web Development
            <span className="block text-xl text-primary mt-2">Full-stack solutions</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Coming soon.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
