exports.ids = [6];
exports.modules = {

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("cc1b1ac2", content, true, context)
};

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home1_vue_vue_type_style_index_0_id_5dfada7a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home1_vue_vue_type_style_index_0_id_5dfada7a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home1_vue_vue_type_style_index_0_id_5dfada7a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home1_vue_vue_type_style_index_0_id_5dfada7a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home1_vue_vue_type_style_index_0_id_5dfada7a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(24);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(25);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(26);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"KhmerOS_content\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\")}html[data-v-5dfada7a]{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:transparent;background-color:#000;font-family:\"Popins\",sans-serif!important;line-height:1.15}.navbar-nav[data-v-5dfada7a]{text-align:center!important}h1[data-v-5dfada7a],h2[data-v-5dfada7a],h3[data-v-5dfada7a],h4[data-v-5dfada7a],h5[data-v-5dfada7a],h6[data-v-5dfada7a],p[data-v-5dfada7a]{color:gray;font-family:\"Popins\",sans-serif!important}p[data-v-5dfada7a]{color:gray}.full-height[data-v-5dfada7a]{min-height:65vh}.under-nav[data-v-5dfada7a]{background-color:#000;padding-top:65px}.header[data-v-5dfada7a]{background-color:rgba(4,4,4,.9)!important;padding-bottom:1rem;padding-top:1rem;transition:all .5s}.nav-item[data-v-5dfada7a]{font-weight:500}.nav-item>a[data-v-5dfada7a]{color:#000}.nav-item>a[data-v-5dfada7a]:hover,.nuxt-link-exact-active[data-v-5dfada7a]{color:#2c9102!important}.text-custom[data-v-5dfada7a]{color:#94bfff!important}.font-w-bolder[data-v-5dfada7a]{font-weight:700}.font-w-title[data-v-5dfada7a]{font-weight:500}.font-w-header[data-v-5dfada7a]{font-weight:600}.section-content[data-v-5dfada7a]{background-color:#000;padding-bottom:20px}.section-white[data-v-5dfada7a]{background-color:#0f0f0f}.demo[data-v-5dfada7a]{min-height:500px;width:100%}.padding-top[data-v-5dfada7a]{padding-top:80px}.content[data-v-5dfada7a]{padding-bottom:10px;padding-top:150px}.primary-btn[data-v-5dfada7a]{background:-webkit-linear-gradient(0deg,#555da2,#166dac);border:none;border-radius:0;color:#fff;cursor:pointer;display:inline-block;font-weight:500;line-height:42px;padding:2px 30px;position:relative;transition:all .3s ease 0s}.primary-btn[data-v-5dfada7a]:hover{box-shadow:0 2px 1px rgba(0,0,0,.07),0 4px 2px rgba(0,0,0,.07),0 8px 4px rgba(0,0,0,.07),0 16px 8px rgba(0,0,0,.07),0 32px 16px rgba(0,0,0,.07);color:#fff}.text-uppercase[data-v-5dfada7a]{text-transform:uppercase!important}a[data-v-5dfada7a],a[data-v-5dfada7a]:focus,a[data-v-5dfada7a]:hover{outline:0}a[data-v-5dfada7a],a[data-v-5dfada7a]:focus,a[data-v-5dfada7a]:hover{-webkit-text-decoration:none;text-decoration:none}a[data-v-5dfada7a]{-webkit-text-decoration-skip:objects;background-color:transparent;color:#007bff}.footer[data-v-5dfada7a]{background-color:#010927;padding-bottom:20px;padding-top:20px}.image-owner[data-v-5dfada7a]{background-image:linear-gradient(to bottom right,#ff3cac,#562b7c,#2b86c5);-webkit-clip-path:circle(50% at 50% 50%);clip-path:circle(50% at 50% 50%);display:flex;flex-shrink:0;height:calc(250px + 4vw);margin-left:auto;margin-right:auto;width:calc(250px + 4vw)}.image-owner>img[data-v-5dfada7a]{background-size:cover;border-radius:150px;height:calc(230px + 4vw);margin:auto;-o-object-fit:cover;object-fit:cover;position:relative;width:calc(230px + 4vw)}.header-page[data-v-5dfada7a]{background-color:#6eaefd;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-position:50%;background-repeat:no-repeat;background-size:cover;height:auto;text-align:center;width:100%}.single-image[data-v-5dfada7a]{height:300px;max-width:100%;-o-object-fit:contain;object-fit:contain;width:100%}.sb_progress[data-v-5dfada7a]{background-color:#ddd;border:3px solid #eee;border-radius:12px;height:14px!important;position:relative;width:100%}.sb_bar1[data-v-5dfada7a]{background:-webkit-linear-gradient(0deg,#8490ff,#62bdfc);border-radius:5px;position:absolute;width:90%}.sb_bar1[data-v-5dfada7a],.sb_bar2[data-v-5dfada7a]{height:100%!important}.sb_bar2[data-v-5dfada7a]{background:-webkit-linear-gradient(0deg,#8490ff,#62bdfc);border-radius:5px;position:absolute;width:80%}.sb_bar3[data-v-5dfada7a]{background:-webkit-linear-gradient(0deg,#8490ff,#62bdfc);border-radius:5px;position:absolute;width:70%}.sb_bar3[data-v-5dfada7a],.sb_bar4[data-v-5dfada7a]{height:100%!important}.sb_bar4[data-v-5dfada7a]{background:-webkit-linear-gradient(0deg,#8490ff,#62bdfc);border-radius:5px;position:absolute;width:70%}.sb_bar5[data-v-5dfada7a]{background:-webkit-linear-gradient(0deg,#8490ff,#62bdfc);border-radius:5px;position:absolute;width:75%}.sb_bar5[data-v-5dfada7a],.sb_bar6[data-v-5dfada7a]{height:100%!important}.sb_bar6[data-v-5dfada7a]{background:-webkit-linear-gradient(0deg,#8490ff,#62bdfc);border-radius:5px;position:absolute;width:75%}.sb_bar7[data-v-5dfada7a]{background:-webkit-linear-gradient(0deg,#8490ff,#62bdfc);border-radius:5px;position:absolute;width:80%}.sb_bar7[data-v-5dfada7a],.sb_bar8[data-v-5dfada7a]{height:100%!important}.sb_bar8[data-v-5dfada7a]{background:-webkit-linear-gradient(0deg,#8490ff,#62bdfc);border-radius:5px;position:absolute;width:75%}.sb_bar9[data-v-5dfada7a]{background:-webkit-linear-gradient(0deg,#8490ff,#62bdfc);border-radius:5px;position:absolute;width:75%}.sb_bar10[data-v-5dfada7a],.sb_bar9[data-v-5dfada7a]{height:100%!important}.sb_bar10[data-v-5dfada7a]{background:-webkit-linear-gradient(0deg,#8490ff,#62bdfc);border-radius:5px;position:absolute;width:80%}.sb_bar11[data-v-5dfada7a]{background:-webkit-linear-gradient(0deg,#8490ff,#62bdfc);border-radius:5px;position:absolute;width:90%}.sb_bar11[data-v-5dfada7a],.sb_bar12[data-v-5dfada7a]{height:100%!important}.sb_bar12[data-v-5dfada7a]{background:-webkit-linear-gradient(0deg,#8490ff,#62bdfc);border-radius:5px;position:absolute;width:90%}.sb_bar13[data-v-5dfada7a]{background:-webkit-linear-gradient(0deg,#8490ff,#62bdfc);border-radius:5px;position:absolute;width:85%}.sb_bar13[data-v-5dfada7a],.sb_bar14[data-v-5dfada7a]{height:100%!important}.sb_bar14[data-v-5dfada7a]{background:-webkit-linear-gradient(0deg,#8490ff,#62bdfc);border-radius:5px;position:absolute;width:80%}.single-skill p[data-v-5dfada7a]{margin-bottom:5px;margin-top:30px;text-align:right}.sb_label[data-v-5dfada7a]{color:#fff;line-height:30px;padding-left:5px}.image-icon[data-v-5dfada7a]{width:auto}.image-icon.sm[data-v-5dfada7a]{border-radius:20px;height:30px}.image-icon.lg[data-v-5dfada7a]{height:60px}.text-gray[data-v-5dfada7a]{color:gray}input[data-v-5dfada7a]{border-radius:0!important}input.contact[data-v-5dfada7a]{padding:25px}textarea[data-v-5dfada7a]{border-radius:0!important}.font-w-normal[data-v-5dfada7a]{font-weight:400!important}.item h1[data-v-5dfada7a]{font-size:15px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home1.vue?vue&type=template&id=5dfada7a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"container\" style=\"background-color:black;text-align: center;\" data-v-5dfada7a><h1 data-v-5dfada7a>API</h1></div> <div class=\"container\" style=\"background-color:white\" data-v-5dfada7a></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/home1.vue?vue&type=template&id=5dfada7a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home1.vue?vue&type=script&lang=js&
/* harmony default export */ var home1vue_type_script_lang_js_ = ({
  name: "IndexPage",
  layout: "App",
  data() {
    return {
      items: []
    };
  },
  created() {
    this.getuser();
  },
  mounted() {},
  methods: {
    async getuser() {
      let res = await this.$axios.get('/admins').then(res => {
        // this.items = res.data;
        console.log(res.data);
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/home1.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_home1vue_type_script_lang_js_ = (home1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(74)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_home1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5dfada7a",
  "7c8dc6bc"
  
)

/* harmony default export */ var home1 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home1.js.map