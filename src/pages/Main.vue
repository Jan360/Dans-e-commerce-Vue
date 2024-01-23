<template>
  <main>
    <div>
      <Glide />
    </div>
    <!-- Categories Section -->
    <section class="section category">
      <div class="cat-center">
        <div class="cat">
          <img src="../assets/images/cat2.jpg" alt="" />
          <div>
            <p>ACCESSORIES</p>
          </div>
        </div>
        <div class="cat">
          <img src="../assets/images/cat1.jpg" alt="" />
          <div>
            <p>MEN'S WEAR</p>
          </div>
        </div>
        <div class="cat">
          <img src="../assets/images/cat3.jpg" alt="" />
          <div>
            <p>WOMEN'S WEAR</p>
          </div>
        </div>
      </div>
    </section>
    <!-- New Arrivals -->
    <section class="section new-arrival">
      <div class="title">
        <h1>NEW ARRIVALS</h1>
        <p>All the latest picked from designer of our store</p>
      </div>
      <!-- <div class="product-center">
        <div class="product-item">
          <div class="overlay">
            <router-link to="/productDetails" class="product-thumb">
              <img src="../assets/images/products/product-1.jpg" alt="" />
            </router-link>
          </div>
          <div class="product-info">
            <span>MEN'S CLOTHES</span>
            <router-link to="/product-1">Quis Nostrud Exercitation</router-link>
            <h4>$30</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart" @click="incrementClickHeart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart" @click="incrementClickCart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <router-link to="" class="product-thumb">
              <img src="../assets/images/products/product-2.jpg" alt="" />
            </router-link>
          </div>
          <div class="product-info">
            <span>MEN'S CLOTHES</span>
            <router-link to="">Concepts Solid Pink Men’s Polo</router-link>
            <h4>$50</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart" @click="incrementClickCart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <router-link to="" class="product-thumb">
              <img src="../assets/images/products/product-3.jpg" alt="" />
            </router-link>
            <span class="discount">20%</span>
          </div>

          <div class="product-info">
            <span>MEN'S CLOTHES</span>
            <router-link to="">Sonata White Men’s Shirt</router-link>
            <h4>$40</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart" @click="incrementClickCart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <router-link to="" class="product-thumb">
              <img src="../assets/images/products/product-4.jpg" alt="" />
            </router-link>
            <span class="discount">20%</span>
          </div>
          <div class="product-info">
            <span>MEN'S CLOTHES</span>
            <router-link to="">Edor do eiusmod tempor</router-link>
            <h4>$40</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart" @click="incrementClickCart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <router-link to="" class="product-thumb">
              <img src="../assets/images/products/product-5.jpg" alt="" />
            </router-link>
          </div>
          <div class="product-info">
            <span>MEN'S CLOTHES</span>
            <router-link to="">Edor do eiusmod tempor</router-link>
            <h4>$60</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart" @click="incrementClickCart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <router-link to="" class="product-thumb">
              <img src="../assets/images/products/product-6.jpg" alt="" />
            </router-link>
          </div>
          <div class="product-info">
            <span>MEN'S CLOTHES</span>
            <router-link to="">Edor do eiusmod tempor</router-link>
            <h4>$30</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart" @click="incrementClickCart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <router-link to="" class="product-thumb">
              <img src="../assets/images/products/product-7.jpg" alt="" />
            </router-link>
            <span class="discount">20%</span>
          </div>
          <div class="product-info">
            <span>MEN'S CLOTHES</span>
            <router-link to="">Edor do eiusmod tempor</router-link>
            <h4>$25</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart" @click="incrementClickCart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <router-link to="" class="product-thumb">
              <img src="../assets/images/products/product-2.jpg" alt="" />
            </router-link>
          </div>
          <div class="product-info">
            <span>MEN'S CLOTHES</span>
            <router-link to="">Edor do eiusmod tempor</router-link>
            <h4>$50</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart" @click="incrementClickCart"></i></li>
          </ul>
        </div> 
      </div> -->

      <!-- <div class="product-center">
        <goods category="MEN'S CLOTHES" title="Quis Nostrud Exercitation" price="$30" :image="require('../assets/images/products/product-1.jpg')" link="/product-1"></goods>
        <goods category="MEN'S CLOTHES" title="Quis Nostrud Exercitation" price="$50" :image="require('../assets/images/products/product-2.jpg')" link="/product-2"></goods>
        <goods category="MEN'S CLOTHES" title="Quis Nostrud Exercitation" price="$40" :image="require('../assets/images/products/product-3.jpg')" link="/product-3"></goods>
        <goods category="MEN'S CLOTHES" title="Quis Nostrud Exercitation" price="$40" :image="require('../assets/images/products/product-4.jpg')" link="/product-4"></goods>
        <goods category="MEN'S CLOTHES" title="Quis Nostrud Exercitation" price="$60" :image="require('../assets/images/products/product-5.jpg')" link="/product-5"></goods>
        <goods category="MEN'S CLOTHES" title="Quis Nostrud Exercitation" price="$30" :image="require('../assets/images/products/product-6.jpg')" link="/product-6"></goods>
        <goods category="MEN'S CLOTHES" title="Quis Nostrud Exercitation" price="$25" :image="require('../assets/images/products/product-7.jpg')" link="/product-7"></goods>
        <goods category="MEN'S CLOTHES" title="Quis Nostrud Exercitation" price="$50" :image="require('../assets/images/products/product-2.jpg')" link="/product-2"></goods>
      </div> -->

      <div class="product-center">
        <Goods v-for="product in products.slice(0, 8)" :key="product.id" :category="product.category" :title="product.title" :price="product.price" :image="product.image" :discount="product.discount" :link="product.link" />
      </div>
    </section>

    <!-- Promo -->
    <section class="section banner">
      <div class="left">
        <span class="trend">Trend Design</span>
        <h1>New Collection 2021</h1>
        <p>New Arrival <span class="color">Sale 50% OFF</span> Limited Time Offer</p>
        <router-link to="/" class="btn btn-1">Discover Now</router-link>
      </div>
      <div class="right">
        <img src="../assets/images/banner.png" alt="">
      </div>
    </section>

    <!-- Featured -->
    <section class="section new-arrival">
      <div class="title">
        <h1>Featured</h1>
        <p>All the latest picked from designer of our store</p>
      </div>

      <!-- <div class="product-center">
        <div class="product-item">
          <div class="overlay">
            <router-link to="" class="product-thumb">
              <img src="../assets/images/products/product-1.jpg" alt="" />
            </router-link>
            <span class="discount">50%</span>
          </div>
          <div class="product-info">
            <span>MEN'S CLOTHES</span>
            <router-link to="">Quis Nostrud Exercitation</router-link>
            <h4>$30</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart" @click="incrementClickCart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <router-link to="" class="product-thumb">
              <img src="../assets/images/products/product-2.jpg" alt="" />
            </router-link>
          </div>

          <div class="product-info">
            <span>MEN'S CLOTHES</span>
            <router-link to="">Sonata White Men’s Shirt</router-link>
            <h4>$40</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart" @click="incrementClickCart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <router-link to="" class="product-thumb">
              <img src="../assets/images/products/product-3.jpg" alt="" />
            </router-link>
            <span class="discount">40%</span>
          </div>
          <div class="product-info">
            <span>MEN'S CLOTHES</span>
            <router-link to="">Concepts Solid Pink Men’s Polo</router-link>
            <h4>$30</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart" @click="incrementClickCart"></i></li>
          </ul>
        </div>
        <div class="product-item">
          <div class="overlay">
            <router-link to="" class="product-thumb">
              <img src="../assets/images/products/product-4.jpg" alt="" />
            </router-link>
          </div>
          <div class="product-info">
            <span>MEN'S CLOTHES</span>
            <router-link to="">Edor do eiusmod tempor</router-link>
            <h4>$30</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart" @click="incrementClickCart"></i></li>
          </ul>
        </div>
      </div> -->

      <!-- <div class="product-center">
        <div class="product-item">
        <goods category="MEN'S CLOTHES" title="Quis Nostrud Exercitation" price="$30" :image="require('../assets/images/products/product-1.jpg')" link="/product-1"></goods>
        <goods category="MEN'S CLOTHES" title="Quis Nostrud Exercitation" price="$50" :image="require('../assets/images/products/product-2.jpg')" link="/product-2"></goods>
        <goods category="MEN'S CLOTHES" title="Quis Nostrud Exercitation" price="$40" :image="require('../assets/images/products/product-3.jpg')" link="/product-3"></goods>
        <goods category="MEN'S CLOTHES" title="Quis Nostrud Exercitation" price="$40" :image="require('../assets/images/products/product-4.jpg')" link="/product-4"></goods>
      </div> -->

      <div class="product-center">
        <Goods v-for="product in products.slice(0, 4)" :key="product.id" :category="product.category" :title="product.title" :price="product.price" :image="product.image" :discount="product.discount" :link="product.link" />
      </div>
    </section>

    <!-- Contact -->
    <section class="section contact">
      <div class="row">
        <div class="col">
          <h2>EXCELLENT SUPPORT</h2>
          <p>We love our customers and they can reach us any time
          of day we will be at your service 24/7</p>
          <router-link to="" class="btn btn-1">Contact</router-link>
        </div>
        <div class="col">
          <form action="">
            <div>
              <input type="email" placeholder="Email Address">
            <router-link to="">Send</router-link>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
  <!-- <Popup /> -->
