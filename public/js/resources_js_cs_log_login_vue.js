"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_cs_log_login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/log/login.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/log/login.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        email: '',
        pass: ''
      },
      errors: {},
      err: ''
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      var payload = {
        email: this.form.email,
        pass: this.form.pass
      };
      this.axios.post('/api/login/customer', payload).then(function (res) {
        localStorage.setItem('cus_name', res.data);

        _this.$router.push({
          name: 'csdashboard'
        });
      })["catch"](function (err) {
        console.log(err.response.data.message);
        console.log(err.response.data.errors);

        if (err.response.status == 422) {
          _this.errors = err.response.data.errors;
        }

        if (err.response.status == 423) {
          _this.errors = err.response.data;
        }
      });
    },
    authProvider: function authProvider(provider) {
      var self = this;
      this.$auth.authenticate(provider).then(function (response) {
        self.socialLogin(provider, response);
      })["catch"](function (err) {
        console.log({
          err: err
        });
      });
    },
    socialLogin: function socialLogin(provider, response) {
      var _this2 = this;

      this.$http.post('/api/social/' + provider, response).then(function (response) {
        _this2.$router.push({
          path: '/'
        });
      })["catch"](function (err) {
        console.log({
          err: err
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/cs/log/login.vue":
/*!***************************************!*\
  !*** ./resources/js/cs/log/login.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_vue_vue_type_template_id_064219fd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=064219fd& */ "./resources/js/cs/log/login.vue?vue&type=template&id=064219fd&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/cs/log/login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_064219fd___WEBPACK_IMPORTED_MODULE_0__.render,
  _login_vue_vue_type_template_id_064219fd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/cs/log/login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/cs/log/login.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/cs/log/login.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/log/login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/cs/log/login.vue?vue&type=template&id=064219fd&":
/*!**********************************************************************!*\
  !*** ./resources/js/cs/log/login.vue?vue&type=template&id=064219fd& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_064219fd___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_064219fd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_064219fd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=template&id=064219fd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/log/login.vue?vue&type=template&id=064219fd&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/log/login.vue?vue&type=template&id=064219fd&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/log/login.vue?vue&type=template&id=064219fd& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-xl-10 col-lg-12 col-md-9" }, [
        _c("div", { staticClass: "card o-hidden border-0 shadow-lg my-5" }, [
          _c("div", { staticClass: "card-body p-0" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", {
                staticClass: "col-lg-6 d-none d-lg-block bg-login-image",
              }),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _c("div", { staticClass: "p-5" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm.errors.message
                    ? _c("div", [_vm._v(_vm._s(_vm.errors.message))])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("form", { staticClass: "user" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.email,
                            expression: "form.email",
                          },
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "email",
                          id: "exampleInputEmail",
                          "aria-describedby": "emailHelp",
                          placeholder: "Enter Email Address...",
                        },
                        domProps: { value: _vm.form.email },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "email", $event.target.value)
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _vm.errors.email
                      ? _c("div", [_vm._v(_vm._s(_vm.errors.email[0]))])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.pass,
                            expression: "form.pass",
                          },
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "password",
                          id: "exampleInputPassword",
                          placeholder: "Password",
                        },
                        domProps: { value: _vm.form.pass },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "pass", $event.target.value)
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _vm.errors.pass
                      ? _c("div", [_vm._v(_vm._s(_vm.errors.pass[0]))])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-primary btn-user btn-block",
                        on: { click: _vm.login },
                      },
                      [
                        _vm._v(
                          "\n                                        Login\n                                    "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-facebook btn-user btn-block",
                        on: {
                          click: function ($event) {
                            return _vm.authProvider("facebook")
                          },
                        },
                      },
                      [
                        _c("i", { staticClass: "fab fa-facebook-f fa-fw" }),
                        _vm._v(
                          " Login with Facebook\n                                    "
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-center" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "small",
                          attrs: { to: { name: "registerCustomer" } },
                        },
                        [_vm._v("Create an Account!")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-center" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "small",
                          attrs: { to: { name: "adlogin" } },
                        },
                        [_vm._v("Employee login here !")]
                      ),
                    ],
                    1
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h1", { staticClass: "h4 text-gray-900 mb-4" }, [
        _vm._v("Welcome Back !"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "custom-control custom-checkbox small" }, [
        _c("input", {
          staticClass: "custom-control-input",
          attrs: { type: "checkbox", id: "customCheck" },
        }),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "custom-control-label",
            attrs: { for: "customCheck" },
          },
          [
            _vm._v(
              "Remember\n                                                Me"
            ),
          ]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);