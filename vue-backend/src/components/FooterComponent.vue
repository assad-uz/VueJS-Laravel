<template>
  <footer class="main-footer">
    <p>&copy; 2025 My View App | All Rights Reserved</p>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
.main-footer {
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}
p {
  margin: 0;
}
</style>