<script>
export default {
  data() {
    return {
      products: [
        {
          p_name:
            "商品名稱1商品名稱1商品名稱1商品名稱1商品名稱1商品名稱1商品名稱1商品名稱1商品名稱1商品名稱1商品名稱1商品名稱1商品名稱1商品名稱1",
          p_img: "https://picsum.photos/id/110/400/300",
        },
        {
          p_name:
            "商品名稱2商品名稱2商品名稱2商品名稱2商品名稱2商品名稱2商品名稱2",
          p_img: "https://picsum.photos/id/111/400/300",
        },
        {
          p_name: "商品名稱3",
          p_img: "https://picsum.photos/id/112/400/300",
        },
        {
          p_name: "商品名稱4",
          p_img: "https://picsum.photos/id/113/400/300",
        },
        {
          p_name: "商品名稱5",
          p_img: "https://picsum.photos/id/114/400/300",
        },
        {
          p_name: "商品名稱6",
          p_img: "https://picsum.photos/id/115/400/300",
        },
        {
          p_name: "商品名稱7",
          p_img: "https://picsum.photos/id/116/400/300",
        },
        {
          p_name: "商品名稱8",
          p_img: "https://picsum.photos/id/117/400/300",
        },
        {
          p_name: "商品名稱9",
          p_img: "https://picsum.photos/id/118/400/300",
        },
        {
          p_name: "商品名稱10",
          p_img: "https://picsum.photos/id/119/400/300",
        },
        {
          p_name: "商品名稱11",
          p_img: "https://picsum.photos/id/120/400/300",
        },
        {
          p_name: "商品名稱12",
          p_img: "https://picsum.photos/id/121/400/300",
        },
        {
          p_name: "商品名稱13",
          p_img: "https://picsum.photos/id/122/400/300",
        },
        {
          p_name: "商品名稱14",
          p_img: "https://picsum.photos/id/123/400/300",
        },
        {
          p_name: "商品名稱15",
          p_img: "https://picsum.photos/id/124/400/300",
        },
        {
          p_name: "商品名稱16",
          p_img: "https://picsum.photos/id/125/400/300",
        },
        {
          p_name: "商品名稱17",
          p_img: "https://picsum.photos/id/126/400/300",
        },
        {
          p_name: "商品名稱18",
          p_img: "https://picsum.photos/id/127/400/300",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="img_block"></div>

  <ul class="p_list">
    <li v-for="product in products" :key="product.p_name">
      <h1>{{ product.p_name }}</h1>
      <img :src="product.p_img" alt="" />
    </li>
  </ul>
</template>

<style scoped>
div.img_block {
  background-image: url("https://picsum.photos/id/128/1200/800");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 300px;
  position: sticky;
  top: 0;
  z-index: -1; /* 下方的區域，手機版時，才能蓋住 */
}

ul.p_list {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #ccc;
  margin: 20px 0 0 0;
  padding: 10px;
  list-style: none;
  z-index: 99;
  position: relative;
  background-color: white;
}
ul.p_list > li {
  width: calc((100% - 60px) / 4);
  border: 1px solid #ccc;
  margin-right: 20px;
  margin-bottom: 20px;
}
ul.p_list > li:nth-child(4n) {
  margin-right: 0;
}
ul.p_list > li > img {
  vertical-align: bottom;
  width: 100%;
}
ul.p_list > li > h1 {
  font-size: 1rem;
  color: #333;
  height: 45px;
  margin: 0.5rem 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 575.98px) {
  ul.p_list > li {
    width: calc((100% - 20px) / 2);
    border: 1px solid #ccc;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  ul.p_list > li:nth-child(2n) {
    margin-right: 0;
  }
}
</style>
