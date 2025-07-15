<template>
  <form @submit.prevent="submitFeedback" class="space-y-6">
    <!-- Name and Email -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
          Имя *
        </label>
        <input 
          id="name"
          type="text" 
          v-model="name" 
          placeholder="Ваше имя"
          required
          class="form-input"
        />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input 
          id="email"
          type="email" 
          v-model="email" 
          placeholder="your@email.com"
          required
          class="form-input"
        />
      </div>
    </div>

    <!-- Website -->
    <div>
      <label for="website" class="block text-sm font-medium text-gray-700 mb-2">
        Веб-сайт
      </label>
      <input 
        id="website"
        type="url" 
        v-model="website" 
        placeholder="https://your-website.com"
        class="form-input"
      />
    </div>

    <!-- Message -->
    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
        Сообщение *
      </label>
      <div class="relative">
        <textarea 
          id="message"
          v-model="message" 
          placeholder="Расскажите о вашем проекте..."
          maxlength="500"
          rows="5"
          required
          class="form-textarea"
        ></textarea>
        <div class="absolute bottom-2 right-2 text-xs text-gray-400">
          {{ message.length }}/500
        </div>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="pt-4">
      <button 
        type="submit" 
        :disabled="isSubmitting"
        class="submit-btn"
      >
        <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        {{ isSubmitting ? 'Отправка...' : 'Отправить сообщение' }}
      </button>
    </div>

    <!-- Success/Error Messages -->
    <div v-if="messageType" class="mt-4 p-4 rounded-lg" :class="messageClasses">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg v-if="messageType === 'success'" class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <svg v-else class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium" :class="messageType === 'success' ? 'text-green-800' : 'text-red-800'">
            {{ messageText }}
          </p>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      name: "",
      email: "",
      website: "",
      message: "",
      isSubmitting: false,
      messageType: null, // 'success' or 'error'
      messageText: "",
    };
  },
  computed: {
    messageClasses() {
      return {
        'bg-green-50 border border-green-200': this.messageType === 'success',
        'bg-red-50 border border-red-200': this.messageType === 'error',
      };
    },
  },
  methods: {
    ...mapActions(["feedback"]),
    async submitFeedback() {
      if (!this.name || !this.email || !this.message) {
        this.showMessage('error', 'Пожалуйста, заполните все обязательные поля.');
        return;
      }

      this.isSubmitting = true;
      this.messageType = null;

      try {
        await this.$store.dispatch("feedback", {
          name: this.name,
          email: this.email,
          website: this.website,
          message: this.message,
        });
        
        this.showMessage('success', 'Сообщение успешно отправлено! Я свяжусь с вами в ближайшее время.');
        this.resetForm();
      } catch (error) {
        console.error("Feedback error:", error);
        this.showMessage('error', 'Произошла ошибка при отправке сообщения. Попробуйте еще раз.');
      } finally {
        this.isSubmitting = false;
      }
    },
    showMessage(type, text) {
      this.messageType = type;
      this.messageText = text;
      
      // Auto-hide success messages after 5 seconds
      if (type === 'success') {
        setTimeout(() => {
          this.messageType = null;
        }, 5000);
      }
    },
    resetForm() {
      this.name = "";
      this.email = "";
      this.website = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
.form-input, .form-textarea {
  @apply w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 bg-white;
}

.form-input:focus, .form-textarea:focus {
  @apply outline-none;
}

.form-textarea {
  @apply resize-none;
}

.submit-btn {
  @apply w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none;
}
</style>
