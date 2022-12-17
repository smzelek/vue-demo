import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Pilots from './pages/Pilots.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: Pilots
    }
  ]
})

export default router
