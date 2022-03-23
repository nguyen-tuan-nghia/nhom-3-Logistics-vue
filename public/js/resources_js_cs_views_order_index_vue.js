"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_cs_views_order_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/views/order/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/views/order/index.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      items: ["id"],
      selectPomission: "",
      search: "",
      groupBy: "",
      getship: [],
      dialog: false,
      dialog2: false,
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
      },
      items_detail: [],
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      menu: false,
      menu2: false,
      shipper: {
        name: "",
        phone: ""
      },
      url: ""
    };
  },
  mounted: function mounted() {
    this.$store.dispatch("order/GetAllOrder");
  },
  computed: {
    GetAllOrder: function GetAllOrder() {
      return this.$store.getters["order/GetAllOrder"];
    },
    GetAllOrderID: function GetAllOrderID() {
      return this.$store.getters["order/GetAllOrderID"];
    }
  },
  //   created(){
  //     Echo.channel('Order')
  //     .listen('OrderEvent', (data) => {
  //         console.log(data.data);
  //         // this.GetAllOrder.push(message)
  //     })
  //   },
  watch: {
    selected: function selected() {
      this.url = "/api/customer/order/export/" + this.selected;
    }
  },
  methods: {
    print: function print(order) {
      var _this = this;

      order.total_fee = order.total_fee.toString();
      order.total_fee = order.total_fee.replace(/[^\d]/g, "");
      order.total_fee = order.total_fee.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      order.cod = order.cod.toString();
      order.cod = order.cod.replace(/[^\d]/g, "");
      order.cod = order.cod.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      this.axios.get("/api/customer/order/detail/".concat(order.id)).then(function (res) {
        _this.items_detail = res.data;
        var a = window.open("", "", "height=1000, width=1000");
        a.document.write("<html><head>");
        a.document.write("<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' rel='stylesheet'>");
        a.document.write("</head>");
        a.document.write("<body><div style='margin:auto;wight:200px'>");
        a.document.write("<h1 style='text-align:center'>Logistic order</h1>");
        a.document.write("<h5 class=><span>ID: " + order.id + "</span></h5>");
        a.document.write("<p>Sender: name:" + order.form_name + " - phone: " + order.from_phone + "</p>");
        a.document.write("<p>Recipient: name:" + order.to_name + " - phone: " + order.to_phone + "</p>");
        a.document.write("<table class='table'><thead><tr><th>Name</th><th>Weight</th><th>Quantity</th></tr></thead><tbody>");

        _this.items_detail.forEach(function (element) {
          a.document.write("<tr><td>" + element.name + "</td><td>" + element.weight + "</td><td>" + element.quantity + "</td></tr>");
        });

        a.document.write("</tbody></table>");
        a.document.write("<p>Total weight: " + order.total_weight + "</p>");
        a.document.write("<p>Total fee: " + order.total_fee + " VND</p>");
        a.document.write("<p>COD: " + order.cod + " VND<p></p>");
        a.document.write("</div></body></html>");
        a.document.close();
        a.print();
      })["catch"](function (err) {
        console.log(err);
      });
    },
    shipperdetail: function shipperdetail(order) {
      var _this2 = this;

      this.dialog2 = true;
      this.axios.get("/api/customer/shipper/detail/".concat(order.id)).then(function (res) {
        _this2.shipper.name = res.data.name;
        _this2.shipper.phone = res.data.phone;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    detailorder: function detailorder(order) {
      var _this3 = this;

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
      this.axios.get("/api/customer/order/detail/".concat(order.id)).then(function (res) {
        _this3.items_detail = res.data;
      })["catch"](function (err) {});
    },
    findDate: function findDate() {
      var playload = {
        date: this.date,
        date2: this.date2
      };
      this.$store.dispatch("order/searchDate", playload);
    },
    searchitem: function searchitem() {
      var playload = {
        groupBy: this.groupBy,
        search: this.search
      };
      this.$store.dispatch("order/searchItem", playload);
    },
    deleteChecked: function deleteChecked() {
      var _this4 = this;

      if (this.selected.length == 0) {
        alert("You need to select item to delete");
      } else {
        if (confirm("Do you really want to delete this item")) {
          var _loop = function _loop(n) {
            _this4.GetAllOrder.data = _this4.GetAllOrder.data.filter(function (obj) {
              return obj.id != _this4.selected[n];
            });
            _this4.GetAllOrderID.data = _this4.GetAllOrderID.data.filter(function (obj) {
              return obj.id != Order.id;
            });
          };

          for (var n in this.selected) {
            _loop(n);
          }

          var app = new FormData();

          for (var i in this.selected) {
            app.append("selected[]", this.selected[i]);
          }

          this.axios.post("/api/order/delete-checked", app).then(function (res) {
            _this4.flashMessage.success({
              title: "message",
              message: "delete successfully",
              time: 5000,
              blockClass: "custom-block-class"
            });

            _this4.selected = [];
          })["catch"](function (err) {
            _this4.flashMessage.error({
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
        for (var post in this.GetAllOrderID.data) {
          this.selected.push(this.GetAllOrderID.data[post].id);
        }

        this.isSelectedAll = true;
        console.log(this.isSelectedAll);
      }
    },
    select: function select() {
      if (this.GetAllOrderID.data.length == this.selected.length) {
        this.isSelectedAll = true;
      } else {
        this.isSelectedAll = false;
      }
    },
    PageChange: function PageChange(page) {
      this.$store.dispatch("order/getPageOrder", page);
    },
    deleteOrder: function deleteOrder(Order) {
      var _this5 = this;

      if (confirm("Delete ".concat(Order.id))) {
        this.axios.get("/api/order/delete/".concat(Order.id)).then(function (res) {
          _this5.GetAllOrder.data = _this5.GetAllOrder.data.filter(function (obj) {
            return obj.id != Order.id;
          });
          _this5.GetAllOrderID.data = _this5.GetAllOrderID.data.filter(function (obj) {
            return obj.id != Order.id;
          });

          _this5.flashMessage.success({
            title: "message",
            message: "delete successfully",
            time: 5000,
            blockClass: "custom-block-class"
          });

          _this5.selected = [];
        })["catch"](function (err) {
          _this5.flashMessage.error({
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/views/order/index.vue?vue&type=style&index=0&id=a0b9cc62&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/views/order/index.vue?vue&type=style&index=0&id=a0b9cc62&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.status[data-v-a0b9cc62] {\n  color: white;\n  border-radius: 25px;\n  padding: 5px;\n  text-align: center;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/views/order/index.vue?vue&type=style&index=0&id=a0b9cc62&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/views/order/index.vue?vue&type=style&index=0&id=a0b9cc62&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a0b9cc62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=a0b9cc62&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/views/order/index.vue?vue&type=style&index=0&id=a0b9cc62&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a0b9cc62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a0b9cc62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/cs/views/order/index.vue":
/*!***********************************************!*\
  !*** ./resources/js/cs/views/order/index.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_a0b9cc62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=a0b9cc62&scoped=true& */ "./resources/js/cs/views/order/index.vue?vue&type=template&id=a0b9cc62&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/cs/views/order/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_a0b9cc62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=a0b9cc62&scoped=true&lang=css& */ "./resources/js/cs/views/order/index.vue?vue&type=style&index=0&id=a0b9cc62&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_a0b9cc62_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_a0b9cc62_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a0b9cc62",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/cs/views/order/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/cs/views/order/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/cs/views/order/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/views/order/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/cs/views/order/index.vue?vue&type=style&index=0&id=a0b9cc62&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/cs/views/order/index.vue?vue&type=style&index=0&id=a0b9cc62&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a0b9cc62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=a0b9cc62&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/views/order/index.vue?vue&type=style&index=0&id=a0b9cc62&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/cs/views/order/index.vue?vue&type=template&id=a0b9cc62&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/cs/views/order/index.vue?vue&type=template&id=a0b9cc62&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a0b9cc62_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a0b9cc62_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a0b9cc62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=a0b9cc62&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/views/order/index.vue?vue&type=template&id=a0b9cc62&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/views/order/index.vue?vue&type=template&id=a0b9cc62&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/cs/views/order/index.vue?vue&type=template&id=a0b9cc62&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-content",
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
                      _c("v-col", [
                        _c(
                          "a",
                          { on: { click: _vm.deleteChecked } },
                          [
                            _c("v-icon", [_vm._v("mdi-delete")]),
                            _vm._v("Delete"),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("v-col", [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-green",
                            class: { disabled: _vm.selected.length == 0 },
                            attrs: { href: _vm.url },
                          },
                          [
                            _c("v-icon", [_vm._v("mdi-export")]),
                            _vm._v("Export xlsx"),
                          ],
                          1
                        ),
                      ]),
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
                                        "\n                      Cancel\n                    "
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
                                        "\n                      OK\n                    "
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
                                        "\n                      Cancel\n                    "
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
                                            return _vm.$refs.menu2.save(
                                              _vm.date2
                                            )
                                          },
                                          _vm.findDate,
                                        ],
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                      OK\n                    "
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
                            attrs: {
                              label: "search",
                              disabled: _vm.groupBy == "",
                            },
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
                  _c("table", { staticClass: "table", attrs: { id: "pdf" } }, [
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
                        _c("th", { attrs: { scope: "col" } }, [_vm._v("ID")]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col" } }, [
                          _vm._v("Phone"),
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col" } }, [
                          _vm._v("address"),
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col" } }, [
                          _vm._v("Status"),
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col" } }, [
                          _vm._v("Created at"),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.GetAllOrder.data, function (Order, index) {
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
                                  value: Order.id,
                                  checked: Array.isArray(_vm.selected)
                                    ? _vm._i(_vm.selected, Order.id) > -1
                                    : _vm.selected,
                                },
                                on: {
                                  change: [
                                    function ($event) {
                                      var $$a = _vm.selected,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = Order.id,
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
                                  _vm._f("minus")(_vm.GetAllOrder.from + index)
                                ) +
                                "\n                  "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(Order.id))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                    " +
                                _vm._s(Order.to_name) +
                                "\n                  "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                    " +
                                _vm._s(Order.to_phone) +
                                "\n                  "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", [_vm._v(_vm._s(Order.to_city_name))]),
                            _vm._v("\n                    /"),
                            _c("span", [
                              _vm._v(_vm._s(Order.to_district_name)),
                            ]),
                            _vm._v(" /"),
                            _c("span", [_vm._v(_vm._s(Order.to_wards_name))]),
                            _vm._v("\n                    /"),
                            _c("span", [_vm._v(_vm._s(Order.to_address))]),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            Order.status == 0
                              ? _c("div", [
                                  _c("div", { staticClass: "status yellow" }, [
                                    _vm._v("Processing"),
                                  ]),
                                ])
                              : Order.status == 1
                              ? _c("div", [
                                  _c("div", { staticClass: "status blue" }, [
                                    _vm._v("Accept"),
                                  ]),
                                ])
                              : Order.status == 2
                              ? _c("div", [
                                  _c("div", { staticClass: "status orange" }, [
                                    _vm._v("Delivering"),
                                  ]),
                                ])
                              : Order.status == 3
                              ? _c("div", [
                                  _c("div", { staticClass: "status green" }, [
                                    _vm._v("Delivery successful"),
                                  ]),
                                ])
                              : Order.status == 4
                              ? _c("div", [
                                  _c("div", { staticClass: "status red" }, [
                                    _vm._v("Refund"),
                                  ]),
                                ])
                              : _vm._e(),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(_vm._f("dateformat")(Order.created_at))
                            ),
                          ]),
                          _vm._v(" "),
                          Order.status != 0
                            ? _c("td", [
                                _c(
                                  "a",
                                  {
                                    on: {
                                      click: function ($event) {
                                        return _vm.shipperdetail(Order)
                                      },
                                    },
                                  },
                                  [_vm._v("Shipper info")]
                                ),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c(
                                "v-icon",
                                {
                                  on: {
                                    click: function ($event) {
                                      return _vm.print(Order)
                                    },
                                  },
                                },
                                [_vm._v("mdi-printer")]
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
                                    return _vm.detailorder(Order)
                                  },
                                },
                              },
                              [_vm._v("Order detail")]
                            ),
                          ]),
                          _vm._v(" "),
                          Order.status == 0 || Order.status == 4
                            ? _c(
                                "td",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "editOrder",
                                          params: { id: Order.id },
                                        },
                                      },
                                    },
                                    [_c("v-icon", [_vm._v("mdi-pencil")])],
                                    1
                                  ),
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          Order.status == 0 || Order.status == 4
                            ? _c("td", [
                                _c(
                                  "a",
                                  {
                                    on: {
                                      click: function ($event) {
                                        return _vm.deleteOrder(Order)
                                      },
                                    },
                                  },
                                  [_c("v-icon", [_vm._v("mdi-delete")])],
                                  1
                                ),
                              ])
                            : _vm._e(),
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
                1
              ),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { width: "500", id: "GFG" },
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
                  _c(
                    "v-card-title",
                    { staticClass: "text-h5 grey lighten-2" },
                    [_vm._v("\n            Order detail\n          ")]
                  ),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c("h5", { staticClass: "card-title" }, [
                      _c("span", [_vm._v("ID: " + _vm._s(_vm.detail.id))]),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n              Sender: name: " +
                          _vm._s(_vm.detail.form_name) +
                          " - phone:\n              " +
                          _vm._s(_vm.detail.from_phone) +
                          "\n            "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n              Recipient: name:\n              " +
                          _vm._s(_vm.detail.to_name) +
                          " - phone:\n              " +
                          _vm._s(_vm.detail.to_phone) +
                          "\n            "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "card-text" }, [
                      _vm._v(
                        "\n              Send from address:\n              "
                      ),
                      _c("span", [_vm._v(_vm._s(_vm.detail.from_city_name))]),
                      _vm._v("\n              /"),
                      _c("span", [
                        _vm._v(_vm._s(_vm.detail.from_district_name)),
                      ]),
                      _vm._v(" /"),
                      _c("span", [_vm._v(_vm._s(_vm.detail.from_wards_name))]),
                      _vm._v("\n              /"),
                      _c("span", [_vm._v(_vm._s(_vm.detail.from_address))]),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n              Send to address:\n              "
                      ),
                      _c("span", [_vm._v(_vm._s(_vm.detail.to_city_name))]),
                      _vm._v("\n              /"),
                      _c("span", [_vm._v(_vm._s(_vm.detail.to_district_name))]),
                      _vm._v(" /"),
                      _c("span", [_vm._v(_vm._s(_vm.detail.to_wards_name))]),
                      _vm._v("\n              /"),
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
                        _vm._l(_vm.items_detail, function (item, index) {
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
                      _vm._v(
                        "Total weight: " + _vm._s(_vm.detail.total_weight)
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Total fee: " +
                          _vm._s(_vm._f("moneyFormat")(_vm.detail.total_fee)) +
                          " VND"
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
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { width: "500" },
              model: {
                value: _vm.dialog2,
                callback: function ($$v) {
                  _vm.dialog2 = $$v
                },
                expression: "dialog2",
              },
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-title",
                    { staticClass: "text-h5 grey lighten-2" },
                    [_vm._v("\n            Shipper info\n          ")]
                  ),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c("p", [
                      _c("strong", [_vm._v("Name: ")]),
                      _vm._v(_vm._s(_vm.shipper.name)),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c("strong", [_vm._v("Phone: ")]),
                      _vm._v(_vm._s(_vm.shipper.phone)),
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
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);