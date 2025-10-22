<script setup lang="ts">
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="hero" class="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
        {{ t('hero.title') }}
      </h1>
      <p class="text-xl md:text-2xl text-gray-600 mb-4">
        {{ t('hero.subtitle') }}
      </p>
      <p class="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
        {{ t('hero.description') }}
      </p>
      
      <div class="flex justify-center gap-4 mb-12">
        <a href="https://github.com/Salvador243" target="_blank" 
           class="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors">
          <Github class="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/dev-salvador/" target="_blank" 
           class="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors">
          <Linkedin class="w-6 h-6" />
        </a>
        <a href="mailto:salvador243gm@gmail.com" 
           class="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors">
          <Mail class="w-6 h-6" />
        </a>
      </div>

      <div class="flex justify-center gap-4">
        <a href="#projects" 
           class="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium">
          {{ t('hero.viewProjects') }}
        </a>
        <a href="#contact" 
           class="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors font-medium">
          {{ t('hero.contactMe') }}
        </a>
      </div>
    </div>
  </section>
</template>
