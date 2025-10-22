<script setup lang="ts">
import { ExternalLink, Github } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { projects } from '../data/projects'
import { computed } from 'vue'

const { t, locale } = useI18n()

const currentProjects = computed(() => projects[locale.value as 'es' | 'en'])
</script>

<template>
  <section id="projects" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 text-center">{{ t('projects.title') }}</h2>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        {{ t('projects.subtitle') }}
      </p>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div v-for="project in currentProjects" :key="project.title"
             class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <div class="p-6">
            <div class="flex items-start justify-between mb-4">
              <div>
                <span v-if="project.type === 'microservice' "
                      class="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-2">
                  {{ t('projects.microservice') }}
                </span>
                <span v-else-if="project.type === 'frontend' "
                      class="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full mb-2">
                  {{ t('projects.frontend') }}
                </span>
                <h3 class="text-xl font-bold text-gray-900">{{ project.title }}</h3>
              </div>
            </div>
            
            <p class="text-gray-600 mb-4 leading-relaxed">
              {{ project.description }}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tech in project.technologies" :key="tech"
                    class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                {{ tech }}
              </span>
            </div>
            
            <div class="flex gap-4">
              <a v-if="project.github" :href="project.github" target="_blank"
                 class="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                <Github class="w-5 h-5" />
                <span class="text-sm font-medium">{{ t('projects.code') }}</span>
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank"
                 class="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                <ExternalLink class="w-5 h-5" />
                <span class="text-sm font-medium">{{ t('projects.demo') }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <p class="text-gray-600 mb-4">
          {{ t('projects.footer') }}
        </p>
        <a href="https://github.com/Salvador243" target="_blank"
           class="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors">
          <Github class="w-5 h-5" />
          {{ t('projects.viewMore') }}
        </a>
      </div>
    </div>
  </section>
</template>
