<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const { locale } = useI18n()
const router = useRouter()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}


watch(() => router.currentRoute.value, closeMenu)


const toggleLanguage = () => {
  locale.value = locale.value === 'et' ? 'en' : 'et'
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar 
      :isMenuOpen="isMenuOpen" 
      @toggle-menu="toggleMenu" 
      @close-menu="closeMenu"
      @toggle-language="toggleLanguage"
      :currentLocale="locale"
    />
    
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <Footer />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>