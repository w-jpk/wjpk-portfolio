<template>
  <section id="experience" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Опыт работы и образование
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Мой профессиональный путь и образование
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Work Experience -->
        <div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-8">
            Опыт работы
          </h3>
          <div class="space-y-8">
            <div 
              v-for="(job, index) in workExperience" 
              :key="index"
              class="relative pl-8 pb-8"
            >
              <!-- Timeline line -->
              <div class="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              <!-- Timeline dot -->
              <div class="absolute left-0 top-2 w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
              
              <!-- Job content -->
              <div class="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <div class="flex justify-between items-start mb-3">
                  <div>
                    <h4 class="text-lg font-semibold text-gray-900">{{ job.title }}</h4>
                    <p class="text-primary-600 font-medium">{{ job.company }}</p>
                  </div>
                  <span class="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                    {{ job.period }}
                  </span>
                </div>
                <p class="text-gray-600 mb-4">{{ job.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in job.technologies" 
                    :key="tech"
                    class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Education -->
        <div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-8">
            Образование
          </h3>
          <div class="space-y-8">
            <div 
              v-for="(education, index) in educationHistory" 
              :key="index"
              class="relative pl-8 pb-8"
            >
              <!-- Timeline line -->
              <div class="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              <!-- Timeline dot -->
              <div class="absolute left-0 top-2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              
              <!-- Education content -->
              <div class="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <div class="flex justify-between items-start mb-3">
                  <div>
                    <h4 class="text-lg font-semibold text-gray-900">{{ education.degree }}</h4>
                    <p class="text-blue-600 font-medium">{{ education.institution }}</p>
                  </div>
                  <span class="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                    {{ education.period }}
                  </span>
                </div>
                <p class="text-gray-600 mb-4">{{ education.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="subject in education.subjects" 
                    :key="subject"
                    class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                  >
                    {{ subject }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Certifications -->
          <div class="mt-12">
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">
              Сертификации
            </h3>
            <div class="grid gap-4">
              <div 
                v-for="cert in certifications" 
                :key="cert.name"
                class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200"
              >
                <div class="flex items-start justify-between">
                  <div>
                    <h4 class="font-semibold text-gray-900">{{ cert.name }}</h4>
                    <p class="text-green-600 text-sm font-medium">{{ cert.issuer }}</p>
                    <p class="text-gray-600 text-sm mt-1">{{ cert.date }}</p>
                  </div>
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span class="text-green-600 font-bold text-lg">✓</span>
                  </div>
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
const workExperience = [
  {
    title: 'Frontend Developer',
    company: 'Tech Company',
    period: '2023 - Настоящее время',
    description: 'Разработка современных веб-приложений с использованием Vue.js, TypeScript и Nuxt.js. Работа в команде над крупными проектами.',
    technologies: ['Vue.js', 'TypeScript', 'Nuxt.js', 'Tailwind CSS', 'Pinia']
  },
  {
    title: 'Junior Frontend Developer',
    company: 'Web Agency',
    period: '2021 - 2023',
    description: 'Создание адаптивных веб-сайтов и интерфейсов. Работа с HTML, CSS, JavaScript и Vue.js.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'SCSS']
  },
  {
    title: 'Web Developer Intern',
    company: 'Startup',
    period: '2020 - 2021',
    description: 'Помощь в разработке веб-приложений. Изучение современных технологий и лучших практик.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Git']
  }
]

const educationHistory = [
  {
    degree: 'Оренбургский Колледж Экономики и Информатики',
    institution: 'Колледж',
    period: '2019 - 2023',
    description: 'Изучение основ программирования, веб-разработки и компьютерных наук.',
    subjects: ['Программирование', 'Веб-разработка', 'Базы данных', 'Алгоритмы']
  }
]

const certifications = [
  {
    name: 'Vue.js Developer Certification',
    issuer: 'Vue.js Official',
    date: '2023'
  },
  {
    name: 'TypeScript Fundamentals',
    issuer: 'Microsoft',
    date: '2024'
  },
  {
    name: 'Frontend Development',
    issuer: 'Udemy',
    date: '2022'
  }
]
</script> 