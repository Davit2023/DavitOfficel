exports.ids = [8];
exports.modules = {

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/project/_edit.vue?vue&type=template&id=71259998&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"section-content\"><div class=\"full-height text-center\"><h3 class=\"pt-4 text-gray text-uppercase\">" + _vm._ssrEscape("ID" + _vm._s(_vm.slug)) + "</h3> <div class=\"container mt-3\" style=\"font-size: 20px;\"></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/project/_edit.vue?vue&type=template&id=71259998&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/project/_edit.vue?vue&type=script&lang=js&
/* harmony default export */ var _editvue_type_script_lang_js_ = ({
  name: "IndexPage",
  layout: "App",
  validate({
    params
  }) {
    return true;
  },
  data() {
    return {
      slug: this.$route.params.edit
    };
  },
  mounted() {
    this.edit(this.$route.params.edit);
  },
  created() {
    // console.log(this.$route.params.id);
  },
  methods: {
    edit(_id) {
      console.log(_id);
    }
  }
});
// CONCATENATED MODULE: ./pages/project/_edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var project_editvue_type_script_lang_js_ = (_editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/project/_edit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  project_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7a7c37d6"
  
)

/* harmony default export */ var _edit = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_edit.js.map