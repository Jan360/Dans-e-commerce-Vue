import Main from "@/pages/Main"
import Cart from "@/pages/Cart"
import Login from "@/pages/Login"
import Signup from "@/pages/Signup"
import Products from "@/pages/Products"
import Product1 from "@/pages/Products/Product1"
import Product2 from "@/pages/Products/Product2"
import Product3 from "@/pages/Products/Product3"
import Product4 from "@/pages/Products/Product4"
import Product5 from "@/pages/Products/Product5"
import Product6 from "@/pages/Products/Product6"
import Product7 from "@/pages/Products/Product7"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: '/', // Адрес
    component: Main
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/products',
    component: Products
  },
  {
    path: '/product-1',
    component: Product1
  },
  {
    path: '/product-2',
    component: Product2
  },
  {
    path: '/product-3',
    component: Product3
  },
  {
    path: '/product-4',
    component: Product4
  },
  {
    path: '/product-5',
    component: Product5
  },
  {
    path: '/product-6',
    component: Product6
  },
  {
    path: '/product-7',
    component: Product7
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Если есть сохраненная позиция прокрутки, вернуть ее
      return savedPosition;
    } else {
      // В противном случае, сбросить прокрутку на верх страницы
      return { left: 0, top: 0 };
    }
  }
})

export default router
