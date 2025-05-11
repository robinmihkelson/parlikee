<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { CheckIcon } from '@heroicons/vue/24/solid'

const { t } = useI18n()

const services = ref([
  {
    id: 'regular-cleaning',
    title: 'Regular Home Cleaning',
    description: 'Our standard cleaning service covers all the basics to keep your home fresh and tidy.',
    features: [
      'Dusting all accessible surfaces',
      'Vacuuming and mopping floors',
      'Cleaning kitchen counters and appliances',
      'Bathroom cleaning and sanitizing',
      'Emptying trash bins',
      'Making beds (linens not changed)'
    ],
    image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning',
    description: 'A comprehensive cleaning service that reaches those often-neglected areas for a truly spotless home.',
    features: [
      'All regular cleaning services',
      'Interior cabinet cleaning',
      'Oven and refrigerator cleaning',
      'Baseboards and door frames',
      'Window sills and tracks',
      'Light fixtures and ceiling fans',
      'Removal of scale from bathrooms'
    ],
    image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'move-in-out',
    title: 'Move-In/Move-Out Cleaning',
    description: 'Leave your old place spotless or make your new home ready for your arrival with this thorough cleaning service.',
    features: [
      'All deep cleaning services',
      'Inside closets and cabinets',
      'Interior windows',
      'Drawer cleaning and lining',
      'Detailed appliance cleaning',
      'Wall spot cleaning',
      'Thorough bathroom descaling'
    ],
    image: 'https://www.enviropurehome.com/wp-content/uploads/2023/11/move-in-and-move-out-cleaning-checklist.jpg'
  },
  {
    id: 'interior-painting',
    title: 'Interior Painting',
    description: 'Transform your spaces with a fresh coat of paint, applied with precision and care by our expert painters.',
    features: [
      'Surface preparation and repairs',
      'Premium quality paints',
      'Precise edging and detail work',
      'Even application',
      'Cleanup after completion',
      'Color consultation available',
      '2-year warranty on all painting work'
    ],
    image: 'https://handymanconnection.com/wp-content/uploads/2023/03/interior-painting.png'
  },
  {
    id: 'exterior-painting',
    title: 'Exterior Painting',
    description: 'Enhance your home\'s curb appeal and protect it from the elements with our exterior painting services.',
    features: [
      'Pressure washing and surface prep',
      'Wood repair where needed',
      'Weather-resistant premium paints',
      'Careful masking of windows and fixtures',
      'Multiple coats as needed',
      'Cleanup of all work areas',
      '3-year warranty on exterior painting'
    ],
    image: 'https://www.houselogic.com/wp-content/uploads/2011/03/exterior-house-painting-epspainting-standard_c231db00f6cd6e9389489e72c0f32fe0.jpg?w=1360'
  },
  {
    id: 'commercial-cleaning',
    title: 'Commercial Cleaning',
    description: 'Keep your business spotless with our professional commercial cleaning services, tailored to your needs.',
    features: [
      'Flexible scheduling (after hours available)',
      'Reception and common area cleaning',
      'Restroom sanitizing',
      'Break room/kitchen cleaning',
      'Trash removal',
      'Floor care (vacuum/mop)',
      'Window and glass door cleaning'
    ],
    image: 'https://palmettocommercialservices.com/wp-content/uploads/2021/06/local-cleaning-business-janitorial-cart-in-lobby-1200x600-1.jpg'
  }
])

const faqs = ref([
  {
    question: 'How often should I schedule a cleaning service?',
    answer: 'This depends on your lifestyle and needs. Many clients choose weekly or bi-weekly service for regular maintenance, while others prefer monthly deep cleanings. We\'re happy to recommend a schedule after learning about your specific situation.'
  },
  {
    question: 'Do I need to provide cleaning supplies?',
    answer: 'No, we bring all necessary professional-grade cleaning supplies and equipment. If you have specific products you prefer we use in your home, please let us know in advance.'
  },
  {
    question: 'How long does a typical cleaning take?',
    answer: 'The duration depends on the size of your home and the type of service. A standard cleaning of a two-bedroom apartment typically takes 2-3 hours, while deep cleanings may take 4-5 hours or more.'
  },
  {
    question: 'Do I need to be home during the cleaning?',
    answer: 'No, many of our clients provide a key or access code. We are fully insured and all our staff undergo thorough background checks for your peace of mind.'
  },
  {
    question: 'What types of paint do you use?',
    answer: 'We use high-quality, low-VOC or zero-VOC paints from premium brands. We can discuss specific paint options during your consultation to ensure we meet your preferences for finish, durability, and environmental concerns.'
  },
  {
    question: 'How do you prepare surfaces for painting?',
    answer: 'Our preparation process includes cleaning the surfaces, repairing holes or cracks, sanding rough areas, applying primer when needed, and protecting surrounding areas with drop cloths and tape.'
  }
])
</script>

