<template>
  <div class="container my-4">
    <h1 class="mb-4 text-info">Our Services</h1>
    <p class="lead">The professional services we offer are:</p>
    
    <ul class="list-group shadow-sm">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Website Development
        <span class="badge bg-info rounded-pill">New</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Graphic Design
        <span class="badge bg-secondary rounded-pill">Popular</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Digital Marketing
        <span class="badge bg-dark rounded-pill">Recommended</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Mobile App Development
        <span class="badge bg-success rounded-pill">Expert</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ServicesView',
};
</script>