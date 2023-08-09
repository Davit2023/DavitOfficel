import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5f223637 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _21ea58ca = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _72121e3e = () => interopDefault(import('..\\pages\\course.vue' /* webpackChunkName: "pages/course" */))
const _2aa65f5c = () => interopDefault(import('..\\pages\\home1.vue' /* webpackChunkName: "pages/home1" */))
const _0fc15042 = () => interopDefault(import('..\\pages\\project\\index.vue' /* webpackChunkName: "pages/project/index" */))
const _a6ecae42 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _7eda10fc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _e5b91b14 = () => interopDefault(import('..\\pages\\project\\_edit.vue' /* webpackChunkName: "pages/project/_edit" */))

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
    component: _5f223637,
    name: "about"
  }, {
    path: "/contact",
    component: _21ea58ca,
    name: "contact"
  }, {
    path: "/course",
    component: _72121e3e,
    name: "course"
  }, {
    path: "/home1",
    component: _2aa65f5c,
    name: "home1"
  }, {
    path: "/project",
    component: _0fc15042,
    name: "project"
  }, {
    path: "/service",
    component: _a6ecae42,
    name: "service"
  }, {
    path: "/",
    component: _7eda10fc,
    name: "index"
  }, {
    path: "/project/:edit",
    component: _e5b91b14,
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
