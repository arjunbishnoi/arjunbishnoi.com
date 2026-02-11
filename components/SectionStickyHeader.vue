<template>
  <!-- Placeholder to maintain layout space -->
  <div ref="placeholderRef" class="h-16 relative z-30">
    <div 
      class="transition-all duration-0"
      :class="[
        isStuck 
          ? 'fixed left-0 right-0 z-30 flex justify-center pointer-events-none' 
          : 'absolute inset-0 z-30 flex justify-center'
      ]"
      :style="{ top: isStuck ? 'calc(var(--navbar-height) + 0.75rem)' : '0' }"
    >
      <div 
        class="w-full max-w-7xl px-6 lg:px-8 flex items-center justify-center pointer-events-auto transition-opacity duration-300"
        :class="(isStuck && !isActive) ? 'opacity-0' : 'opacity-100'"
      >
        <div 
          class="w-full flex justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
        >
          <NuxtLink 
            :to="to" 
            class="group flex items-center relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] border"
            :class="[
              isStuck 
                ? 'bg-black/80 backdrop-blur-md border-white/10 rounded-full px-8 py-3 shadow-lg hover:bg-white/10 max-w-[280px]' 
                : 'w-full bg-transparent border-transparent max-w-full'
            ]"
          >
            <!-- Title (Left) -->
            <div 
              class="overflow-hidden flex items-center transition-all ease-[cubic-bezier(0.32,0.72,0,1)]"
              :class="isStuck 
                ? 'max-w-0 duration-500' 
                : 'max-w-[500px] duration-500'"
            >
              <span 
                v-if="!isStuck"
                class="text-2xl font-bold text-white group-hover:text-accent whitespace-nowrap transition-all ease-out"
                :class="isStuck ? 'opacity-0' : 'opacity-100 duration-500 delay-200'"
              >
                {{ title }}
              </span>
            </div>

            <!-- Spacer -->
            <div 
              class="transition-all ease-[cubic-bezier(0.32,0.72,0,1)]"
              :class="isStuck 
                ? 'max-w-0 flex-grow-0 delay-150 duration-500' 
                : 'flex-grow duration-500'"
            ></div>

            <!-- 'View all' or Title Text -->
            <div 
              class="overflow-hidden flex items-center transition-all ease-[cubic-bezier(0.32,0.72,0,1)]"
              :class="isStuck 
                ? 'max-w-[200px] delay-400 duration-500' 
                : 'max-w-0 duration-300'"
            >
              <span 
                class="text-sm font-medium text-white group-hover:text-accent whitespace-nowrap transition-all ease-out"
                :class="[
                  isStuck ? 'opacity-100 duration-300 delay-500' : 'opacity-0 duration-200',
                  showViewAll ? 'mr-2' : ''
                ]"
              >
                {{ showViewAll ? 'View all ' + title : title }}
              </span>
            </div>

            <!-- Arrow -->
            <span 
              v-if="showViewAll"
              class="transition-colors duration-300"
              :class="'text-gray-400 group-hover:text-accent'"
            >
              <span aria-hidden="true" class="inline-block text-xl leading-none">→</span>
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  showViewAll: {
    type: Boolean,
    default: true
  }
})

const placeholderRef = ref<HTMLElement | null>(null)
const isStuck = ref(false)
const { activeSection, setSectionStuck } = useActiveSection()

const isActive = computed(() => activeSection.value === props.title)

// Threshold for "is stuck" - slightly more than navbar height + padding
// Navbar 2.75rem (44px). Sticky top is set to calculation.
const STICKY_THRESHOLD = 45 

const checkStickiness = () => {
  if (!placeholderRef.value) return
  
  const rect = placeholderRef.value.getBoundingClientRect()
  
  // Logic: 
  // 1. It becomes stuck when it hits the top (threshold).
  // 2. We use FIXED position, so we switch state based on placeholder position.
  
  const isAtOrAboveStickyPos = rect.top <= STICKY_THRESHOLD

  if (isAtOrAboveStickyPos !== isStuck.value) {
    // Stick/Unstick based purely on scroll position
    isStuck.value = isAtOrAboveStickyPos
    
    // Manage Global Active Section via Stack
    setSectionStuck(props.title, isStuck.value)
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkStickiness, { passive: true })
  checkStickiness()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkStickiness)
})
</script>
