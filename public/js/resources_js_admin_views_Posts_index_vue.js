"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_views_Posts_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Posts/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Posts/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      selected: [],
      isSelectedAll: false,
      items: ["title", "keywords"],
      selectPomission: '',
      search: '',
      groupBy: ''
    };
  },
  mounted: function mounted() {
    this.$store.dispatch("posts/GetAllPosts");
  },
  computed: {
    GetAllPosts: function GetAllPosts() {
      return this.$store.getters['posts/GetAllPosts'];
    },
    GetAllPostsID: function GetAllPostsID() {
      return this.$store.getters['posts/GetAllPostsID'];
    }
  },
  methods: {
    searchitem: function searchitem() {
      var playload = {
        groupBy: this.groupBy,
        search: this.search
      };
      this.$store.dispatch("posts/searchItem", playload);
    },
    deleteChecked: function deleteChecked() {
      var _this = this;

      if (this.selected.length == 0) {
        alert("You need to select item to delete");
      } else {
        if (confirm('Do you really want to delete this item')) {
          var _loop = function _loop(n) {
            _this.GetAllPosts.data = _this.GetAllPosts.data.filter(function (obj) {
              return obj.id != _this.selected[n];
            });
          };

          for (var n in this.selected) {
            _loop(n);
          }

          var app = new FormData();

          for (var i in this.selected) {
            app.append("selected[]", this.selected[i]);
          }

          this.axios.post("/api/posts/delete-checked", app).then(function (res) {
            _this.flashMessage.success({
              title: "message",
              message: "delete successfully",
              time: 5000,
              blockClass: "custom-block-class"
            });

            _this.selected = [];
          })["catch"](function (err) {
            _this.flashMessage.error({
              title: "message",
              message: "Can`t delete",
              time: 5000,
              blockClass: "custom-block-class"
            });
          });
        }
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
      this.$store.dispatch("posts/getPagePosts", page);
    },
    deletePosts: function deletePosts(posts) {
      var _this2 = this;

      if (confirm("Delete ".concat(posts.title))) {
        this.axios.get("/api/posts/delete/".concat(posts.id)).then(function (res) {
          _this2.GetAllPosts.data = _this2.GetAllPosts.data.filter(function (obj) {
            return obj.id != posts.id;
          });

          _this2.flashMessage.success({
            title: "message",
            message: "delete successfully",
            time: 5000,
            blockClass: "custom-block-class"
          });

          _this2.selected = [];
        })["catch"](function (err) {
          _this2.flashMessage.error({
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

/***/ "./resources/js/admin/views/Posts/index.vue":
/*!**************************************************!*\
  !*** ./resources/js/admin/views/Posts/index.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_2a47aa07___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2a47aa07& */ "./resources/js/admin/views/Posts/index.vue?vue&type=template&id=2a47aa07&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/Posts/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2a47aa07___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_2a47aa07___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/Posts/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/Posts/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/admin/views/Posts/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Posts/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/Posts/index.vue?vue&type=template&id=2a47aa07&":
/*!*********************************************************************************!*\
  !*** ./resources/js/admin/views/Posts/index.vue?vue&type=template&id=2a47aa07& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2a47aa07___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2a47aa07___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2a47aa07___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=2a47aa07& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Posts/index.vue?vue&type=template&id=2a47aa07&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Posts/index.vue?vue&type=template&id=2a47aa07&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Posts/index.vue?vue&type=template&id=2a47aa07& ***!
  \************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "card-header" }, [_vm._v("List posts")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c(
              "v-row",
              [
                _c("v-col", [
                  _c(
                    "a",
                    { on: { click: _vm.deleteChecked } },
                    [_c("v-icon", [_vm._v("mdi-delete")]), _vm._v("Delete")],
                    1
                  ),
                ]),
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
                  _c("th", [_vm._v("Number")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Title")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Avata")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Keywords")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Created at")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Updated at")]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.GetAllPosts.data, function (posts, index) {
                  return _c("tr", { key: index }, [
                    _c("td", [
                      _c("div", { staticClass: "form-check" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.selected,
                              expression: "selected",
                            },
                          ],
                          staticClass: "form-check-input",
                          attrs: { type: "checkbox" },
                          domProps: {
                            value: posts.id,
                            checked: Array.isArray(_vm.selected)
                              ? _vm._i(_vm.selected, posts.id) > -1
                              : _vm.selected,
                          },
                          on: {
                            change: [
                              function ($event) {
                                var $$a = _vm.selected,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = posts.id,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      (_vm.selected = $$a.concat([$$v]))
                                  } else {
                                    $$i > -1 &&
                                      (_vm.selected = $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1)))
                                  }
                                } else {
                                  _vm.selected = $$c
                                }
                              },
                              _vm.select,
                            ],
                          },
                        }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n                    " +
                          _vm._s(
                            _vm._f("minus")(_vm.GetAllPosts.from + index)
                          ) +
                          "\n                  "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(posts.title))]),
                    _vm._v(" "),
                    _c("td", [
                      _c("img", {
                        staticStyle: { width: "150px" },
                        attrs: { src: "/images/" + posts.image },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(posts.keywords))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm._f("dateformat")(posts.created_at))),
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm._f("dateformat")(posts.updated_at))),
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "editPosts",
                                params: { id: posts.id },
                              },
                            },
                          },
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
                              return _vm.deletePosts(posts)
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
                  _c(
                    "li",
                    {
                      staticClass: "page-item",
                      class: {
                        disabled: _vm.GetAllPosts.prev_page_url == null,
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
                                _vm.GetAllPosts.current_page - 1
                              )
                            },
                          },
                        },
                        [_vm._v("Previous")]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.GetAllPosts.last_page, function (n) {
                    return _c(
                      "li",
                      {
                        key: n,
                        staticClass: "page-item",
                        class: { active: _vm.GetAllPosts.current_page == n },
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
                        disabled: _vm.GetAllPosts.next_page_url == null,
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
                                _vm.GetAllPosts.current_page + 1
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
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);