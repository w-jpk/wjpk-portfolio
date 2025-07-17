<template>
  <section id="skills" class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Навыки и технологии
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Технологический стек, с которым я работаю
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Programming Languages -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">
              Языки программирования
            </h3>
            <div class="space-y-4">
              <div v-for="skill in programmingLanguages" :key="skill.name" class="space-y-2">
                <div class="flex justify-between items-center">
                  <span class="font-medium text-gray-900">{{ skill.name }}</span>
                  <span class="text-sm text-gray-600">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    class="bg-gradient-to-r from-primary-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Frameworks & Libraries -->
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">
              Фреймворки и библиотеки
            </h3>
            <div class="grid grid-cols-2 gap-4">
              <div 
                v-for="framework in frameworks" 
                :key="framework.name"
                class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <TechIcons :name="framework.name" />
                  </div>
                  <div>
                    <div class="font-medium text-gray-900">{{ framework.name }}</div>
                    <div class="text-sm text-gray-600">{{ framework.experience }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Tools & Technologies -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">
              Инструменты и технологии
            </h3>
            <div class="grid grid-cols-2 gap-4">
              <div 
                v-for="tool in tools" 
                :key="tool.name"
                class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <TechIcons :name="tool.name" />
                  </div>
                  <div>
                    <div class="font-medium text-gray-900">{{ tool.name }}</div>
                    <div class="text-sm text-gray-600">{{ tool.experience }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Additional Skills -->
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">
              Дополнительные навыки
            </h3>
            <div class="flex flex-wrap gap-3">
              <span 
                v-for="skill in additionalSkills" 
                :key="skill"
                class="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors duration-200"
              >
                {{ skill }}
              </span>
            </div>
          </div>
          
          <!-- Learning -->
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">
              Изучаю сейчас
            </h3>
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <AcademicCapIcon class="w-5 h-5 text-green-600" />
                </div>
                <h4 class="font-semibold text-gray-900">Активное обучение</h4>
              </div>
              <div class="space-y-2">
                <div v-for="learning in currentlyLearning" :key="learning" class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-gray-700">{{ learning }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { AcademicCapIcon } from '@heroicons/vue/24/outline'

const programmingLanguages = [
  { name: 'HTML', level: 95 },
  { name: 'CSS/SCSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'TypeScript', level: 75 },
]

const frameworks = [
  { name: 'Vue.js', experience: '3 года' },
  { name: 'Nuxt.js', experience: '1 год' },
  { name: 'Tailwind CSS', experience: '2 года' },
  { name: 'Pinia', experience: '2 года' },
]

const tools = [
  { name: 'Git', experience: '3 года' },
  { name: 'VS Code', experience: '3 года' },
  { name: 'Webpack/Vite', experience: '2 года' },
  { name: 'REST APIs', experience: '3 года' },
]

const additionalSkills = [
  'Responsive Design',
  'Progressive Web Apps',
  'Performance Optimization',
  'SEO',
  'Accessibility',
  'Cross-browser Compatibility',
  'UI/UX Design',
  'Agile/Scrum',
]

const currentlyLearning = [
  'Advanced TypeScript patterns',
  'Server-side rendering optimization',
  'Micro-frontends architecture',
  'Advanced Vue 3 Composition API',
]
</script> 