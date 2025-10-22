<script setup lang="ts">
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Salvador García</h3>
          <p class="text-gray-400">
            {{ t('footer.description') }}
          </p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">{{ t('footer.quickLinks') }}</h3>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#about" class="hover:text-white transition-colors">{{ t('nav.about') }}</a></li>
            <li><a href="#experience" class="hover:text-white transition-colors">{{ t('nav.experience') }}</a></li>
            <li><a href="#skills" class="hover:text-white transition-colors">{{ t('nav.skills') }}</a></li>
            <li><a href="#projects" class="hover:text-white transition-colors">{{ t('nav.projects') }}</a></li>
            <li><a href="#contact" class="hover:text-white transition-colors">{{ t('nav.contact') }}</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">{{ t('footer.followMe') }}</h3>
          <div class="flex gap-4">
            <a href="https://github.com/Salvador243" target="_blank" 
               class="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <Github class="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/dev-salvador/" target="_blank" 
               class="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <Linkedin class="w-5 h-5" />
            </a>
            <a href="mailto:salvador243gm@gmail.com" 
               class="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <Mail class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>&copy; {{ currentYear }} Salvador García. {{ t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>
