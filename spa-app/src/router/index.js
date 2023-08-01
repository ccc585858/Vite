import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const routes = [
  // 網址定義：/；給定名稱 Intro；載入 Intro.vue 元件
  { path: "/", name: "Home", component: () => import("@/views/Intro.vue") },
  {
    path: "/product_list",
    name: "ProductList",
    component: () => import("@/views/ProductList.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
