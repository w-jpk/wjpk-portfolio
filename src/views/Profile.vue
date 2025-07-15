<template>
  <section id="profile" ref="profile" class="min-h-[100vh] w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4 md:px-12 py-8 bg-gradient-to-br from-gray-50 via-white to-primary-50 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
    </div>

    <!-- Фото -->
    <div class="flex justify-center items-center h-full">
      <div class="relative">
        <img
          src="@/assets/Avatar.png"
          alt="Фото"
          class="object-cover rounded-3xl shadow-2xl border-4 border-white max-h-[70vh] w-auto aspect-[4/5] bg-gradient-to-br from-primary-200 to-secondary-200"
        />
        <div class="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-200 to-blue-200 opacity-30 blur-2xl -z-10"></div>
      </div>
    </div>
    <!-- Контент -->
    <div class="flex flex-col items-center lg:items-start justify-center w-full h-full space-y-8">
      <div class="text-center lg:text-left space-y-6 max-w-2xl">
        <div class="space-y-4">
          <p class="text-lg lg:text-xl font-semibold text-gray-500 animate-fade-in">Привет, я</p>
          <h1 class="text-5xl lg:text-7xl xl:text-8xl font-extrabold bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-800 bg-clip-text text-transparent animate-slide-up drop-shadow-lg">
            {{ $store.state.name }}
          </h1>
          <p class="text-2xl lg:text-3xl font-bold text-gray-800 animate-fade-in">Frontend Developer</p>
          <p class="text-lg lg:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 animate-fade-in">Создаю современные и интерактивные веб-приложения с использованием передовых технологий</p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-slide-up mt-4">
          <buttonDownload 
            :downloadPdf="downloadPdf" 
            name="Скачать резюме"
            class="btn-primary text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
          />
          <a 
            href="#projects" 
            class="btn-secondary text-lg px-8 py-4 rounded-xl border-2 border-primary-600 text-primary-600 bg-white hover:bg-primary-600 hover:text-white shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Посмотреть работы
          </a>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center lg:justify-start space-x-8 pt-6 animate-fade-in">
          <a 
            href="https://t.me/w_jpk" 
            target="_blank"
            class="social-link bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 w-14 h-14 text-white text-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center rounded-full"
            @click="goTo('https://t.me/w_jpk')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-7 h-7" viewBox="0 0 55 50">
              <path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" />
            </svg>
          </a>
          <a 
            href="https://github.com/w-jpk" 
            target="_blank"
            class="social-link bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black w-14 h-14 text-white text-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center rounded-full"
            @click="goTo('https://github.com/w-jpk')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24">
              <g fill="none">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path fill="currentColor" d="M7.024 2.31a9 9 0 0 1 2.125 1.046A11.4 11.4 0 0 1 12 3c.993 0 1.951.124 2.849.355a9 9 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032c.4.444.5 1.188.571 1.756c.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.5 9.5 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276c-.712-.302-1.208-.77-1.581-1.218c-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088c.48.62.87 1.43 1.63 1.753c.313.133.772.22 1.49.122L8 17.98a4 4 0 0 1 .333-1.581a9.5 9.5 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618c-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719c.59-.653 1.584-.268 2.28-.031Z" />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll Arrow -->
    <ScrollArrow 
      v-if="isScrollArrowVisible" 
      :nextSectionId="'about'" 
      :targetSection="profileSection" 
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    />
  </section>
</template>

<script>
import Btn from "@/components/Btn.vue";
import buttonDownload from "@/components/buttonDownload.vue";
import ScrollArrow from "@/components/ScrollArrow.vue";
import { gsap } from 'gsap';

export default {
  components: {
    Btn,
    ScrollArrow,
    buttonDownload,
  },
  data() {
    return {
      isScrollArrowVisible: false,
      profileSection: null,
      text: "W-JPK"
    };
  },
  mounted() {
    this.profileSection = this.$refs.profile;
    this.observeProfileSection();
    this.initAnimations();
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    goTo(url) {
      window.open(url, "_blank");
    },
    downloadPdf() {
      const link = document.createElement("a");
      link.href = "/Гизбрехт Юлиан Александрович.pdf";
      link.download = "Гизбрехт Юлиан Александрович.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    observeProfileSection() {
      this.observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          this.isScrollArrowVisible = entry.isIntersecting;
        },
        {
          root: null,
          threshold: 0.1,
        }
      );
      if (this.profileSection) {
        this.observer.observe(this.profileSection);
      }
    },
    initAnimations() {
      const layers = {
        topText1: document.querySelector('.top-1'),
        topText2: document.querySelector('.top-2'),
        topText3: document.querySelector('.top-3'),
        bottomText1: document.querySelector('.bottom-1'),
        bottomText2: document.querySelector('.bottom-2'),
        bottomText3: document.querySelector('.bottom-3'),
        mainText: document.querySelector('.main-text'),
      };

      if (layers.mainText) {
        gsap.to(layers.mainText, {
          duration: 1,
          scale: 1,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          repeatDelay: 2,
        });

        gsap.to(layers.topText1, { duration: 2, opacity: 1, y: -20, repeat: -1, yoyo: true, repeatDelay: 1 });
        gsap.to(layers.topText2, { duration: 2, opacity: 1, y: -40, repeat: -1, yoyo: true, repeatDelay: 1 });
        gsap.to(layers.topText3, { duration: 2, opacity: 1, y: -60, repeat: -1, yoyo: true, repeatDelay: 1 });
        gsap.to(layers.bottomText1, { duration: 2, opacity: 1, y: 20, repeat: -1, yoyo: true, repeatDelay: 1 });
        gsap.to(layers.bottomText2, { duration: 2, opacity: 1, y: 40, repeat: -1, yoyo: true, repeatDelay: 1 });
        gsap.to(layers.bottomText3, { duration: 2, opacity: 1, y: 60, repeat: -1, yoyo: true, repeatDelay: 1 });
      }
    },
  },
};
</script>

<style scoped>
.gradient-text h1 {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-layer {
  opacity: 0.3;
}

.main-text {
  opacity: 1;
  z-index: 10;
}

.btn-primary {
  @apply inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5;
}

.btn-secondary {
  @apply inline-flex items-center px-6 py-3 border-2 border-primary-600 text-base font-medium rounded-lg text-primary-600 bg-transparent hover:bg-primary-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5;
}

.social-link {
  @apply inline-flex items-center justify-center w-12 h-12 rounded-full text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg;
}
</style>
