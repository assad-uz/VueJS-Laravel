<template>
  <nav class="main-nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/products">Products</router-link></li>
      <li><router-link to="/services">Services</router-link></li>
      <li><router-link to="/about">About Us</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
};
</script>

<style scoped>
.main-nav {
  background-color: #35495e;
  padding: 0.5rem 2rem;
}
.main-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.main-nav li {
  margin: 0 15px;
}
.main-nav a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: block;
  transition: background-color 0.3s;
}
.main-nav a:hover,
.main-nav a.router-link-active {
  background-color: #42b883;
  border-radius: 4px;
}
</style>