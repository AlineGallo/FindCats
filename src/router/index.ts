import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/HomePage.vue'
import Listagem from '@/pages/Listagem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/listagem',
      name: 'listagem',
      component: Listagem,
    }
  ],
})

export default router
