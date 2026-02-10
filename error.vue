<template>
  <div class="min-h-screen flex items-center justify-center bg-black">
    <div class="text-center px-6">
      <h1 class="text-9xl font-bold text-accent mb-4">
        {{ error.statusCode === 404 ? '404' : 'Error' }}
      </h1>
      <p class="text-2xl text-white mb-8 font-medium">
        {{ error.statusCode === 404 ? 'Page not found' : 'Something went wrong' }}
      </p>
      <p class="text-gray-400 mb-12 max-w-md mx-auto">
        {{ error.statusCode === 404 ? "Sorry, we couldn't find the page you're looking for." : "An unexpected error occurred. Please try again later." }}
      </p>
      <button 
        @click="handleClearError" 
        class="inline-flex items-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-primary-content bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
      >
        Go back home
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const handleClearError = () => clearError({ redirect: '/' })
</script> 