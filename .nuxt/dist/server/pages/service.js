exports.ids = [10];
exports.modules = {

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("883aa24e", content, true, context)
};

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAuElEQVR4nO3YQQqDUAyE4bn/sXz0XFNUuhCEJo+IY5xv56LFn+TVImBmKSQ/1DciIY+AaAhE0SGdJsL9B2BEr5VDBsklen0l+oyI4Wsnog6BkPXgqluKBmyW9lvCor/2h6f97IHAn/vLhEyTDEHCzGciHLLyRNj0jLBLSAU6BJ7I5mwtsqC2Wm1CKtAh8EQ2Z2uRBbXVahNSgQ5Bw4nMqPgeFIaMihdpt4cooUOePhF1CIT4bbxZQ19sD2EDeXP8iAAAAABJRU5ErkJggg=="

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsUlEQVR4nO3ZXU4CMRiF4e5DvFF074BeiRuQuBmVBNnAaxo7kRGGv6/tTKfnSUikFzP22Dkt4pyIiIiIiIiISEzABFgAW+qxBZ6BhxjhranXGrixBOhXnvdiulBh/FyBZZj7zHKh5rGtJrwGcBvmvnHXataxqxTW+Xdd4N/G8h1+vgemwFMY7yxiBix5gEc2ls/wOlnEVB5ga2OhXbhd47Oov1gCOQPc21j4K9yu8VYR1x6g7zxv0hHgoXEFuBOK3xgIj+ckvF53Ajw0voj6ly18BT4CX+z7OLKJTA9dd4iSBxjG/QYxC4/zBpgDd+EoMw/jzfGmFZ4CrAipVmAtUIADCbB2TgHa9LeEC6cAjRSgkQIcaoDAO7DK9T73/U/NP0aAK+At1/vc9z81/7NpF/6lAK+UrQNju7QDU90vZYBHO8rq0g5Mdb9kAdYCBVhIB9LzObD4DqTnc6CVOjARdaDRaAOk9A7sG+rAMox2Beaic+CZdA400jkwEXWgkf4fWEoHxqbPwiOhDjSq5hyIvhdG3wuPkTrQSAEaKcChBFg7pwBtrCtZRERERERERMQ1fgCmjnQxJux5dwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC0klEQVR4nO2Zy0sVYRjGP8WMaKH/QNI6CKJFbloEKt0kCooIKtom0Upq0WWjq4iSKFzYpkULDy1aBUEIeTYVQXbbKZQFalDkIsFuv3jpOZ0vmTNnzjifzIg/OOD7fLfnmW9mzpzRuRUEGCM9ZZcXWCYuL6Q1xFqQ1bojpL9Iy3kLkppcBnHLHLPqgqTF5ShIOXUKGM88SJKjliR8rT5ksQPAOuASMFXPZJIgGTMFXDSPSYJcrWcy4QEJyZV6i7cB3/XZudRUmiCNjKmHeZK3RfMa17FX64/FmYo7VLXGZAXVL+feuE796jQUIgiwC5ikMb4Bw0Cz5hiS3h8XZESd+uKCJDxyUUEaDeFzQHP0qR6JW3xcnboDBanQ1MA85zXmmuruut8rwJw6bYozRQxJgiQNYQCHNey+6g7Vsy4KoN07J5tzFGS7hr1W3SSPRnvUgE41TkS0pTEQFeS35JYG5mnTmK+eNiFtR9SAk2ocDRjkLemZ9eYZlXYiauFBNQ4EDGK7/iZFiE/AcW+eAemDUQvfq5Uyb28+qJ49pajGV2rsjGhL+/j9OFCQTs3/cmlDM7BQ806QnYGbwBd9SsvQ2+V14b87LLBZDXOhQmidmajTrlHd0HVjdPji7sx+ha1ckLLkHl88K/F24CAlz9d4Wt0wr9LP+OItiedcQaD6DHbDFx9JPOgKAnBInh/64rTELYEXz+SuZZhXeX5XETbqGegnsN4V52JvledfwAYTtqnfZMgQWQcxvDc9W604quKBC0yWdy3DPKvtiBWXVVx3BYPq7/cLVtxVcdoVDKq/3+9Y8VxFlysYQJe8P7FinuIzH/rV5orh/v1RUNAtei1IEoD9wEfgA7DXFXVH+BugwnSgNWbWgiTFTiftij1d73GBd2RRW9/qCgjwuRLkmYL0J/rfXE4AWrz3W+9N6PHeyRaVU5V0+4Cn3mlWBH4AL4BjFuIPyEewTHS975cAAAAASUVORK5CYII="

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACYklEQVR4nO2Zu2sUURTGryDptFJCoohVCosI2kpQEF//hohl0CJmwVISrQVFC9HWwkqw8U9ILxZB2ZCFxEdhcnfn+05x5MqszM7eSRZnZ+YO3g9Osfdx9v7umXvOPIwJTKo6R1KzJiLXTeiy1s6r6pHhbxG5kQchuTzsd2PdHBOSACwC+Abgo7X2tGsj2cmDAHjm+lT1BID3AH6SvGhCgsgs9juANZJdD8gugHUAvVzbYqMQ1tpTWYh/NQC7qnpsxLmI3CK5Vdb5QSYiV4fXOYAPU/D5YmyXqoYg+Sl7qFV1FsBOCX9fVfW4D+TPAFOjSL4pcVmtFTmtBcTVBJL3SL4EsOdZIEiupGl51qVeAH3PuB0Az12/iFyrHWSC3X7gmbN82LzgQFR1Lj8njUy7QKynart03ToQkqueOZ3gQNxtBsklkndJbhcc9lUXmTQSnbQtP+4HyYeu/o1cjm1LvyRfFTmtFQTAed9Oc/I6spckyUKjIKp6lORGiWhoahuqOtMkiEunX8qCANhPkuRcYyBOg8HgbBYmrdSPSH72LPgXydfpc8hfCJc0xhw3cdj7/f4Zkpsk36rqSdcG4I4H5Gkmku8AWBG54nXaBEi6uJHnCZKXPCC3s2OGT5MicjkYkII6ozmQC/lxJO8DkGBBJlXheiNIQ2KMSGBijEhg4n8TEbbMTARh81FgWyNiDlhjBGEAEeIhEan6bXwV1h0DEZGbvq9FAVvXfW+cQkmKCl8se1BDUetAVHUGwJPs5+Ip2DaAx2NvDquU+8OqshGA9TpBehWC9GoDqbpGmKioKDNt/QbXmWrEWCN8vAAAAABJRU5ErkJggg=="

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB3klEQVR4nO2Zu0oDQRSGx0unEEIQJbZWik/gA4iXMuAbWKidjQ/gG/gEprGwUQvFayM2giAoKKQOXgpBrbyQTw7OQog7m41Zds/CfO3OnszHP3Nmwhrj8Xg8Hk+CABPALvCGPt7s3MbjSLyin9dIGWsr7ABlowyg3DzHqIHBclInEQCMBqkYF0FuRjm0m6cXSRl8IsrAJ6IMfCLKwCeiDH7vgo3cX1EEYNJoFwEGgRXgBKgDX8AzcATMxCmQuQiwADw6/odcAgX1IsCarH2HxBVQjFsoMxGbRMMhcQ2UOimWiYjdEw8OiXtgpNOCWYnIxg7jDhhu824BmNUicuwQGWvzXtE2gCMtItJiw5iLeKdkG4DwpEXkwyGy4Rg/ZBtAwIcWETnswqiFjB0GblvG1VsHvdgHoymLyIntoibJyDKTPWMbQCt/9si2fbCXlgzQB+zTHctS6IJ0kUNvsUmi2mW9BzmHpNg7+ZVoAJUg2rOEJpmFxFrzGp1PaKJpL6dK2IZbR5/EAXBor/Sf9tCU7rYMDER1D0nmNOE981+Jqow32rASmzEltoB+ow2gJ/dJCMBSrpMIcFwp8iUhxPg6rHc5NQOc515CAKaA71xLGAswbZOR7+M3wCrQm+SP/ABUE/3Q5DNiMQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGklEQVR4nO3azWrUYBQG4OBP3bi1W0XsQuoNqHgB7roQSsWdbr0CQdz4dxFehODGVgQtIi5EwSqCq9YZBX8XgghVHvk0A2HMpF8mM0kG865COMmch5MvITOTJF26dCkVzOEm3mlf+rgeeoyB3ND+XIuBBHXI8aRlwYm0t35M8Z+k24+wXrRdd2T6iy4MzeJh0fZMQNoYZSFtT/LfQZKWRgdpWbRtItiDXTMJwX5cwiv8wjY2whO7MQiO4RlWIhs4hNc5N6BbZSZjCpCAGOQ+Fgtq9+FpVcS0ICtDTX0tqL0Yg/D3FeJU7WskncQgPzA/ou7xEGJ9BOI2HjQBWcRHfE8Pe5GHwYchyHvszkGEfKkdkjlmPkXkYkJz/s0F7B1ChHxqDJKD2chisCo/n/F8aN9qo5BRGBxBT3zONw7JwbwsiXgSnvitgGQwYSJlsoYDE+tvQpCFgkn00sW9iTe4g7OxD0Z1QXZAhNvu0XHPXRtk2ohaIBGX00Km9jKWy37G1CFlJoEr6f6fONcaiPKTyGa77GRMA1J2TeBM2nw2pSZj0pBxF3ZVjElCcDj2chpx/HIOJuoymzTk3riICMxSnZBvVRA7YN7WCVmriijAbFXtL7oQB9N3jDCZu2HNjGHInm8pTAJbOF21v3KFDUUHmeGJ9NPa6K8x6wpODm4uMcXhd+y252oMZC7FDCbTpvQCIuoPA126dEmy+Q2PWSgQremqZgAAAABJRU5ErkJggg=="

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_style_index_0_id_b66117c6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_style_index_0_id_b66117c6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_style_index_0_id_b66117c6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_style_index_0_id_b66117c6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_service_vue_vue_type_style_index_0_id_b66117c6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".course-head{font-weight:700}.box{align-items:center;display:flex;height:205px;justify-content:center;margin-top:8px;overflow:hidden;width:100%}.box-img-service{height:35px!important;margin-top:24px;transition:all .19s ease;width:35px!important}.my_course{background-color:#0f0f0f;border-radius:10px;height:290px;overflow:hidden;transition:all .3s ease-out 0s}.p-1{color:#fff}.my_course:hover{background-color:#191919}.my_course:hover .box-icon2{transform:translate(-10px,-10px)}.box-icon1{background-color:hsla(0,0%,100%,.15);margin-left:-10px;margin-top:-10px}.box-icon1,.box-icon2{height:80px;width:80px}.box-icon2{background-color:#18d26e;position:absolute;transition:all .3s ease-out 0s}.title-service{font-size:24px!important;font-weight:700}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/service.vue?vue&type=template&id=b66117c6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"section-content\"><div class=\"full-height text-center\"><h3 class=\"pt-4 mt-5 text-gray text-uppercase course-head\">MY SERVICES</h3> <div class=\"container mt-3\" style=\"padding-bottom: 60px;\"><div class=\"row pt-4\"><div data-aos=\"fade-left\" data-aos-delay=\"300\" class=\"col-lg-4 col-md-4 col-sm-6 col-12 p-2\"><div class=\"my_course\"><div class=\"box\"><div class=\"box-icon1\"></div> <div class=\"box-icon2\"><img" + _vm._ssrAttr("src", __webpack_require__(76)) + " alt class=\"image-icon lg mb-2 box-img-service\"></div></div> <div style=\"margin-top: -61px;\"><h3 class=\"text-white mt-3 title-service\">WEB DESIGN</h3></div></div></div> <div data-aos=\"fade-left\" data-aos-delay=\"500\" class=\"col-lg-4 col-md-4 col-sm-6 col-12 p-2\"><div class=\"my_course\"><div class=\"box\"><div class=\"box-icon1\"></div> <div class=\"box-icon2\"><img" + _vm._ssrAttr("src", __webpack_require__(77)) + " alt class=\"image-icon lg mb-2 box-img-service\"></div></div> <div style=\"margin-top: -61px;\"><h3 class=\"text-white mt-3 title-service\">DEVELOP WEB SITE</h3></div></div></div> <div data-aos=\"fade-left\" data-aos-delay=\"700\" class=\"col-lg-4 col-md-4 col-sm-6 col-12 p-2\"><div class=\"my_course\"><div class=\"box\"><div class=\"box-icon1\"></div> <div class=\"box-icon2\"><img" + _vm._ssrAttr("src", __webpack_require__(78)) + " alt class=\"image-icon lg mb-2 box-img-service\"></div></div> <div style=\"margin-top: -61px;\"><h3 class=\"text-white mt-3 title-service\">DEVELOP POS</h3></div></div></div> <div data-aos=\"fade-left \" data-aos-delay=\"900\" class=\"col-lg-4 col-md-4 col-sm-6 col-12 p-2\"><div class=\"my_course\"><div class=\"box\"><div class=\"box-icon1\"></div> <div class=\"box-icon2\"><img" + _vm._ssrAttr("src", __webpack_require__(79)) + " alt class=\"image-icon lg mb-2 box-img-service\"></div></div> <div style=\"margin-top: -61px;\"><h3 class=\"text-white mt-3 title-service\">DEVELOPMENT</h3></div></div></div> <div data-aos=\"fade-left \" data-aos-delay=\"1100\" class=\"col-lg-4 col-md-4 col-sm-6 col-12 p-2\"><div class=\"my_course\"><div class=\"box\"><div class=\"box-icon1\"></div> <div class=\"box-icon2\"><img" + _vm._ssrAttr("src", __webpack_require__(80)) + " alt class=\"image-icon lg mb-2 box-img-service\"></div></div> <div style=\"margin-top: -61px;\"><h3 class=\"text-white mt-3 title-service\">SUPPORT</h3></div></div></div> <div data-aos=\"fade-left\" data-aos-delay=\"1300\" class=\"col-lg-4 col-md-4 col-sm-6 col-12 p-2\"><div class=\"my_course\"><div class=\"box\"><div class=\"box-icon1\"></div> <div class=\"box-icon2\"><img" + _vm._ssrAttr("src", __webpack_require__(81)) + " alt class=\"image-icon lg mb-2 box-img-service\"></div></div> <div style=\"margin-top: -61px;\"><h3 class=\"text-white mt-3 title-service\">MAINTENANCE</h3></div></div></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/service.vue?vue&type=template&id=b66117c6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/service.vue?vue&type=script&lang=js&
/* harmony default export */ var servicevue_type_script_lang_js_ = ({
  name: "IndexPage",
  layout: "App",
  data() {
    return {
      items: []
    };
  },
  created() {
    // this.getuser()
  },
  mounted() {},
  methods: {
    // async getuser() {
    //   let res = await this.$axios.get('/getitemuser')
    //     .then((res) => {
    //       // this.items = res.data;
    //       console.log(res.data)
    //     })
    // }
  }
});
// CONCATENATED MODULE: ./pages/service.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_servicevue_type_script_lang_js_ = (servicevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/service.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(82)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_servicevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6c3ba6b6"
  
)

/* harmony default export */ var service = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=service.js.map