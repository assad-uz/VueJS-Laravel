
import { createRouter, createWebHistory } from 'vue-router'
// import MainLayout from '@/components/MainLayout.vue'
import HomeView from '@/views/Home.vue' 
import Services from '@/views/Services.vue'

// const routes = [
//   {
//     // path: '/',
//     // component: MainLayout,
//     // children: [
//     //   {
//     //     path: '', // Home Page এর জন্য রুট পাথ
//     //     name: 'Home',
//     //     component: HomeView
//     //   },
//       // {
//       //   path: 'products', 
//       //   name: 'Products',
//       //   component: () => import('@/views/Products.vue')
//       // },
//       // {
//       //   path: 'services', // এটি হবে /services
//       //   name: 'Services',
//       //   component: () => import('@/views/Services.vue')
//       // },
//       // {
//       //   path: 'about', // এটি হবে /about
//       //   name: 'About',
//       //   component: () => import('@/views/About.vue')
//       // },
//       // {
//       //   path: 'contact', // এটি হবে /contact
//       //   name: 'Contact',
//       //   component: () => import('@/views/Contact.vue')
//       // }import { ProductsView } from '@/views/ProductsView.vue';


//   }
//     ]
//   }
// ]


const routes = [
  {
    path: '',
    name: 'HomeView', 
    component: HomeView
  },

   {
    path: '/services',
    name: 'services', 
    component: Services
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router