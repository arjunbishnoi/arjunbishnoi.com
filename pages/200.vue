<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-gray-900 mb-4">200</h1>
      <p class="text-xl text-gray-600 mb-8">Page loaded successfully</p>
      <NuxtLink to="/" class="text-blue-600 hover:text-blue-800">
        Return to Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script> 