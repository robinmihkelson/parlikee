<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import ServiceCard from '../components/ServiceCard.vue'
import FeatureCard from '../components/FeatureCard.vue'
import TestimonialCard from '../components/TestimonialCard.vue'
import StatsCounter from '../components/StatsCounter.vue'
import { CheckCircleIcon } from '@heroicons/vue/24/solid'

const { t } = useI18n()
const services = ref([
  { 
    id: 'cleaning', 
    title: t('services.cleaning.title'),
    description: t('services.cleaning.description'),
    icon: 'sparkles',
    image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  { 
    id: 'deep-cleaning', 
    title: t('services.deepCleaning.title'),
    description: t('services.deepCleaning.description'),
    icon: 'beaker',
    image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  { 
    id: 'painting', 
    title: t('services.painting.title'),
    description: t('services.painting.description'),
    icon: 'paint-brush',
    image: 'https://handymanconnection.com/wp-content/uploads/2023/03/interior-painting.png'
  },
  { 
    id: 'commercial', 
    title: t('services.commercial.title'),
    description: t('services.commercial.description'),
    icon: 'office-building',
    image: 'https://palmettocommercialservices.com/wp-content/uploads/2021/06/local-cleaning-business-janitorial-cart-in-lobby-1200x600-1.jpg'
  }
])

const features = ref([
  { 
    id: 'quality',
    title: t('why.quality.title'),
    description: t('why.quality.description'),
    icon: 'badge-check'
  },
  { 
    id: 'eco',
    title: t('why.eco.title'),
    description: t('why.eco.description'),
    icon: 'leaf'
  },
  { 
    id: 'experience',
    title: t('why.experience.title'),
    description: t('why.experience.description'),
    icon: 'academic-cap'
  },
  { 
    id: 'reliable',
    title: t('why.reliable.title'),
    description: t('why.reliable.description'),
    icon: 'clock'
  }
])

onMounted(() => {
})
</script>

<template>
  <div>
    <section class="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div class="absolute inset-0 bg-black opacity-40"></div>
      <div 
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'); mix-blend-mode: overlay;"
      ></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-28 lg:py-36">
        <div class="max-w-3xl">
          <h1 
            class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-shadow-lg mb-6"
            data-aos="fade-up"
          >
            {{ t('hero.title') }}
          </h1>
          <p 
            class="text-xl md:text-2xl mb-8 text-shadow"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {{ t('hero.subtitle') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 sm:gap-6" data-aos="fade-up" data-aos-delay="200">
            <router-link to="/contact" class="cta-button text-center">
              {{ t('hero.cta') }}
            </router-link>
            <router-link to="/services" class="bg-white text-primary-700 font-medium py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-center">
              {{ t('nav.services') }}
            </router-link>
          </div>
        </div>
      </div>
      
      <div class="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="fill-white h-16 md:h-20 w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C115.39,33.45,222.89,52.75,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>

    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 
            class="section-heading mx-auto"
            data-aos="fade-up"
          >
            {{ t('services.title') }}
          </h2>
          <p 
            class="text-gray-600 max-w-2xl mx-auto mt-8 text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {{ t('services.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            v-for="service in services" 
            :key="service.id"
            :title="service.title"
            :description="service.description"
            :image="service.image"
            :icon="service.icon"
            data-aos="fade-up"
            :data-aos-delay="100 * index"
          />
        </div>
      </div>
    </section>

    <section class="py-16 bg-primary-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatsCounter 
            v-for="stat in stats" 
            :key="stat.id"
            :number="stat.number"
            :label="stat.label"
            :suffix="stat.suffix"
            :icon="stat.icon"
            data-aos="fade-up"
            :data-aos-delay="50 * index"
          />
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 
            class="section-heading mx-auto"
            data-aos="fade-up"
          >
            {{ t('why.title') }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard 
            v-for="feature in features" 
            :key="feature.id"
            :title="feature.title"
            :description="feature.description"
            :icon="feature.icon"
            data-aos="fade-up"
            :data-aos-delay="100 * index"
          />
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 
            class="text-3xl md:text-4xl font-bold mb-8"
            data-aos="fade-up"
          >
            Ready to transform your space?
          </h2>
          <p 
            class="text-lg md:text-xl mb-10 text-primary-100"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Get a free quote today and experience the difference of professional cleaning and painting services.
          </p>
          <router-link 
            to="/contact" 
            class="bg-white text-primary-700 font-medium py-3 px-10 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 inline-block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {{ t('hero.cta') }}
          </router-link>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 
            class="section-heading mx-auto"
            data-aos="fade-up"
          >
            How It Works
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            class="text-center relative"
            data-aos="fade-up"
          >
            <div class="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 text-primary-600 mb-6 mx-auto">
              <span class="text-2xl font-bold">1</span>
              <div class="absolute -right-4 -top-4 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center md:block hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-2">Contact Us</h3>
            <p class="text-gray-600">Reach out through our website or phone to schedule your free consultation.</p>
            
            <div class="hidden md:block absolute top-1/4 right-0 transform translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-primary-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
          
          <div 
            class="text-center relative"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 text-primary-600 mb-6 mx-auto">
              <span class="text-2xl font-bold">2</span>
              <div class="absolute -right-4 -top-4 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center md:block hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-2">Personalized Quote</h3>
            <p class="text-gray-600">We'll assess your needs and provide a detailed quote tailored to your requirements.</p>
            
            <div class="hidden md:block absolute top-1/4 right-0 transform translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-primary-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
          
          <div 
            class="text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 text-primary-600 mb-6 mx-auto">
              <span class="text-2xl font-bold">3</span>
              <div class="absolute -right-4 -top-4 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center md:block hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-2">Enjoy the Results</h3>
            <p class="text-gray-600">Our expert team completes the work to the highest standard, ensuring your satisfaction.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-gray-50 border-t border-gray-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h3 
            class="text-xl font-bold text-gray-800"
            data-aos="fade-up"
          >
            Trusted by clients across Estonia and Finland
          </h3>
        </div>
        
        <div 
          class="grid grid-cols-2 md:grid-cols-4 gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-20">
            <CheckCircleIcon class="h-6 w-6 text-primary-500 mr-2" />
            <span class="font-medium text-gray-800">Licensed</span>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-20">
            <CheckCircleIcon class="h-6 w-6 text-primary-500 mr-2" />
            <span class="font-medium text-gray-800">Insured</span>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-20">
            <CheckCircleIcon class="h-6 w-6 text-primary-500 mr-2" />
            <span class="font-medium text-gray-800">Guaranteed</span>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-20">
            <CheckCircleIcon class="h-6 w-6 text-primary-500 mr-2" />
            <span class="font-medium text-gray-800">Trusted</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>