<script setup>
import { StarIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    default: 5
  },
  image: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
    <div class="flex space-x-1 mb-4">
      <StarIcon v-for="i in rating" :key="i" class="h-5 w-5 text-yellow-400" />
    </div>
    
    <p class="text-gray-600 mb-6">{{ content }}</p>
    
    <div class="flex items-center">
      <img :src="image" :alt="name" class="w-12 h-12 rounded-full object-cover mr-4" />
      <div>
        <h4 class="font-bold text-gray-800">{{ name }}</h4>
        <p class="text-gray-500 text-sm">{{ role }}</p>
      </div>
    </div>
  </div>
</template>