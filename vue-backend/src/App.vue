<template>
  <div id="app">
    <HeaderComponent />
    <NavbarComponent />
    
    <main class="d-flex flex-column pt-3 pb-5 mb-5">
      <div class="container mt-4">
        <router-view></router-view>
      </div>
    </main>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  }
};
</script>

<style>
body {
    padding-bottom: 70px; /* ফুটারের উচ্চতা অনুযায়ী মার্জিন */
}
</style>