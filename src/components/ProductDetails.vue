<template>
  <section class="section product-detail">
    <div class="details container">
      <div class="left image-container">
        <div class="main">
          <img :src="image" id="zoom" alt="">
        </div>
      </div>
      <div class="right">
        <span>Home/T-shirt</span>
        <h1>Boy's T-shirt By Handsome</h1>
        <div class="price">{{ price }}$</div>
        <form action="">
          <select>
            <option value="Select Size" selected disabled>Select Size</option>
            <option value="1">32</option>
            <option value="2">42</option>
            <option value="3">52</option>
            <option value="4">62</option>
          </select>
          <span><i class="bx bx-chevro-down"></i></span>
        </form>
        <form action="" class="form">
          <input type="text" placeholder="1">
          <!-- Предотвращаем обновление страницы при нажатии кнопки в form -->
          <button class="addCart" @click.prevent="incrementClickCart">Add To Cart</button>
        </form>
        <h3>Product Details</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint dignissimos provident eius quasi recusandae quas commodi aliquid sit nulla, explicabo placeat expedita praesentium ut magni laboriosam vero sapiente iusto!</p>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  props: ['category', 'discount', 'title', 'price', 'image', 'link'],

  methods: {
      ...mapActions(['incrementClickCart']),
  },
}
</script>

<style scoped>
.product-detail .details {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 7rem;
}
.product-detail .left {
  display: flex;
  flex-direction: column;
}
.product-detail .left .main {
  text-align: center;
  background-color: #f6f2f1;
  margin-bottom: 2rem;
  height: 45rem;
}
.product-detail .left .main img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.product-detail .right span {
  display: inline-block;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.product-detail .right h1 {
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 2rem;
}
.product-detail .right .price {
  font-weight: 600;
  font-size: 2rem;
  color: var(--green);
  margin-bottom: 2rem;
}
.product-detail .right div {
  display: inline-block;
  position: relative;
  z-index: -1;
}
.product-detail .right select {
  font-family: 'Poppins', sans-serif;
  width: 20rem;
  padding: 0.7rem;
  border: 1px solid #ccc;
  appearance: none;
  outline: none;
}
.product-detail form {
  position: relative;
  margin-bottom: 2rem;
  z-index: 0;
}
.product-detail form span {
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  font-size: 2rem;
  z-index: 0;
}
.product-detail .form {
  margin-bottom: 3rem;
}
.product-detail .form input {
  padding: 0.8rem;
  text-align: center;
  width: 3.5rem;
  margin-right: 2rem;
}
.product-detail .form .addCart {
  background-color: var(--green);
  padding: 0.8rem 4rem;
  color: #fff;
  border-radius: 3rem;
}
.product-detail h3 {
  text-transform: uppercase;
  margin-bottom: 2rem;
}
@media (max-width: 996px) {
  .product-detail .left {
    width: 30rem;
    height: 45rem;
  }
  .product-detail .details {
    gap: 3rem;
  }
}
@media (max-width: 650px) {
  .product-detail .left {
    width: 100%;
    height: 45rem;
  }
  .product-detail .rigth {
    margin-top: 1rem;
  }
  .product-detail .details {
    grid-template-columns: 1fr;
  }
}
</style>