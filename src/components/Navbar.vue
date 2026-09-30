<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()
const isMenuOpen = ref(false)
const scrolled = ref(false)
const activeSection = ref('hero')

const navItems = [
  { id: 'hero', key: 'home' },
  { id: 'about', key: 'about' },
  { id: 'experience', key: 'experience' },
  { id: 'skills', key: 'skills' },
  { id: 'projects', key: 'projects' },
  { id: 'contact', key: 'contact' }
]

const sectionIds = ['hero', 'about', 'experience', 'education', 'skills', 'projects', 'contact']

let observer: IntersectionObserver | undefined

const onScroll = () => {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) activeSection.value = entry.target.id
      }
    },
    { rootMargin: '-35% 0px -60% 0px' }
  )
  sectionIds.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer?.observe(el)
  })
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  observer?.disconnect()
  window.removeEventListener('scroll', onScroll)
})

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMenuOpen.value = false
  }
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-200 transition-shadow"
       :class="scrolled ? 'bg-white/90 shadow-sm' : 'bg-white/80'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <button @click="scrollToSection('hero')" class="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
          Salvador García
        </button>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-6 lg:space-x-8">
          <button v-for="item in navItems" :key="item.id"
                  @click="scrollToSection(item.id)"
                  class="relative py-1 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gray-900 after:transition-transform after:duration-200"
                  :class="activeSection === item.id
                    ? 'text-gray-900 after:scale-x-100'
                    : 'text-gray-500 hover:text-gray-900 after:scale-x-0'">
            {{ t(`nav.${item.key}`) }}
          </button>
          <LanguageSwitcher />
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center gap-1 md:hidden">
          <LanguageSwitcher />
          <button @click="isMenuOpen = !isMenuOpen" class="p-2" :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'">
            <Menu v-if="!isMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden py-3 border-t border-gray-100 space-y-1">
        <button v-for="item in navItems" :key="item.id"
                @click="scrollToSection(item.id)"
                class="block w-full text-left px-4 py-2.5 rounded-lg transition-colors"
                :class="activeSection === item.id
                  ? 'bg-gray-100 text-gray-900 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'">
          {{ t(`nav.${item.key}`) }}
        </button>
      </div>
    </div>
  </nav>
</template>
