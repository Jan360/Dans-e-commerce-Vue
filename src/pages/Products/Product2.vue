<template>
  <div>
    <ProductDetails :price="products[1].price" :image="products[1].image" />
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