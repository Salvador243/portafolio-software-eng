<script setup lang="ts">
import { Mail, Linkedin, Github, MapPin } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="contact" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4 text-center">{{ t('contact.title') }}</h2>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        {{ t('contact.subtitle') }}
      </p>
      
      <div class="max-w-2xl mx-auto">
        <div class="space-y-6">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">{{ t('contact.contactInfo') }}</h3>
              <p class="text-gray-600 mb-8">
                {{ t('contact.description') }}
              </p>
            </div>

            <div class="space-y-4">
              <a href="mailto:salvador243gm@gmail.com"
                 class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm hover:-translate-y-0.5 transition-all">
                <div class="p-3 bg-gray-100 rounded-lg">
                  <Mail class="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <div class="font-medium text-gray-900">{{ t('contact.email') }}</div>
                  <div class="text-gray-600 text-sm">salvador243gm@gmail.com</div>
                </div>
              </a>

              <a href="https://github.com/Salvador243" target="_blank" rel="noopener noreferrer"
                 class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm hover:-translate-y-0.5 transition-all">
                <div class="p-3 bg-gray-100 rounded-lg">
                  <Github class="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <div class="font-medium text-gray-900">{{ t('contact.github') }}</div>
                  <div class="text-gray-600 text-sm">@Salvador243</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/dev-salvador/" target="_blank" rel="noopener noreferrer"
                 class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm hover:-translate-y-0.5 transition-all">
                <div class="p-3 bg-gray-100 rounded-lg">
                  <Linkedin class="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <div class="font-medium text-gray-900">{{ t('contact.linkedin') }}</div>
                  <div class="text-gray-600 text-sm">dev-salvador</div>
                </div>
              </a>

              <div class="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                <div class="p-3 bg-gray-100 rounded-lg">
                  <MapPin class="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <div class="font-medium text-gray-900">{{ t('contact.location') }}</div>
                  <div class="text-gray-600 text-sm">{{ t('contact.locationValue') }}</div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>
