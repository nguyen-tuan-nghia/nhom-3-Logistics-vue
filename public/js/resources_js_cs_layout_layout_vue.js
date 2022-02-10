"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_cs_layout_layout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/components/header.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/components/header.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.Theme();
  },
  methods: {
    logout: function logout() {
      var _this = this;

      this.axios.get('/api/logout').then(function (res) {
        _this.$router.push({
          name: 'login'
        });
      });
    },
    Theme: function Theme() {
      var DarkMode = localStorage.getItem('DarkMode');
      var element = document.querySelector('#accordionSidebar');

      if (DarkMode == 'true') {
        document.getElementById("customSwitch1").checked = true;
        document.getElementById("content").style.backgroundColor = "#3a3b45";
        document.getElementById("navbar").classList.remove("bg-white");
        document.getElementById("navbar").classList.toggle("dark-mode");
        element.classList.remove("bg-gradient-primary");
        element.classList.toggle("dark-mode");
        document.getElementById("footer").classList.remove("bg-white");
        document.getElementById("footer").classList.toggle("dark-mode");
      }
    },
    switchTheme: function switchTheme() {
      var DarkMode = window.localStorage.getItem('DarkMode');
      var element = document.querySelector('#accordionSidebar');

      if (DarkMode == null) {
        document.getElementById("customSwitch1").checked = true;
        document.getElementById("content").style.backgroundColor = "#3a3b45";
        document.getElementById("navbar").classList.remove("bg-white");
        document.getElementById("navbar").classList.toggle("dark-mode");
        element.classList.remove("bg-gradient-primary");
        element.classList.toggle("dark-mode");
        document.getElementById("footer").classList.remove("bg-white");
        document.getElementById("footer").classList.toggle("dark-mode");
        localStorage.setItem('DarkMode', true);
      } else if (DarkMode == 'true') {
        document.getElementById("customSwitch1").checked = false;
        document.getElementById("content").style.backgroundColor = "white";
        document.getElementById("navbar").classList.toggle("bg-white");
        document.getElementById("navbar").classList.remove("dark-mode");
        element.classList.toggle("bg-gradient-primary");
        element.classList.remove("dark-mode");
        document.getElementById("footer").classList.toggle("bg-white");
        document.getElementById("footer").classList.remove("dark-mode");
        localStorage.setItem('DarkMode', false);
      } else if (DarkMode == 'false') {
        document.getElementById("customSwitch1").checked = true;
        document.getElementById("content").style.backgroundColor = "#3a3b45";
        document.getElementById("navbar").classList.remove("bg-white");
        document.getElementById("navbar").classList.toggle("dark-mode");
        element.classList.remove("bg-gradient-primary");
        element.classList.toggle("dark-mode");
        document.getElementById("footer").classList.remove("bg-white");
        document.getElementById("footer").classList.toggle("dark-mode");
        localStorage.setItem('DarkMode', true);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/components/slide.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/components/slide.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      View_order: false,
      Create_order: false,
      View_company: false,
      View_permission: false
    };
  },
  mounted: function mounted() {
    document.getElementById("customer_name").innerHTML = localStorage.getItem("cus_name");
    this.getauth();
  },
  methods: {
    getauth: function getauth() {
      var _this = this;

      this.axios.get("/api/customer/auth").then(function (res) {
        console.log(res.data);

        for (var n in res.data) {
          if (res.data[n].name == "View_order") {
            _this.View_order = true;
          }

          if (res.data[n].name == "Create_order") {
            _this.Create_order = true;
          }

          if (res.data[n].name == "View_company") {
            _this.View_company = true;
          }

          if (res.data[n].name == "View_permission") {
            _this.View_permission = true;
          }
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    sidebarToggle: function sidebarToggle() {
      var element = document.getElementById("accordionSidebar");

      if (element.classList.contains("toggled")) {
        element.classList.remove("toggled");
      } else {
        element.classList.toggle("toggled");
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/layout/layout.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/layout/layout.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_slide_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/slide.vue */ "./resources/js/cs/components/slide.vue");
/* harmony import */ var _components_header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header.vue */ "./resources/js/cs/components/header.vue");
/* harmony import */ var _components_footer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer.vue */ "./resources/js/cs/components/footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Slide: _components_slide_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Header: _components_header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Footer: _components_footer_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/components/header.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/components/header.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.dark-mode {\n  background-color: black;\n  color: white;\n}\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n    margin-top: 10px;\n}\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    transition: .4s;\n}\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    transition: .4s;\n}\ninput:checked + .slider {\n    background-color: #2196F3;\n}\ninput:focus + .slider {\n    box-shadow: 0 0 1px #2196F3;\n}\ninput:checked + .slider:before {\n    transform: translateX(26px);\n}\n\n  /* Rounded sliders */\n.slider.round {\n    border-radius: 34px;\n}\n.slider.round:before {\n    border-radius: 50%;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/components/header.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/components/header.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./header.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/components/header.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/cs/components/footer.vue":
/*!***********************************************!*\
  !*** ./resources/js/cs/components/footer.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_vue_vue_type_template_id_78fd81d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=78fd81d3& */ "./resources/js/cs/components/footer.vue?vue&type=template&id=78fd81d3&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _footer_vue_vue_type_template_id_78fd81d3___WEBPACK_IMPORTED_MODULE_0__.render,
  _footer_vue_vue_type_template_id_78fd81d3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/cs/components/footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/cs/components/header.vue":
/*!***********************************************!*\
  !*** ./resources/js/cs/components/header.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_vue_vue_type_template_id_cba03476___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=cba03476& */ "./resources/js/cs/components/header.vue?vue&type=template&id=cba03476&");
/* harmony import */ var _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.vue?vue&type=script&lang=js& */ "./resources/js/cs/components/header.vue?vue&type=script&lang=js&");
/* harmony import */ var _header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.vue?vue&type=style&index=0&lang=css& */ "./resources/js/cs/components/header.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _header_vue_vue_type_template_id_cba03476___WEBPACK_IMPORTED_MODULE_0__.render,
  _header_vue_vue_type_template_id_cba03476___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/cs/components/header.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/cs/components/slide.vue":
/*!**********************************************!*\
  !*** ./resources/js/cs/components/slide.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _slide_vue_vue_type_template_id_34baeca9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide.vue?vue&type=template&id=34baeca9& */ "./resources/js/cs/components/slide.vue?vue&type=template&id=34baeca9&");
/* harmony import */ var _slide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide.vue?vue&type=script&lang=js& */ "./resources/js/cs/components/slide.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _slide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _slide_vue_vue_type_template_id_34baeca9___WEBPACK_IMPORTED_MODULE_0__.render,
  _slide_vue_vue_type_template_id_34baeca9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/cs/components/slide.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/cs/layout/layout.vue":
/*!*******************************************!*\
  !*** ./resources/js/cs/layout/layout.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layout_vue_vue_type_template_id_406636ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.vue?vue&type=template&id=406636ce& */ "./resources/js/cs/layout/layout.vue?vue&type=template&id=406636ce&");
/* harmony import */ var _layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.vue?vue&type=script&lang=js& */ "./resources/js/cs/layout/layout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _layout_vue_vue_type_template_id_406636ce___WEBPACK_IMPORTED_MODULE_0__.render,
  _layout_vue_vue_type_template_id_406636ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/cs/layout/layout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/cs/components/header.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/cs/components/header.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/components/header.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/cs/components/slide.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/cs/components/slide.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./slide.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/components/slide.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/cs/layout/layout.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/cs/layout/layout.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/layout/layout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/cs/components/header.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/cs/components/header.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./header.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/components/header.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/cs/components/footer.vue?vue&type=template&id=78fd81d3&":
/*!******************************************************************************!*\
  !*** ./resources/js/cs/components/footer.vue?vue&type=template&id=78fd81d3& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_78fd81d3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_78fd81d3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_78fd81d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./footer.vue?vue&type=template&id=78fd81d3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/components/footer.vue?vue&type=template&id=78fd81d3&");


/***/ }),

