import { createRouter, createWebHistory } from 'vue-router'
import StudentsView from '../views/StudentsView.vue' 
import PlaceholderView from '../views/PlaceholderView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/PlaceholderView.vue')
    },
    {
      path: '/students',
      name: 'students',
      component: () => import('../views/StudentsView.vue') 
    },
    {
      path: '/:catchAll(.*)',
      name: 'placeholder',
      component: () => import('../views/PlaceholderView.vue')
    }
  ]
})

export default router