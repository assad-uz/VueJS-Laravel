<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="app-header">
    <div class="header-content">
      <span class="app-title">Vue App</span> 

      <nav class="main-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact Us</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class="page-content" /> 
</template>

<style scoped>
/* সব ডিফল্ট স্টাইল এবং media query মুছে ফেলার পর, শুধু এই স্টাইলগুলো রাখুন */
header {
  line-height: 1.5;
}

/* নেভিগেশন লিঙ্কগুলোকে পাশাপাশি আনার জন্য (যা App.vue এর default style এ আছে) */
nav a {
  display: inline-block;
  padding: 0 1rem;
}

/* 1024px এর বেশি হলেও যেন পাশাপাশি না আসে, তার জন্য কোনো flex কোড রাখবেন না। */
</style>
