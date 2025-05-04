<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-gray-900 mb-4">
        {{ error.statusCode === 404 ? '404' : 'Error' }}
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        {{ error.statusCode === 404 ? 'Page not found' : 'Something went wrong' }}
      </p>
      <NuxtLink 
        to="/" 
        class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Go back home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})
</script> 