<template>
  <div>
    <div class="section-content">
      <div class="full-height text-center">
        <h3 class="pt-4 mt-5 text-gray text-uppercase course-head">My Courses</h3>
        <div class="container mt-2" style="font-size: 20px;">
          <div class="container">
            <p class="text-gray-400 text-xl" data-aos="fade-up" data-aos-duration="3000">This is the website portfolio
              about
              me for
              sharing experiences with everyone who is best on technology coding 2023 . Thank Yous</p>
          </div>
        </div>
        <div class="container mt-5" style="padding-bottom: 80px;">
          <div class="row pt-4">
            <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-2" data-aos="fade-left" data-aos-delay="300">
              <div class="my_course">
                <div class="box">
                  <img src="~/assets/img/jett.jpg" class="image-icon lg mb-2 box-img" alt="" />
                </div>
                <h3 class="text-white mt-3">Backend Developer</h3>
                <p class="p-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  At, rerum in eos ducimus ea nulla asperiores, odit vitae
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-2" data-aos="fade-left " data-aos-delay="500">
              <div class="my_course">
                <div class="box">
                  <img src="~/assets/img/wp5159584.webp" class="image-icon lg mb-2 box-img" alt="" />
                </div>
                <h3 class="text-white mt-3">Frontend Developer</h3>
                <p class="p-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  At, rerum in eos ducimus ea nulla asperiores, odit vitae
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-2" data-aos="fade-left" data-aos-delay="700">
              <div class="my_course">
                <div class="box">
                  <img src="~/assets/img/sun-monkey-king-mobile-legends-uhdpaper.com-4K-154.webp"
                    class="image-icon lg mb-2 box-img" alt="" />
                </div>
                <h3 class="text-white mt-3">Fullstack Developer</h3>
                <p class="p-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  At, rerum in eos ducimus ea nulla asperiores, odit vitae
                </p>
              </div>
            </div>



            <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-2" data-aos="fade-left" data-aos-delay="900">
              <div class="my_course">
                <div class="box">
                  <img src="~/assets/img/wp4527624.webp" class="image-icon lg mb-2 box-img" alt="" />
                </div>
                <h3 class="text-white mt-3">Backend Developer</h3>
                <p class="p-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  At, rerum in eos ducimus ea nulla asperiores, odit vitae
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-2" data-aos="fade-left " data-aos-delay="1100">
              <div class="my_course">
                <div class="box">
                  <img src="~/assets/img/V4XAn9c.webp" class="image-icon lg mb-2 box-img" alt="" />
                </div>
                <h3 class="text-white mt-3">Frontend Developer</h3>
                <p class="p-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  At, rerum in eos ducimus ea nulla asperiores, odit vitae
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-12 p-2" data-aos="fade-left" data-aos-delay="1300">
              <div class="my_course">
                <div class="box">
                  <img src="~/assets/img/Mobile-Legends-Hayabusa-epic-skin.webp" class="image-icon lg mb-2 box-img"
                    alt="" />
                </div>
                <h3 class="text-white mt-3">Fullstack Developer</h3>
                <p class="p-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  At, rerum in eos ducimus ea nulla asperiores, odit vitae
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      let res = await this.$axios.post('/get_course')
        .then((res) => {
          this.items = res.data;
          console.log(res.data)
        })
    }
  },
};
</script>
<style>
.course-head {
  font-weight: bold;
}

.box {
  width: 100%;
  margin-top: -9px;
  height: 205px;
  /* border-radius: 10px; */
  overflow: hidden;
}

.box-img {
  width: 100% !important;
  height: 100% !important;
  transition: all 0.19s ease;
}

.my_course {
  overflow: hidden;
  border-radius: 10px;
  /* transition: all 0.3s ease; */
  background-color: rgb(15, 15, 15);
}

.box-img:hover {
  background-color: rgb(15, 15, 15);
  transform: scale(1.2);
}
</style>
