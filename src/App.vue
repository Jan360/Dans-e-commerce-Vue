<template>
  <HeaderNavbar/>
  <div class="app">
    
    <router-view></router-view>
  </div>
  <Footer/>
</template>

<script>
  import HeaderNavbar from "@/components/HeaderNavbar"
  import Footer from "./components/Footer.vue";
  import 'boxicons';

  export default {
    components: {
      HeaderNavbar,
      Footer
    },
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}

/* Fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

/* Color Variables */
:root {
  --white: #fff;
  --black: #222;
  --green: #6cbe02;
  --grey1: #f0f0f0;
  --grey2: #e9d7d3;
}

/* Basic Reset */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  background-color: var(--white);
  color: var(--black);
  font-weight: 400;
  font-style: normal;
}

a {
   text-decoration: none;
   color: inherit;
}

li {
   list-style-type: none;
}

.container {
   max-width: 114rem;
   margin: 0 auto;
   padding: 0 3rem;
}

.d-flex {
  display: flex;
  align-items: center;
}
</style>
