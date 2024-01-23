// import { createStore } from 'vuex';

// export default createStore({
//   // Начальное состояние
//   state: {
//     clickCountCart: 0,
//     clickCountHeart: 0,

//     products: [
//       {
//         id: 1,
//         category: "MEN'S CLOTHES",
//         title: "Quis Nostrud Exercitation",
//         price: "$30",
//         image: require("../assets/images/products/product-1.jpg"),
//         discount: "",
//         link: "/product-1",
//       },
//       {
//         id: 2,
//         category: "MEN'S CLOTHES",
//         title: "Quis Nostrud Exercitation",
//         price: "$50",
//         image: require("../assets/images/products/product-2.jpg"),
//         discount: "",
//         link: "/product-2",
//       },
//       {
//         id: 3,
//         category: "MEN'S CLOTHES",
//         title: "Quis Nostrud Exercitation",
//         price: "$40",
//         image: require("../assets/images/products/product-3.jpg"),
//         discount: "20%",
//         link: "/product-3",
//       },
//       {
//         id: 4,
//         category: "MEN'S CLOTHES",
//         title: "Quis Nostrud Exercitation",
//         price: "$40",
//         image: require("../assets/images/products/product-4.jpg"),
//         discount: "20%",
//         link: "/product-4",
//       },
//       {
//         id: 5,
//         category: "MEN'S CLOTHES",
//         title: "Quis Nostrud Exercitation",
//         price: "$60",
//         image: require("../assets/images/products/product-5.jpg"),
//         discount: "50%",
//         link: "/product-5",
//       },
//       {
//         id: 6,
//         category: "MEN'S CLOTHES",
//         title: "Quis Nostrud Exercitation",
//         price: "$30",
//         image: require("../assets/images/products/product-6.jpg"),
//         discount: "50%",
//         link: "/product-6",
//       },
//       {
//         id: 7,
//         category: "MEN'S CLOTHES",
//         title: "Quis Nostrud Exercitation",
//         price: "$25",
//         image: require("../assets/images/products/product-7.jpg"),
//         discount: "20%",
//         link: "/product-7",
//       },
//       {
//         id: 8,
//         category: "MEN'S CLOTHES",
//         title: "Quis Nostrud Exercitation",
//         price: "$25",
//         image: require("../assets/images/products/product-8.jpg"),
//         discount: "20%",
//         link: "/product-7",
//       },
//       {
//         id: 9,
//         category: "MEN'S CLOTHES",
//         title: "Quis Nostrud Exercitation",
//         price: "$25",
//         image: require("../assets/images/products/product-8.jpg"),
//         discount: "20%",
//         link: "/product-7",
//       },
//       {
//         id: 10,
//         category: "MEN'S CLOTHES",
//         title: "Quis Nostrud Exercitation",
//         price: "$25",
//         image: require("../assets/images/products/product-8.jpg"),
//         discount: "20%",
//         link: "/product-7",
//       },
//       {
//         id: 11,
//         category: "MEN'S CLOTHES",
//         title: "Quis Nostrud Exercitation",
//         price: "$25",
//         image: require("../assets/images/products/product-8.jpg"),
//         discount: "20%",
//         link: "/product-7",
//       },
//       {
//         id: 12,
//         category: "MEN'S CLOTHES",
//         title: "Quis Nostrud Exercitation",
//         price: "$25",
//         image: require("../assets/images/products/product-8.jpg"),
//         discount: "20%",
//         link: "/product-7",
//       },
//       {
//         id: 13,
//         category: "MEN'S CLOTHES",
//         title: "Quis Nostrud Exercitation",
//         price: "$25",
//         image: require("../assets/images/products/product-8.jpg"),
//         discount: "20%",
//         link: "/product-7",
//       },
//       {
//         id: 14,
//         category: "MEN'S CLOTHES",
//         title: "Quis Nostrud Exercitation",
//         price: "$25",
//         image: require("../assets/images/products/product-8.jpg"),
//         discount: "20%",
//         link: "/product-7",
//       },
//       {
//         id: 15,
//         category: "MEN'S CLOTHES",
//         title: "Quis Nostrud Exercitation",
//         price: "$25",
//         image: require("../assets/images/products/product-8.jpg"),
//         discount: "20%",
//         link: "/product-7",
//       },
//       {
//         id: 16,
//         category: "MEN'S CLOTHES",
//         title: "Quis Nostrud Exercitation",
//         price: "$25",
//         image: require("../assets/images/products/product-8.jpg"),
//         discount: "20%",
//         link: "/product-7",
//       }
//     ],
//   },
//   mutations: {
//     incrementClickCountCart(state) {
//       state.clickCountCart++;
//     },
//     incrementClickCountHeart(state) {
//       state.clickCountHeart++;
//     },
//   },
//   actions: {
//     incrementClickCountCart(context) {
//       context.commit('incrementClickCountCart');
//     },
//     incrementClickCountHeart(context) {
//       context.commit('incrementClickCountHeart');
//     },
//   },
//   getters: {
//     products: state => state.products
//   }
// });

import { createStore } from 'vuex';
import counter from './modules/counter';
import products from './modules/products';


export default createStore({
  modules: {
    counter,
    products,
  },
});