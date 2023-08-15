<template>
  <div>
    <div class="section-content">
      <div class="full-height text-center">
        <h3 class="pt-4 mt-5 text-gray text-uppercase course-head">MY SERVICES</h3>
        <div class="container mt-3" style="padding-bottom: 60px;">
          <div class="row pt-4" style="overflow: hidden;">
            <div class="col-lg-4 col-md-4 col-sm-6 col-12 p-2" data-aos="fade-left" data-aos-delay="300">
              <div class="my_course">
                <div class="box">
                  <div class="box-icon1"></div>
                  <div class="box-icon2">
                    <img src="~/assets/icon/web_design.png" class="image-icon lg mb-2 box-img-service" alt="" />
                  </div>
                </div>
                <div class="" style="margin-top: -61px;">
                  <h3 class="text-white mt-3 title-service">WEB DESIGN</h3>
                </div>
                <!-- <p class="p-1">
                  I'm a design and develop web application.
                </p> -->
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-12 p-2" data-aos="fade-left" data-aos-delay="500">
              <div class="my_course">
                <div class="box">
                  <div class="box-icon1"></div>
                  <div class="box-icon2">
                    <img src="~/assets/img/develop_website.png" class="image-icon lg mb-2 box-img-service" alt="" />
                  </div>
                </div>
                <div class="" style="margin-top: -61px;">
                  <h3 class="text-white mt-3 title-service">DEVELOP WEB SITE</h3>
                </div>
                <!-- <p class="p-1">
                  Development is one of my service, I develop website after designing
                </p> -->
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-12 p-2" data-aos="fade-left" data-aos-delay="700">
              <div class="my_course">
                <div class="box">
                  <div class="box-icon1"></div>
                  <div class="box-icon2">
                    <img src="~/assets/img/pos.png" class="image-icon lg mb-2 box-img-service" alt="" />
                  </div>
                </div>
                <div class="" style="margin-top: -61px;">
                  <h3 class="text-white mt-3 title-service">DEVELOP POS</h3>
                </div>
                <!-- <p class="p-1">
                  Development is one of my service, I develop website after designing
                </p> -->
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-12 p-2" data-aos="fade-left " data-aos-delay="900">
              <div class="my_course">
                <div class="box">
                  <div class="box-icon1"></div>
                  <div class="box-icon2">
                    <img src="~/assets/img/development.png" class="image-icon lg mb-2 box-img-service" alt="" />
                  </div>
                </div>
                <div class="" style="margin-top: -61px;">
                  <h3 class="text-white mt-3 title-service">DEVELOPMENT</h3>
                </div>
                <!-- <p class="p-1">
                  Development is one of my service, I develop website after designing
                </p> -->
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-12 p-2" data-aos="fade-left " data-aos-delay="1100">
              <div class="my_course">
                <div class="box">
                  <div class="box-icon1"></div>
                  <div class="box-icon2">
                    <img src="~/assets/img/support.png" class="image-icon lg mb-2 box-img-service" alt="" />
                  </div>
                </div>
                <div class="" style="margin-top: -61px;">
                  <h3 class="text-white mt-3 title-service">SUPPORT</h3>
                </div>
                <!-- <p class="p-1">
                  I offer assistance to developers, by helping them find solution to their problem while coding
                </p> -->
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-12 p-2" data-aos="fade-left" data-aos-delay="1300">
              <div class="my_course">
                <div class="box">
                  <div class="box-icon1"></div>
                  <div class="box-icon2">
                    <img src="~/assets/img/maintenance.png" class="image-icon lg mb-2 box-img-service" alt="" />
                  </div>
                </div>
                <div class="" style="margin-top: -61px;">
                  <h3 class="text-white mt-3 title-service">MAINTENANCE</h3>
                </div>
                <!-- <p class="p-1">
                  I offer maintenance of website for my clients
                </p> -->
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
    // this.getuser()
  },
  mounted() {
  },
  methods: {
    // async getuser() {
    //   let res = await this.$axios.get('/getitemuser')
    //     .then((res) => {
    //       // this.items = res.data;
    //       console.log(res.data)
    //     })
    // }
  },
};
</script>
<style>
.course-head {
  font-weight: bold;
}

.box {
  width: 100%;
  margin-top: 8px;
  height: 205px;
  /* border-radius: 10px; */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box-img-service {
  margin-top: 24px;
  width: 35px !important;
  height: 35px !important;
  transition: all 0.19s ease;
}

.my_course {
  overflow: hidden;
  border-radius: 10px;
  height: 290px;
  background-color: rgb(15, 15, 15);
  transition: all .3s ease-out 0s;
}

.p-1 {
  color: white;
}

.my_course:hover {
  background-color: rgb(25, 25, 25);
}

.my_course:hover .box-icon2 {
  /* margin-left: -10px;
  margin-top: -10px; */
  transform: translate(-10px, -10px);
}


.box-icon1 {
  width: 80px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.15);
  margin-left: -10px;
  margin-top: -10px;
}

.box-icon2 {
  width: 80px;
  height: 80px;
  background-color: #18d26e;
  position: absolute;
  transition: all .3s ease-out 0s;
}

.title-service {
  font-size: 24px !important;
  font-weight: 700;
}
</style>
