<template>
  <div>
    <ProductDetails :price="products[4].price" :image="products[4].image" />
  </div>
</template>

<script>
import ProductDetails from '@/components/ProductDetails.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    ProductDetails
  },
  props: ['product'],
  // Товары
  computed: {
    ...mapGetters(['products'])
  },
};
</script>

<style scoped>

</style>