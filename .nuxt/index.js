import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_85803a1a from 'nuxt_plugin_plugin_85803a1a' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_bootstrapvue_4e2cd3c5 from 'nuxt_plugin_bootstrapvue_4e2cd3c5' // Source: .\\bootstrap-vue.js (mode: 'all')
import nuxt_plugin_axios_4cd428d4 from 'nuxt_plugin_axios_4cd428d4' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_fontawesome_4d539350 from 'nuxt_plugin_fontawesome_4d539350' // Source: .\\fontawesome.js (mode: 'all')
import nuxt_plugin_controlheader_31e42724 from 'nuxt_plugin_controlheader_31e42724' // Source: ..\\plugins\\control-header.js (mode: 'client')
import nuxt_plugin_aos_caeae0de from 'nuxt_plugin_aos_caeae0de' // Source: ..\\plugins\\aos (mode: 'client')
import nuxt_plugin_axios_3566aa80 from 'nuxt_plugin_axios_3566aa80' // Source: ..\\plugins\\axios (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const store = null
  const router = await createRouter(ssrContext, config, { store })

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"DAVIT OFFICIAL","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""},{"name":"format-detection","content":"telephone=no"},{"name":"keywords","content":"davitofficial,davitofficial.info,www.davitofficial,www.davitofficial.info"},{"hid":"og:site_name","property":"og:site_name","content":"DAVIT OFFICIAL"},{"hid":"og:url","property":"og:url","content":"https:\u002F\u002Fdavitofficial.info\u002F"},{"hid":"og:title","property":"og:title","content":"welcome to davit-official"},{"hid":"og:description","property":"og:description","content":"My name is Davit Choun, I'm a website programmer. I have more than 3 years experience in website development. I develop websites with HTML, CSS, Bootstrap, JavaScript,Jquery ,Vuejs ,Nuxtjs ,UniApp,PHP , Larave and ThinkPhp ."},{"hid":"og:image","property":"og:image","content":"_nuxt\u002Fimg\u002Fback-end-developer-4316118-3611968.ec77ec6.webp"},{"hid":"twitter:card","content":"https:\u002F\u002Fdavitofficial.info\u002F"},{"hid":"twitter:url","content":"https:\u002F\u002Fdavitofficial.info\u002F"},{"hid":"twitter:title","content":"welcome to davit-official"},{"hid":"twitter:description","content":"My name is Davit Choun, I'm a website programmer. I have more than 3 years experience in website development. I develop websites with HTML, CSS, Bootstrap, JavaScript,Jquery ,Vuejs ,Nuxtjs ,UniApp,PHP , Larave and ThinkPhp ."},{"hid":"twitter:image","content":"https:\u002F\u002Fdavitofficial.info\u002F_nuxt\u002Fimg\u002Fback-end-developer-4316118-3611968.ec77ec6.webp"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Flogo.png"},{"rel":"stylesheet","type":"font","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Poppins:100,200,400,300,500,600,700"}],"script":[{"src":"https:\u002F\u002Fcode.jquery.com\u002Fjquery-3.5.1.min.js","async":true,"crossorigin":"anonymous"}],"style":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_85803a1a === 'function') {
    await nuxt_plugin_plugin_85803a1a(app.context, inject)
  }

  if (typeof nuxt_plugin_bootstrapvue_4e2cd3c5 === 'function') {
    await nuxt_plugin_bootstrapvue_4e2cd3c5(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_4cd428d4 === 'function') {
    await nuxt_plugin_axios_4cd428d4(app.context, inject)
  }

  if (typeof nuxt_plugin_fontawesome_4d539350 === 'function') {
    await nuxt_plugin_fontawesome_4d539350(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_controlheader_31e42724 === 'function') {
    await nuxt_plugin_controlheader_31e42724(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_aos_caeae0de === 'function') {
    await nuxt_plugin_aos_caeae0de(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_3566aa80 === 'function') {
    await nuxt_plugin_axios_3566aa80(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
