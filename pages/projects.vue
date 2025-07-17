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
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in filteredProjects" :key="project.id"
          class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover">
          <!-- Project Image -->
          <div
            class="h-48 bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-blue-500/20"></div>
            <div class="relative z-10 text-center">
              <div
                class="w-16 h-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CodeBracketIcon class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900">{{ project.name }}</h3>
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-6">
            <p class="text-gray-600 mb-4 line-clamp-3">{{ project.description }}</p>

            <!-- Project Details -->
            <div class="space-y-3 mb-4">
              <div class="flex items-center space-x-2">
                <CalendarIcon class="w-4 h-4 text-gray-400" />
                <span class="text-sm text-gray-500">{{ project.date }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <ClockIcon class="w-4 h-4 text-gray-400" />
                <span class="text-sm text-gray-500">{{ project.duration }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <UserGroupIcon class="w-4 h-4 text-gray-400" />
                <span class="text-sm text-gray-500">{{ project.role }}</span>
              </div>
            </div>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in project.technologies" :key="tech"
                class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                {{ tech }}
              </span>
            </div>

            <!-- Features -->
            <div class="mb-4">
              <h4 class="text-sm font-semibold text-gray-900 mb-2">Ключевые функции:</h4>
              <ul class="space-y-1">
                <li v-for="feature in project.features" :key="feature"
                  class="text-sm text-gray-600 flex items-center space-x-2">
                  <CheckIcon class="w-3 h-3 text-green-500 flex-shrink-0" />
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- Project Links -->
            <div class="flex space-x-3">
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
      <div v-if="filteredProjects.length === 0" class="text-center py-16">
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
import { ref, computed } from 'vue'
import {
  CodeBracketIcon,
  CalendarIcon,
  ClockIcon,
  UserGroupIcon,
  CheckIcon,
  FolderIcon
} from '@heroicons/vue/24/outline'

// SEO
useHead({
  title: 'Все проекты - W-JPK Portfolio',
  meta: [
    { name: 'description', content: 'Полная коллекция проектов фронтенд-разработчика W-JPK' }
  ]
})

const activeFilter = ref('all')

const filters = [
  { id: 'all', name: 'Все проекты' },
  { id: 'vue', name: 'Vue.js' },
  { id: 'nuxt', name: 'Nuxt.js' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'ecommerce', name: 'E-commerce' },
  { id: 'dashboard', name: 'Dashboard' }
]

const allProjects = [
  {
    id: 1,
    name: 'E-commerce Platform',
    description: 'Современная платформа электронной коммерции с полным функционалом: корзина покупок, система платежей, админ-панель, управление товарами и заказами.',
    technologies: ['Vue.js', 'TypeScript', 'Nuxt.js', 'Tailwind CSS', 'Pinia', 'Stripe'],
    date: '2024',
    duration: '3 месяца',
    role: 'Frontend Developer',
    features: ['Корзина покупок', 'Система платежей', 'Админ-панель', 'Управление товарами'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'ecommerce'
  },
  {
    id: 2,
    name: 'Task Management App',
    description: 'Приложение для управления задачами с drag-and-drop функциональностью, уведомлениями, командной работой и аналитикой.',
    technologies: ['Vue.js', 'JavaScript', 'SCSS', 'LocalStorage', 'Chart.js'],
    date: '2023',
    duration: '2 месяца',
    role: 'Full Stack Developer',
    features: ['Drag & Drop', 'Уведомления', 'Командная работа', 'Аналитика'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'dashboard'
  },
  {
    id: 3,
    name: 'Weather Dashboard',
    description: 'Интерактивная панель погоды с прогнозами, картами, красивой анимацией и интеграцией с внешними API.',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'REST API', 'Chart.js'],
    date: '2023',
    duration: '1 месяц',
    role: 'Frontend Developer',
    features: ['Прогнозы погоды', 'Интерактивные карты', 'Анимации', 'API интеграция'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'dashboard'
  },
  {
    id: 4,
    name: 'Portfolio Website',
    description: 'Современный адаптивный сайт-портфолио с анимациями, темной темой, оптимизацией для SEO и быстрой загрузкой.',
    technologies: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    date: '2024',
    duration: '2 недели',
    role: 'Frontend Developer',
    features: ['Адаптивный дизайн', 'Темная тема', 'SEO оптимизация', 'Анимации'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'nuxt'
  },
  {
    id: 5,
    name: 'Social Media Dashboard',
    description: 'Панель управления социальными сетями с аналитикой, планировщиком постов, интеграцией с API и отчетами.',
    technologies: ['Vue.js', 'TypeScript', 'Chart.js', 'REST API', 'Vuex'],
    date: '2023',
    duration: '2.5 месяца',
    role: 'Frontend Developer',
    features: ['Аналитика', 'Планировщик постов', 'API интеграция', 'Отчеты'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'dashboard'
  },
  {
    id: 6,
    name: 'Recipe Finder',
    description: 'Приложение для поиска рецептов с фильтрацией, избранным, пошаговыми инструкциями и расчетом порций.',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'LocalStorage', 'Spoonacular API'],
    date: '2023',
    duration: '1.5 месяца',
    role: 'Frontend Developer',
    features: ['Поиск рецептов', 'Фильтрация', 'Избранное', 'Расчет порций'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'vue'
  },
  {
    id: 7,
    name: 'Real Estate Platform',
    description: 'Платформа для поиска недвижимости с картами, фильтрами, избранным и системой бронирования просмотров.',
    technologies: ['Vue.js', 'TypeScript', 'Nuxt.js', 'Mapbox', 'Stripe'],
    date: '2024',
    duration: '4 месяца',
    role: 'Frontend Developer',
    features: ['Поиск недвижимости', 'Интерактивные карты', 'Бронирование', 'Платежи'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'nuxt'
  },
  {
    id: 8,
    name: 'Fitness Tracker',
    description: 'Приложение для отслеживания тренировок с календарем, статистикой, планами тренировок и достижениями.',
    technologies: ['Vue.js', 'TypeScript', 'PWA', 'IndexedDB', 'Chart.js'],
    date: '2023',
    duration: '3 месяца',
    role: 'Full Stack Developer',
    features: ['Отслеживание тренировок', 'Статистика', 'Планы тренировок', 'PWA'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'typescript'
  },
  {
    id: 9,
    name: 'Blog Platform',
    description: 'Современная платформа для блогов с редактором, комментариями, подписками и SEO оптимизацией.',
    technologies: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Markdown', 'Prisma'],
    date: '2024',
    duration: '2 месяца',
    role: 'Frontend Developer',
    features: ['Редактор статей', 'Комментарии', 'Подписки', 'SEO оптимизация'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'nuxt'
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return allProjects
  }
  return allProjects.filter(project => project.category === activeFilter.value)
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