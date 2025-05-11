<script setup>
import { computed } from 'vue'
import { 
  CheckBadgeIcon, 
  AcademicCapIcon, 
  ArrowPathRoundedSquareIcon, 
  ClockIcon 
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
  }
})

const iconComponent = computed(() => {
  const icons = {
    'badge-check': CheckBadgeIcon,
    'academic-cap': AcademicCapIcon,
    'leaf': ArrowPathRoundedSquareIcon,
    'clock': ClockIcon
  }
  return icons[props.icon] || CheckBadgeIcon
})
</script>

<template>
  <div class="bg-white rounded-xl shadow-md p-6 flex items-start hover:shadow-xl transition-shadow duration-300">
    <div class="flex-shrink-0 mr-4">
      <div class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
        <component :is="iconComponent" class="h-6 w-6 text-primary-600" />
      </div>
    </div>
    <div>
      <h3 class="text-xl font-bold mb-2 text-gray-800">{{ title }}</h3>
      <p class="text-gray-600">{{ description }}</p>
    </div>
  </div>
</template>