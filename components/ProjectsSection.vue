<template>
  <section id="projects" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Мои проекты
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Примеры моих работ и проектов
        </p>
      </div>
      <div v-if="loading" class="text-center py-12 text-primary-600 font-semibold">Загрузка проектов...</div>
      <div v-else-if="error" class="text-center py-12 text-red-600 font-semibold">{{ error }}</div>
      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover flex flex-col h-full"
        >
          <!-- Project Image -->
          <div class="h-52 bg-gray-100 flex items-center justify-center relative">
            <img v-if="project.image" :src="project.image" :alt="project.name" class="object-cover w-full h-full" />
            <div v-else class="w-16 h-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CodeBracketIcon class="w-8 h-8 text-white" />
            </div>
            <div class="absolute top-2 right-2 flex space-x-2" v-if="project.githubData">
              <span class="flex items-center text-xs bg-white/80 rounded px-2 py-1 shadow">
                <StarIcon class="w-4 h-4 text-yellow-500 mr-1" />{{ project.githubData.stars }}
              </span>
              <span class="flex items-center text-xs bg-white/80 rounded px-2 py-1 shadow">
                <CodeBracketSquareIcon class="w-4 h-4 text-gray-500 mr-1" />{{ project.githubData.forks }}
              </span>
              <span class="flex items-center text-xs bg-white/80 rounded px-2 py-1 shadow">
                <EyeIcon class="w-4 h-4 text-blue-500 mr-1" />{{ project.githubData.watchers }}
              </span>
            </div>
          </div>
          <!-- Project Content -->
          <div class="flex flex-col flex-1 p-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ project.name }}</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">{{ project.githubData?.description || project.description }}</p>
              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
            <!-- Project Links -->
            <div class="flex space-x-3 mt-auto">
              <a 
                v-if="project.liveUrl"
                :href="project.liveUrl" 
                target="_blank"
                class="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Живая версия
              </a>
              <a 
                v-if="project.githubUrl"
                :href="project.githubUrl" 
                target="_blank"
                class="flex-1 border border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- View More Button -->
      <div class="text-center mt-12">
        <NuxtLink to="/projects" class="btn-secondary inline-flex items-center space-x-2">
          <span>Посмотреть все проекты</span>
          <ArrowRightIcon class="w-5 h-5" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProjectsStore } from '@/store/projects'
import { CodeBracketIcon, ArrowRightIcon, StarIcon, EyeIcon, CodeBracketSquareIcon } from '@heroicons/vue/24/outline'

const store = useProjectsStore()
const { projects, loading, error } = storeToRefs(store)

// Пример локальных проектов (можно расширить)
const localProjects = [
  {
    id: 1,
    name: 'W-JPK Portfolio',
    description: 'Современная платформа электронной коммерции с использованием Vue.js, TypeScript и Nuxt.js. Включает корзину покупок, систему платежей и админ-панель.',
    liveUrl: 'https://wjpk-portfolio.vercel.app/',
    githubUrl: 'https://github.com/w-jpk/wjpk-portfolio',
    image: '/images/Avatar.png'
  },
  {
    id: 2,
    name: 'Сварка Оренбург',
    description: 'Приложение для управления задачами с drag-and-drop функциональностью, уведомлениями и командной работой.',
    liveUrl: 'https://welding-orenburg.vercel.app/',
    githubUrl: 'https://github.com/w-jpk/welding-orenburg',
    image: '/images/Avatar.png'
  },
]

onMounted(async () => {
  if (!projects.value.length) {
    store.setProjects(localProjects)
    await store.fetchGithubData()
  }
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 