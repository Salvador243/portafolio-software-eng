<script setup lang="ts">
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const stack = ['Vue 3', 'Angular', 'NestJS', 'Laravel', 'Python', 'Salesforce', 'Apex', 'LWC']
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
      <div class="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        {{ t('hero.badge') }}
      </div>

      <h1 class="animate-fade-up animation-delay-100 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-4">
        {{ t('hero.title') }}
      </h1>
      <p class="animate-fade-up animation-delay-150 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-5">
        {{ t('hero.subtitle') }}
      </p>
      <p class="animate-fade-up animation-delay-200 text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
        {{ t('hero.description') }}
      </p>

      <div class="animate-fade-up animation-delay-300 flex flex-wrap justify-center gap-2 mb-10">
        <span v-for="item in stack" :key="item"
              class="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full">
          {{ item }}
        </span>
      </div>

      <div class="animate-fade-up animation-delay-400 flex justify-center gap-4 mb-12">
        <a href="https://github.com/Salvador243" target="_blank" rel="noopener noreferrer"
           aria-label="GitHub"
           class="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 hover:-translate-y-0.5 transition-all">
          <Github class="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/dev-salvador/" target="_blank" rel="noopener noreferrer"
           aria-label="LinkedIn"
           class="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 hover:-translate-y-0.5 transition-all">
          <Linkedin class="w-6 h-6" />
        </a>
        <a href="mailto:salvador243gm@gmail.com"
           aria-label="Email"
           class="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 hover:-translate-y-0.5 transition-all">
          <Mail class="w-6 h-6" />
        </a>
      </div>

      <div class="animate-fade-up animation-delay-500 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
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

    <a href="#about" aria-label="Scroll down"
       class="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 hover:text-gray-600 transition-colors animate-bounce">
      <ChevronDown class="w-7 h-7" />
    </a>
  </section>
</template>
