import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "UI/UX Design | Arjun Bishnoi",
  description: "User interface and experience design with Figma, prototyping, and design systems.",
  robots: { index: false, follow: true },
}

export default function UIUXDesignPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            UI/UX Design
            <span className="block text-xl text-primary mt-2">Pixel-perfect experiences</span>
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
