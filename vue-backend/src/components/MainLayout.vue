<template>
  <div class="main-layout">
    <HeaderComponent />
    <NavbarComponent />
    
    <main class="layout-content">
      <slot></slot> 
    </main>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import NavbarComponent from './NavbarComponent.vue';
import FooterComponent from './FooterComponent.vue';

export default {
  name: 'MainLayout',
  components: {
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  }
};
</script>

<style>
/* এখানে layout-এর নিজস্ব স্টাইল থাকতে পারে */
.layout-content {
    padding-bottom: 70px;
}
</style>