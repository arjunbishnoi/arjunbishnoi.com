<template>
  <div class="bg-gray-900/50 rounded-lg p-6 h-full">
    <h3 class="text-xl font-semibold text-primary mb-4">{{ group.name }}</h3>
    <div class="space-y-6">
      <div v-for="item in group.items" :key="item.name">
        <div class="flex justify-between items-center mb-2">
          <span class="text-white font-medium">{{ item.name }}</span>
          <span class="text-gray-400 text-sm">{{ item.level }}</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2">
          <div 
            class="bg-primary h-2 rounded-full transition-all duration-1000 ease-out" 
            :style="{ width: `${item.percentage}%` }"
          ></div>
        </div>
        <p class="mt-2 text-sm text-gray-400">
          {{ item.details }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  group: {
    name: string
    items: {
      name: string
      level: string
      percentage: number
      details: string
    }[]
  }
}>()
</script>
