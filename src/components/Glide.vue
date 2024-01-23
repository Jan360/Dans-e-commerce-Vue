<template>
  <div class="hero">
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <div class="glide__slides">
          <div class="glide__slide">
            <div class="center">
              <div class="left">
                <span>New Inspiration 2020</span>
                <h1>NEW COLLECTION!</h1>
                <p>Trending from men's and women's style collection</p>
                <router-link to="/products" class="hero-btn">SHOP NOW</router-link>
              </div>
              <div class="right">
                <img class="img1" src='@/assets/images/hero-1.png'>
              </div>
            </div>
          </div>
          <div class="glide__slide">
              <div class="center">
                <div class="left">
                  <span>New Inspiration 2020</span>
                  <h1>THE PERFECT MATCH!</h1>
                  <p>Trending from men's and women's  style collection</p>
                  <router-link to="/products" class="hero-btn">SHOP NOW</router-link>
                </div>
                <div class="right">
                  <img class="img2" src="../assets/images/hero-2.png" alt="">
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Glide from '@glidejs/glide/dist/glide.esm'
import '@glidejs/glide/dist/css/glide.core.min.css'
import { GlideSlide } from 'vue-glide-js'
 
 export default {
   components: {
     Glide,
     GlideSlide
   },
   data() {
    return {
      glideOptions: {
        type: 'carousel',
        startAt: 0,
        autoplay: 3000,
        gap: 0,
        hoverpause: true,
        perView: 1,
        animationDuration: 800,
        animationTimingFunc: 'linear'
      }
    };
  },
  mounted() {
    new Glide('.glide', this.glideOptions).mount()
  },
 }
</script>

<style scoped>
.hero, .hero .glide__slides {
  background-color: var(--grey2);
  position: relative;
  height: calc(100vh - 6rem);
  margin: 0 4rem;
  overflow: hidden;
}
.hero .center {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  padding-top: 3rem;
}
.hero .left{
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 1000ms ease-in-out;
}
.hero .left h1 {
  font-size: 5rem;
  margin: 1rem 0;
}
.hero .left p {
  font-size: 1.6rem;
  margin: 0 0 1rem;
}
.hero .left .hero-btn {
  display: inline-block;
  padding: 1rem 3rem;
  font-size: 1.6rem;
  margin-top: 1rem;
  background-color: var(--green);
  color: white;
}
.hero .right {
  flex: 0 0 50%;
  height: 100%;
  position: relative;
  text-align: center;
}
.hero .right img {
  position: absolute;
  width: 55rem;
  opacity: 0;
  transition: all 1s ease-in-out;
}
.hero .right img.img1 {
  width: 85%;
  right: -25%;
  bottom: -50%;
}
.hero .right img.img2 {
  width: 90%;
  right: -40%;
  bottom: -40%;
}
.glide__slide--active .center .right img {
  bottom: -3%;
  opacity: 1;
}
.glide__slide--active .left {
  opacity: 1;
  top: 35%;
}
@media (max-width: 999px) {
  .glide__slide--active .left {
    top: 15%;
  }
  .hero .right img.img1 {
    width: 90%;
  }
  .hero .right img.img2 {
    width: 100%;
  }
}
@media (max-width: 567px) {
  .center .right img.img1 {
    width: 30rem;
  }
  .center .right img.img2 {
    width: 33rem;
  }
  .hero, .hero .glise__slides {
    margin: 0;
    padding: 0 3rem;
  }
  .hero .left h1 {
    font-size: 3rem;
  }
  .hero .left span {
    font-size: 1.4rem;
  }
  .hero .left p {
    font-size: 1.5rem;
    width: 80%;
  }
}
</style>