</template>

<script>
import Glide from '../components/Glide.vue'
import Popup from '../components/Popup.vue'
import Goods from '../components/Goods.vue'
import { mapGetters } from 'vuex'; // Товары

export default {
  name: 'Main',
  components: {
    Glide, Popup, Goods
  },
  // data() {
  //   return {
  //     products: [
  //       {
  //         id: 1,
  //         category: "MEN'S CLOTHES",
  //         title: "Quis Nostrud Exercitation",
  //         price: "$30",
  //         image: require("../assets/images/products/product-1.jpg"),
  //         discount: "",
  //         link: "/product-1",
  //       },
  //       {
  //         id: 2,
  //         category: "MEN'S CLOTHES",
  //         title: "Quis Nostrud Exercitation",
  //         price: "$50",
  //         image: require("../assets/images/products/product-2.jpg"),
  //         discount: "",
  //         link: "/product-2",
  //       },
  //       {
  //         id: 3,
  //         category: "MEN'S CLOTHES",
  //         title: "Quis Nostrud Exercitation",
  //         price: "$40",
  //         image: require("../assets/images/products/product-3.jpg"),
  //         discount: "20%",
  //         link: "/product-3",
  //       },
  //       {
  //         id: 4,
  //         category: "MEN'S CLOTHES",
  //         title: "Quis Nostrud Exercitation",
  //         price: "$40",
  //         image: require("../assets/images/products/product-4.jpg"),
  //         discount: "20%",
  //         link: "/product-4",
  //       },
  //       {
  //         id: 5,
  //         category: "MEN'S CLOTHES",
  //         title: "Quis Nostrud Exercitation",
  //         price: "$60",
  //         image: require("../assets/images/products/product-5.jpg"),
  //         discount: "50%",
  //         link: "/product-5",
  //       },
  //       {
  //         id: 6,
  //         category: "MEN'S CLOTHES",
  //         title: "Quis Nostrud Exercitation",
  //         price: "$30",
  //         image: require("../assets/images/products/product-6.jpg"),
  //         discount: "50%",
  //         link: "/product-6",
  //       },
  //       {
  //         id: 7,
  //         category: "MEN'S CLOTHES",
  //         title: "Quis Nostrud Exercitation",
  //         price: "$25",
  //         image: require("../assets/images/products/product-7.jpg"),
  //         discount: "20%",
  //         link: "/product-7",
  //       }
  //     ],
  //   };
  // },
  // Товары
  computed: {
    ...mapGetters(['products'])
  },
}
</script>

