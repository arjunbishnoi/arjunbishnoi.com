import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeAboutMobile } from "@/components/home/HomeAboutMobile";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { BlogSection } from "@/components/home/BlogSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <HomeAboutMobile />
      <FeaturedSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
