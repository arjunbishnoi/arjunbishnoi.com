<template>
  <div class="bg-gray-900/50 p-6 rounded-lg h-full">
    <h3 class="text-xl font-semibold text-primary mb-4">{{ category }}</h3>
    <ul class="space-y-2 text-gray-300">
      <li v-for="item in items" :key="item" class="flex items-center">
        <span class="mr-2 text-primary">▹</span> {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  category: string
  items: string[]
}>()
</script>
