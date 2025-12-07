<template>
  <header class="main-header">
    <h1>My Vue App</h1>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style scoped>
.main-header {
  background-color: #42b883; 
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
h1 {
  margin: 0;
  font-size: 1.8rem;
}
</style>