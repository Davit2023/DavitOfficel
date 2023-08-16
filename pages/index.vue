<template>
  <div>
    <div class="section-content" data-aos="fade-in" data-aos-delay="300">
      <div class="container pt-4 pb-4 home_me">
        <div class="row" style="height: 100%;overflow: hidden;" >
          <div class="col-sm-6 col-md-6 col-lg-6 pb-4 pt-4">
            <div class="">
              <p class="">Hello welcome </p>
              <span>
                <h1 class="colors-text font-w-title" id="me"> <span>I'm</span> DAVIT CHOUN</h1>
              </span>
              <h1>Fullstack Developer</h1>
              <p>
                My name is Davit Choun, I'm a Full-Stack Web Developer . I have more than 3 years experience in
                full-stack web developer. I develop websites with HTML, CSS, Bootstrap, JavaScript, Jquery, Vuejs, Nuxtjs,
                Reactjs, Nodejs, UniApp, PHP,
                Laravel and ThinkPhp .<br>
                <!-- <br>
                I grew up in Takeo province,I attended 10 January 2012 High School, graduating in the class of 2022. I received my bachelor's
                degree in Computer Science​ and Engineer at RUPP.I started my career at phnom penh, worked for 1 years on web developer. I then worked for 1 year at CodeWriterKh as Backend Developer, after I’d start worked for 1 years at Onesala Co., Ltd as Backend Developer & Web
                , and Freelance Developer. -->
              </p>
              <nuxt-link to="/contact" class="btn primary-btn text-uppercase hovers">
                contact me
              </nuxt-link>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6">
            <div class="" id="cotact">
              <img class="" src="~/assets/img/back-end-developer-4316118-3611968.webp" alt="pheak" />
            </div>
            <!-- <div class="image-owner" id="cotact">
              <img class="" src="~/assets/icon/1a4ccacfec1fc4b69284144492589f6e.png" alt="pheak" />
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="section-white" data-aos="fade-up" data-aos-delay="600">
      <div class="container pt-4 pb-4">
        <div class="sec-paddingss">
          <div class="row" style="overflow: hidden;">
            <div class="col-sm-6">
              <img src="~/assets/img/full-stack-developer-working-on-project-5248497-4403356.webp" width="500px"
                id="cotact" class="single-image" alt="pheak" />
            </div>
            <div class="col-sm-6">
              <p class="text-uppercase">About Me</p>
              <h1 class="text-uppercase font-w-title personal">
                Personal details
              </h1>
              <p>
                My name is Choun Davit is a Cambodian Professional Backend Develop & Frontend Develop.
                I grew up in Takeo province,I attended 10 January 2012 High School, graduating in the class of 2022. I
                received mY bachelor's degree in Computer Science​ and Engineer at RUPP.I started my career at phnom penh,
                worked for 1 years on web developer. I then worked for 1 year at CodeWriterKh as Backend Developer, after
                I’d start worked for 1 years at Onesala Co., Ltd as Backend Developer & Web , and Freelance Developer.
                <!-- My name is Pheap Sopheak. I was born in Jroy Kor village, Jiror
                II Commune, Tbong Khmom District, KomPong Cham Province in 2000.
                <br />
                I finished my high school in 2018 at Samdach Me High School,
                and continued with a bachelor's degree in the Computer Science
                department of the Royal University of Phnom Penh. -->
              </p>
              <nuxt-link to="/about" class="btn primary-btn text-uppercase hovers">About me</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-content" data-aos="fade-up" data-aos-delay="300">
      <div class="container">
        <div class="">
          <div class="row">
            <div class="col-sm-12 text-center" style="overflow: hidden;">
              <!-- <div class="content" > -->
              <h1 class="text-uppercase font-w-header interest mt-3">
                interest Content
              </h1>
              <div class="row pt-4 mb-3">
                <div class="col-12 col-sm-4 col-md-4 col-lg-4" data-aos="fade-left " data-aos-delay="500">
                  <div class="interests">
                    <img src="~/assets/icon/web-development.png" class="image-icon lg mb-2" alt="" />
                    <h3 class="text-white">Web Develop</h3>
                    <p>
                      Today, the online experience is essential to the success of every business and organization. Without
                      a web developer, companies are left using drag-and-drop web builders like Squarespace or a WordPress
                      template.
                    </p>
                  </div>
                </div>
                <div class="col-12 col-sm-4 col-md-4 col-lg-4" data-aos="fade-left" data-aos-delay="700">
                  <div class="interests">
                    <img src="~/assets/icon/backend-icon-24.png" class="image-icon lg mb-2" alt="" />
                    <h3 class="text-white">BackEnd Developer</h3>
                    <p>
                      A back-end web developer is responsible for server-side web application logic and integration of the
                      work front-end web developers do.
                    </p>
                  </div>
                </div>
                <div class="col-12 col-sm-4 col-md-4 col-lg-4" data-aos="fade-left" data-aos-delay="900">
                  <div class="interests">
                    <img src="~/assets/icon/ux.png" class="image-icon lg mb-2" alt="" />
                    <h3 class="text-white">Frontend Developer</h3>
                    <p>
                      A front-end developer is a type of software developer who specializes in creating and designing the
                      user interface (UI) and user experience (UX) of websites and web applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- </div> -->
            <div class="col-sm-6"></div>
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
};
</script>
<style lang="scss">
// @media screen and (max-width: 1020px) {}

