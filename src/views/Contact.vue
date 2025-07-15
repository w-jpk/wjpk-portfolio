<template>
  <section id="contact" class="py-20 bg-white relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 right-10 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
      <div class="absolute bottom-20 left-10 w-80 h-80 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Свяжитесь со мной
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
        <p class="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Готов к новым проектам и интересным предложениям. Давайте создадим что-то удивительное вместе!
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">
              Давайте обсудим ваш проект
            </h3>
            <p class="text-lg text-gray-600 leading-relaxed mb-8">
              Я всегда открыт для обсуждения новых проектов, творческих идей или возможностей для сотрудничества.
            </p>
          </div>

          <!-- Contact Items -->
          <div class="space-y-6">
            <div class="contact-item">
              <div class="contact-icon">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900">Email</h4>
                <a href="mailto:gizbrekht.y@bk.ru" class="text-primary-600 hover:text-primary-700 transition-colors duration-200">
                  gizbrekht.y@bk.ru
                </a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900">GitHub</h4>
                <a href="https://github.com/w-jpk" target="_blank" class="text-primary-600 hover:text-primary-700 transition-colors duration-200">
                  github.com/w-jpk
                </a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900">Telegram</h4>
                <a href="https://t.me/w_jpk" target="_blank" class="text-primary-600 hover:text-primary-700 transition-colors duration-200">
                  @w_jpk
                </a>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="pt-6">
            <h4 class="text-lg font-semibold text-gray-900 mb-4">Следите за мной</h4>
            <div class="flex space-x-4">
              <a 
                href="https://t.me/w_jpk" 
                target="_blank"
                class="social-link bg-blue-500 hover:bg-blue-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 55 50">
                  <path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" />
                </svg>
              </a>
              <a 
                href="https://github.com/w-jpk" 
                target="_blank"
                class="social-link bg-gray-800 hover:bg-gray-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
                  <g fill="none">
                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path fill="currentColor" d="M7.024 2.31a9 9 0 0 1 2.125 1.046A11.4 11.4 0 0 1 12 3c.993 0 1.951.124 2.849.355a9 9 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032c.4.444.5 1.188.571 1.756c.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.5 9.5 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276c-.712-.302-1.208-.77-1.581-1.218c-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088c.48.62.87 1.43 1.63 1.753c.313.133.772.22 1.49.122L8 17.98a4 4 0 0 1 .333-1.581a9.5 9.5 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618c-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719c.59-.653 1.584-.268 2.28-.031Z" />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 class="text-2xl font-bold text-gray-900 mb-8">
            Отправить сообщение
          </h3>
          
          <Feedback />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Feedback from "@/components/feedback.vue";

export default {
  components: {
    Feedback,
  },
};
</script>

<style scoped>
.contact-item {
  @apply flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300;
}

.contact-icon {
  @apply w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white flex-shrink-0;
}

.social-link {
  @apply inline-flex items-center justify-center w-12 h-12 rounded-full text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg;
}
</style>
