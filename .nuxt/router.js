import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4457ee57 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _dedaee2c = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _ef0f867e = () => interopDefault(import('..\\pages\\course.vue' /* webpackChunkName: "pages/course" */))
const _0fdc177c = () => interopDefault(import('..\\pages\\home1.vue' /* webpackChunkName: "pages/home1" */))
const _7106c3bf = () => interopDefault(import('..\\pages\\project\\index.vue' /* webpackChunkName: "pages/project/index" */))
const _1b31d8ff = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _640fc91c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _060ade56 = () => interopDefault(import('..\\pages\\project\\_edit.vue' /* webpackChunkName: "pages/project/_edit" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _4457ee57,
    name: "about"
  }, {
    path: "/contact",
    component: _dedaee2c,
    name: "contact"
  }, {
    path: "/course",
    component: _ef0f867e,
    name: "course"
  }, {
    path: "/home1",
    component: _0fdc177c,
    name: "home1"
  }, {
    path: "/project",
    component: _7106c3bf,
    name: "project"
  }, {
    path: "/service",
    component: _1b31d8ff,
    name: "service"
  }, {
    path: "/",
    component: _640fc91c,
    name: "index"
  }, {
    path: "/project/:edit",
    component: _060ade56,
    name: "project-edit"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
