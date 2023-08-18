<template>
  <div>
    <div class="header-page padding-top" data-aos="fade-in" data-aos-delay="300">
      <h1 class="text-white">Contact</h1>
      <p class="text-white">You can contact me by: <a class="text-white" href="tel:+855314128120">+855314128120</a></p>
      <div class="padding-top"></div>
    </div>
    <div class="container" data-aos="fade-in" data-aos-delay="300">
      <div class="sec-padding">
        <div class="row">
          <div class="col-sm-4">
            <div class="row">
              <div class="col-sm-10">
                <h5 class="font-w-normal text-gray">Address</h5>
                <p>Phnom Penh , Cambodia</p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-10">
                <h5 class="text-gray font-w-normal">Phone</h5>
                <p class="text-gray"><a class="text-gray" href="tel:+855314128120">+855314128120</a></p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-10">
                <h5 class="text-gray font-w-normal">Email</h5>
                <p><a class="text-gray" href="mailto:choundavit11@gmail.com">choundavit11@gmail.com</a></p>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group mb-4">
              <input type="text" class="form-control contact" v-model="name" name="name" placeholder="Enter Your Name" />
            </div>
            <div class="form-group mb-4">
              <input type="text" class="form-control contact" v-model="email" name="email"
                placeholder="Enter Email Address" />
            </div>
            <div class="form-group">
              <input type="text" class="form-control contact" v-model="message" name="message"
                placeholder="Enter Subject" />
            </div>
          </div>
          <div class="col-sm-4">
            <textarea name="" id="" cols="30" rows="8" class="form-control" placeholder="Content"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <button class="btn primary-btn float-right mt-2" @click="submit()">Submit</button>
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
      name: '',
      email: '',
      message: '',
    }
  },
  created() {
    // this.getIncidents()
  },
  methods: {
    // getIncidents() {
    //   this.$axios.get('/photos')
    //     .then((res) => {
    //       this.items = res.data;
    //       console.log(this.items);
    //     })
    // },

    submit() {
      alert(this.name);
    }
  },
};
</script>

<style scoped>
@import "~/assets/css/about.css";

.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
</style>

