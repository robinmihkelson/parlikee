<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
      <div class="absolute inset-0 bg-black opacity-40"></div>
      <div 
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('https://images.pexels.com/photos/3856346/pexels-photo-3856346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'); mix-blend-mode: overlay;"
      ></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl">
          <h1 
            class="text-4xl md:text-5xl font-bold leading-tight text-shadow-lg mb-6"
            data-aos="fade-up"
          >
            {{ t('about.title') }}
          </h1>
          <p 
            class="text-xl mb-8 text-shadow"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {{ t('about.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            data-aos="fade-up"
          >
            <h2 class="section-heading">{{ t('about.story') }}</h2>
            <p class="text-gray-600 mb-6">Founded in 2016, Pärlikee Kirbuturg began as a small family business with a passion for transforming spaces through professional cleaning and painting services.</p>
            <p class="text-gray-600 mb-6">Over the years, we have maintained our commitment to quality, integrity, and customer satisfaction.</p>
            <p class="text-gray-600">What sets us apart is our dedication to using eco-friendly products, our meticulously trained staff, and our unwavering attention to detail in every project we undertake.</p>
          </div>
          <div 
            class="relative"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-100 rounded-lg -z-10"></div>
            <div class="absolute -top-6 -right-6 w-32 h-32 bg-accent-100 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-primary-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div 
            class="bg-white p-8 rounded-xl shadow-lg"
            data-aos="fade-up"
          >
            <h2 class="text-2xl font-bold mb-6 text-gray-800 inline-block relative">
              {{ t('about.mission') }}
              <span class="absolute -bottom-2 left-0 w-12 h-1 bg-primary-500 rounded"></span>
            </h2>
            <p class="text-gray-600 mb-4">Our mission is to enhance the quality of our clients' living and working environments through exceptional cleaning and painting services that exceed expectations.</p>
            <p class="text-gray-600">We are committed to using environmentally responsible products, employing well-trained professionals, and delivering consistent, high-quality results that improve our clients' spaces and lives.</p>
          </div>
          
          <div 
            class="bg-white p-8 rounded-xl shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 class="text-2xl font-bold mb-6 text-gray-800 inline-block relative">
              {{ t('about.vision') }}
              <span class="absolute -bottom-2 left-0 w-12 h-1 bg-primary-500 rounded"></span>
            </h2>
            <p class="text-gray-600 mb-4">We aspire to be the premier provider of cleaning and painting services in Estonia, known for our unparalleled quality, reliability, and customer service.</p>
            <p class="text-gray-600">Our vision is to continuously innovate in our field, set the standard for excellence, and build lasting relationships with clients who value our dedication to transforming their spaces.</p>
          </div>
        </div>
      </div>
    </section>

    

    <section class="py-16 md:py-24 bg-primary-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 
            class="section-heading mx-auto"
            data-aos="fade-up"
          >
            Our Values
          </h2>
        </div>
        
        <div 
          class="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
            <div class="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">Quality</h3>
            <p class="text-gray-600">We are committed to delivering the highest quality services, using premium products and thorough techniques in every project.</p>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
            <div class="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">Integrity</h3>
            <p class="text-gray-600">We operate with transparency, honesty, and ethical practices in all our business dealings and client relationships.</p>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
            <div class="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">Care</h3>
            <p class="text-gray-600">We take genuine care in our work, treating each client's home or business as if it were our own, with respect and attention.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl overflow-hidden shadow-xl"
          data-aos="fade-up"
        >
          <div class="md:flex items-center">
            <div class="md:w-2/3 p-8 md:p-12 text-white">
              <h2 class="text-2xl md:text-3xl font-bold mb-4">Experience the Pärlikee Kirbuturg difference</h2>
              <p class="text-primary-100 mb-8">Contact us today to learn more about our services and how we can help transform your space.</p>
              
              <router-link 
                to="/contact" 
                class="bg-white text-primary-700 font-medium py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Get in Touch
              </router-link>
            </div>
            
            <div class="md:w-1/3 hidden md:block">
              <img 
                src="https://images.pexels.com/photos/3856030/pexels-photo-3856030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Contact us" 
                class="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>