"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_views_order_yourOrder_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/order/yourOrder.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/order/yourOrder.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _ref;

    return _ref = {
      selected: [],
      isSelectedAll: false,
      items: ["id"],
      selectPomission: "",
      search: "",
      groupBy: "",
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      menu: false,
      menu2: false,
      dialog: false,
      detail: {
        id: "",
        from_name: "",
        from_phone: "",
        to_name: "",
        to_phone: "",
        from_city_name: "",
        from_district_name: "",
        from_wards_name: "",
        from_address: "",
        to_city_name: "",
        to_district_name: "",
        to_wards_name: "",
        to_address: "",
        total_weight: "",
        total_fee: "",
        cod: ""
      }
    }, _defineProperty(_ref, "items", []), _defineProperty(_ref, "status", ""), _ref;
  },
  mounted: function mounted() {
    this.$store.dispatch("shipper_order/ShipperGetAllOrder");
  },
  computed: {
    GetAllOrder: function GetAllOrder() {
      return this.$store.getters["shipper_order/GetAllOrder"];
    }
  },
  methods: {
    orderStatus: function orderStatus(order) {
      var _this = this;

      this.status = document.getElementById("select_status_".concat(order.id)).value;
      this.axios.post("/api/order/changeStatus", {
        id: order.id,
        status: this.status
      }).then(function (res) {
        _this.flashMessage.success({
          title: "Message",
          message: "Change status successfully",
          time: 5000,
          blockClass: "custom-block-class"
        });
      })["catch"](function (err) {
        console.log(err);

        if (err.response.status == 422) {
          _this.flashMessage.error({
            title: "message",
            message: "Change status faild",
            time: 5000,
            blockClass: "custom-block-class"
          });
        }
      });
    },
    findDate: function findDate() {
      var playload = {
        date: this.date,
        date2: this.date2
      };
      this.$store.dispatch("shipper_order/ShippersearchDate", playload);
    },
    searchitem: function searchitem() {
      var playload = {
        groupBy: this.groupBy,
        search: this.search
      };
      this.$store.dispatch("shipper_order/ShippersearchItem", playload);
    },
    PageChange: function PageChange(page) {
      this.$store.dispatch("shipper_order/ShippergetPageOrder", page);
    },
    detailorder: function detailorder(order) {
      var _this2 = this;

      this.dialog = true;
      this.detail.id = order.id;
      this.detail.from_name = order.from_name;
      this.detail.from_phone = order.from_phone;
      this.detail.to_name = order.to_name;
      this.detail.to_phone = order.to_phone;
      this.detail.from_city_name = order.from_city_name;
      this.detail.from_district_name = order.from_district_name;
      this.detail.from_wards_name = order.from_wards_name;
      this.detail.from_address = order.from_address;
      this.detail.to_city_name = order.to_city_name;
      this.detail.to_district_name = order.to_district_name;
      this.detail.to_wards_name = order.to_wards_name;
      this.detail.to_address = order.to_address;
      this.detail.total_weight = order.total_weight;
      this.detail.total_fee = order.total_fee;
      this.detail.cod = order.cod;
      this.axios.get("/api/shipper/order/detail/".concat(order.id)).then(function (res) {
        _this2.items = res.data;
      })["catch"](function (err) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/order/yourOrder.vue?vue&type=style&index=0&id=35b85d6b&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/order/yourOrder.vue?vue&type=style&index=0&id=35b85d6b&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.status[data-v-35b85d6b] {\n    color: white;\n    border-radius: 25px;\n    padding: 10px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/order/yourOrder.vue?vue&type=style&index=0&id=35b85d6b&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/order/yourOrder.vue?vue&type=style&index=0&id=35b85d6b&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_yourOrder_vue_vue_type_style_index_0_id_35b85d6b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./yourOrder.vue?vue&type=style&index=0&id=35b85d6b&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/order/yourOrder.vue?vue&type=style&index=0&id=35b85d6b&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_yourOrder_vue_vue_type_style_index_0_id_35b85d6b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_yourOrder_vue_vue_type_style_index_0_id_35b85d6b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/admin/views/order/yourOrder.vue":
/*!******************************************************!*\
  !*** ./resources/js/admin/views/order/yourOrder.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yourOrder_vue_vue_type_template_id_35b85d6b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yourOrder.vue?vue&type=template&id=35b85d6b&scoped=true& */ "./resources/js/admin/views/order/yourOrder.vue?vue&type=template&id=35b85d6b&scoped=true&");
/* harmony import */ var _yourOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yourOrder.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/order/yourOrder.vue?vue&type=script&lang=js&");
/* harmony import */ var _yourOrder_vue_vue_type_style_index_0_id_35b85d6b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./yourOrder.vue?vue&type=style&index=0&id=35b85d6b&scoped=true&lang=css& */ "./resources/js/admin/views/order/yourOrder.vue?vue&type=style&index=0&id=35b85d6b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _yourOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _yourOrder_vue_vue_type_template_id_35b85d6b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _yourOrder_vue_vue_type_template_id_35b85d6b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "35b85d6b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/order/yourOrder.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/order/yourOrder.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/admin/views/order/yourOrder.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yourOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./yourOrder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/order/yourOrder.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yourOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/order/yourOrder.vue?vue&type=style&index=0&id=35b85d6b&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/admin/views/order/yourOrder.vue?vue&type=style&index=0&id=35b85d6b&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_yourOrder_vue_vue_type_style_index_0_id_35b85d6b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./yourOrder.vue?vue&type=style&index=0&id=35b85d6b&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/order/yourOrder.vue?vue&type=style&index=0&id=35b85d6b&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/admin/views/order/yourOrder.vue?vue&type=template&id=35b85d6b&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/admin/views/order/yourOrder.vue?vue&type=template&id=35b85d6b&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_yourOrder_vue_vue_type_template_id_35b85d6b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_yourOrder_vue_vue_type_template_id_35b85d6b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_yourOrder_vue_vue_type_template_id_35b85d6b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./yourOrder.vue?vue&type=template&id=35b85d6b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/order/yourOrder.vue?vue&type=template&id=35b85d6b&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/order/yourOrder.vue?vue&type=template&id=35b85d6b&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/order/yourOrder.vue?vue&type=template&id=35b85d6b&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "container-fluid" },
    [
      _c("div", { staticClass: "mx-auto" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("List Order")]),
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
                    { attrs: { sm: "2", md: "2" } },
                    [
                      _c(
                        "v-menu",
                        {
                          ref: "menu",
                          attrs: {
                            "close-on-content-click": false,
                            "return-value": _vm.date,
                            transition: "scale-transition",
                            "offset-y": "",
                            "min-width": "auto",
                          },
                          on: {
                            "update:returnValue": function ($event) {
                              _vm.date = $event
                            },
                            "update:return-value": function ($event) {
                              _vm.date = $event
                            },
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function (ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-text-field",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          attrs: {
                                            label: "From data",
                                            "prepend-icon": "mdi-calendar",
                                            readonly: "",
                                          },
                                          model: {
                                            value: _vm.date,
                                            callback: function ($$v) {
                                              _vm.date = $$v
                                            },
                                            expression: "date",
                                          },
                                        },
                                        "v-text-field",
                                        attrs,
                                        false
                                      ),
                                      on
                                    )
                                  ),
                                ]
                              },
                            },
                          ]),
                          model: {
                            value: _vm.menu,
                            callback: function ($$v) {
                              _vm.menu = $$v
                            },
                            expression: "menu",
                          },
                        },
                        [
                          _vm._v(" "),
                          _c(
                            "v-date-picker",
                            {
                              attrs: { "no-title": "", scrollable: "" },
                              model: {
                                value: _vm.date,
                                callback: function ($$v) {
                                  _vm.date = $$v
                                },
                                expression: "date",
                              },
                            },
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { text: "", color: "primary" },
                                  on: {
                                    click: function ($event) {
                                      _vm.menu = false
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                                    Cancel\n                                "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { text: "", color: "primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$refs.menu.save(_vm.date)
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                                    OK\n                                "
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { sm: "2", md: "2" } },
                    [
                      _c(
                        "v-menu",
                        {
                          ref: "menu2",
                          attrs: {
                            "close-on-content-click": false,
                            "return-value": _vm.date2,
                            transition: "scale-transition",
                            "offset-y": "",
                            "min-width": "auto",
                          },
                          on: {
                            "update:returnValue": function ($event) {
                              _vm.date2 = $event
                            },
                            "update:return-value": function ($event) {
                              _vm.date2 = $event
                            },
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function (ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-text-field",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          attrs: {
                                            label: "To date",
                                            "prepend-icon": "mdi-calendar",
                                            readonly: "",
                                          },
                                          model: {
                                            value: _vm.date2,
                                            callback: function ($$v) {
                                              _vm.date2 = $$v
                                            },
                                            expression: "date2",
                                          },
                                        },
                                        "v-text-field",
                                        attrs,
                                        false
                                      ),
                                      on
                                    )
                                  ),
                                ]
                              },
                            },
                          ]),
                          model: {
                            value: _vm.menu2,
                            callback: function ($$v) {
                              _vm.menu2 = $$v
                            },
                            expression: "menu2",
                          },
                        },
                        [
                          _vm._v(" "),
                          _c(
                            "v-date-picker",
                            {
                              attrs: { "no-title": "", scrollable: "" },
                              model: {
                                value: _vm.date2,
                                callback: function ($$v) {
                                  _vm.date2 = $$v
                                },
                                expression: "date2",
                              },
                            },
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { text: "", color: "primary" },
                                  on: {
                                    click: function ($event) {
                                      _vm.menu2 = false
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                                    Cancel\n                                "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { text: "", color: "primary" },
                                  on: {
                                    click: [
                                      function ($event) {
                                        return _vm.$refs.menu2.save(_vm.date2)
                                      },
                                      _vm.findDate,
                                    ],
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                                    OK\n                                "
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "d-flex", attrs: { sm: "1" } },
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
                    { attrs: { sm: "3" } },
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
              _vm._l(_vm.GetAllOrder.data, function (Order, index) {
                return _c("div", { key: index, staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col" }, [
                        _c("h5", { staticClass: "card-title" }, [
                          _c("span", [_vm._v("ID: " + _vm._s(Order.id))]),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                    Sender: name: " +
                              _vm._s(Order.to_name) +
                              " -\n                                    phone: " +
                              _vm._s(Order.to_phone) +
                              "\n                                "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                    Recipient: name:\n                                    " +
                              _vm._s(Order.to_name) +
                              " - phone:\n                                    " +
                              _vm._s(Order.to_phone) +
                              "\n                                "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "card-text" }, [
                          _vm._v(
                            "\n                                    Send from address:\n                                    "
                          ),
                          _c("span", [_vm._v(_vm._s(Order.from_city_name))]),
                          _vm._v("\n                                    /"),
                          _c("span", [
                            _vm._v(_vm._s(Order.from_district_name)),
                          ]),
                          _vm._v("\n                                    /"),
                          _c("span", [_vm._v(_vm._s(Order.from_wards_name))]),
                          _vm._v("\n                                    /"),
                          _c("span", [_vm._v(_vm._s(Order.from_address))]),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                    Send to address:\n                                    "
                          ),
                          _c("span", [_vm._v(_vm._s(Order.to_city_name))]),
                          _vm._v("\n                                    /"),
                          _c("span", [_vm._v(_vm._s(Order.to_district_name))]),
                          _vm._v("\n                                    /"),
                          _c("span", [_vm._v(_vm._s(Order.to_wards_name))]),
                          _vm._v("\n                                    /"),
                          _c("span", [_vm._v(_vm._s(Order.to_address))]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            staticClass: "form-select",
                            attrs: {
                              "aria-label": "Default select example",
                              id: "select_status_" + Order.id,
                            },
                            on: {
                              change: function ($event) {
                                return _vm.orderStatus(Order)
                              },
                            },
                          },
                          [
                            _c(
                              "option",
                              {
                                attrs: { value: "0" },
                                domProps: { selected: Order.status == 0 },
                              },
                              [
                                _vm._v(
                                  "\n                                        Delete\n                                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                attrs: { value: "1" },
                                domProps: { selected: Order.status == 1 },
                              },
                              [
                                _vm._v(
                                  "\n                                        Accept\n                                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                attrs: { value: "2" },
                                domProps: { selected: Order.status == 2 },
                              },
                              [
                                _vm._v(
                                  "\n                                        Delivering\n                                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                attrs: { value: "3" },
                                domProps: { selected: Order.status == 3 },
                              },
                              [
                                _vm._v(
                                  "\n                                        Delivery successful\n                                    "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              {
                                attrs: { value: "4" },
                                domProps: { selected: Order.status == 4 },
                              },
                              [
                                _vm._v(
                                  "\n                                        Refund\n                                    "
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col" },
                        [
                          _c(
                            "v-icon",
                            {
                              on: {
                                click: function ($event) {
                                  return _vm.detailorder(Order)
                                },
                              },
                            },
                            [_vm._v("mdi-pencil")]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ])
              }),
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
                          disabled: _vm.GetAllOrder.prev_page_url == null,
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
                                  _vm.GetAllOrder.current_page - 1
                                )
                              },
                            },
                          },
                          [_vm._v("Previous")]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.GetAllOrder.last_page, function (n) {
                      return _c(
                        "li",
                        {
                          key: n,
                          staticClass: "page-item",
                          class: {
                            active: _vm.GetAllOrder.current_page == n,
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
                          disabled: _vm.GetAllOrder.next_page_url == null,
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
                                  _vm.GetAllOrder.current_page + 1
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
            2
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "500" },
          model: {
            value: _vm.dialog,
            callback: function ($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog",
          },
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "text-h5 grey lighten-2" }, [
                _vm._v("\n                Order detail\n            "),
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _c("h5", { staticClass: "card-title" }, [
                  _c("span", [_vm._v("ID: " + _vm._s(_vm.detail.id))]),
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Sender: name: " +
                      _vm._s(_vm.detail.to_name) +
                      " - phone:\n                    " +
                      _vm._s(_vm.detail.to_phone) +
                      "\n                "
                  ),
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Recipient: name:\n                    " +
                      _vm._s(_vm.detail.to_name) +
                      " - phone:\n                    " +
                      _vm._s(_vm.detail.to_phone) +
                      "\n                "
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-text" }, [
                  _vm._v(
                    "\n                    Send from address:\n                    "
                  ),
                  _c("span", [_vm._v(_vm._s(_vm.detail.from_city_name))]),
                  _vm._v("\n                    /"),
                  _c("span", [_vm._v(_vm._s(_vm.detail.from_district_name))]),
                  _vm._v(" /"),
                  _c("span", [_vm._v(_vm._s(_vm.detail.from_wards_name))]),
                  _vm._v("\n                    /"),
                  _c("span", [_vm._v(_vm._s(_vm.detail.from_address))]),
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Send to address:\n                    "
                  ),
                  _c("span", [_vm._v(_vm._s(_vm.detail.to_city_name))]),
                  _vm._v("\n                    /"),
                  _c("span", [_vm._v(_vm._s(_vm.detail.to_district_name))]),
                  _vm._v(" /"),
                  _c("span", [_vm._v(_vm._s(_vm.detail.to_wards_name))]),
                  _vm._v("\n                    /"),
                  _c("span", [_vm._v(_vm._s(_vm.detail.to_address))]),
                ]),
                _vm._v(" "),
                _c("table", { staticClass: "table" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("Name")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Weight")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Quantity")]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.items, function (item, index) {
                      return _c("tr", { key: index }, [
                        _c("td", [_vm._v(_vm._s(item.name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.weight))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.quantity))]),
                      ])
                    }),
                    0
                  ),
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v("Total weight: " + _vm._s(_vm.detail.total_weight)),
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                    Total fee: " +
                      _vm._s(_vm._f("moneyFormat")(_vm.detail.total_fee)) +
                      " VND\n                "
                  ),
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "COD: " +
                      _vm._s(_vm._f("moneyFormat")(_vm.detail.cod)) +
                      " VND"
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("v-divider"),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);