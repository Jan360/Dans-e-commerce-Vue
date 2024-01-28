<template>
    <div class="container cart">
      <table>
    <tr>
      <th>Product</th>
      <th>Quantity</th>
      <th>Subtitle</th>
    </tr>
    <tr v-for="(item, index) in items" :key="index">
      <td>
        <div class="cart-info">
          <img :src="item.image" alt="">
          <div>
            <p>{{ item.name }}</p>
            <span>Price: {{ item.price }}$</span>
            <br/>
            <button @click="removeItem(index)">remove</button>
          </div>
        </div>
      </td>
      <td>
        <input type="number" v-model="item.quantity" min="1" @input="updateTotal">
      </td>
      <td>{{ item.quantity * item.price }}$</td>
    </tr>
  </table>

      <div class="total-price">
        <table>
          <tr>
            <td>Total</td>
            <td>{{ totalAll }}$</td>
          </tr>
        </table>
        <router-link to="#" class="checkout-btn">Proceed To Checkout</router-link>
      </div>
    </div>

</template>
<script>
export default {
  data() {
    return {
      items: [
        // {
        //   name: "Boy's T-shirt",
        //   image: require("../assets/images/products/product-2.jpg"),
        //   price: 25,
        //   quantity: 1,

        // },
        // {
        //   name: "Boy's T-shirt",
        //   image: require("../assets/images/products/product-3.jpg"),
        //   price: 40,
        //   quantity: 1,

        // },
        // {
        //   name: "Boy's T-shirt",
        //   image: require("../assets/images/products/product-5.jpg"),
        //   price: 60,
        //   quantity: 1,

        // },
        // {
        //   name: "Boy's T-shirt",
        //   image: require("../assets/images/products/product-7.jpg"),
        //   price: 25,
        //   quantity: 1,

        // },
      ]
    };
  },
  computed: {
    totalAll() {
      return this.items.reduce((total, item) => {
        return total + item.quantity * item.price;
      }, 0);
    },
  },
  methods: {
    removeItem(index) {
      this.items.splice(index, 1);
      localStorage.setItem('items', JSON.stringify(this.items));
    },
  },
  mounted() {
    const storedItems = JSON.parse(localStorage.getItem('items'));
    if (storedItems) {
      this.items = storedItems;
    }
  },
}
</script>

<style scoped>
.cart {
  margin: 10rem auto;
}
table {
  width: 100%;
  border-collapse: collapse;
}
.cart-info {
  display: flex;
  flex-wrap: wrap;
}
th {
  text-align: left;
  padding: 0.5rem;
  color: #fff;
  background-color: var(--green);
  font-weight: normal;
}
td {
  padding: 1rem 0.5rem;
}
td input {
  width: 5rem;
  height: 3rem;
  padding: 0.5rem;
}
td a {
  color: orangered;
  font-size: 1.4rem;
}
td img {
  width: 8rem;
  height: 8rem;
  margin-right: 1rem;
}
.total-price {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 2rem;
}
.total-price table {
  border-top: 3px solid var(--green);
  width: 100%;
  max-width: 35rem;
}
td:last-child {
  text-align: right;
}
.checkout-btn {
  display: inline-block;
  background-color: var(--green);
  color: white;
  padding: 1rem;
  margin-top: 1rem;
}
@media (max-width: 567px) {
  .cart-info p {
    display: none;
  }
}
</style>