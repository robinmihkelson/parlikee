<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { CheckCircleIcon } from '@heroicons/vue/24/solid'

const { t } = useI18n()

const formData = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const quoteData = ref({
  name: '',
  email: '',
  phone: '',
  property: '',
  size: '',
  service: '',
  date: '',
  details: ''
})

const messageSent = ref(false)
const quoteSent = ref(false)

const sendMessage = () => {
  messageSent.value = true
  setTimeout(() => {
    messageSent.value = false
    formData.value = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
  }, 3000)
}

const sendQuote = () => {
  quoteSent.value = true
  setTimeout(() => {
    quoteSent.value = false
    quoteData.value = {
      name: '',
      email: '',
      phone: '',
      property: '',
      size: '',
      service: '',
      date: '',
      details: ''
    }
  }, 3000)
}
</script>

<template>
  <div>
    <section class="relative bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
      <div class="absolute inset-0 bg-black opacity-40"></div>
      <div 
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('https://images.pexels.com/photos/3760070/pexels-photo-3760070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'); mix-blend-mode: overlay;"
      ></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl">
          <h1 
            class="text-4xl md:text-5xl font-bold leading-tight text-shadow-lg mb-6"
            data-aos="fade-up"
          >
            {{ t('contact.title') }}
          </h1>
          <p 
            class="text-xl mb-8 text-shadow"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {{ t('contact.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div 
            class="lg:col-span-2 bg-white rounded-xl shadow-lg p-8"
            data-aos="fade-up"
          >
            <h2 class="text-2xl font-bold mb-6 text-gray-800">{{ t('contact.title') }}</h2>
            
            <div v-if="messageSent" class="mb-6 bg-green-50 text-green-700 p-4 rounded-lg flex items-center">
              <CheckCircleIcon class="h-5 w-5 mr-2 text-green-500" />
              <span>Message sent successfully! We'll contact you soon.</span>
            </div>
            
            <form @submit.prevent="sendMessage">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">{{ t('contact.name') }}</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="formData.name" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">{{ t('contact.email') }}</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="formData.email" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">{{ t('contact.phone') }}</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="formData.phone" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label for="service" class="block text-sm font-medium text-gray-700 mb-1">{{ t('contact.service') }}</label>
                  <select 
                    id="service" 
                    v-model="formData.service" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select a service</option>
                    <option value="regular-cleaning">Regular Cleaning</option>
                    <option value="deep-cleaning">Deep Cleaning</option>
                    <option value="interior-painting">Interior Painting</option>
                    <option value="exterior-painting">Exterior Painting</option>
                    <option value="commercial-cleaning">Commercial Cleaning</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div class="mb-6">
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">{{ t('contact.message') }}</label>
                <textarea 
                  id="message" 
                  v-model="formData.message" 
                  rows="5" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                class="cta-button"
              >
                {{ t('contact.submit') }}
              </button>
            </form>
          </div>
          
          <div 
            class="bg-white rounded-xl shadow-lg p-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 class="text-2xl font-bold mb-6 text-gray-800">{{ t('contact.address') }}</h2>
            
            <div class="mb-8">
              <div class="flex items-start mb-4">
                <svg class="h-6 w-6 text-primary-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 class="font-medium text-gray-900">{{ t('contact.address') }}</h3>
                  <p class="text-gray-600">Saekoja tn 36b Tartu,<br />Tartu Tartumaa 50106</p>
                </div>
              </div>
              
              <div class="flex items-start mb-4">
                <svg class="h-6 w-6 text-primary-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 class="font-medium text-gray-900">{{ t('contact.phone_label') }}</h3>
                  <p class="text-gray-600">+372 5612 2802</p>
                </div>
              </div>
              
              <div class="flex items-start mb-4">
                <svg class="h-6 w-6 text-primary-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 class="font-medium text-gray-900">{{ t('contact.email_label') }}</h3>
                  <p class="text-gray-600">parlikeekirbuturg@gmail.com</p>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>