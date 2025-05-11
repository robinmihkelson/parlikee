<script setup>
import { ref, onMounted, computed } from 'vue'
import { 
  UserGroupIcon, 
  CheckIcon, 
  CalendarIcon, 
  StarIcon 
} from '@heroicons/vue/24/outline'

const props = defineProps({
  number: {
    type: Number,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  suffix: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    required: true
  }
})

const iconComponent = computed(() => {
  const icons = {
    'users': UserGroupIcon,
    'check': CheckIcon,
    'calendar': CalendarIcon,
    'star': StarIcon
  }
  return icons[props.icon] || CheckIcon
})

const displayNumber = ref(0)
const animationDuration = 2000
const frameDuration = 1000 / 60

onMounted(() => {
  startCountAnimation()
})

const startCountAnimation = () => {
  const totalFrames = Math.round(animationDuration / frameDuration)
  const incrementValue = props.number / totalFrames
  
  let currentFrame = 0
  
  const animate = () => {
    currentFrame++
    displayNumber.value = Math.min(Math.round(incrementValue * currentFrame), props.number)
    
    if (currentFrame < totalFrames) {
      requestAnimationFrame(animate)
    }
  }
  
  requestAnimationFrame(animate)
}
</script>

<template>
  <div class="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
    <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
      <component :is="iconComponent" class="h-8 w-8" />
    </div>
    
    <div class="text-4xl font-bold text-gray-800 mb-2">
      {{ displayNumber }}<span v-if="suffix">{{ suffix }}</span>
    </div>
    
    <p class="text-gray-600 font-medium">{{ label }}</p>
  </div>
</template>