import { Footer } from "@/components/layout/Footer"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mobile Apps | Arjun Bishnoi",
  description: "Cross-platform mobile app development with React Native, SwiftUI, and Kotlin.",
  robots: { index: false, follow: true },
}

export default function MobileAppsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Mobile Apps
            <span className="block text-xl text-primary mt-2">Cross-platform development</span>
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
