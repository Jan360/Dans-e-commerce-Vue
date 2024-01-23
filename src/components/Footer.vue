<template>
  <footer class="footer">
      <div class="row">
        <div class="col d-flex">
          <h4>INFORMATION</h4>
          <router-link to="">About us</router-link>
          <router-link to="">Contact Us</router-link>
          <router-link to="">Term & Conditions</router-link>
          <router-link to="">Shipping Guide</router-link>
        </div>
        <div class="col d-flex">
          <h4>USEFUL LINK</h4>
          <router-link to="">Online Store</router-link>
          <router-link to="">Customer Services</router-link>
          <router-link to="">Promotion</router-link>
          <router-link to="">Top Brands</router-link>
        </div>
        <div class="col d-flex">
          <span><i class='bx bxl-facebook-square'></i></span>
          <span><i class='bx bxl-instagram-alt' ></i></span>
          <span><i class='bx bxl-github' ></i></span>
          <span><i class='bx bxl-twitter' ></i></span>
          <span><i class='bx bxl-pinterest' ></i></span>
        </div>
      </div>
    </footer>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.footer {
  padding: 7rem 1rem;
  background-color: var(--green);
}
footer .row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 99.6rem;
  margin: 0 auto;
}
.footer .col {
  flex-direction: column;
  color: white;
  align-items: flex-start;
}
.footer .col:last-child {
  flex-direction: row;
  justify-content: center;
}
.footer .col:last-child span {
  font-size: 2.5rem;
  margin-right: 0.5rem;
  color: var(--white);
}
.footer .col a {
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;
}
.footer .col h4 {
  margin-bottom: 1rem;
}
@media (max-width: 567px) {
  footer .row {
    grid-template-columns: 1fr;
    row-gap: 3rem;
  }
}
</style>