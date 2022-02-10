"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_views_Post_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Post/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Post/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      selected: [],
      isSelectedAll: false,
      items: ['delete', 'edit'],
      selectPomission: ''
    };
  },
  mounted: function mounted() {
    this.$store.dispatch("GetAllPosts"), this.$store.dispatch("GetAllPostsID");
  },
  computed: {
    GetAllPosts: function GetAllPosts() {
      return this.$store.getters.GetAllPosts;
    },
    GetAllPostsID: function GetAllPostsID() {
      return this.$store.getters.GetAllPostsID;
    }
  },
  methods: {
    selectPomissionFunc: function selectPomissionFunc() {
      var _this = this;

      if (this.selectPomission == 'edit') {
        alert(1);
      }

      if (this.selectPomission == 'delete') {
        var payload = {
          selected: this.selected
        };
        this.axios.post("/api/post/delete-checked", payload).then(function (res) {
          _this.GetAllPosts.data = _this.GetAllPosts.data.filter(function (obj) {
            for (var n in _this.selected.length) {
              return obj.id != _this.selected[n];
            }
          });

          _this.flashMessage.success({
            title: "message",
            message: "delete successfully",
            time: 5000,
            blockClass: "custom-block-class"
          });

          _this.selected = [];
        })["catch"](function (err) {
          _this.flashMessage.erroe({
            title: "message",
            message: "Can`t delete",
            time: 5000,
            blockClass: "custom-block-class"
          });
        });
      }
    },
    checkAll: function checkAll() {
      console.log("check");

      if (this.isSelectedAll == false) {
        this.selected = [];
        this.isSelectedAll = false;
        console.log(this.isSelectedAll);
      } else if (this.isSelectedAll == true) {
        for (var post in this.GetAllPostsID.data) {
          this.selected.push(this.GetAllPostsID.data[post].id);
        }

        this.isSelectedAll = true;
        console.log(this.isSelectedAll);
      }
    },
    select: function select() {
      if (this.GetAllPostsID.data.length == this.selected.length) {
        this.isSelectedAll = true;
      } else {
        this.isSelectedAll = false;
      }
    },
    PageChange: function PageChange(page) {
      this.$store.dispatch("getPagePost", page);
    },
    deletePost: function deletePost(post) {
      var _this2 = this;

      if (confirm("Delete ".concat(post.title))) {
        this.axios.get("/api/post/delete/".concat(post.id)).then(function (res) {
          _this2.GetAllPosts.data = _this2.GetAllPosts.data.filter(function (obj) {
            return obj.id != post.id;
          });

          _this2.flashMessage.success({
            title: "message",
            message: "delete successfully",
            time: 5000,
            blockClass: "custom-block-class"
          });

          _this2.selected = [];
        })["catch"](function (err) {
          _this2.flashMessage.erroe({
            title: "message",
            message: "Can`t delete",
            time: 5000,
            blockClass: "custom-block-class"
          });
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/admin/views/Post/index.vue":
/*!*************************************************!*\
  !*** ./resources/js/admin/views/Post/index.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_2f9b747c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2f9b747c& */ "./resources/js/admin/views/Post/index.vue?vue&type=template&id=2f9b747c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/Post/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2f9b747c___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_2f9b747c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/Post/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/Post/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/admin/views/Post/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Post/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/Post/index.vue?vue&type=template&id=2f9b747c&":
/*!********************************************************************************!*\
  !*** ./resources/js/admin/views/Post/index.vue?vue&type=template&id=2f9b747c& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f9b747c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f9b747c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f9b747c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=2f9b747c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Post/index.vue?vue&type=template&id=2f9b747c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Post/index.vue?vue&type=template&id=2f9b747c&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Post/index.vue?vue&type=template&id=2f9b747c& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    "v-app",
    [
      _c("v-content", [
        _c("div", { staticClass: "mx-auto" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [_vm._v("List post")]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("div", { staticClass: "mx-auto" }),
                _vm._v(" "),
                _c(
                  "v-col",
                  { staticClass: "d-flex", attrs: { cols: "12", sm: "3" } },
                  [
                    _c("v-select", {
                      attrs: { items: _vm.items, label: "Standard" },
                      on: { input: _vm.selectPomissionFunc },
                      model: {
                        value: _vm.selectPomission,
                        callback: function ($$v) {
                          _vm.selectPomission = $$v
                        },
                        expression: "selectPomission",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("table", { staticClass: "table" }, [
                  _c("thead", [
                    _c("tr", [
                      _c(
                        "th",
                        { attrs: { scope: "col" } },
                        [
                          _c("v-checkbox", {
                            attrs: { label: null },
                            on: { change: _vm.checkAll },
                            model: {
                              value: _vm.isSelectedAll,
                              callback: function ($$v) {
                                _vm.isSelectedAll = $$v
                              },
                              expression: "isSelectedAll",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("th", [_vm._v("Sort number")]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [_vm._v("Title")]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [_vm._v("Avata")]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [
                        _vm._v("Keywords"),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.GetAllPosts.data, function (post, index) {
                      return _c("tr", { key: index }, [
                        _c(
                          "td",
                          [
                            _c("v-checkbox", {
                              attrs: { label: null, value: post.id },
                              on: { change: _vm.select },
                              model: {
                                value: _vm.selected,
                                callback: function ($$v) {
                                  _vm.selected = $$v
                                },
                                expression: "selected",
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                  " +
                              _vm._s(
                                _vm.GetAllPosts.to +
                                  index +
                                  1 -
                                  _vm.GetAllPosts.per_page
                              ) +
                              "\n                "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(post.title))]),
                        _vm._v(" "),
                        _c("td", [
                          _c("img", {
                            staticStyle: { width: "150px" },
                            attrs: { src: "/images/" + post.image },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(post.keywords))]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "router-link",
                              { attrs: { to: "/edit-Post/" + post.id } },
                              [_c("v-icon", [_vm._v("mdi-pencil")])],
                              1
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            {
                              on: {
                                click: function ($event) {
                                  return _vm.deletePost(post)
                                },
                              },
                            },
                            [_c("v-icon", [_vm._v("mdi-delete")])],
                            1
                          ),
                        ]),
                      ])
                    }),
                    0
                  ),
                ]),
                _vm._v(" "),
                _c("nav", { attrs: { "aria-label": "..." } }, [
                  _c(
                    "ul",
                    { staticClass: "pagination" },
                    [
                      _c("li", { staticClass: "page-item disabled" }, [
                        _c(
                          "a",
                          {
                            staticClass: "page-link",
                            class: { disabled: _vm.GetAllPosts.prev_page_url },
                            on: {
                              click: function ($event) {
                                return _vm.PageChange(
                                  _vm.GetAllPosts.current_page - 1
                                )
                              },
                            },
                          },
                          [_vm._v("Previous")]
                        ),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.GetAllPosts.last_page, function (n) {
                        return _c(
                          "li",
                          {
                            key: n,
                            staticClass: "page-item",
                            class: {
                              active: _vm.GetAllPosts.current_page == n,
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
                      _c("li", { staticClass: "page-item" }, [
                        _c(
                          "a",
                          {
                            staticClass: "page-link",
                            class: { disabled: _vm.GetAllPosts.next_page_url },
                            attrs: { href: "#" },
                            on: {
                              click: function ($event) {
                                return _vm.PageChange(
                                  _vm.GetAllPosts.current_page + 1
                                )
                              },
                            },
                          },
                          [_vm._v("Next")]
                        ),
                      ]),
                    ],
                    2
                  ),
                ]),
              ],
              1
            ),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);