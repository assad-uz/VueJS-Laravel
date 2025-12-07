// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/components/MainLayout.vue' // MainLayout ইম্পোর্ট করুন
import Home from '@/views/Home.vue' // আপনার পেজ কম্পোনেন্টগুলো

const routes = [
  {
    path: '/',
    component: MainLayout, // সব রুট MainLayout ব্যবহার করবে
    children: [
      {
        path: '', // '/' রুট হলে Home কম্পোনেন্ট লোড হবে
        name: 'Home',
        component: Home
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('@/views/Products.vue')
      },
      // অন্যান্য রুট...
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router