<style scoped>
/* Category */
.section {
  padding: 10rem 0 5rem 0;
  overflow: hidden;
}
.cat-center {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 114rem;
  margin: auto;
  gap: 5px;
  padding: 0 3rem;
}
.cat-center .cat {
  max-width: 35rem;
  height: 25rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  text-align: center;
}
.cat-center .cat img {
  width: 36.5rem;
  height: 100%;
  margin: auto;
  object-fit: cover;
  transition: all 2s ease;
}
.cat-center .cat:hover img {
  transform: scale(1.1)
}
.cat-center .cat div {
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translate(-50%);
  background-color: var(--white);
  width: 18rem;
  height: 5rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
}
@media (max-width: 1200px) {
  .cat-center .cat img {
    width: 100%;
  }
}
@media (max-width: 967px) {
  .cat-center .cat {
    width: 25rem;
    height: 20rem;
  }
  .cat-center .cat img {
    width: 25rem;
  }
}
@media (max-width: 768px) {
  .section {
    padding: 5rem 0;
  }
  .cat-center {
    flex-direction: column;
    padding: 3rem;
  }
  .cat-center .cat {
    width: 100%;
    height: 30rem;
  }
  .cat-center .cat img {
    width: 100%;
  }
}
/* Arrivals */
.title {
  text-align: center;
  margin-bottom: 5rem;
}
.title h1 {
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-weight: 500;
}

