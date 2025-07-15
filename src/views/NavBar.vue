<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 transition-all duration-300" :class="{ 'bg-white/95': isScrolled }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent hover:from-primary-700 hover:to-secondary-700 transition-all duration-300">
            W-JPK
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a href="#profile" class="nav-link">Главная</a>
            <a href="#about" class="nav-link">Обо мне</a>
            <a href="#experience" class="nav-link">Опыт</a>
            <a href="#projects" class="nav-link">Проекты</a>
            <a href="#contact" class="nav-link">Контакты</a>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600 transition-colors duration-200">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-show="isMobileMenuOpen" class="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#profile" @click="closeMobileMenu" class="mobile-nav-link">Главная</a>
        <a href="#about" @click="closeMobileMenu" class="mobile-nav-link">Обо мне</a>
        <a href="#experience" @click="closeMobileMenu" class="mobile-nav-link">Опыт</a>
        <a href="#projects" @click="closeMobileMenu" class="mobile-nav-link">Проекты</a>
        <a href="#contact" @click="closeMobileMenu" class="mobile-nav-link">Контакты</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
  },
};
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative;
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 transition-all duration-300 transform -translate-x-1/2;
}

.nav-link:hover::after {
  @apply w-full;
}

.mobile-nav-link {
  @apply block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-all duration-200;
}
</style>
