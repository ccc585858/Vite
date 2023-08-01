<script setup>
import { onMounted, ref } from "vue";

onMounted(() => {
  console.log("test");
});

let count = ref(5);

function plusOne(e) {
  count.value++;
}
// export default {
//   data() {
//     return {};
//   },
// };
</script>

<template>
  <button type="button" @click="plusOne">{{ count }}</button>

  <div class="intro">
    <div class="intro__item">
      <div class="intro__item__img">
        <img src="@/assets/images/1_640x360.jpg" />
      </div>
      <div class="intro__item__text">
        <h2 class="title2">Kindle</h2>
        <p class="para">
          Kindle
          是一款電子書閱讀器，由美國亞馬遜公司開發，於2007年11月19日推出。Kindle的名字來自於亞馬遜公司的網站名稱，亞馬遜公司的網站名稱是以亞馬遜河的名字命名的，而亞馬遜河的名字來自於一個古希臘語的詞，意思是「沒有尾巴的河」，而Kindle的名字也是以此為由。
        </p>
      </div>
    </div>

    <div class="intro__item">
      <div class="intro__item__text">
        <h2 class="title2">風景</h2>

        <p class="para">
          綠色的海邊，橘黃色的沙灘，藍色的海，藍色的天空，白色的雲，這些都是海邊的風景。海邊的風景很漂亮，我們可以在海邊玩耍，也可以在海邊看日出日落。
        </p>
      </div>
      <div class="intro__item__img">
        <img src="@/assets/images/2_640x360.jpg" />
      </div>
    </div>

    <div class="intro__item">
      <div class="intro__item__img">
        <img src="@/assets/images/3_640x360.jpg" />
      </div>
      <div class="intro__item__text">
        <h2 class="title2">第三個區塊</h2>
        <p class="para">
          貓咪是一種可愛的動物，我們可以養貓，也可以養狗。貓咪的毛很柔軟，我們可以摸摸它的毛，也可以摸摸它的肚子。
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
div.intro__item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1rem 0;
  border: 1px solid #ccc;
}
div.intro__item > div {
  width: 50%;
  padding: 0;
}
div.intro__item__img {
  align-self: flex-start;
}
div.intro__item__img > img {
  width: 100%;
}

div.intro__item > div.intro__item__img > img {
  vertical-align: bottom;
}
div.intro__item__img:nth-child(odd) {
  margin-right: 1rem;
}
div.intro__item__img:nth-child(even) {
  margin-left: 1rem;
}
h2.title2 {
  font-size: 1.2rem;
  color: #333;
  margin: 0.5rem 0.5rem;
}
p.para {
  font-size: 0.9rem;
  color: #666;
  margin: 0.5rem 0.5rem;
}

@media (max-width: 575.98px) {
  div.intro__item {
    flex-direction: column;
  }
  div.intro__item__img {
    order: 1;
    width: 100% !important;
    margin: 0 !important;
    padding: 0;
  }
  div.intro__item__img > img {
    width: 100%;
  }
  div.intro__item__text {
    order: 2;
    width: 100% !important;
  }
  div.intro__item__text > h2,
  div.intro__item__text > p {
    padding: 0 1rem;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