/* Banner */
.banner {
  position: relative;
  background-color: var(--grey2);
  padding: 14rem;
}
.banner .right img {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 75rem;
}
.banner .trend,
.banner p {
  display: block;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.banner h1 {
  font-size: 5.4rem;
  color: var(--black);
  margin-bottom: 1.5rem;
}
.banner .btn {
  display: inline-block;
  margin-top: 2rem;
}
@media (max-width: 1200px) {
  .banner {
    padding: 14rem 2rem;
  }
  .banner .right img {
    right: -6%;
    width: 70%;
  }
}
@media (max-width: 996px) {
  .banner {
    padding: 8rem 2rem;
  }

  .banner .trend,
  .banner p {
    font-size: 1.5rem;
  }
  .banner h1 {
    font-size: 4rem;
  }
  .banner .right img {
    right: -6%;
    width: 50rem;
  }
}
@media (max-width: 768px) {
  .banner {
    display: grid;
    grid-template-columns: 1fr;
    height: 80vh;
  }
  .banner .left {
    width: 100%;
    margin-bottom: 3rem;
  }
  .banner .right {
    flex: 0 0 50%;
  }
  .banner .right img {
    right: 0;
    width: 50rem;
    left: 50%;
    transform: translateX(-50%);
  }
}
@media (max-width: 567px) {
  .banner {
    padding: 8rem 5rem;
  }
  .banner .trend,
  .banner p {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  .banner h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .banner .btn {
    font-size: 1.4rem;
    margin: 0;
  }
  .banner .right img {
    width: 45rem;
  }
}

/* Contact */
.contact {
  background:var(--black);
  color: white;
  padding: 10rem 20rem;
}
.contact .row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
.contact .row .col h2 {
  margin-bottom: 1.5rem;
}
.contact .row .col p {
  width: 70%;
  font-size: 1.3rem;
  margin-bottom: 2rem;
}
.btn-1 {
  background-color: var(--green);
  color: white;
  display: inline-block;
  border-radius: 1rem;
  padding: 1rem 2rem;
}
.contact form div {
  position: relative;
  width: 80%;
  margin: 0 auto;
}
.contact form input {
  font-family: 'Poppins', sans-serif;
  text-indent: 2rem;
  width: 100%;
  border-radius: 1rem;
  padding: 1.5rem 0;
  outline: none;
  border: none;
}
.contact form a {
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--green);
  color: white;
  margin: 0.5rem;
  padding: 1rem 3rem;
  border-radius: 1rem;
}
@media (max-width: 996px) {
  .contact {
    padding: 8rem;
  }
}
@media (max-width: 768px) {
  .contact .row {
    grid-template-columns: 1fr;
    gap: 5rem 0
  }
  .contact form div {
    width: 100%;
  }
}
@media (max-width: 567px) {
  .contact {
    padding: 8rem 1rem;
  }
}
</style>