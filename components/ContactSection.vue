<template>
  <section id="contact" class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Связаться со мной
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Готов к новым проектам и сотрудничеству
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">
              Давайте обсудим ваш проект
            </h3>
            <p class="text-gray-600 leading-relaxed mb-8">
              Я всегда открыт для новых возможностей и интересных проектов. 
              Если у вас есть идея или проект, который нужно реализовать, 
              давайте обсудим детали и найдем лучшее решение.
            </p>
          </div>
          
          <!-- Contact Methods -->
          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <EnvelopeIcon class="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Email</h4>
                <p class="text-gray-600">w-jpk@example.com</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <PhoneIcon class="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Телефон</h4>
                <p class="text-gray-600">+7 (999) 123-45-67</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <MapPinIcon class="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Локация</h4>
                <p class="text-gray-600">Москва, Россия</p>
              </div>
            </div>
          </div>
          
          <!-- Social Links -->
          <div>
            <h4 class="text-lg font-semibold text-gray-900 mb-4">Социальные сети</h4>
            <div class="flex space-x-4">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.url"
                target="_blank"
                class="w-12 h-12 bg-white rounded-lg shadow-sm hover:shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110"
                :class="social.hoverClass"
              >
                <SocialIcons :name="social.name" />
              </a>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="bg-white rounded-xl shadow-lg p-8">
          <h3 class="text-xl font-semibold text-gray-900 mb-6">Отправить сообщение</h3>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                  Имя
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Ваше имя"
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                Тема
              </label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                placeholder="Тема сообщения"
              />
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                Сообщение
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                placeholder="Опишите ваш проект или задайте вопрос..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting">Отправка...</span>
              <span v-else>Отправить сообщение</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon
} from '@heroicons/vue/24/outline'

const isSubmitting = ref(false)

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/w-jpk',
    hoverClass: 'hover:bg-gray-900 hover:text-white'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/w-jpk',
    hoverClass: 'hover:bg-blue-600 hover:text-white'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/w-jpk',
    hoverClass: 'hover:bg-blue-500 hover:text-white'
  },
  {
    name: 'Email',
    url: 'mailto:w-jpk@example.com',
    hoverClass: 'hover:bg-red-500 hover:text-white'
  }
]

const submitForm = async () => {
  isSubmitting.value = true
  
  // Имитация отправки формы
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Здесь будет логика отправки формы
  console.log('Form submitted:', form.value)
  
  // Сброс формы
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  
  isSubmitting.value = false
  alert('Сообщение отправлено!')
}
</script> 