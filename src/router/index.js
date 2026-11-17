import { createRouter, createWebHistory } from 'vue-router'

import ProductosView from '@/views/ProductosView.vue'
import VentasView from '@/views/VentasView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/productos',
    },
    {
      path: '/productos',
      name: 'productos',
      component: ProductosView,
    },
    {
      path: '/ventas',
      name: 'ventas',
      component: VentasView,
    },
  ],
})

export default router
