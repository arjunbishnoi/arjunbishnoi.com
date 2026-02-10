<template>
  <div class="bg-black min-h-screen">
    <!-- Header -->
    <div class="pt-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 pt-12 pb-8">
        <h1 class="text-4xl font-bold tracking-tight text-white">
          Skills
          <span class="block text-xl text-primary mt-2">My technical expertise</span>
        </h1>
        <p class="mt-4 text-lg text-gray-300 max-w-2xl">
          A comprehensive overview of my technical skills and proficiencies, developed through years of 
          professional experience and continuous learning.
        </p>
      </div>
    </div>

    <!-- Skills Categories -->
    <div class="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div 
        v-for="skillCategory in skills" 
        :key="skillCategory.category" 
        class="mb-16"
      >
        <h2 class="text-2xl font-bold text-white mb-8">{{ skillCategory.category }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCard 
            v-for="group in skillCategory.groups" 
            :key="group.name" 
            :group="group" 
          />
        </div>
      </div>
    </div>

    <!-- Ongoing Learning -->
    <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div class="bg-gray-900/50 rounded-lg p-8">
        <h2 class="text-2xl font-bold text-white mb-6">Currently Learning</h2>
        <div class="flex flex-wrap gap-4">
          <div 
            v-for="item in learning" 
            :key="item"
            class="px-4 py-2 bg-primary/20 text-primary rounded-full"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>

    <!-- Contact CTA -->
    <div class="bg-gray-900/50 py-12 mt-10">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 class="text-2xl font-bold text-white mb-3">Let's Work Together</h2>
        <p class="text-gray-400 mb-6 max-w-2xl mx-auto">
          Looking for a developer with the right skill set for your project? Let's discuss how I can help bring your ideas to life.
        </p>
        <a href="/#contact" class="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md inline-block transition-colors">
          Contact Me
        </a>
      </div>
    </div>

    <!-- Back to Home -->
    <div class="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      <NuxtLink to="/" class="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
        <span aria-hidden="true">←</span> Back to Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { skills, learning } = useSiteData()

// Set page title
useHead({
  title: 'Skills | Arjun Bishnoi',
  meta: [
    { name: 'description', content: 'Explore my technical skills and expertise in web development, including frontend, backend, and UI/UX design.' }
  ]
})
</script> 