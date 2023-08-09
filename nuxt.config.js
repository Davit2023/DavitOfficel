export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'DAVIT OFFICIAL',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
            { name:'keywords',content:'davitofficial,davitofficial.info,www.davitofficial,www.davitofficial.info'},

            { hid: 'og:site_name', property:'og:site_name', content:'DAVIT OFFICIAL' },
            { hid: 'og:url', property:'og:url', content:'https://davitofficial.info/' },
            { hid: 'og:title',property:'og:title', content:'welcome to davit-official' },
            { hid: 'og:description',property:'og:description', content:"My name is Davit Choun, I'm a website programmer. I have more than 3 years experience in website development. I develop websites with HTML, CSS, Bootstrap, JavaScript,Jquery ,Vuejs ,Nuxtjs ,UniApp,PHP , Larave and ThinkPhp ." },
            { hid: 'og:image',property:'og:image', content:'https://davitofficial.info/_nuxt/img/back-end-developer-4316118-3611968.ec77ec6.webp' },

            { hid: 'twitter:card', content:'https://davitofficial.info/' },
            { hid: 'twitter:url', content:'https://davitofficial.info/' },
            { hid: 'twitter:title', content:'welcome to davit-official' },
            { hid: 'twitter:description', content:"My name is Davit Choun, I'm a website programmer. I have more than 3 years experience in website development. I develop websites with HTML, CSS, Bootstrap, JavaScript,Jquery ,Vuejs ,Nuxtjs ,UniApp,PHP , Larave and ThinkPhp ." },
            { hid: 'twitter:image', content:'https://davitofficial.info/_nuxt/img/back-end-developer-4316118-3611968.ec77ec6.webp' },

        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', type: 'font', href: 'https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700' }
        ]
    },
    target: 'static',

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/style.css',
        '~/assets/css/style.scss',
    ],

    loading:{
      color: 'green',
      throttle:0,
      height:'1px'
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/control-header.js', mode: 'client' },
        { src: "@/plugins/aos", mode: "client" },
        '~/plugins/axios',
    ],

    purgeCSS: {
        whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
    },

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/fontawesome',
    ],

    fontawesome: {
        component: 'fa',
        icons: {
            solid: true,
            brands: true
        }
    },
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        'nuxt-icon'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        // baseURL: 'https://micro2invest-v1-admin.grabtest.xyz/api',
        baseURL: process.env.API_URL,
        credentials: true
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    layoutTransition: {
        name: "fade",
        mode: "out-in"
    },

}
