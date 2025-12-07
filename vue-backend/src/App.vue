<template>
  <div id="app">
    <HeaderComponent />
    <NavbarComponent />
    
    <main class="content">
      <router-view></router-view>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 70px;
}
.content {
  padding: 20px;
  min-height: calc(100vh - 120px);
}
</style>