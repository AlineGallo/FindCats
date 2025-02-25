import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/HomePage.vue'
import Listagem from '@/pages/Listagem.vue'
import Detalhes from '@/pages/Detalhes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/listagem',
      name: 'listagem',
      component: Listagem,
    },
    {
      path: '/detalhes',
      name: 'detalhes',
      component: Detalhes,
    }
  ],
})

export default router
