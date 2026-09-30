<script setup lang="ts">
import { GraduationCap, Award } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { education } from '../data/education'
import { computed } from 'vue'

const { t, locale } = useI18n()

const currentEducation = computed(() => education[locale.value as 'es' | 'en'])
</script>

<template>
  <section id="education" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-12 text-center">{{ t('education.title') }}</h2>
      
      <div class="max-w-4xl mx-auto">
        <div v-for="(edu, index) in currentEducation" :key="index"
             class="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200">
          <div class="flex items-start gap-4">
            <div class="p-3 bg-gray-900 rounded-lg">
              <GraduationCap class="w-6 h-6 text-white" />
            </div>
            
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ edu.degree }}</h3>
              <p class="text-gray-700 font-medium mb-1">{{ edu.institution }}</p>
              <p class="text-gray-500 mb-6">{{ edu.year }}</p>
              
              <div v-if="edu.details" class="space-y-3">
                <div class="flex items-center gap-2 mb-3">
                  <Award class="w-5 h-5 text-gray-700" />
                  <span class="font-semibold text-gray-900">{{ t('education.coursesAndAchievements') }}</span>
                </div>
                <ul class="space-y-2">
                  <li v-for="(detail, idx) in edu.details" :key="idx"
                      class="text-gray-600 flex gap-2 pl-7">
                    <span class="text-gray-400">•</span>
                    <span>{{ detail }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
