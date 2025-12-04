<script setup>
import { ref } from 'vue'

const products = ref([
  { 
    id: 101, 
    name: 'SAMSUNG Galaxy S26 Ultra', 
    price: 35000, 
    inStock: true 
  },
  { 
    id: 102, 
    name: 'SONY Protable Blutooth Speaker', 
    price: 4500, 
    inStock: false 
  },
  { 
    id: 103, 
    name: 'BOSE Wireless TWS', 
    price: 2200, 
    inStock: true 
  }
])
</script>

<template>
  <div class="products-page-container">
    <h1 class="page-header">Our Products</h1>
    
    <div class="product-list">
      
      <div v-for="product in products" :key="product.id" class="product-card">
        <h3 class="product-name">{{ product.name }}</h3>
        
        <p class="product-price">৳ {{ product.price }}</p>
        
        <p :class="['stock-status', { 'in-stock': product.inStock, 'out-of-stock': !product.inStock }]">
          {{ product.inStock ? 'In Stock' : 'Out of Stock'}}
        </p>
        
        <button class="buy-btn" :disabled="!product.inStock">
          {{ product.inStock ?'Buy Now' : 'Sold Out'}}
        </button>
      </div>
      
    </div>
    
  </div>
</template>

<style scoped>
/* প্রধান কনটেইনারের স্টাইল */
.products-page-container {
    padding: 30px;
    background-color: #f8f8f8;
    min-height: 80vh;
}

.page-header {
    text-align: center;
    color: #34495e;
    margin-bottom: 30px;
}

/* প্রোডাক্ট লিস্টের গ্রিড লেআউট */
.product-list {
    display: grid;
    /* ছোট স্ক্রিনের জন্য ১ কলাম, বড় স্ক্রিনের জন্য ৩ কলাম */
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0;
}

/* প্রোডাক্ট কার্ডের স্টাইল */
.product-card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease;
}

.product-card:hover {
    transform: translateY(-3px);
}

.product-name {
    font-size: 1.2em;
    color: #2c3e50;
    min-height: 50px;
}

.product-price {
    font-size: 1.6em;
    color: #27ae60;
    font-weight: bold;
    margin: 10px 0;
}

/* স্টক স্ট্যাটাস স্টাইল */
.stock-status {
    font-weight: 600;
    margin-bottom: 15px;
}

.in-stock {
    color: #2ecc71;
}

.out-of-stock {
    color: #e74c3c;
}

/* বাটন স্টাইল */
.buy-btn {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 25px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;
}

.buy-btn:hover:not(:disabled) {
    background-color: #2980b9;
}

.buy-btn:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
}
</style>