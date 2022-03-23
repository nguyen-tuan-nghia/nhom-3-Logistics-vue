"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_views_User_customer_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/User/customer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/User/customer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      items: ["name", "email"],
      selectPomission: '',
      search: '',
      groupBy: ''
    };
  },
  mounted: function mounted() {
    this.$store.dispatch("customerStatistic/GetAllcustomerStatistic");
  },
  computed: {
    GetAllcustomerStatistic: function GetAllcustomerStatistic() {
      return this.$store.getters['customerStatistic/GetAllcustomerStatistic'];
    },
    GetAllcustomerStatisticID: function GetAllcustomerStatisticID() {
      return this.$store.getters['customerStatistic/GetAllcustomerStatisticID'];
    }
  },
  methods: {
    searchitem: function searchitem() {
      var playload = {
        groupBy: this.groupBy,
        search: this.search
      };
      this.$store.dispatch("customerStatistic/searchItem", playload);
    },
    PageChange: function PageChange(page) {
      this.$store.dispatch("customerStatistic/getPagecustomerStatistic", page);
    }
  }
});

/***/ }),

/***/ "./resources/js/admin/views/User/customer.vue":
/*!****************************************************!*\
  !*** ./resources/js/admin/views/User/customer.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _customer_vue_vue_type_template_id_f9fb085a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer.vue?vue&type=template&id=f9fb085a& */ "./resources/js/admin/views/User/customer.vue?vue&type=template&id=f9fb085a&");
/* harmony import */ var _customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/User/customer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _customer_vue_vue_type_template_id_f9fb085a___WEBPACK_IMPORTED_MODULE_0__.render,
  _customer_vue_vue_type_template_id_f9fb085a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/User/customer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/User/customer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/admin/views/User/customer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./customer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/User/customer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/User/customer.vue?vue&type=template&id=f9fb085a&":
/*!***********************************************************************************!*\
  !*** ./resources/js/admin/views/User/customer.vue?vue&type=template&id=f9fb085a& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_vue_vue_type_template_id_f9fb085a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_vue_vue_type_template_id_f9fb085a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_vue_vue_type_template_id_f9fb085a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./customer.vue?vue&type=template&id=f9fb085a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/User/customer.vue?vue&type=template&id=f9fb085a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/User/customer.vue?vue&type=template&id=f9fb085a&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/User/customer.vue?vue&type=template&id=f9fb085a& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "mx-auto" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header" }, [
          _vm._v("List customer statistic"),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c(
              "v-row",
              [
                _c("v-col"),
                _vm._v(" "),
                _c(
                  "v-col",
                  { staticClass: "d-flex", attrs: { cols: "12", sm: "2" } },
                  [
                    _c("v-select", {
                      attrs: { items: _vm.items, label: "Group by" },
                      model: {
                        value: _vm.groupBy,
                        callback: function ($$v) {
                          _vm.groupBy = $$v
                        },
                        expression: "groupBy",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-col",
                  [
                    _c("v-text-field", {
                      attrs: { label: "search", disabled: _vm.groupBy == "" },
                      on: { input: _vm.searchitem },
                      model: {
                        value: _vm.search,
                        callback: function ($$v) {
                          _vm.search = $$v
                        },
                        expression: "search",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("table", { staticClass: "table" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(
                  _vm.GetAllcustomerStatistic.data,
                  function (customerStatistic, index) {
                    return _c("tr", { key: index }, [
                      _c("td", [
                        _vm._v(
                          "\n                    " +
                            _vm._s(
                              _vm._f("minus")(
                                _vm.GetAllcustomerStatistic.from + index
                              )
                            ) +
                            "\n                  "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(customerStatistic.name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(customerStatistic.email))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(customerStatistic.statistic.order)),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm._f("moneyFormat")(
                              customerStatistic.statistic.cod
                            )
                          ) + " VND"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm._f("moneyFormat")(
                              customerStatistic.statistic.feeship
                            )
                          ) + " VND"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm._f("dateformat")(customerStatistic.created_at)
                          )
                        ),
                      ]),
                    ])
                  }
                ),
                0
              ),
            ]),
            _vm._v(" "),
            _c("nav", { attrs: { "aria-label": "..." } }, [
              _c(
                "ul",
                { staticClass: "pagination" },
                [
                  _c(
                    "li",
                    {
                      staticClass: "page-item",
                      class: {
                        disabled:
                          _vm.GetAllcustomerStatistic.prev_page_url == null,
                      },
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "page-link",
                          on: {
                            click: function ($event) {
                              return _vm.PageChange(
                                _vm.GetAllcustomerStatistic.current_page - 1
                              )
                            },
                          },
                        },
                        [_vm._v("Previous")]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.GetAllcustomerStatistic.last_page, function (n) {
                    return _c(
                      "li",
                      {
                        key: n,
                        staticClass: "page-item",
                        class: {
                          active: _vm.GetAllcustomerStatistic.current_page == n,
                        },
                        attrs: { "aria-current": "page" },
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "page-link",
                            on: {
                              click: function ($event) {
                                return _vm.PageChange(n)
                              },
                            },
                          },
                          [_vm._v(_vm._s(n))]
                        ),
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "page-item",
                      class: {
                        disabled:
                          _vm.GetAllcustomerStatistic.next_page_url == null,
                      },
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "page-link",
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              return _vm.PageChange(
                                _vm.GetAllcustomerStatistic.current_page + 1
                              )
                            },
                          },
                        },
                        [_vm._v("Next")]
                      ),
                    ]
                  ),
                ],
                2
              ),
            ]),
          ],
          1
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Number")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Order")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("COD")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Feeship")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Created at")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);