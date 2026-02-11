<template>
  <section id="projects" class="relative py-0 bg-black">
    <!-- Sticky header -->
    <SectionStickyHeader title="Projects" to="/projects" />
    
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
