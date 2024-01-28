<template>
  <section class="section all-products">
    <div class="top container">
      <h1>All Products</h1>
      <form action="">
        <select v-model="selectedSortingOption">
          <option value="1">Default Sorting</option>
          <option value="2">Sort By Price</option>
          <option value="3">Sort By Popularity</option>
          <option value="4">Sort By Sale</option>
          <option value="5">Sort By Rating</option>
        </select>
        <span><i class="bx bx-chevron-down"></i></span>
      </form>
    </div>
    <!-- products, sortedProducts -->
    <div class="product-center container">
      <Goods v-for="product in paginatedProducts" :key="product.id" :id="product.id" :category="product.category" :title="product.title" :price="product.price" :image="product.image" :discount="product.discount" :link="product.link" />
    </div>
  </section>
  <section class="pagination">
    <div class="container">
      <span v-for="page in totalPages" :key="page" @click="goToPage(page)">{{ page }}</span>
    </div>
  </section>
</template>
<script>
import Goods from '../components/Goods.vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    Goods
  },
  data() {
    return {
      selectedSortingOption: '1', // Default Sorting

      currentPage: 1,
      itemsPerPage: 8
    }
  },
  computed: {
    ...mapGetters(['products']),
    sortedProducts() {
      let sortedArray = [...this.products]; // Create a shallow copy of the array
      switch (this.selectedSortingOption) {
        case '1': // Default Sorting
          return sortedArray;
        case '2':
          return sortedArray.sort((a, b) => a.price - b.price);
        case '3':
          return sortedArray.sort((a, b) => b.popularity - a.popularity);
        case '4':
          return sortedArray.sort((a, b) => b.sale - a.sale);
        case '5':
          return sortedArray.sort((a, b) => b.rating - a.rating);
        default:
          return sortedArray;
      }
    },
    paginatedProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.sortedProducts.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.sortedProducts.length / this.itemsPerPage);
    }
  },
  methods: {
    goToPage(page) {
      this.currentPage = page;
    }
  },
  // async product() {
    //   try {
    //     const response = await fetch('https://example.com/products/');
    //     const data = await response.json();
    //     console.log(data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
}
</script>

<style scoped>
.section .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
}
.all-products select {
  font-family: 'Poppins', sans-serif;
  width: 20rem;
  padding: 1rem;
  border: 1px solid #ccc;
  appearance: none;
  outline: none;
}
.all-products form {
  position: relative;
  z-index: 1;
}
.all-products form span {
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  font-size: 2rem;
  z-index: 0;
}
@media (max-width: 768px) {
  .all-products select {
    width: 10rem;
  }
}

.pagination {
  display: flex;
  align-items: center;
  padding: 3rem 0 5rem 0;
}
.pagination span {
  display: inline-block;
  padding: 1rem 1.5rem;
  border: 1px solid var(--green);
  font-size: 1.8rem;
  margin-bottom: 2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.pagination span:hover {
  border: 1px solid var(--green);
  background-color: var(--green);
  color: #fff;
}
</style>