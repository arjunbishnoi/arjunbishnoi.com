<template>
  <section id="skills" class="relative py-16 bg-black">
    <!-- Sticky header -->
    <div class="sticky z-30 bg-black/80 backdrop-blur-md py-2" style="top: calc(var(--navbar-height) - 1px);">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <NuxtLink to="/skills" class="flex justify-between items-center w-full group">
          <span class="text-2xl font-bold text-white group-hover:text-primary transition-colors">Skills</span>
          <span class="text-gray-400 group-hover:text-primary transition-colors">
            <span aria-hidden="true">→</span>
          </span>
        </NuxtLink>
      </div>
    </div>
    
    <!-- Skills content -->
    <div class="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <SkillListCard 
          v-for="skillCategory in shortSkillList" 
          :key="skillCategory.category" 
          :category="skillCategory.category" 
          :items="skillCategory.items" 
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const { shortSkillList } = useSiteData()
</script>
