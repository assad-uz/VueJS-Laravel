
import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/components/MainLayout.vue'
import Home from '@/views/Home.vue' 

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '', // Home Page এর জন্য রুট পাথ
        name: 'Home',
        component: Home
      },
      {
        path: 'products', 
        name: 'Products',
        component: () => import('@/views/Products.vue')
      },
      {
        path: 'services',
        name: 'Services',
        component: () => import('@/views/Services.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/About.vue')
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router