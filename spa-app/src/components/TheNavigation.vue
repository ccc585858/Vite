<script></script>

<template>
  <nav class="nav">
    <router-link to="/">介紹頁</router-link> |
    <router-link to="/product_list">商品列表頁</router-link>
  </nav>
</template>

<style scoped>
/* 將導覽列 nav 用漂亮一些，我要典雅的風格，而且要置中 */
nav.nav {
  text-align: center;
  font-size: 1.2rem;
  color: #999;
  margin: 10px 0;
}
/* 導覽列的 a 標籤，好看一些，且有 router-link-exact-active 的 class，外觀應不一樣 */
nav.nav a {
  color: #999;
  display: inline-block;
  /* 當有 router-link-exact-active 這個 class 時，顏色改變 */
  text-decoration: none;

  padding: 0.2rem 0.5rem;
}
nav.nav a:hover {
  color: #333;
}
nav.nav .router-link-exact-active {
  color: #333;
}
/* 滑鼠移過，以及 router-link-exact-active 這個 class 對應的 a 標籤，都設定背景色及圓角 */
nav.nav a:hover,
nav.nav .router-link-exact-active {
  background-color: #eee;
  border-radius: 0.5rem;
}
</style>
