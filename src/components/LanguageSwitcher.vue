<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Languages } from 'lucide-vue-next'

const { locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}
</script>

<template>
  <button
    @click="toggleLanguage"
    class="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100"
    :title="locale === 'es' ? 'Switch to English' : 'Cambiar a Español'"
  >
    <Languages class="w-5 h-5" />
    <span class="text-sm font-medium">{{ locale === 'es' ? 'EN' : 'ES' }}</span>
  </button>
</template>
