<template>
  <div>
    <ProductDetails :category="products[0].category" :title="products[0].title" :price="products[0].price" :image="products[0].image" :discount="products[0].discount" :link="products[0].link" />
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