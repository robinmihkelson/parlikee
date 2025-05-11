<script setup>
import { ref, computed } from 'vue'
import { 
  SparklesIcon, 
  BeakerIcon, 
  PaintBrushIcon, 
  BuildingOfficeIcon 
} from '@heroicons/vue/24/outline'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

const iconComponent = computed(() => {
  const icons = {
    'sparkles': SparklesIcon,
    'beaker': BeakerIcon,
    'paint-brush': PaintBrushIcon,
    'office-building': BuildingOfficeIcon
  }
  return icons[props.icon] || SparklesIcon
})

const isHovered = ref(false)
</script>

<template>
  <div 
    class="service-card hover-float overflow-hidden group"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="relative h-48 rounded-t-lg overflow-hidden mb-4 -mx-6 -mt-6">
      <img 
        :src="image" 
        :alt="title" 
        class="w-full h-full object-cover transition-transform duration-700 transform"
        :class="{ 'scale-110': isHovered }"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div class="absolute bottom-4 left-4 text-white">
        <component :is="iconComponent" class="h-8 w-8 mb-2" />
      </div>
    </div>
    
    <h3 class="text-xl font-bold mb-2 text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
      {{ title }}
    </h3>
    
    <p class="text-gray-600">
      {{ description }}
    </p>
    
    <div class="mt-4 flex justify-end">
      <router-link 
        to="/services" 
        class="text-primary-600 font-medium hover:text-primary-700 flex items-center transition-colors duration-300"
      >
        Learn more
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </router-link>
    </div>
  </div>
</template>