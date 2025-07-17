<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'"
  >
    <nav class="container-custom py-4 px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-gradient-to-r from-primary-600 to-blue-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm">W</span>
          </div>
          <span class="text-lg font-bold gradient-text">W-JPK</span>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            v-for="item in navigationItems" 
            :key="item.id"
            :href="item.href"
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 text-sm"
            @click="scrollToSection(item.href)"
          >
            {{ item.label }}
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <Bars3Icon v-if="!isMobileMenuOpen" class="w-5 h-5 text-gray-700" />
          <XMarkIcon v-else class="w-5 h-5 text-gray-700" />
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div 
        v-show="isMobileMenuOpen"
        class="md:hidden mt-3 pb-3 border-t border-gray-200"
      >
        <div class="flex flex-col space-y-3 pt-3">
          <a 
            v-for="item in navigationItems" 
            :key="item.id"
            :href="item.href"
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 text-sm"
            @click="scrollToSection(item.href); isMobileMenuOpen = false"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navigationItems = [
  { id: 'home', label: 'Главная', href: '/#home' },
  { id: 'about', label: 'Обо мне', href: '/#about' },
  { id: 'skills', label: 'Навыки', href: '/#skills' },
  { id: 'experience', label: 'Опыт', href: '/#experience' },
  { id: 'projects', label: 'Проекты', href: '/#projects' },
  { id: 'contact', label: 'Контакты', href: '/#contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script> 