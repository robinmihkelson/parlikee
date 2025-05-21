<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center mb-4">
            <span class="text-primary-400 text-xl font-display font-bold">Pärlikee</span>
            <span class="ml-1 text-white text-xl font-display font-medium">Kirbuturg</span>
          </div>
          <p class="text-gray-400 mb-6">
            {{ t('about.subtitle') }}
          </p>
        </div>
        
        <div>
          <h3 class="text-white font-semibold text-lg mb-4">{{ t('nav.services') }}</h3>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                {{ t('services.cleaning.title') }}
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                {{ t('services.deepCleaning.title') }}
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                {{ t('services.painting.title') }}
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                {{ t('services.commercial.title') }}
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-white font-semibold text-lg mb-4">{{ t('nav.home') }}</h3>
          <ul class="space-y-3">
            <li>
              <router-link to="/" class="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                {{ t('nav.home') }}
              </router-link>
            </li>
            <li>
              <router-link to="/services" class="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                {{ t('nav.services') }}
              </router-link>
            </li>
            <li>
              <router-link to="/gallery" class="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                {{ t('nav.gallery') }}
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                {{ t('nav.about') }}
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                {{ t('nav.contact') }}
              </router-link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-white font-semibold text-lg mb-4">{{ t('contact.title') }}</h3>
          <ul class="space-y-3">
            <li class="flex">
              <svg class="h-6 w-6 text-primary-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-gray-400">Saekoja tn 36b Tartu, Tartu Tartumaa 50106</span>
            </li>
            <li class="flex">
              <svg class="h-6 w-6 text-primary-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span class="text-gray-400">+372 5612 2802</span>
            </li>
            <li class="flex">
              <svg class="h-6 w-6 text-primary-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="text-gray-400">info@parlikee.ee</span>
            </li>
          </ul>
        </div>
      </div>
      
      
    </div>
  </footer>
</template>