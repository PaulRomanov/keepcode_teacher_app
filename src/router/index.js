import { createRouter, createWebHistory } from 'vue-router'
import StudentsListView from '../views/students/StudentsListView.vue' 
import DocumentsView from '../views/students/DocumentsView.vue' 
import PlaceholderView from '../views/PlaceholderView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/PlaceholderView.vue'),
      meta: { breadcrumb: 'Главная' }
    },
    {
      path: '/students',
      name: 'students',
      component: () => import('../views/students/StudentsListView.vue'),
      meta: { breadcrumb: 'Ученики' },
      children: [
        {
          path: '', 
          name: 'students-documents',
          component: () => import('../views/students/DocumentsView.vue'),
          meta: { breadcrumb: 'Документы' }
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: 'placeholder',
      component: () => import('../views/PlaceholderView.vue'),
      meta: { breadcrumb: 'Заглушка' }
    }
  ]
})

export default router