/***/ "./resources/js/cs/components/header.vue?vue&type=template&id=cba03476&":
/*!******************************************************************************!*\
  !*** ./resources/js/cs/components/header.vue?vue&type=template&id=cba03476& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_cba03476___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_cba03476___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_cba03476___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./header.vue?vue&type=template&id=cba03476& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/components/header.vue?vue&type=template&id=cba03476&");


/***/ }),

/***/ "./resources/js/cs/components/slide.vue?vue&type=template&id=34baeca9&":
/*!*****************************************************************************!*\
  !*** ./resources/js/cs/components/slide.vue?vue&type=template&id=34baeca9& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_slide_vue_vue_type_template_id_34baeca9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_slide_vue_vue_type_template_id_34baeca9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_slide_vue_vue_type_template_id_34baeca9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./slide.vue?vue&type=template&id=34baeca9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/components/slide.vue?vue&type=template&id=34baeca9&");


/***/ }),

/***/ "./resources/js/cs/layout/layout.vue?vue&type=template&id=406636ce&":
/*!**************************************************************************!*\
  !*** ./resources/js/cs/layout/layout.vue?vue&type=template&id=406636ce& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_406636ce___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_406636ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_406636ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./layout.vue?vue&type=template&id=406636ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/layout/layout.vue?vue&type=template&id=406636ce&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/components/footer.vue?vue&type=template&id=78fd81d3&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/components/footer.vue?vue&type=template&id=78fd81d3& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "footer",
      { staticClass: "sticky-footer bg-white", attrs: { id: "footer" } },
      [
        _c("div", { staticClass: "container my-auto" }, [
          _c("div", { staticClass: "copyright text-center my-auto" }, [
            _c("span", [_vm._v("Copyright © Your Website 2021")]),
          ]),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/components/header.vue?vue&type=template&id=cba03476&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/components/header.vue?vue&type=template&id=cba03476& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass:
        "navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow",
      attrs: { id: "navbar" },
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("label", { staticClass: "switch" }, [
        _c("input", {
          attrs: { type: "checkbox", id: "customSwitch1" },
          on: { change: _vm.switchTheme },
        }),
        _vm._v(" "),
        _c("span", { staticClass: "slider round" }),
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("ul", { staticClass: "navbar-nav ml-auto" }, [
        _vm._m(2),
        _vm._v(" "),
        _vm._m(3),
        _vm._v(" "),
        _vm._m(4),
        _vm._v(" "),
        _c("div", { staticClass: "topbar-divider d-none d-sm-block" }),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item dropdown no-arrow" }, [
          _vm._m(5),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "dropdown-menu dropdown-menu-right shadow animated--grow-in",
              attrs: { "aria-labelledby": "userDropdown" },
            },
            [
              _c(
                "router-link",
                {
                  staticClass: "dropdown-item",
                  attrs: { to: { name: "csSetting" } },
                },
                [
                  _c("i", {
                    staticClass: "fas fa-cogs fa-sm fa-fw mr-2 text-gray-400",
                  }),
                  _vm._v(
                    "\n                                    Settings\n                                "
                  ),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown-divider" }),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "dropdown-item", on: { click: _vm.logout } },
                [
                  _c("i", {
                    staticClass:
                      "fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400",
                  }),
                  _vm._v(
                    "\n                                    Logout\n                                "
                  ),
                ]
              ),
            ],
            1
          ),
        ]),
      ]),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-link d-md-none rounded-circle mr-3",
        attrs: { id: "sidebarToggleTop" },
      },
      [_c("i", { staticClass: "fa fa-bars" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "form",
      {
        staticClass:
          "d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search",
      },
      [
        _c("div", { staticClass: "input-group" }, [
          _c("input", {
            staticClass: "form-control bg-light border-0 small",
            attrs: {
              type: "text",
              placeholder: "Search for...",
              "aria-label": "Search",
              "aria-describedby": "basic-addon2",
            },
          }),
          _vm._v(" "),
          _c("div", { staticClass: "input-group-append" }, [
            _c(
              "button",
              { staticClass: "btn btn-primary", attrs: { type: "button" } },
              [_c("i", { staticClass: "fas fa-search fa-sm" })]
            ),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item dropdown no-arrow d-sm-none" }, [
      _c(
        "a",
        {
          staticClass: "nav-link dropdown-toggle",
          attrs: {
            href: "#",
            id: "searchDropdown",
            role: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false",
          },
        },
        [_c("i", { staticClass: "fas fa-search fa-fw" })]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in",
          attrs: { "aria-labelledby": "searchDropdown" },
        },
        [
          _c(
            "form",
            { staticClass: "form-inline mr-auto w-100 navbar-search" },
            [
              _c("div", { staticClass: "input-group" }, [
                _c("input", {
                  staticClass: "form-control bg-light border-0 small",
                  attrs: {
                    type: "text",
                    placeholder: "Search for...",
                    "aria-label": "Search",
                    "aria-describedby": "basic-addon2",
                  },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "input-group-append" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button" },
                    },
                    [_c("i", { staticClass: "fas fa-search fa-sm" })]
                  ),
                ]),
              ]),
            ]
          ),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item dropdown no-arrow mx-1" }, [
      _c(
        "a",
        {
          staticClass: "nav-link dropdown-toggle",
          attrs: {
            href: "#",
            id: "alertsDropdown",
            role: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false",
          },
        },
        [
          _c("i", { staticClass: "fas fa-bell fa-fw" }),
          _vm._v(" "),
          _c("span", { staticClass: "badge badge-danger badge-counter" }, [
            _vm._v("3+"),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
          attrs: { "aria-labelledby": "alertsDropdown" },
        },
        [
          _c("h6", { staticClass: "dropdown-header" }, [
            _vm._v(
              "\n                                    Alerts Center\n                                "
            ),
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item d-flex align-items-center",
              attrs: { href: "#" },
            },
            [
              _c("div", { staticClass: "mr-3" }, [
                _c("div", { staticClass: "icon-circle bg-primary" }, [
                  _c("i", { staticClass: "fas fa-file-alt text-white" }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", [
                _c("div", { staticClass: "small text-gray-500" }, [
                  _vm._v("December 12, 2019"),
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("A new monthly report is ready to download!"),
                ]),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item d-flex align-items-center",
              attrs: { href: "#" },
            },
            [
              _c("div", { staticClass: "mr-3" }, [
                _c("div", { staticClass: "icon-circle bg-success" }, [
                  _c("i", { staticClass: "fas fa-donate text-white" }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", [
                _c("div", { staticClass: "small text-gray-500" }, [
                  _vm._v("December 7, 2019"),
                ]),
                _vm._v(
                  "\n                                        $290.29 has been deposited into your account!\n                                    "
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item d-flex align-items-center",
              attrs: { href: "#" },
            },
            [
              _c("div", { staticClass: "mr-3" }, [
                _c("div", { staticClass: "icon-circle bg-warning" }, [
                  _c("i", {
                    staticClass: "fas fa-exclamation-triangle text-white",
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", [
                _c("div", { staticClass: "small text-gray-500" }, [
                  _vm._v("December 2, 2019"),
                ]),
                _vm._v(
                  "\n                                        Spending Alert: We've noticed unusually high spending for your account.\n                                    "
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item text-center small text-gray-500",
              attrs: { href: "#" },
            },
            [_vm._v("Show All Alerts")]
          ),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item dropdown no-arrow mx-1" }, [
      _c(
        "a",
        {
          staticClass: "nav-link dropdown-toggle",
          attrs: {
            href: "#",
            id: "messagesDropdown",
            role: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false",
          },
        },
        [
          _c("i", { staticClass: "fas fa-envelope fa-fw" }),
          _vm._v(" "),
          _c("span", { staticClass: "badge badge-danger badge-counter" }, [
            _vm._v("7"),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
          attrs: { "aria-labelledby": "messagesDropdown" },
        },
        [
          _c("h6", { staticClass: "dropdown-header" }, [
            _vm._v(
              "\n                                    Message Center\n                                "
            ),
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item d-flex align-items-center",
              attrs: { href: "#" },
            },
            [
              _c("div", { staticClass: "dropdown-list-image mr-3" }, [
                _c("img", {
                  staticClass: "rounded-circle",
                  attrs: { src: "img/undraw_profile_1.svg", alt: "..." },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "status-indicator bg-success" }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "font-weight-bold" }, [
                _c("div", { staticClass: "text-truncate" }, [
                  _vm._v(
                    "Hi there! I am wondering if you can help me with a\n                                            problem I've been having."
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "small text-gray-500" }, [
                  _vm._v("Emily Fowler · 58m"),
                ]),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item d-flex align-items-center",
              attrs: { href: "#" },
            },
            [
              _c("div", { staticClass: "dropdown-list-image mr-3" }, [
                _c("img", {
                  staticClass: "rounded-circle",
                  attrs: { src: "img/undraw_profile_2.svg", alt: "..." },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "status-indicator" }),
              ]),
              _vm._v(" "),
              _c("div", [
                _c("div", { staticClass: "text-truncate" }, [
                  _vm._v(
                    "I have the photos that you ordered last month, how\n                                            would you like them sent to you?"
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "small text-gray-500" }, [
                  _vm._v("Jae Chun · 1d"),
                ]),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item d-flex align-items-center",
              attrs: { href: "#" },
            },
            [
              _c("div", { staticClass: "dropdown-list-image mr-3" }, [
                _c("img", {
                  staticClass: "rounded-circle",
                  attrs: { src: "img/undraw_profile_3.svg", alt: "..." },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "status-indicator bg-warning" }),
              ]),
              _vm._v(" "),
              _c("div", [
                _c("div", { staticClass: "text-truncate" }, [
                  _vm._v(
                    "Last month's report looks great, I am very happy with\n                                            the progress so far, keep up the good work!"
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "small text-gray-500" }, [
                  _vm._v("Morgan Alvarez · 2d"),
                ]),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item d-flex align-items-center",
              attrs: { href: "#" },
            },
            [
              _c("div", { staticClass: "dropdown-list-image mr-3" }, [
                _c("img", {
                  staticClass: "rounded-circle",
                  attrs: {
                    src: "https://source.unsplash.com/Mv9hjnEUHR4/60x60",
                    alt: "...",
                  },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "status-indicator bg-success" }),
              ]),
              _vm._v(" "),
              _c("div", [
                _c("div", { staticClass: "text-truncate" }, [
                  _vm._v(
                    "Am I a good boy? The reason I ask is because someone\n                                            told me that people say this to all dogs, even if they aren't good..."
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "small text-gray-500" }, [
                  _vm._v("Chicken the Dog · 2w"),
                ]),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item text-center small text-gray-500",
              attrs: { href: "#" },
            },
            [_vm._v("Read More Messages")]
          ),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "nav-link dropdown-toggle",
        attrs: {
          href: "#",
          id: "userDropdown",
          role: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false",
        },
      },
      [
        _c(
          "span",
          { staticClass: "mr-2 d-none d-lg-inline text-gray-600 small" },
          [_vm._v("Douglas McGee")]
        ),
        _vm._v(" "),
        _c("img", {
          staticClass: "img-profile rounded-circle",
          attrs: { src: "img/undraw_profile.svg" },
        }),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/components/slide.vue?vue&type=template&id=34baeca9&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/components/slide.vue?vue&type=template&id=34baeca9& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    {
      staticClass:
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",
      attrs: { id: "accordionSidebar" },
    },
    [
      _c(
        "router-link",
        {
          staticClass:
            "sidebar-brand d-flex align-items-center justify-content-center",
          attrs: { to: { name: "csdashboard" } },
        },
        [
          _c("div", { staticClass: "sidebar-brand-icon rotate-n-15" }, [
            _c("i", { staticClass: "fas fa-laugh-wink" }),
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "sidebar-brand-text mx-3",
            attrs: { id: "customer_name" },
          }),
        ]
      ),
      _vm._v(" "),
      _c("hr", { staticClass: "sidebar-divider my-0" }),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "nav-item active" },
        [
          _c(
            "router-link",
            { staticClass: "nav-link", attrs: { to: { name: "csdashboard" } } },
            [
              _c("i", { staticClass: "fas fa-fw fa-tachometer-alt" }),
              _vm._v(" "),
              _c("span", [_vm._v("Dashboard")]),
            ]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("hr", { staticClass: "sidebar-divider" }),
      _vm._v(" "),
      _c("div", { staticClass: "sidebar-heading" }, [_vm._v("Interface")]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "collapse",
            attrs: {
              id: "collapseTwo",
              "aria-labelledby": "headingTwo",
              "data-parent": "#accordionSidebar",
            },
          },
          [
            _c(
              "div",
              { staticClass: "bg-white py-2 collapse-inner rounded" },
              [
                _c("h6", { staticClass: "collapse-header" }, [
                  _vm._v("Orders Components:"),
                ]),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.Create_order,
                        expression: "Create_order",
                      },
                    ],
                    staticClass: "collapse-item",
                    attrs: { to: { name: "addOrder" } },
                  },
                  [_vm._v("Create order")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.View_order,
                        expression: "View_order",
                      },
                    ],
                    staticClass: "collapse-item",
                    attrs: { to: { name: "listOrders" } },
                  },
                  [_vm._v("List orders")]
                ),
              ],
              1
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "collapse",
            attrs: {
              id: "collapseUtilities",
              "aria-labelledby": "headingUtilities",
              "data-parent": "#accordionSidebar",
            },
          },
          [
            _c(
              "div",
              { staticClass: "bg-white py-2 collapse-inner rounded" },
              [
                _c("h6", { staticClass: "collapse-header" }, [
                  _vm._v("Company Components:"),
                ]),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.View_company,
                        expression: "View_company",
                      },
                    ],
                    staticClass: "collapse-item",
                    attrs: { to: { name: "listCustomerCompany" } },
                  },
                  [_vm._v("List Company")]
                ),
              ],
              1
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("hr", { staticClass: "sidebar-divider" }),
      _vm._v(" "),
      _c("div", { staticClass: "sidebar-heading" }, [_vm._v("Addons")]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _vm._m(2),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "collapse",
            attrs: {
              id: "collapsePages",
              "aria-labelledby": "headingPages",
              "data-parent": "#accordionSidebar",
            },
          },
          [
            _c(
              "div",
              { staticClass: "bg-white py-2 collapse-inner rounded" },
              [
                _c("h6", { staticClass: "collapse-header" }, [
                  _vm._v("Permission:"),
                ]),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.View_permission,
                        expression: "View_permission",
                      },
                    ],
                    staticClass: "collapse-item",
                    attrs: { to: { name: "cslistPermission" } },
                  },
                  [_vm._v("List Permission")]
                ),
              ],
              1
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("hr", { staticClass: "sidebar-divider d-none d-md-block" }),
      _vm._v(" "),
      _c("div", { staticClass: "text-center d-none d-md-inline" }, [
        _c("button", {
          staticClass: "rounded-circle border-0",
          attrs: { id: "sidebarToggle" },
          on: { click: _vm.sidebarToggle },
        }),
      ]),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "nav-link collapsed",
        attrs: {
          href: "#",
          "data-toggle": "collapse",
          "data-target": "#collapseTwo",
          "aria-expanded": "true",
          "aria-controls": "collapseTwo",
        },
      },
      [
        _c("i", { staticClass: "fas fa-fw fa-cog" }),
        _vm._v(" "),
        _c("span", [_vm._v("Orders")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "nav-link collapsed",
        attrs: {
          href: "#",
          "data-toggle": "collapse",
          "data-target": "#collapseUtilities",
          "aria-expanded": "true",
          "aria-controls": "collapseUtilities",
        },
      },
      [
        _c("i", { staticClass: "fas fa-fw fa-wrench" }),
        _vm._v(" "),
        _c("span", [_vm._v("Company")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "nav-link collapsed",
        attrs: {
          href: "#",
          "data-toggle": "collapse",
          "data-target": "#collapsePages",
          "aria-expanded": "true",
          "aria-controls": "collapsePages",
        },
      },
      [
        _c("i", { staticClass: "fas fa-fw fa-folder" }),
        _vm._v(" "),
        _c("span", [_vm._v("Folder")]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/layout/layout.vue?vue&type=template&id=406636ce&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/layout/layout.vue?vue&type=template&id=406636ce& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-app", [
    _c(
      "div",
      { attrs: { id: "wrapper" } },
      [
        _c("Slide"),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "d-flex flex-column",
            attrs: { id: "content-wrapper" },
          },
          [
            _c(
              "div",
              { attrs: { id: "content" } },
              [_c("Header"), _vm._v(" "), _c("router-view")],
              1
            ),
            _vm._v(" "),
            _c("Footer"),
          ],
          1
        ),
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "a",
      { staticClass: "scroll-to-top rounded", attrs: { href: "#page-top" } },
      [_c("i", { staticClass: "fas fa-angle-up" })]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);