exports.ids = [4];
exports.modules = {

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("bc89a1f0", content, true, context)
};

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_209bcefa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_209bcefa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_209bcefa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_209bcefa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_209bcefa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".timeline ul li:nth-child(odd) .content[data-v-209bcefa]{left:50px}.timeline ul li:nth-child(2n) .content[data-v-209bcefa]{left:-405px}@media screen and (max-width:1020px){.timeline ul li .content[data-v-209bcefa]{width:41vw}.timeline ul li:nth-child(2n) .content[data-v-209bcefa]{left:calc(-41vw - 45px)}.timeline ul li .content[data-v-209bcefa]{background-color:#fff!important;padding:30px;position:relative;top:7px;width:360px}}@media screen and (min-width:960px){.timeline ul li .content[data-v-209bcefa]{background-color:#fff!important;padding:30px;position:relative;top:7px;width:360px}}@media screen and (min-width:560px) and (max-width:959px){.timeline ul li .content[data-v-209bcefa]{width:calc(100vw - 100px)}.timeline ul li:nth-child(2n) .content[data-v-209bcefa]{left:45px}.timeline ul li[data-v-209bcefa]{margin-left:20px!important}.timeline ul li .content[data-v-209bcefa]{background-color:#fff!important;padding:30px;position:relative;top:7px;width:360px}}@media screen and (max-width:559px){.timeline ul li:nth-child(odd) .content[data-v-209bcefa]{left:50px}.timeline ul li .content[data-v-209bcefa]{width:calc(100vw - 100px)}.timeline ul li:nth-child(2n) .content[data-v-209bcefa]{left:45px}.timeline ul li[data-v-209bcefa]{margin-left:20px!important}.timeline ul li .content[data-v-209bcefa]{background-color:#fff!important;padding:30px;position:relative;top:7px}}@media screen and (max-width:390px){.timeline ul li .content[data-v-209bcefa]{width:calc(100vw - 100px)}.timeline ul li:nth-child(2n) .content[data-v-209bcefa],.timeline ul li:nth-child(odd) .content[data-v-209bcefa]{left:30px}.timeline ul li[data-v-209bcefa]{margin-left:20px!important}.timeline ul li .content[data-v-209bcefa]{background-color:#fff!important;padding:16px;position:relative;top:7px}}.timeline ul li .hidden[data-v-209bcefa]{opacity:0}.timeline ul li[data-v-209bcefa]{background:#f9f9ff;list-style-type:none;margin:0 auto;padding-bottom:40px;position:relative;width:2px}.timeline ul li[data-v-209bcefa]:before{background:#8490ff;border:5px solid #eee;border-radius:50%;content:\"\";height:20px;left:50%;position:absolute;top:40%;transform:translateX(-50%);-webkit-transform:translateX(-50%);width:20px}ul[data-v-209bcefa]{display:block;list-style-type:disc;margin:1em 0;padding-left:40px}ol[data-v-209bcefa],ul[data-v-209bcefa]{list-style:none;margin:0;padding:0}li[data-v-209bcefa]{display:list-item;text-align:-webkit-match-parent}.loading-page[data-v-209bcefa]{background:hsla(0,0%,100%,.8);font-family:sans-serif;font-size:30px;height:100%;left:0;padding-top:200px;position:fixed;text-align:center;top:0;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=template&id=209bcefa&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div data-aos=\"fade-in\" data-aos-delay=\"300\" class=\"header-page padding-top\" data-v-209bcefa><h1 class=\"text-white\" data-v-209bcefa>Contact</h1> <p class=\"text-white\" data-v-209bcefa>You can contact me by: <a href=\"tel:+855314128120\" class=\"text-white\" data-v-209bcefa>+855314128120</a></p> <div class=\"padding-top\" data-v-209bcefa></div></div> <div data-aos=\"fade-in\" data-aos-delay=\"300\" class=\"container\" data-v-209bcefa><div class=\"sec-padding\" data-v-209bcefa><div class=\"row\" data-v-209bcefa><div class=\"col-sm-4\" data-v-209bcefa><div class=\"row\" data-v-209bcefa><div class=\"col-sm-10\" data-v-209bcefa><h5 class=\"font-w-normal text-gray\" data-v-209bcefa>Address</h5> <p data-v-209bcefa>Phnom Penh , Cambodia</p></div></div> <div class=\"row\" data-v-209bcefa><div class=\"col-sm-10\" data-v-209bcefa><h5 class=\"text-gray font-w-normal\" data-v-209bcefa>Phone</h5> <p class=\"text-gray\" data-v-209bcefa><a href=\"tel:+855314128120\" class=\"text-gray\" data-v-209bcefa>+855314128120</a></p></div></div> <div class=\"row\" data-v-209bcefa><div class=\"col-sm-10\" data-v-209bcefa><h5 class=\"text-gray font-w-normal\" data-v-209bcefa>Email</h5> <p data-v-209bcefa><a href=\"mailto:choundavit11@gmail.com\" class=\"text-gray\" data-v-209bcefa>choundavit11@gmail.com</a></p></div></div></div> <div class=\"col-sm-4\" data-v-209bcefa><div class=\"form-group mb-4\" data-v-209bcefa><input type=\"text\" name=\"name\" placeholder=\"Enter Your Name\"" + _vm._ssrAttr("value", _vm.name) + " class=\"form-control contact\" data-v-209bcefa></div> <div class=\"form-group mb-4\" data-v-209bcefa><input type=\"text\" name=\"email\" placeholder=\"Enter Email Address\"" + _vm._ssrAttr("value", _vm.email) + " class=\"form-control contact\" data-v-209bcefa></div> <div class=\"form-group\" data-v-209bcefa><input type=\"text\" name=\"message\" placeholder=\"Enter Subject\"" + _vm._ssrAttr("value", _vm.message) + " class=\"form-control contact\" data-v-209bcefa></div></div> <div class=\"col-sm-4\" data-v-209bcefa><textarea name id cols=\"30\" rows=\"8\" placeholder=\"Content\" class=\"form-control\" data-v-209bcefa></textarea></div></div> <div class=\"row\" data-v-209bcefa><div class=\"col-sm-12\" data-v-209bcefa><button class=\"btn primary-btn float-right mt-2\" data-v-209bcefa>Submit</button></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/contact.vue?vue&type=template&id=209bcefa&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=script&lang=js&
/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  name: "IndexPage",
  layout: "App",
  data() {
    return {
      items: [],
      name: '',
      email: '',
      message: ''
    };
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
  }
});
// CONCATENATED MODULE: ./pages/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/contact.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(64)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "209bcefa",
  "3f42dc90"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact.js.map