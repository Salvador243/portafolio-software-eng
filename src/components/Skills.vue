<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const skills = [
  {
    categoryKey: 'frontend',
    items: ['Vue 2/3', 'Pinia', 'Angular 18', 'Signals', 'React', 'TypeScript', 'Tailwind CSS', 'PrimeVue', 'PrimeNG']
  },
  {
    categoryKey: 'backend',
    items: ['PHP', 'Laravel', 'Node.js', 'NestJS', 'Express', 'Python', 'Flask']
  },
  {
    categoryKey: 'salesforce',
    items: ['Apex', 'LWC', 'OmniStudio', 'OmniScripts', 'Data Mappers', 'Flows', 'List Views', 'Object Manager', 'Apex Testing', 'Data Modeling']
  },
  {
    categoryKey: 'database',
    items: ['MySQL', 'PostgreSQL', 'Redis', 'SQL Optimization']
  },
  {
    categoryKey: 'tools',
    items: ['AWS (S3, Beanstalk, RDS)', 'Docker', 'GitHub Actions', 'GitFlow', 'Linux', 'CI/CD']
  },
  {
    categoryKey: 'engineering',
    items: ['DDD', 'SOLID', 'KISS', 'Clean Architecture', 'Design Patterns', 'TDD', 'Micro-Frontends']
  }
]
</script>

<template>
  <section id="skills" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-12 text-center">{{ t('skills.title') }}</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="skill in skills" :key="skill.categoryKey"
             class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 transition-shadow hover:shadow-md">
          <h3 class="text-lg font-bold text-gray-900 mb-4">{{ t(`skills.${skill.categoryKey}`) }}</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="item in skill.items" :key="item"
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              {{ item }}
            </span>
          </div>
        </div>
      </div>

      <p class="mt-10 text-center text-gray-600">
        <span class="font-medium text-gray-900">{{ t('skills.languages') }}:</span>
        Español (nativo) · English (professional)
      </p>
    </div>
  </section>
</template>
