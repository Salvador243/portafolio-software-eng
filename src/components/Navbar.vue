<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()
const isMenuOpen = ref(false)

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMenuOpen.value = false
  }
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="text-2xl font-bold text-gray-900">Salvador García</div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <button @click="scrollToSection('hero')" class="text-gray-700 hover:text-gray-900 transition-colors">{{ t('nav.home') }}</button>
          <button @click="scrollToSection('about')" class="text-gray-700 hover:text-gray-900 transition-colors">{{ t('nav.about') }}</button>
          <button @click="scrollToSection('experience')" class="text-gray-700 hover:text-gray-900 transition-colors">{{ t('nav.experience') }}</button>
          <button @click="scrollToSection('skills')" class="text-gray-700 hover:text-gray-900 transition-colors">{{ t('nav.skills') }}</button>
          <button @click="scrollToSection('projects')" class="text-gray-700 hover:text-gray-900 transition-colors">{{ t('nav.projects') }}</button>
          <button @click="scrollToSection('contact')" class="text-gray-700 hover:text-gray-900 transition-colors">{{ t('nav.contact') }}</button>
          <LanguageSwitcher />
        </div>

        <!-- Mobile Menu Button -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2">
          <Menu v-if="!isMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden py-4 space-y-2">
        <button @click="scrollToSection('hero')" class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">{{ t('nav.home') }}</button>
        <button @click="scrollToSection('about')" class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">{{ t('nav.about') }}</button>
        <button @click="scrollToSection('experience')" class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">{{ t('nav.experience') }}</button>
        <button @click="scrollToSection('skills')" class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">{{ t('nav.skills') }}</button>
        <button @click="scrollToSection('projects')" class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">{{ t('nav.projects') }}</button>
        <button @click="scrollToSection('contact')" class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">{{ t('nav.contact') }}</button>
        <div class="px-4 py-2">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  </nav>
</template>
