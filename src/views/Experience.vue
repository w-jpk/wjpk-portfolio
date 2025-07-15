<template>
  <section id="experience" class="py-20 bg-gray-50 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-10 right-20 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse-slow"></div>
      <div class="absolute bottom-10 left-20 w-64 h-64 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-bounce-slow"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Опыт и навыки
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
        <p class="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Технологии и инструменты, с которыми я работаю для создания современных веб-приложений
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(exp, index) in $store.state.exps" 
          :key="index"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
        >
          <div class="text-center space-y-6">
            <!-- Icon -->
            <div class="flex justify-center">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <font-awesome-icon 
                  :icon="exp.icon" 
                  class="text-2xl text-white"
                />
              </div>
            </div>

            <!-- Content -->
            <div class="space-y-3">
              <h3 class="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                {{ exp.title }}
              </h3>
              <p class="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full inline-block">
                {{ exp.years }}
              </p>
              <p class="text-gray-600 leading-relaxed">
                {{ exp.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Skills Section -->
      <div class="mt-20">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-gray-900 mb-4">
            Дополнительные навыки
          </h3>
          <p class="text-lg text-gray-600">
            Инструменты и технологии, которые помогают мне создавать качественные проекты
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div class="skill-item">
            <div class="skill-icon">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <span class="skill-name">Responsive Design</span>
          </div>

          <div class="skill-item">
            <div class="skill-icon">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span class="skill-name">UI/UX Design</span>
          </div>

          <div class="skill-item">
            <div class="skill-icon">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <span class="skill-name">Performance</span>
          </div>

          <div class="skill-item">
            <div class="skill-icon">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span class="skill-name">SEO</span>
          </div>

          <div class="skill-item">
            <div class="skill-icon">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <span class="skill-name">Testing</span>
          </div>

          <div class="skill-item">
            <div class="skill-icon">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span class="skill-name">Deployment</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { mapState } from 'vuex';

export default {
  name: "Experience",
  components: {
    FontAwesomeIcon,
  },
  computed: {
    ...mapState(['exps']),
    maxYears() {
      // Определяем максимальное количество лет среди всех карточек
      return Math.max(...this.exps.map(exp => {
        const match = exp.years.match(/\d+/);
        return match ? parseInt(match[0]) : 1;
      }));
    }
  },
  methods: {
    getProgressWidth(years) {
      // Корректно рассчитываем ширину прогресс-бара относительно максимального стажа
      const match = years.match(/\d+/);
      const value = match ? parseInt(match[0]) : 0;
      const percent = Math.round((value / this.maxYears) * 100);
      return `${percent}%`;
    }
  }
};
</script>

<style scoped>
.skill-item {
  @apply flex flex-col items-center space-y-3 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer;
}

.skill-icon {
  @apply w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white;
}

.skill-name {
  @apply text-sm font-medium text-gray-700 text-center;
}
</style>
