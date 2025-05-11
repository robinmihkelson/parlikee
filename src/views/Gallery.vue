<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const projects = ref([
  {
    id: 1,
    title: 'Apartment Deep Clean',
    description: 'Complete deep cleaning of a 2-bedroom apartment',
    before: 'src/assets/img/before4.png',
    after: 'src/assets/img/after4.png',
    category: 'cleaning'
  },
  {
    id: 2,
    title: 'Exterior House Painting',
    description: 'Thorough cleaning of kitchen with special attention to appliances',
    before: 'src/assets/img/before3.png',
    after: 'src/assets/img/after3.png',
    category: 'cleaning'
  },
  {
    id: 3,
    title: 'Living Room Painting',
    description: 'Complete painting of living room walls and ceiling',
    before: 'src/assets/img/before2.png',
    after: 'src/assets/img/after2.png',
    category: 'painting'
  },
  {
    id: 4,
    title: 'Bathroom Renovation',
    description: 'Deep cleaning and mold removal in bathroom',
    before: 'src/assets/img/before1.png',
    after: 'src/assets/img/after1.png',
    category: 'cleaning'
  },
  
])

const filter = ref('all')

const filteredProjects = computed(() => {
  if (filter.value === 'all') {
    return projects.value
  }
  return projects.value.filter(project => project.category === filter.value)
})

function setFilter(category) {
  filter.value = category
}
</script>

<template>
  <div>
    <section class="relative bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
      <div class="absolute inset-0 bg-black opacity-40"></div>
      <div 
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'); mix-blend-mode: overlay;"
      ></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl">
          <h1 
            class="text-4xl md:text-5xl font-bold leading-tight text-shadow-lg mb-6"
            data-aos="fade-up"
          >
            {{ t('gallery.title') }}
          </h1>
          <p 
            class="text-xl mb-8 text-shadow"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {{ t('gallery.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <section class="py-8 bg-gray-50 border-b border-gray-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            @click="setFilter('all')" 
            class="px-6 py-2 rounded-full transition-colors duration-300"
            :class="filter === 'all' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'"
          >
            All Projects
          </button>
          <button 
            @click="setFilter('cleaning')" 
            class="px-6 py-2 rounded-full transition-colors duration-300"
            :class="filter === 'cleaning' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'"
          >
            Cleaning
          </button>
          <button 
            @click="setFilter('painting')" 
            class="px-6 py-2 rounded-full transition-colors duration-300"
            :class="filter === 'painting' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'"
          >
            Painting
          </button>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="bg-white rounded-xl shadow-lg overflow-hidden"
            data-aos="fade-up"
          >
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-6">{{ project.description }}</p>
            </div>
            
            <div class="grid grid-cols-2 gap-4 p-6 pt-0">
              <div>
                <p class="text-sm font-medium text-gray-500 mb-2">{{ t('gallery.before') }}</p>
                <img 
                  :src="project.before" 
                  :alt="`Before - ${project.title}`" 
                  class="w-full h-64 object-cover rounded-lg shadow-md" 
                />
              </div>
              <div>
                <p class="text-sm font-medium text-gray-500 mb-2">{{ t('gallery.after') }}</p>
                <img 
                  :src="project.after" 
                  :alt="`After - ${project.title}`" 
                  class="w-full h-64 object-cover rounded-lg shadow-md" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-primary-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          class="text-center"
          data-aos="fade-up"
        >
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Ready to transform your space?</h2>
          <p class="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">Our professional team is ready to help with your cleaning and painting needs. Contact us today for a free consultation.</p>
          
          <router-link 
            to="/contact" 
            class="cta-button"
          >
            Get in Touch
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>