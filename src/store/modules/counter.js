const counter = {
  state: () => ({
    clickCountCart: localStorage.getItem('clickCountCart') || 0,
    clickCountHeart: localStorage.getItem('clickCountHeart') || 0
  }),
  mutations: {
    incrementClickCart(state) {
      state.clickCountCart++;
      localStorage.setItem('clickCountCart', state.clickCountCart.toString());
    },
    incrementClickHeart(state) {
      state.clickCountHeart++;
      localStorage.setItem('clickCountHeart', state.clickCountHeart.toString());
    },
  },
  actions: {
    incrementClickCart(context) {
      context.commit('incrementClickCart');
    },
    incrementClickHeart(context) {
      context.commit('incrementClickHeart');
    },
  },
};

export default counter;
