<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: { TheNavigation },
  data() {
    return {};
  },
};
</script>

<template>
  <TheNavigation></TheNavigation>

  <!-- 使用 router-view 來呈現頁面網址對應的元件 -->
  <router-view></router-view>

  <footer class="footer">
    <audio controls loop>
      <source
        src="https://alldata.sgp1.digitaloceanspaces.com/audio/happy-lazy.mp3"
        type="audio/mpeg"
      />
    </audio>
    <div>
      Music by
      <a
        href="https://pixabay.com/users/sergequadrado-24990007/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=109007"
        >SergeQuadrado</a
      >
      from
      <a
        href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=109007"
        >Pixabay</a
      >
    </div>
  </footer>
</template>

<!-- 這裡的 scoped 屬性，是讓所寫的 CSS，「只」會套用到此元件的 template。 -->
<style scoped></style>
