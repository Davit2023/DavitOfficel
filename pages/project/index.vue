<template>
  <div>
    <div class="section-content">
      <div class="full-height text-center">
        <h3 class="pt-4 text-gray text-uppercase">My Projects</h3>
        <div class="container mt-3" style="font-size: 20px;">
          <p class="text-gray-400 text-xl" data-aos="fade-up" data-aos-duration="3000">This is the website portfolio about me for
            sharing experiences with everyone who is best on technology coding
            and designing 2023 . Thank Yous</p>
        </div>
        <nuxt-link to="/project/1">Go</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "App",
};
</script>
