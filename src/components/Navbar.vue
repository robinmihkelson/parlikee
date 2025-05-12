<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  isMenuOpen: Boolean,
  currentLocale: String
})

const emit = defineEmits(['toggle-menu', 'close-menu', 'toggle-language'])

const router = useRouter()
const isScrolled = ref(false)
const isNavbarVisible = ref(true)
const lastScrollTop = ref(0)

const checkScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  
  isScrolled.value = scrollTop > 50
  
  if (scrollTop > lastScrollTop.value && scrollTop > 100) {
    isNavbarVisible.value = false
  } else {
    isNavbarVisible.value = true
  }
  
  lastScrollTop.value = scrollTop
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})

watch(() => router.currentRoute.value, () => {
  nextTick(() => {
    emit('close-menu')
    window.scrollTo(0, 0)
  })
})

const toggleMenu = () => {
  emit('toggle-menu')
}

const toggleLanguage = () => {
  emit('toggle-language')
}
</script>

<template>
  <header 
    :class="{
      'bg-white shadow-md': isScrolled || props.isMenuOpen,
      'bg-transparent': !isScrolled && !props.isMenuOpen,
      'translate-y-0': isNavbarVisible,
      '-translate-y-full': !isNavbarVisible && !props.isMenuOpen
    }" 
    class="fixed w-full z-50 transition-all duration-300"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <router-link to="/" class="flex items-center" @click="emit('close-menu')">
          <div class="flex items-center">
            <span class="text-primary-600 text-2xl font-display font-bold">Pärlikee</span>
            <span class="ml-1 text-gray-700 text-2xl font-display font-medium">Kirbuturg</span>
          </div>
        </router-link>

        <nav class="hidden md:flex space-x-8 items-center">
          <router-link 
            v-for="item in [
              { name: $t('nav.home'), path: '/' },
              { name: $t('nav.services'), path: '/services' },
              { name: $t('nav.gallery'), path: '/gallery' },
              { name: $t('nav.about'), path: '/about' },
              { name: $t('nav.contact'), path: '/contact' }
            ]" 
            :key="item.name"
            :to="item.path"
            :class="[
              router.currentRoute.value.path === item.path 
                ? 'text-primary-600 font-medium' 
                : 'text-gray-700 hover:text-primary-600'
            ]"
            class="transition-colors duration-200"
          >
            {{ item.name }}
          </router-link>
          
          <button 
            @click="toggleLanguage"
            class="flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-200"
          >
            <GlobeAltIcon class="h-5 w-5 mr-1" />
            <span class="uppercase font-medium">{{ currentLocale }}</span>
          </button>
          
          <router-link 
            to="/contact" 
            class="cta-button"
          >
            {{ $t('hero.cta') }}
          </router-link>
        </nav>

        <button 
          @click="toggleMenu" 
          class="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <Bars3Icon v-if="!props.isMenuOpen" class="h-6 w-6" />
          <XMarkIcon v-else class="h-6 w-6" />
        </button>
      </div>
    </div>

    <div 
      v-if="props.isMenuOpen" 
      class="md:hidden bg-white"
    >
      <div class="container mx-auto px-4 pt-2 pb-4">
        <nav class="flex flex-col space-y-4">
          <router-link 
            v-for="item in [
              { name: $t('nav.home'), path: '/' },
              { name: $t('nav.services'), path: '/services' },
              { name: $t('nav.gallery'), path: '/gallery' },
              { name: $t('nav.about'), path: '/about' },
              { name: $t('nav.contact'), path: '/contact' }
            ]" 
            :key="item.name"
            :to="item.path"
            :class="[
              router.currentRoute.value.path === item.path 
                ? 'text-primary-600 font-medium' 
                : 'text-gray-700'
            ]"
            class="py-2 block"
          >
            {{ item.name }}
          </router-link>
          
          <button 
            @click="toggleLanguage"
            class="flex items-center text-gray-700 py-2"
          >
            <GlobeAltIcon class="h-5 w-5 mr-1" />
            <span class="uppercase font-medium">{{ currentLocale }}</span>
          </button>
          
          <router-link 
            to="/contact" 
            class="cta-button w-full text-center mt-2"
          >
            {{ $t('hero.cta') }}
          </router-link>
        </nav>
      </div>
    </div>
  </header>
  
  <div class="h-16 md:h-20"></div>
</template>