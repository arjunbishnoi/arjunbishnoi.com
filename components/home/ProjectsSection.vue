<template>
  <section id="projects" class="relative py-0 bg-black">
    <!-- Sticky header -->
    <div class="sticky z-30 bg-black/80 backdrop-blur-md py-2" style="top: calc(var(--navbar-height) - 1px);">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <NuxtLink to="/projects" class="flex justify-between items-center w-full group">
          <span class="text-2xl font-bold text-white group-hover:text-accent transition-colors">Projects</span>
          <span class="text-gray-400 group-hover:text-accent transition-colors">
            <span aria-hidden="true">→</span>
          </span>
        </NuxtLink>
      </div>
    </div>
    
    <!-- Projects content -->
    <div class="mx-auto max-w-7xl px-6 pt-4 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard 
          v-for="project in projects.filter(p => p.featured)" 
          :key="project.id" 
          :project="project" 
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const { projects } = useSiteData()
</script>
