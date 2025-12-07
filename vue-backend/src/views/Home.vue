<template>
  <div class="container my-5">
    <div class="p-5 mb-4 bg-light rounded-3 shadow-lg">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold text-success">Welcome to My Vue App!</h1>

        <p class="col-md-8 fs-4">
          This is your one-stop destination for high-quality solutions and services designed to meet your needs.
        </p>

        <router-link to="/products" class="btn btn-primary btn-lg mt-3" role="button">
          Explore Our Products
        </router-link>
      </div>
    </div>

    <div class="row g-4">
      <div class="col-md-4">
        <div class="h-100 p-4 bg-white border rounded-3 shadow-sm">
          <h2>Quick Navigation</h2>
          <p>Easily navigate through our main sections using the links above.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="h-100 p-4 bg-white border rounded-3 shadow-sm">
          <h2>Bootstrap Ready</h2>
          <p>This entire layout uses Bootstrap 5 for responsive design.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="h-100 p-4 bg-white border rounded-3 shadow-sm">
          <h2>Component-Based</h2>
          <p>Enjoy reusable components like Header, Navbar, and Footer.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>