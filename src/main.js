import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Services from './views/Services.vue'
import Gallery from './views/Gallery.vue'
import Contact from './views/Contact.vue'
import About from './views/About.vue'
import messages from './i18n'


AOS.init({
  duration: 800,
  easing: 'ease-out',
  once: true
})


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/services', component: Services },
    { path: '/gallery', component: Gallery },
    { path: '/contact', component: Contact },
    { path: '/about', component: About }
  ]
})


const i18n = createI18n({
  locale: 'en', 
  fallbackLocale: 'en',
  messages,
  legacy: false
})


createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')