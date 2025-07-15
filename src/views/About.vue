<template>
  <section id="about" class="py-20 bg-white relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
      <div class="absolute bottom-20 right-10 w-72 h-72 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Обо мне
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Content -->
        <div class="space-y-8">
          <div class="space-y-6">
            <h3 class="text-2xl lg:text-3xl font-bold text-gray-900">
              Frontend разработчик с страстью к созданию
            </h3>
            <p class="text-lg text-gray-600 leading-relaxed">
              Я специализируюсь на создании современных, отзывчивых и интерактивных веб-приложений. 
              Мой подход сочетает в себе креативный дизайн с техническим совершенством, 
              создавая пользовательский опыт, который не только функционален, но и приятен в использовании.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              Постоянно изучаю новые технологии и слежу за трендами в веб-разработке, 
              чтобы создавать решения, которые соответствуют современным стандартам и ожиданиям пользователей.
            </p>
          </div>

          <!-- Skills Preview -->
          <div class="space-y-4">
            <h4 class="text-xl font-semibold text-gray-900">Основные технологии:</h4>
            <div class="flex flex-wrap gap-3">
              <span class="skill-tag">Vue.js</span>
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">HTML/CSS</span>
              <span class="skill-tag">Tailwind CSS</span>
              <span class="skill-tag">Git</span>
              <span class="skill-tag">Responsive Design</span>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="pt-4">
            <a href="#projects" class="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Посмотреть мои работы
              <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Stats/Info Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl border border-primary-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <p class="text-sm font-medium text-primary-600">Опыт работы</p>
                <p class="text-2xl font-bold text-gray-900">3+ года</p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-2xl border border-secondary-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-secondary-600 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
              <div>
                <p class="text-sm font-medium text-secondary-600">Проектов завершено</p>
                <p class="text-2xl font-bold text-gray-900">6+</p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <div>
                <p class="text-sm font-medium text-green-600">Образование</p>
                <p class="text-2xl font-bold text-gray-900">ГАПОУ 'ОКЭИ'</p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <p class="text-sm font-medium text-purple-600">Специализация</p>
                <p class="text-2xl font-bold text-gray-900">Frontend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.skill-tag {
  @apply inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800 border border-primary-200 hover:bg-primary-200 hover:border-primary-300 transition-all duration-200;
}
</style>
