<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-12 text-center">{{ t('about.title') }}</h2>
      
      <div class="max-w-3xl mx-auto">
        <div class="prose prose-lg text-gray-600">
          <p class="text-lg leading-relaxed mb-6">
            {{ t('about.description1') }}
          </p>
          
          <p class="text-lg leading-relaxed mb-6">
            {{ t('about.description2') }}
          </p>

          <p class="text-lg leading-relaxed">
            {{ t('about.description3') }}
          </p>
        </div>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center p-6 bg-gray-50 rounded-lg">
            <div class="text-3xl font-bold text-gray-900 mb-2">3+</div>
            <div class="text-gray-600">{{ t('about.yearsExperience') }}</div>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-lg">
            <div class="text-3xl font-bold text-gray-900 mb-2">10+</div>
            <div class="text-gray-600">{{ t('about.projectsCompleted') }}</div>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-lg">
            <div class="text-3xl font-bold text-gray-900 mb-2">5+</div>
            <div class="text-gray-600">{{ t('about.technologies') }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
