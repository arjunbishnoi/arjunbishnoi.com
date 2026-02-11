<template>
  <section id="contact" class="relative py-16 z-40" style="background-color: var(--background-color);">
    <!-- Static Header -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl" style="color: var(--text-color);">Contact</h2>
    </div>
    
    <!-- Contact content -->
    <div class="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
      <div class="max-w-2xl mx-auto text-center mb-12">
        <h3 class="text-xl font-semibold text-white mb-4">Get In Touch</h3>
        <p class="text-gray-300">
          I'm currently open to new opportunities and collaborations. Whether you have a question, 
          a project in mind, or just want to say hello, feel free to reach out!
        </p>
      </div>
      
      <div class="max-w-xl mx-auto">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input 
              v-model="form.name"
              type="text" 
              name="name"
              id="name" 
              class="block w-full rounded-md border-0 bg-gray-900/50 text-white shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-primary"
              placeholder="Your name"
              required
              :disabled="isLoading || isSuccess"
            />
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input 
              v-model="form.email"
              type="email" 
              name="email"
              id="email" 
              class="block w-full rounded-md border-0 bg-gray-900/50 text-white shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-primary"
              placeholder="your.email@example.com"
              required
              :disabled="isLoading || isSuccess"
            />
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea 
              v-model="form.message"
              name="message"
              id="message" 
              rows="4" 
              class="block w-full rounded-md border-0 bg-gray-900/50 text-white shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-primary"
              placeholder="Your message here..."
              required
              :disabled="isLoading || isSuccess"
            ></textarea>
          </div>
          
          <div>
            <button 
              type="submit" 
              class="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-content shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 flex items-center justify-center min-h-[44px]"
              :disabled="isLoading || isSuccess"
              :class="{ 'bg-green-600 hover:bg-green-700 text-white': isSuccess, 'opacity-80 cursor-not-allowed': isLoading }"
            >
              <!-- Loading Spinner -->
              <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              
              <!-- Success Icon -->
              <svg v-else-if="isSuccess" class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              
              <!-- Button Text -->
              <span>{{ buttonText }}</span>
            </button>
            <p v-if="errorMessage" class="mt-2 text-sm text-red-500 text-center">{{ errorMessage }}</p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isLoading = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

const buttonText = computed(() => {
  if (isLoading.value) return 'Sending...'
  if (isSuccess.value) return 'Message Sent!'
  return 'Send Message'
})

const handleSubmit = async () => {
  isLoading.value = true
  errorMessage.value = ''
  
  try {
    const response = await fetch('https://formsubmit.co/ajax/contact@arjunbishnoi.com', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
        _subject: 'New Portfolio Contact',
        _captcha: 'false'
      })
    })
    
    const data = await response.json()
    
    if (response.ok) {
      isSuccess.value = true
      form.value = { name: '', email: '', message: '' }
      
      // Reset button state after 3 seconds
      setTimeout(() => {
        isSuccess.value = false
      }, 3000)
    } else {
      throw new Error(data.message || 'Failed to send message')
    }
  } catch (error) {
    console.error('Submission error:', error)
    errorMessage.value = 'Something went wrong. Please try again later.'
  } finally {
    isLoading.value = false
  }
}
</script>
