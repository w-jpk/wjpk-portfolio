<template>
  <section id="about" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Обо мне
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Увлеченный frontend разработчик с опытом создания современных веб-приложений
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- About Content -->
        <div class="space-y-6">
          <div class="space-y-4">
            <h3 class="text-2xl font-semibold text-gray-900">
              Кто я
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Я frontend разработчик с более чем 3-летним опытом работы с HTML, CSS и JavaScript. 
              Последние 3 года активно работаю с Vue.js экосистемой, включая Vue 3, Composition API и Pinia для управления состоянием.
            </p>
            <p class="text-gray-600 leading-relaxed">
              В течение последнего года углубленно изучаю TypeScript и Nuxt.js, что позволяет мне создавать 
              более надежные и масштабируемые приложения. Я постоянно слежу за новыми технологиями и 
              лучшими практиками в области frontend разработки.
            </p>
          </div>
          
          <!-- Key Points -->
          <div class="grid sm:grid-cols-2 gap-6">
            <div class="flex items-start space-x-3">
              <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckIcon class="w-4 h-4 text-primary-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Современные технологии</h4>
                <p class="text-sm text-gray-600">Vue 3, TypeScript, Nuxt.js</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-3">
              <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckIcon class="w-4 h-4 text-primary-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Отзывчивый дизайн</h4>
                <p class="text-sm text-gray-600">Tailwind CSS, SCSS</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-3">
              <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckIcon class="w-4 h-4 text-primary-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Управление состоянием</h4>
                <p class="text-sm text-gray-600">Pinia, Vuex</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-3">
              <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckIcon class="w-4 h-4 text-primary-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Оптимизация</h4>
                <p class="text-sm text-gray-600">Performance, SEO</p>
              </div>
            </div>
          </div>
          
          <!-- Download CV Button -->
          <div class="pt-4">
            <a href="#" class="btn-primary inline-flex items-center space-x-2">
              <DocumentArrowDownIcon class="w-5 h-5" />
              <span>Скачать резюме</span>
            </a>
          </div>
        </div>
        
        <!-- About Image/Stats -->
        <div class="relative">
          <div class="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8">
            <div class="space-y-8">
              <!-- Experience Timeline -->
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-4">Мой путь в разработке</h4>
                <div class="space-y-4">
                  <div class="flex items-center space-x-4">
                    <div class="w-3 h-3 bg-primary-600 rounded-full"></div>
                    <div>
                      <div class="font-medium text-gray-900">2021 - Настоящее время</div>
                      <div class="text-sm text-gray-600">Vue.js разработка</div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="w-3 h-3 bg-primary-600 rounded-full"></div>
                    <div>
                      <div class="font-medium text-gray-900">2020 - Настоящее время</div>
                      <div class="text-sm text-gray-600">HTML, CSS, JavaScript</div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="w-3 h-3 bg-primary-600 rounded-full"></div>
                    <div>
                      <div class="font-medium text-gray-900">2024 - Настоящее время</div>
                      <div class="text-sm text-gray-600">TypeScript & Nuxt.js</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Quick Stats -->
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center p-4 bg-white rounded-lg">
                  <div class="text-2xl font-bold text-primary-600">20+</div>
                  <div class="text-sm text-gray-600">Проектов</div>
                </div>
                <div class="text-center p-4 bg-white rounded-lg">
                  <div class="text-2xl font-bold text-primary-600">3+</div>
                  <div class="text-sm text-gray-600">Лет опыта</div>
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
import { CheckIcon, DocumentArrowDownIcon } from '@heroicons/vue/24/outline'
</script> 