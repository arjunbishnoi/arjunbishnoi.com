import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { WorkSection } from "@/components/home/WorkSection";
import { BlogSection } from "@/components/home/BlogSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site-config";

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: siteConfig.canonicalHomeUrl,
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <div className="flex-1 flex flex-col">
        <HeroSection />

        <FeaturedSection />
        <WorkSection />
        <BlogSection />
        <ContactSection />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
