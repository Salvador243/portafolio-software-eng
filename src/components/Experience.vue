<script setup lang="ts">
import { Briefcase, Calendar } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { experiences } from '../data/experiences'
import { computed } from 'vue'

const { t, locale } = useI18n()

const currentExperiences = computed(() => experiences[locale.value as 'es' | 'en'])
</script>

<template>
  <section id="experience" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 text-center">{{ t('experience.title') }}</h2>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        {{ t('experience.subtitle') }}
      </p>
      
      <div class="max-w-4xl mx-auto space-y-8">
        <div v-for="(exp, index) in currentExperiences" :key="index"
             class="relative pl-8 pb-8 border-l-2 border-gray-200 last:pb-0">
          <!-- Timeline dot -->
          <div class="absolute -left-2 top-0 w-4 h-4 bg-gray-900 rounded-full"></div>
          
          <div class="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-1">{{ exp.title }}</h3>
                <div class="flex items-center gap-2 text-gray-700 mb-2">
                  <Briefcase class="w-4 h-4" />
                  <span class="font-medium">{{ exp.company }}</span>
                </div>
              </div>
              <div class="flex items-center gap-2 text-gray-600 text-sm mt-2 md:mt-0">
                <Calendar class="w-4 h-4" />
                <span>{{ exp.period }}</span>
              </div>
            </div>
            
            <div class="text-sm text-gray-500 mb-4">{{ exp.location }}</div>
            
            <ul class="space-y-2">
              <li v-for="(resp, idx) in exp.responsibilities" :key="idx"
                  class="text-gray-600 flex gap-2">
                <span class="text-gray-400 mt-1">•</span>
                <span>{{ resp }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