<template>
  <div>
    <section class="relative bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
      <div class="absolute inset-0 bg-black opacity-40"></div>
      <div 
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('https://images.pexels.com/photos/7439466/pexels-photo-7439466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'); mix-blend-mode: overlay;"
      ></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl">
          <h1 
            class="text-4xl md:text-5xl font-bold leading-tight text-shadow-lg mb-6"
            data-aos="fade-up"
          >
            Our Services
          </h1>
          <p 
            class="text-xl mb-8 text-shadow"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Professional cleaning and painting services tailored to your needs
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          v-for="(service, index) in services" 
          :key="service.id"
          class="mb-20 last:mb-0"
          data-aos="fade-up"
          :data-aos-delay="index * 50"
        >
          <div :class="{'flex flex-col md:flex-row items-center': index % 2 === 0, 'flex flex-col md:flex-row-reverse items-center': index % 2 !== 0}">
            <div class="md:w-1/2 mb-8 md:mb-0">
              <div class="relative group overflow-hidden rounded-xl shadow-xl">
                <img 
                  :src="service.image" 
                  :alt="service.title" 
                  class="w-full h-80 object-cover transition-transform duration-700 transform group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div class="absolute bottom-6 left-6 text-white">
                  <h3 class="text-2xl font-bold">{{ service.title }}</h3>
                </div>
              </div>
            </div>
            
            <div :class="{'md:w-1/2 md:pl-12': index % 2 === 0, 'md:w-1/2 md:pr-12': index % 2 !== 0}">
              <h3 class="text-2xl font-bold mb-4 text-gray-800">{{ service.title }}</h3>
              <p class="text-gray-600 mb-6">{{ service.description }}</p>
              
              <ul class="space-y-3">
                <li 
                  v-for="(feature, fIndex) in service.features" 
                  :key="fIndex"
                  class="flex items-start"
                >
                  <CheckIcon class="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700">{{ feature }}</span>
                </li>
              </ul>
              
              <div class="mt-8">
                <router-link 
                  to="/contact" 
                  class="cta-button"
                >
                  Get a Quote
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 
            class="section-heading mx-auto"
            data-aos="fade-up"
          >
            Additional Services
          </h2>
        </div>

        <div 
          class="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <div class="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-gray-800">Post-Construction Cleaning</h3>
            <p class="text-gray-600">Thorough cleaning after renovation or construction projects to remove dust, debris, and prepare the space for use.</p>
          </div>
          
          <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <div class="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-gray-800">Specialty Surface Cleaning</h3>
            <p class="text-gray-600">Specialized cleaning for delicate surfaces like marble, granite, hardwood, and antique furniture, using appropriate techniques and products.</p>
          </div>
          
          <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <div class="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-gray-800">Seasonal Cleaning</h3>
            <p class="text-gray-600">Comprehensive seasonal cleaning services to refresh your home in spring, prepare for winter, or get ready for special occasions and holidays.</p>
          </div>
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
            Frequently Asked Questions
          </h2>
        </div>

        <div class="max-w-3xl mx-auto">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="mb-6 last:mb-0"
            data-aos="fade-up"
            :data-aos-delay="index * 50"
          >
            <h3 class="text-xl font-bold mb-2 text-gray-800">{{ faq.question }}</h3>
            <p class="text-gray-600">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-primary-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          class="bg-white rounded-2xl shadow-xl overflow-hidden"
          data-aos="fade-up"
        >
          <div class="md:flex">
            <div 
              class="md:w-1/2 bg-cover bg-center h-64 md:h-auto"
              style="background-image: url('https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
            ></div>
            
            <div class="md:w-1/2 p-8 md:p-12">
              <h3 class="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Ready for a spotless home?</h3>
              <p class="text-gray-600 mb-8">Contact us today to schedule your cleaning or painting service. We offer free consultations and quotes.</p>
              
              <router-link 
                to="/contact" 
                class="cta-button inline-block"
              >
                Contact Us Now
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>