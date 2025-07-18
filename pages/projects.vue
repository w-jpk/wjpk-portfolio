<template>
  <!-- Page Header -->
  <section class="pt-24 pb-16 bg-gradient-to-br from-primary-50 via-white to-blue-50">
    <div class="container-custom px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Все проекты
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Полная коллекция моих работ и проектов в области веб-разработки
        </p>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-3 mb-8">
          <button v-for="filter in filters" :key="filter.id" @click="activeFilter = filter.id"
            class="px-6 py-2 rounded-full text-sm font-medium transition-all duration-200" :class="activeFilter === filter.id
              ? 'bg-primary-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'">
            {{ filter.name }}
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Grid -->
  <section class="py-16">
    <div class="container-custom px-4 sm:px-6 lg:px-8">
      <div v-if="loading" class="text-center py-12 text-primary-600 font-semibold">Загрузка проектов...</div>
      <div v-else-if="error" class="text-center py-12 text-red-600 font-semibold">{{ error }}</div>
      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in filteredProjects" :key="project.id"
          class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover flex flex-col h-full">
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

              <!-- Project Details -->
              <div class="space-y-3 mb-4">
                <div class="flex items-center space-x-2">
                  <CalendarIcon class="w-4 h-4 text-gray-400" />
                  <span class="text-sm text-gray-500">{{ project.date || '2024' }}</span>
                </div>
                <div class="flex items-center space-x-2">
                  <ClockIcon class="w-4 h-4 text-gray-400" />
                  <span class="text-sm text-gray-500">{{ project.duration || '2 месяца' }}</span>
                </div>
                <div class="flex items-center space-x-2">
                  <UserGroupIcon class="w-4 h-4 text-gray-400" />
                  <span class="text-sm text-gray-500">{{ project.role || 'Frontend Developer' }}</span>
                </div>
              </div>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in (project.technologies || [])" :key="tech"
                  class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                  {{ tech }}
                </span>
              </div>

              <!-- Features -->
              <div class="mb-4" v-if="project.features && project.features.length">
                <h4 class="text-sm font-semibold text-gray-900 mb-2">Ключевые функции:</h4>
                <ul class="space-y-1">
                  <li v-for="feature in project.features" :key="feature"
                    class="text-sm text-gray-600 flex items-center space-x-2">
                    <CheckIcon class="w-3 h-3 text-green-500 flex-shrink-0" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Project Links -->
            <div class="flex space-x-3 mt-auto">
              <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank"
                class="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
                Живая версия
              </a>
              <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank"
                class="flex-1 border border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- No Projects Message -->
      <div v-if="!loading && !error && filteredProjects.length === 0" class="text-center py-16">
        <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FolderIcon class="w-12 h-12 text-gray-400" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Проекты не найдены</h3>
        <p class="text-gray-600">Попробуйте изменить фильтр или вернитесь позже.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProjectsStore } from '@/store/projects'
import {
  CodeBracketIcon,
  CalendarIcon,
  ClockIcon,
  UserGroupIcon,
  CheckIcon,
  FolderIcon,
  StarIcon,
  EyeIcon,
  CodeBracketSquareIcon
} from '@heroicons/vue/24/outline'

// SEO
useHead({
  title: 'Все проекты - W-JPK Portfolio',
  meta: [
    { name: 'description', content: 'Полная коллекция проектов фронтенд-разработчика W-JPK' }
  ]
})

const store = useProjectsStore()
const { projects, loading, error } = storeToRefs(store)

const activeFilter = ref('all')

const filters = [
  { id: 'all', name: 'Все проекты' },
  { id: 'vue', name: 'Vue.js' },
  { id: 'nuxt', name: 'Nuxt.js' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'ecommerce', name: 'E-commerce' },
  { id: 'dashboard', name: 'Dashboard' }
]

// Расширенные проекты с дополнительной информацией
const extendedProjects = [
  {
    id: 1,
    name: 'W-JPK Portfolio',
    description: 'Современная платформа электронной коммерции с использованием Vue.js, TypeScript и Nuxt.js. Включает корзину покупок, систему платежей и админ-панель.',
    liveUrl: 'https://wjpk-portfolio.vercel.app/',
    githubUrl: 'https://github.com/w-jpk/wjpk-portfolio',
    image: '/images/Avatar.png',
    date: '2025',
    duration: '2 месяца',
    role: 'Frontend Developer',
    features: ['Адаптивный дизайн', 'SEO оптимизация', 'GitHub API интеграция', 'Современный UI/UX'],
    category: 'nuxt'
  },
  {
    id: 2,
    name: 'Сварка Оренбург',
    description: 'Приложение для управления задачами с drag-and-drop функциональностью, уведомлениями и командной работой.',
    liveUrl: 'https://welding-orenburg.vercel.app/',
    githubUrl: 'https://github.com/w-jpk/welding-orenburg',
    image: '/images/Avatar.png',
    date: '2024',
    duration: '3 месяца',
    role: 'Frontend Developer',
    features: ['Адаптивный дизайн', 'Интерактивные элементы', 'Оптимизация производительности', 'Современный дизайн'],
    category: 'nuxt'
  },
  {
    id: 3,
    name: 'E-commerce Platform',
    description: 'Современная платформа электронной коммерции с полным функционалом: корзина покупок, система платежей, админ-панель, управление товарами и заказами.',
    technologies: ['Vue.js', 'TypeScript', 'Nuxt.js', 'Tailwind CSS', 'Pinia', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    image: '/images/Avatar.png',
    date: '2024',
    duration: '3 месяца',
    role: 'Frontend Developer',
    features: ['Корзина покупок', 'Система платежей', 'Админ-панель', 'Управление товарами'],
    category: 'ecommerce'
  },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects.value
  }
  return projects.value.filter(project => {
    const projectCategory = project.category || 
      (project.technologies?.some(tech => 
        tech.toLowerCase().includes(activeFilter.value.toLowerCase())
      ) ? activeFilter.value : null)
    return projectCategory === activeFilter.value
  })
})

onMounted(async () => {
  if (!projects.value.length) {
    store.setProjects(extendedProjects)
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