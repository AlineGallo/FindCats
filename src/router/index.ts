import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/HomePage.vue'
import Listagem from '@/pages/Listing.vue'
import Detalhes from '@/pages/Details.vue'

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
    },
    {
      path: '/detalhes',
      name: 'detalhes',
      component: Detalhes,
      props: true
    }
  ],
})

export default router
