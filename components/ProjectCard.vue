<template>
  <div class="bg-gray-900/50 rounded-lg overflow-hidden h-full flex flex-col">
    <div class="h-48 bg-gray-800/50 relative overflow-hidden group">
      <img 
        :src="project.image" 
        :alt="project.title" 
        class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
      />
      <!-- Add colorful overlay gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 mix-blend-overlay"></div>
    </div>
    <div class="p-6 flex flex-col flex-grow">
      <h3 class="text-xl font-semibold text-white mb-2">{{ project.title }}</h3>
      <p class="text-gray-400 mb-4 flex-grow">
        {{ project.description }}
      </p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="tag in project.tags" 
          :key="tag"
          class="text-xs px-2 py-1 bg-primary/20 text-primary rounded"
        >
          {{ tag }}
        </span>
      </div>
      <div class="flex gap-4 mt-auto">
        <a 
          :href="project.sourceUrl" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="text-primary hover:text-primary/80 text-sm font-medium"
        >
          Source Code
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  project: {
    id: string
    title: string
    description: string
    image: string
    tags: string[]
    sourceUrl: string
  }
}>()
</script>
