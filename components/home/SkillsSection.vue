<template>
  <section id="skills" class="relative py-16" style="background-color: var(--background-color);">
    <!-- Sticky header -->
    <SectionStickyHeader title="Skills" to="/skills" />
    
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
