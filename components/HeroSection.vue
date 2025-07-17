<template>
  <section id="home" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-blue-50">
    <div class="container-custom section-padding">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="space-y-8 animate-fade-in">
          <div class="space-y-4">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900">
              Привет, я <span class="gradient-text">W-JPK</span>
            </h1>
            <h2 class="text-2xl md:text-3xl font-semibold text-gray-700">
              Frontend Developer
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl text-balance">
              Создаю современные веб-приложения с использованием HTML, CSS, JavaScript, TypeScript, Vue.js и Nuxt.js. 
              Специализируюсь на создании интуитивных и отзывчивых пользовательских интерфейсов.
            </p>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-600">3+</div>
              <div class="text-sm text-gray-600">Лет HTML/CSS/JS</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-600">3+</div>
              <div class="text-sm text-gray-600">Лет Vue.js</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-600">1+</div>
              <div class="text-sm text-gray-600">Год NuxtJS</div>
            </div>
          </div>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#projects" class="btn-primary text-center">
              Посмотреть проекты
            </a>
            <a href="#contact" class="btn-secondary text-center">
              Связаться со мной
            </a>
          </div>
        </div>
        
        <!-- Hero Image -->
        <div class="relative animate-slide-up">
          <div class="relative z-10">
            <div class="w-80 h-80 mx-auto bg-gradient-to-br from-primary-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl p-2">
              <div class="w-full h-full bg-white rounded-full overflow-hidden">
                <img 
                  src="/images/Avatar.png" 
                  alt="W-JPK - Frontend Developer" 
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <!-- Floating Elements -->
          <div class="absolute top-10 -left-10 w-8 h-8 bg-yellow-400 rounded-full animate-bounce-slow"></div>
          <div class="absolute bottom-20 -right-10 w-6 h-6 bg-green-400 rounded-full animate-bounce-slow" style="animation-delay: 0.5s;"></div>
          <div class="absolute top-1/2 -left-5 w-4 h-4 bg-red-400 rounded-full animate-bounce-slow" style="animation-delay: 1s;"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Убираем импорт иконки, так как теперь используем изображение
</script> 