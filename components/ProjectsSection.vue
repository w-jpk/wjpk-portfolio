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
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover flex flex-col h-full"
        >
          <!-- Project Image -->
          <div class="h-48 bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CodeBracketIcon class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900">{{ project.name }}</h3>
            </div>
          </div>
          
          <!-- Project Content -->
          <div class="flex flex-col flex-1 p-6">
            <div>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
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
import { CodeBracketIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'

const projects = [
  {
    id: 1,
    name: 'E-commerce Platform',
    description: 'Современная платформа электронной коммерции с использованием Vue.js, TypeScript и Nuxt.js. Включает корзину покупок, систему платежей и админ-панель.',
    technologies: ['Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Pinia'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    name: 'Task Management App',
    description: 'Приложение для управления задачами с drag-and-drop функциональностью, уведомлениями и командной работой.',
    technologies: ['Vue.js', 'JavaScript', 'SCSS', 'LocalStorage'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    name: 'Weather Dashboard',
    description: 'Интерактивная панель погоды с прогнозами, картами и красивой анимацией. Интеграция с внешними API.',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'REST API'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    name: 'Portfolio Website',
    description: 'Современный адаптивный сайт-портфолио с анимациями, темной темой и оптимизацией для SEO.',
    technologies: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    name: 'Social Media Dashboard',
    description: 'Панель управления социальными сетями с аналитикой, планировщиком постов и интеграцией с API.',
    technologies: ['Vue.js', 'TypeScript', 'Chart.js', 'REST API'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    name: 'Recipe Finder',
    description: 'Приложение для поиска рецептов с фильтрацией, избранным и пошаговыми инструкциями.',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'LocalStorage'],
    liveUrl: '#',
    githubUrl: '#'
  }
]
</script> 