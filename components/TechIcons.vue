<template>
  <div>
    <Icon 
      :icon="iconName" 
      :class="iconClasses"
      width="24"
      height="24"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  name: string
}>();

const iconName = computed(() => {
  // Маппинг названий технологий к иконкам в Iconify
  const iconMap: Record<string, string> = {
    'Vue.js': 'logos:vue',
    'Nuxt.js': 'logos:nuxt-icon',
    'TypeScript': 'logos:typescript-icon',
    'Git': 'logos:git-icon',
    'VS Code': 'logos:visual-studio-code',
    'Tailwind CSS': 'logos:tailwindcss-icon',
    'Pinia': 'logos:pinia',
    'Webpack/Vite': 'logos:vitejs',
    'REST APIs': 'mdi:api',
    'CSS/SCSS': 'logos:sass',
    'JavaScript': 'logos:javascript',
    'HTML': 'logos:html-5'
  }

  return iconMap[props.name] || 'logos:javascript'
})

const iconClasses = computed(() => {
  const baseClasses = "transition-colors duration-200"
  // На мобильных устройствах (md:) иконки всегда цветные
  // На десктопе (по умолчанию) иконки серые, но становятся цветными при наведении
  const colorMap: Record<string, string> = {
    'Vue.js': 'text-gray-600 hover:text-green-600 md:text-green-600',
    'Nuxt.js': 'text-gray-600 hover:text-green-600 md:text-green-600',
    'TypeScript': 'text-gray-600 hover:text-blue-600 md:text-blue-600',
    'Git': 'text-gray-600 hover:text-orange-600 md:text-orange-600',
    'VS Code': 'text-gray-600 hover:text-blue-600 md:text-blue-600',
    'Tailwind CSS': 'text-gray-600 hover:text-cyan-500 md:text-cyan-500',
    'Pinia': 'text-gray-600 hover:text-yellow-600 md:text-yellow-600',
    'Webpack/Vite': 'text-gray-600 hover:text-blue-600 md:text-blue-600',
    'REST APIs': 'text-gray-600 hover:text-green-600 md:text-green-600',
    'CSS/SCSS': 'text-gray-600 hover:text-pink-600 md:text-pink-600',
    'JavaScript': 'text-gray-600 hover:text-yellow-500 md:text-yellow-500',
    'HTML': 'text-gray-600 hover:text-orange-600 md:text-orange-600'
  }

  return `${baseClasses} ${colorMap[props.name] || 'text-gray-600 hover:text-gray-700 md:text-gray-600'}`
})
</script>