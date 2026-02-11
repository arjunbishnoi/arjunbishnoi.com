<template>
  <main>
    <HeroSection id="hero" />
    <ProjectsSection />
    <SkillsSection />
    <AboutSection />
    <ContactSection id="contact" />
  </main>
</template>

<script setup>
import HeroSection from '~/components/home/HeroSection.vue'
import ProjectsSection from '~/components/home/ProjectsSection.vue'
import SkillsSection from '~/components/home/SkillsSection.vue'
import AboutSection from '~/components/home/AboutSection.vue'
import ContactSection from '~/components/home/ContactSection.vue'

const { setActiveSection } = useActiveSection()

// Global observer removed to prevent premature title switching.
// SectionStickyHeader component now handles setting the active section
// precisely when the header docks.

</script> 