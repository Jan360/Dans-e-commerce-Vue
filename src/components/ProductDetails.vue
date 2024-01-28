<template>
  <section class="section product-detail">
    <div class="details container">
      <div class="left image-container">
        <div class="main">
          <img :src="mainImage" id="zoom" alt="">
          <div class="main-group">
            <img :src="image" id="zoom" alt="" @click="changeMainImage(image)">
            <img src="../assets/images/products/product-2.jpg" id="zoom" alt="" @click="changeMainImage(require('../assets/images/products/product-2.jpg'))">
            <img src="../assets/images/products/product-3.jpg" id="zoom" alt="" @click="changeMainImage(require('../assets/images/products/product-3.jpg'))">
          </div>
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
          <button class="addCart" @click.prevent="incrementClickCart(), product()">Add To Cart</button>
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
  data() {
    return {
      mainImage: this.image,
    };
  },
  props: ['id', 'category', 'discount', 'title', 'price', 'image', 'link'],

  methods: {
      ...mapActions(['incrementClickCart']),
      product() {
      const items = JSON.parse(localStorage.getItem('items')) || []; // Получаем текущий массив объектов из localStorage или создаем новый пустой массив, если он не существует
      const newItem = { id: this.id, name: this.title, price: this.price, image: this.image, quantity: 1 };
      items.push(newItem);
      localStorage.setItem('items', JSON.stringify(items))
      console.log({id: this.id, name: this.title, price: this.price, image: this.image});
    },
    changeMainImage(newImage) {
      this.mainImage = newImage;
    },
  },
}
</script>

<style scoped>
.main-group{
  display: flex;
  justify-content: space-between;
}
.main-group img{
  display: flex;
  width: 30%;
}
.details {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 7rem;
}
.left {
  display: flex;
  flex-direction: column;
}
.left .main {
  text-align: center;
  background-color: #f6f2f1;
  margin-bottom: 2rem;
  max-width: 300px;
  height: 70%;
}
.main > img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.right span {
  display: inline-block;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.right h1 {
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 2rem;
}
.right .price {
  font-weight: 600;
  font-size: 2rem;
  color: var(--green);
  margin-bottom: 2rem;
}
.right div {
  display: inline-block;
  position: relative;
  z-index: -1;
}
.right select {
  font-family: 'Poppins', sans-serif;
  width: 20rem;
  padding: 0.7rem;
  border: 1px solid #ccc;
  appearance: none;
  outline: none;
}
form {
  position: relative;
  margin-bottom: 2rem;
  z-index: 0;
}
form span {
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  font-size: 2rem;
  z-index: 0;
}
.form {
  margin-bottom: 3rem;
}
.form input {
  padding: 0.8rem;
  text-align: center;
  width: 3.5rem;
  margin-right: 2rem;
}
.form .addCart {
  background-color: var(--green);
  padding: 0.8rem 4rem;
  color: #fff;
  border-radius: 3rem;
}
h3 {
  text-transform: uppercase;
  margin-bottom: 2rem;
}
@media (max-width: 996px) {
  .left {
    width: 30rem;
    height: 45rem;
  }
  .details {
    gap: 3rem;
  }
}
@media (max-width: 650px) {
  .left {
    width: 100%;
    height: 45rem;
  }
  .rigth {
    margin-top: 1rem;
  }
  .details {
    grid-template-columns: 1fr;
  }
}
</style>