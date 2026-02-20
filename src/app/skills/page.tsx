import { skills, learning } from "@/lib/site-data"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { SkillCard } from "@/components/skills/SkillCard"
import Link from "next/link"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Skills | Arjun Bishnoi",
  description: "Explore my technical skills and expertise in web development, including frontend, backend, and UI/UX design.",
  openGraph: {
    title: "Skills | Arjun Bishnoi",
    description: "Explore my technical skills and expertise in web development, including frontend, backend, and UI/UX design.",
    url: "https://arjunbishnoi.com/skills",
    images: [{ url: "https://arjunbishnoi.com/arjun-bishnoi-profile-square.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills | Arjun Bishnoi",
    description: "Explore my technical skills and expertise in web development, including frontend, backend, and UI/UX design.",
    images: ["https://arjunbishnoi.com/arjun-bishnoi-profile-square.jpg"],
  },
}

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-24">
      <Header />

      {/* Header */}
      <div className="pt-8 pb-8 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Skills & Expertise
              <span className="block text-xl text-primary mt-2">Technologies I work with</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              A comprehensive overview of my technical stack, tools, and methodologies. I believe in continuous learning and staying updated with industry standards.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        
        {/* Skill Categories */}
        {skills.map((category) => (
          <section key={category.category} className="mb-20">
            <div className="flex items-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">{category.category}</h2>
              <div className="h-px flex-grow bg-border ml-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.groups.map((group) => (
                <SkillCard 
                  key={group.name} 
                  group={group} 
                />
              ))}
            </div>
          </section>
        ))}

        {/* Currently Learning */}
        <section className="mb-20">
          <div className="bg-card/50 rounded-2xl overflow-hidden border border-border/50 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Currently Learning & Exploring</h2>
            <div className="flex flex-wrap gap-4">
              {learning.map((item) => (
                <span key={item} className="px-4 py-2 bg-muted text-foreground rounded-full text-sm font-medium border border-border">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-border/50 p-10 md:p-16 relative text-center">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-3">Interested in working together?</h2>
              <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Looking for a developer with the right skill set for your project? Let&apos;s discuss how I can help bring your ideas to life.
              </p>
              <Link href="/#contact" className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-content rounded-md inline-block transition-colors font-semibold">
                Contact Me
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
