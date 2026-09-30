<script setup lang="ts">
import { Briefcase, Calendar, MapPin } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { experiences } from '../data/experiences'
import { computed } from 'vue'

const { t, locale } = useI18n()

const currentExperiences = computed(() => experiences[locale.value as 'es' | 'en'])
</script>

<template>
  <section id="experience" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4 text-center">{{ t('experience.title') }}</h2>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        {{ t('experience.subtitle') }}
      </p>

      <div class="max-w-4xl mx-auto">
        <div v-for="(exp, index) in currentExperiences" :key="index"
             class="relative pl-8 sm:pl-10 pb-10 border-l-2 border-gray-200 last:pb-0">
          <!-- Timeline dot -->
          <div class="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white"
               :class="exp.current ? 'bg-gray-900 ring-4 ring-gray-200' : 'bg-gray-400'"></div>

          <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 sm:p-6 transition-all hover:shadow-md hover:-translate-y-0.5 hover:bg-white">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
              <div>
                <div class="flex flex-wrap items-center gap-2 mb-1">
                  <h3 class="text-lg sm:text-xl font-bold text-gray-900">{{ exp.title }}</h3>
                  <span v-if="exp.current"
                        class="px-2.5 py-0.5 bg-gray-900 text-white text-xs font-semibold rounded-full">
                    {{ t('experience.current') }}
                  </span>
                </div>
                <div class="flex items-center gap-2 text-gray-700">
                  <Briefcase class="w-4 h-4 shrink-0" />
                  <span class="font-medium">{{ exp.company }}</span>
                </div>
              </div>
              <div class="flex items-center gap-2 text-gray-600 text-sm">
                <Calendar class="w-4 h-4 shrink-0" />
                <span class="whitespace-nowrap">{{ exp.period }}</span>
              </div>
            </div>

            <div class="flex items-center gap-1.5 text-sm text-gray-500 mb-4">
              <MapPin class="w-3.5 h-3.5 shrink-0" />
              {{ exp.location }}
            </div>

            <ul class="space-y-2.5 mb-5">
              <li v-for="(resp, idx) in exp.responsibilities" :key="idx"
                  class="text-gray-600 text-sm sm:text-base leading-relaxed flex gap-2.5">
                <span class="text-gray-400 mt-0.5 shrink-0">•</span>
                <span>{{ resp }}</span>
              </li>
            </ul>

            <div class="flex flex-wrap gap-1.5 pt-4 border-t border-gray-200">
              <span v-for="tag in exp.tags" :key="tag"
                    class="px-2 py-0.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