// @media screen and (min-width: 960px) {}

// @media screen and (min-width: 560px) and (max-width: 959px) {}

// @media screen and (max-width: 559px) {}

// @media screen and (max-width: 390px) {}

@mixin wide-screen {
  @media screen and (max-width: 1020px) {
    @content;
  }
}

@mixin pc {
  @media screen and (min-width: 960px) {
    @content;
  }
}

@mixin tab {
  @media screen and (min-width: 560px) and (max-width: 959px) {
    @content;
  }
}

@mixin sp {
  @media screen and (max-width: 559px) {
    @content;
  }
}

@mixin ph {
  @media screen and (max-width: 390px) {
    @content;
  }
}

.colors-text {
  color: transparent;
  background: linear-gradient(45deg, blue, rgb(255, 47, 82));
  -webkit-background-clip: text;

  @include sp {
    font-size: 2rem !important;
  }

  @include ph {
    font-size: 1.9rem !important;
  }
}

.personal {
  color: transparent;
  background: linear-gradient(45deg, rgb(255, 47, 82), rgb(63, 255, 63));
  -webkit-background-clip: text;

  @include sp {
    font-size: 2rem !important;
  }

  @include ph {
    font-size: 1.9rem !important;
  }
}

.interest {
  color: transparent;
  background: linear-gradient(45deg, rgb(255, 239, 15), rgb(30, 0, 227), rgb(255, 115, 0));
  -webkit-background-clip: text;

  @include sp {
    font-size: 2rem !important;
  }

  @include ph {
    font-size: 1.9rem !important;
  }
}

.hovers {
  font-size: 15px;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.hovers:hover {
  // box-shadow: 0 0 20px 1px cyan;
  transform: scale(1.1);
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

.web_interest {
  border-radius: 10px;
  padding: 18px 10px 10px 0px;
  transition: all 0.3s ease;
}

.web_interest:hover {
  box-shadow: 0 0 40px 4px cyan;
  transform: scale(1.02);
}

.interests {
  border-radius: 10px;
  transition: all 0.3s ease;
  padding: 6px;
}

.interests:hover {
  background-color: rgb(21, 20, 20);
  transform: scale(1.1);
}

#cotact {
  // margin-top: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: animay 3s infinite;
}

#cotact img {
  @include sp {
    width: 345px;
    margin-top: 28px;
  }

  @include ph {
    width: 345px;
    margin-top: 28px;
  }
}

.home_me {
  @include sp {
    margin-top: -25px;
  }

  @include ph {
    margin-top: -25px;
  }
}
</style>
