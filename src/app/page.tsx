import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { BlogSection } from "@/components/home/BlogSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <FeaturedSection />
      <ProjectsSection />
      <BlogSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
