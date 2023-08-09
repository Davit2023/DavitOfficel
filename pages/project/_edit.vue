<template>
  <div>
    <div class="section-content">
      <div class="full-height text-center">
        <h3 class="pt-4 text-gray text-uppercase">ID{{ slug }}</h3>
        <div class="container mt-3" style="font-size: 20px;">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "App",
  validate({ params }) {
    return true
  },
  data() {
    return {
      slug: this.$route.params.edit,
    }
  },
  mounted() {
    this.edit(this.$route.params.edit)
  },
  created() {
    // console.log(this.$route.params.id);
  },
  methods: {
    edit(_id) {
      console.log(_id);
    }
  }



};
</script>
