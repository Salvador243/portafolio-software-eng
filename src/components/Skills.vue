<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const skills = [
  {
    categoryKey: 'frontend',
    items: ['Vue 2', 'Vue 3', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'PrimeNG', 'PrimeVue', 'shadcn']
  },
  {
    categoryKey: 'backend',
    items: ['PHP', 'NestJS', 'Express', 'Python', 'Flask', 'Laravel', 'Node.js', 'Spring Boot']
  },
  {
    categoryKey: 'database',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'TypeORM']
  },
  {
    categoryKey: 'cicd',
    items: ['GitHub Actions', 'GitLab', 'Bitbucket', 'Git', 'AWS']
  },
  {
    categoryKey: 'extras',
    items: ['Micro Frontend', 'Module Federation', 'GraphQL', 'Flutter', 'WordPress']
  },
  {
    categoryKey: 'languages',
    items: ['Español (Nativo) / Spanish (Native)', 'Inglés (Profesional) / English (Professional)']
  }
]
</script>

<template>
  <section id="skills" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-12 text-center">{{ t('skills.title') }}</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="skill in skills" :key="skill.categoryKey" 
             class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <h3 class="text-xl font-bold text-gray-900 mb-4">{{ t(`skills.${skill.categoryKey}`) }}</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="item in skill.items" :key="item"
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
