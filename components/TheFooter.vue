<template>
  <footer class="bg-gray-900 text-white">
    <div class="container-custom section-padding">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-10 h-10 bg-gradient-to-r from-primary-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">W</span>
            </div>
            <span class="text-xl font-bold">W-JPK</span>
          </div>
          <p class="text-gray-400 mb-6 max-w-md">
            Frontend разработчик, специализирующийся на создании современных веб-приложений 
            с использованием Vue.js, TypeScript и Nuxt.js.
          </p>
          <div class="flex space-x-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
            >
              <SocialIcons :name="social.name" />
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Быстрые ссылки</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <a 
                :href="link.href"
                class="text-gray-400 hover:text-white transition-colors duration-200"
                @click="scrollToSection(link.href)"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Контакты</h3>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <EnvelopeIcon class="w-5 h-5 text-gray-400" />
              <span class="text-gray-400">w-jpk@example.com</span>
            </div>
            <div class="flex items-center space-x-3">
              <PhoneIcon class="w-5 h-5 text-gray-400" />
              <span class="text-gray-400">+7 (999) 123-45-67</span>
            </div>
            <div class="flex items-center space-x-3">
              <MapPinIcon class="w-5 h-5 text-gray-400" />
              <span class="text-gray-400">Москва, Россия</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} W-JPK. Все права защищены.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Политика конфиденциальности
            </a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon
} from '@heroicons/vue/24/outline'

const currentYear = computed(() => new Date().getFullYear())

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/w-jpk'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/w-jpk'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/w-jpk'
  }
]

const quickLinks = [
  { name: 'Главная', href: '#home' },
  { name: 'Обо мне', href: '#about' },
  { name: 'Навыки', href: '#skills' },
  { name: 'Проекты', href: '#projects' },
  { name: 'Контакты', href: '#contact' }
]

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script> 