const counter = {
  state: () => ({
    clickCountCart: 0,
    clickCountHeart: 0
  }),
  mutations: {
    incrementClickCart(state, product) {
      state.clickCountCart++;
      // const product = state.products.find(p => p.id === productId);
      localStorage.setItem('cartItem', JSON.stringify(product));
    },
    incrementClickHeart(state) {
      state.clickCountHeart++;
    },
  },
  actions: {
    incrementClickCart(context, productId) {
      context.commit('incrementClickCart', productId);
    },
    incrementClickHeart(context) {
      context.commit('incrementClickHeart');
    },
  },
  
};

export default counter;
