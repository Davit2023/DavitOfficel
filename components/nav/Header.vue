<template>
  <div>
    <b-navbar toggleable="lg" class="header" type="dark" fixed="top" variant="white">
      <b-container>
        <b-navbar-brand class="brand" href="#"><span id="brand">DAVIT OFFICIAL</span></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">HOME</b-nav-item>
            <!-- <b-nav-item to="/course">COURSES</b-nav-item> -->
            <b-nav-item to="/about">ABOUT</b-nav-item>
            <b-nav-item to="/service">SERVICES</b-nav-item>
            <b-nav-item to="/contact">CONTACT</b-nav-item>
            <!-- <b-nav-item to="/home1">API</b-nav-item> -->
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  created() { },
  methods: {
    async logout() { },
  },
};
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
#brand {
  color: transparent;
  background: linear-gradient(45deg, rgb(0, 47, 255), rgb(23, 201, 0));
  -webkit-background-clip: text;
  font-weight: 600;
  font-size: 20px;

}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}

.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}

.brand{
  animation: animay 1.5s infinite;
}

@keyframes animay {
  0% {
    transform: scale(0.95);
  }

  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.95);
  }
}
</style>
