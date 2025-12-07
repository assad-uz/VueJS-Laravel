<template>
  <div class="container my-4">
    <h1 class="mb-4 text-warning">Contact Us</h1>
    <div class="row">
      <div class="col-md-6">
        <h3 class="h5">Contact Us</h3>
        <ul class="list-unstyled">
          <li><strong>Address:</strong> Dhaka, Bangladesh</li>
          <li><strong>Email:</strong> info@myapp.com</li>
          <li><strong>Phone:</strong> +880 XXXX XXX XXX</li>
        </ul>
      </div>
      
      <div class="col-md-6">
        <h3 class="h5">Email Us</h3>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Your Name</label>
            <input type="text" class="form-control" id="name">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email Address</label>
            <input type="email" class="form-control" id="email">
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-warning">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
};
</script>