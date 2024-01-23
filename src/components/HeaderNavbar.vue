<template>
  <!-- Header -->
  <header class="header" id="header">
      <!-- Top Nav -->
      <div class="top-nav">
        <div class="container d-flex">
          <p>Order Online Or Call Us: (001) 2222-55555</p>
          <ul class="d-flex">
            <li><router-link to="">About Us</router-link></li>
            <li><router-link to="">FAQ</router-link></li>
            <li><router-link to="">Contact</router-link></li>
          </ul>
        </div>
      </div>
      <div class="navigation">
        <div class="nav-center container d-flex">
        <router-link to="/" class="logo"><h1>Dans</h1></router-link>
          <!-- Привязка класса open -->
          <ul class="nav-list d-flex" :class="{ open: isNavOpen }">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">Shop</router-link>
            </li>
            <li class="nav-item">
            <router-link to="" class="nav-link">Terms</router-link>
            </li>
            <li class="nav-item">
              <router-link to="" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="" class="nav-link">Contact</router-link>
            </li>
            <!-- Иконки в боковой панели мобильной версии -->
            <li class="icons d-flex">
            <router-link to="/login" class="icon">
              <i class="bx bx-user"></i>
            </router-link>
            <div class="icon">
              <i class="bx bx-search"></i>
            </div>
            <div class="icon">
              <i class="bx bx-heart"></i>
              <span class="d-flex">{{ counter.clickCountHeart }}</span>
            </div>
            <router-link to="/cart" class="icon">
              <i class="bx bx-cart"></i>
              <span class="d-flex">{{ counter.clickCountCart }}</span>
              <!-- <span class="d-flex">{{ $store.state.clickCount }}</span> -->
            </router-link>
            </li>
          </ul>

          <div class="icons d-flex">
            <router-link to="/login" class="icon">
              <i class="bx bx-user"></i>
            </router-link>
            <div class="icon">
              <i class="bx bx-search"></i>
            </div>
            <div class="icon">
              <i class="bx bx-heart"></i>
              <span class="d-flex">{{ counter.clickCountHeart }}</span>
            </div>
            <router-link to="/cart" class="icon">
              <i class="bx bx-cart"></i>
              <span class="d-flex">{{ counter.clickCountCart }}</span>
              <!-- <span class="d-flex">{{ $store.state.clickCount }}</span> -->
            </router-link>
          </div>
          <!-- Прослушиватель события по клику -->
          <div class="hamburger" @click="toggleNav">
            <i class="bx bx-menu-alt-left"></i>
          </div>
          
        </div>
      </div>
  </header>
</template>

<script>
import "boxicons"
import { mapState } from 'vuex';

export default {
  components: {
    
  },
  data() {
    return {
      // clickCount: 0,
      isNavOpen: false,
    };
  },
  computed: {
    ...mapState(['counter'])
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
};
</script>

<style scoped>
.header {
  position: relative;
}
.top-nav{
  background-color: var(--green);
  font-size: 1.3rem;
  color: var(--white);
}
.top-nav div {
  justify-content: space-between;
  height: 4.5rem;
}
.top-nav a {
  padding: 0 0.5rem;
  color: var(--white);
}

/* Navigation */
.navigation{
  height: 6rem;
  line-height: 6rem;
}
.nav-center{
  justify-content: space-between;
}
.nav-center .nav-item:not(:last-child){
  margin-right: 0.5rem;
}
.nav-center .nav-link{
  font-size: 1.8rem;
  padding: 1rem;
}
.nav-center .nav-link:hover{
  color: var (--green);
}

/* Icons */
.icon{
  cursor: pointer;
  font-size: 2.5rem;
  padding: 0 1rem;
  color: #555;
  position: relative;
}
.icon:not(:last-child){
  margin-right: 0.5rem;
}
.icon span{ /*.d-flex*/
  position: absolute;
  top: 3px;
  right: -3px;
  background-color: var(--green);
  color: white;
  border-radius: 50%;
  font-size: 1.3rem;
  height: 2rem;
  width: 2rem;
  justify-content: center;
}

.nav-list .icons {
  display: none;
}
.nav-center .hamburger {
  display: none;
  font-size: 2.3rem;
  color: var(--black);
  cursor: pointer;
}
@media (max-width: 768px) {
  .nav-list {
    position: fixed;
    top: 12%;
    left:-100%;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    height: 100%;
    max-width: 35rem;
    width: 0;
    z-index: 100;
    transition: all 300ms ease-in-out;
  }
  .nav-list.open { /*JS*/
    left: 0;
    width: 100%;
  }
  .nav-list .nav-item {
    margin: 0 0 1rem 0;
    width: 100%;
  }
  .nav-list .nav-link {
    font-size: 2rem;
    color: var(--black);
  }
  .nav-center .hamburger {
    display: block;
    font-size: 3rem;
  }
  .icons {
    display: none;
  }
  .nav-list .icons {
    display: flex;
  }
  .top-nav ul {
    display: none;
  }
  .top-nav div {
    justify-content: center;
    height: 3rem;
  }
}
</style>