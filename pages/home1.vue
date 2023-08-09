<template>
  <div>
    <div class="container" style="background-color:black;text-align: center;">
      <h1>API</h1>
    </div>
    <div class="container" style="background-color:white">
      <!-- <div class="item" v-for="(item, key) in items">
        <b-img :src="item" fluid alt="Responsive image" style="display:block;"></b-img>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "IndexPage",
  layout: "App",
  data() {
    return {
      items: [],
    }
  },
  created() {
    this.getuser()
  },
  mounted() {
  },
  methods: {
    async getuser() {
      let res = await this.$axios.get('/admins')
        .then((res) => {
          // this.items = res.data;
          console.log(res.data)
        })
    }
  },
};
</script>
<style scoped>
@import "~/assets/css/style.css";
</style>
