<template>
  <div>
    <Header></Header>
    <div class="under-nav">
      <nuxt/>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '~/components/nav/Footer.vue';
import Header from "~/components/nav/Header.vue";
export default {
  name: "app",
  components: { Header, Footer },
};
</script>
