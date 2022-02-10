"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_views_Shipping_listfee_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Shipping/listfee.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Shipping/listfee.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      selectedTown: [],
      isSelectedAllTown: false,
      items: [{
        name: 'form city',
        value: 'form_city_name'
      }, {
        name: 'to city',
        value: 'to_city_name'
      }],
      itemsTown: [{
        name: 'city name',
        value: 'city_name'
      }],
      search: "",
      groupBy: "",
      searchTown: "",
      groupByTown: "",
      items_city: [],
      items_town_fee: [],
      form_feeshipping: {
        fromcity: "",
        tocity: "",
        fee: ""
      },
      feeshipCity: {
        city: "",
        feeIn: "",
        feeOut: ""
      }
    };
  },
  mounted: function mounted() {
    this.$store.dispatch("feeship/getallcity"), this.$store.dispatch("feeship/GetAllFeeship"), this.$store.dispatch("townFeeship/GetAlltownFeeship");
  },
  computed: {
    getallcity: function getallcity() {
      return this.$store.getters["feeship/getallcity"];
    },
    GetAllFeeship: function GetAllFeeship() {
      return this.$store.getters["feeship/GetAllFeeship"];
    },
    GetAlltownFeeship: function GetAlltownFeeship() {
      return this.$store.getters["townFeeship/GetAlltownFeeship"];
    },
    GetAllFeeshipID: function GetAllFeeshipID() {
      return this.$store.getters["feeship/GetAllFeeshipID"];
    },
    GetAlltownFeeshipID: function GetAlltownFeeshipID() {
      return this.$store.getters["townFeeship/GetAlltownFeeshipID"];
    }
  },
  methods: {
    editPriceShipTown: function editPriceShipTown(feeship) {
      var _this = this;

      var price_in = document.getElementById("price_in_town_".concat(feeship)).innerHTML;
      price_in = price_in.replace(/[^\d]/g, "");
      var price_out = document.getElementById("price_out_town_".concat(feeship)).innerHTML;
      price_out = price_out.replace(/[^\d]/g, "");
      this.axios.post("/api/editPriceShipTown", {
        id: feeship,
        fee_in: price_in,
        fee_out: price_out
      }).then(function (res) {
        _this.flashMessage.success({
          title: "message",
          message: "Edit successfully",
          time: 5000,
          blockClass: "custom-block-class"
        });

        price_in = price_in.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        price_out = price_out.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        document.getElementById("price_in_town_".concat(feeship)).innerHTML = price_in;
        document.getElementById("price_out_town_".concat(feeship)).innerHTML = price_out;
      })["catch"](function (err) {
        _this.flashMessage.error({
          title: "message",
          message: "Edit faild",
          time: 5000,
          blockClass: "custom-block-class"
        });
      });
    },
    editPriceShip: function editPriceShip(feeship) {
      var _this2 = this;

      var price = document.getElementById("feeshipEditAble_".concat(feeship)).innerHTML;
      price = price.replace(/[^\d]/g, "");
      this.axios.post("/api/editPriceShip", {
        id: feeship,
        fee: price
      }).then(function (res) {
        _this2.flashMessage.success({
          title: "message",
          message: "Edit successfully",
          time: 5000,
          blockClass: "custom-block-class"
        });

        price = price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        document.getElementById("feeshipEditAble_".concat(feeship)).innerHTML = price;
      })["catch"](function (err) {
        _this2.flashMessage.error({
          title: "message",
          message: "Edit faild",
          time: 5000,
          blockClass: "custom-block-class"
        });
      });
    },
    editfeeship: function editfeeship(feeship) {
      var x = document.getElementById("feeshipEditAble_".concat(feeship));
      console.log("ok");

      if (x.contentEditable == "true") {
        x.contentEditable = "false";
        x.style.background = "";
        x.style.color = "";
        this.editPriceShip(feeship);
      } else {
        x.contentEditable = "true";
        x.target;
        x.classList.remove('borderEditfeeship');
        x.style.background = "black";
        x.style.color = "white";
      }
    },
    editfeeshipTown: function editfeeshipTown(feeship) {
      var x = document.getElementById("price_in_town_".concat(feeship));
      var y = document.getElementById("price_out_town_".concat(feeship));
      console.log("ok");

      if (x.contentEditable == "true") {
        x.contentEditable = "false";
        x.style.background = "";
        x.style.color = "";
        y.contentEditable = "false";
        y.style.background = "";
        y.style.color = "";
        this.editPriceShipTown(feeship);
      } else {
        x.contentEditable = "true";
        y.contentEditable = "true";
        x.style.background = "black";
        x.style.color = "white";
        y.style.background = "black";
        y.style.color = "white";
      }
    },
    savefeeship: function savefeeship() {
      var _this3 = this;

      var fromcity = document.querySelector('#fromcity').value;
      var tocity = document.querySelector('#tocity').value;
      var play = {
        fromcity: this.form_feeshipping.fromcity,
        tocity: this.form_feeshipping.tocity,
        fee: this.form_feeshipping.fee,
        fromcityname: fromcity,
        tocityname: tocity
      };
      this.axios.post("/api/feeship/add", play).then(function (res) {
        _this3.flashMessage.success({
          title: "message",
          message: "Add successfully",
          time: 5000,
          blockClass: "custom-block-class"
        });

        _this3.GetAllFeeship.data.unshift(res.data);

        _this3.GetAllFeeshipID.data.unshift(res.data);
      })["catch"](function (err) {
        _this3.flashMessage.error({
          title: "message",
          message: "Add faild, ".concat(err.response.data.message),
          time: 5000,
          blockClass: "custom-block-class"
        });
      });
    },
    savefeeshipCity: function savefeeshipCity() {
      var _this4 = this;

      var cityname = document.querySelector('#town').value;
      var play = {
        city_id: this.feeshipCity.city,
        feeIn: this.feeshipCity.feeIn,
        feeOut: this.feeshipCity.feeOut,
        cityname: cityname
      };
      this.axios.post("/api/feeship-town/add", play).then(function (res) {
        _this4.flashMessage.success({
          title: "message",
          message: "Add successfully",
          time: 5000,
          blockClass: "custom-block-class"
        });

        _this4.GetAlltownFeeship.data.unshift(res.data);

        _this4.GetAlltownFeeshipID.data.unshift(res.data);
      })["catch"](function (err) {
        _this4.flashMessage.error({
          title: "message",
          message: "Add faild, ".concat(err.response.data.errors.city_id),
          time: 5000,
          blockClass: "custom-block-class"
        });
      });
    },
    feeshipmoney: function feeshipmoney() {
      var money = document.getElementById("feeshipmoney").value;
      money = money.toString();
      money = money.replace(/[^\d]/g, "");
      this.form_feeshipping.fee = money;
      money = money.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      document.getElementById("feeshipmoney").value = money;
    },
    feeshipmoneyCityOn: function feeshipmoneyCityOn() {
      var money = document.getElementById("feeshipmoneyCityOn").value;
      money = money.toString();
      money = money.replace(/[^\d]/g, "");
      this.feeshipCity.feeIn = money;
      money = money.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      document.getElementById("feeshipmoneyCityOn").value = money;
    },
    feeshipmoneyCityOut: function feeshipmoneyCityOut() {
      var money = document.getElementById("feeshipmoneyCityOut").value;
      money = money.toString();
      money = money.replace(/[^\d]/g, "");
      this.feeshipCity.feeOut = money;
      money = money.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      document.getElementById("feeshipmoneyCityOut").value = money;
    },
    searchitem: function searchitem() {
      var playload = {
        groupBy: this.groupBy,
        search: this.search
      };
      this.$store.dispatch("feeship/searchItem", playload);
    },
    searchitemTown: function searchitemTown() {
      var playload = {
        groupBy: this.groupByTown,
        search: this.searchTown
      };
      this.$store.dispatch("townFeeship/searchItem", playload);
    },
    deleteChecked: function deleteChecked() {
      var _this5 = this;

      if (this.selected.length == 0) {
        alert("You need to select item to delete");
      } else {
        if (confirm("Do you really want to delete this item")) {
          var _loop = function _loop(n) {
            _this5.GetAllFeeship.data = _this5.GetAllFeeship.data.filter(function (obj) {
              return obj.id != _this5.selected[n];
            });
          };

          for (var n in this.selected) {
            _loop(n);
          }

          var app = new FormData();

          for (var i in this.selected) {
            app.append("selected[]", this.selected[i]);
          }

          this.axios.post("/api/feeship/delete-checked", app).then(function (res) {
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
    },
    deleteCheckedTown: function deleteCheckedTown() {
      var _this6 = this;

      if (this.selectedTown.length == 0) {
        alert("You need to select item to delete");
      } else {
        if (confirm("Do you really want to delete this item")) {
          var _loop2 = function _loop2(n) {
            _this6.GetAlltownFeeship.data = _this6.GetAlltownFeeship.data.filter(function (obj) {
              return obj.id != _this6.selectedTown[n];
            });
          };

          for (var n in this.selectedTown) {
            _loop2(n);
          }

          var app = new FormData();

          for (var i in this.selectedTown) {
            app.append("selected[]", this.selectedTown[i]);
          }

          this.axios.post("/api/townFeeship/delete-checked", app).then(function (res) {
            _this6.flashMessage.success({
              title: "message",
              message: "delete successfully",
              time: 5000,
              blockClass: "custom-block-class"
            });

            _this6.selectedTown = [];
          })["catch"](function (err) {
            _this6.flashMessage.error({
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
        for (var post in this.GetAllFeeshipID.data) {
          this.selected.push(this.GetAllFeeshipID.data[post].id);
        }

        this.isSelectedAll = true;
        console.log(this.isSelectedAll);
      }
    },
    checkAllTown: function checkAllTown() {
      console.log("check");

      if (this.isSelectedAllTown == false) {
        this.selectedTown = [];
        this.isSelectedAllTown = false;
        console.log(this.isSelectedAllTown);
      } else if (this.isSelectedAllTown == true) {
        for (var post in this.GetAlltownFeeshipID.data) {
          this.selectedTown.push(this.GetAlltownFeeshipID.data[post].id);
        }

        this.isSelectedAllTown = true;
        console.log(this.isSelectedAllTown);
      }
    },
    select: function select() {
      if (this.GetAllFeeshipID.data.length == this.selected.length) {
        this.isSelectedAll = true;
      } else {
        this.isSelectedAll = false;
      }
    },
    selectTown: function selectTown() {
      if (this.GetAlltownFeeshipID.data.length == this.selectedTown.length) {
        this.isSelectedAllTown = true;
      } else {
        this.isSelectedAllTown = false;
      }
    },
    PageChange: function PageChange(page) {
      this.$store.dispatch("feeship/getPageFeeship", page);
    },
    PageChangeTown: function PageChangeTown(page) {
      this.$store.dispatch("townFeeship/getPageFeeship", page);
    },
    deletefeeship: function deletefeeship(feeship) {
      var _this7 = this;

      if (confirm("Delete ".concat(feeship.title))) {
        this.axios.get("/api/feeship/delete/".concat(feeship.id)).then(function (res) {
          _this7.GetAllFeeship.data = _this7.GetAllFeeship.data.filter(function (obj) {
            return obj.id != feeship.id;
          });

          _this7.flashMessage.success({
            title: "message",
            message: "delete successfully",
            time: 5000,
            blockClass: "custom-block-class"
          });

          _this7.selected = [];
        })["catch"](function (err) {
          _this7.flashMessage.error({
            title: "message",
            message: "Can`t delete",
            time: 5000,
            blockClass: "custom-block-class"
          });
        });
      }
    },
    deletefeeshipTown: function deletefeeshipTown(feeship) {
      var _this8 = this;

      if (confirm("Delete ".concat(feeship.title))) {
        this.axios.get("/api/townFeeship/delete/".concat(feeship.id)).then(function (res) {
          _this8.GetAlltownFeeship.data = _this8.GetAlltownFeeship.data.filter(function (obj) {
            return obj.id != feeship.id;
          });

          _this8.flashMessage.success({
            title: "message",
            message: "delete successfully",
            time: 5000,
            blockClass: "custom-block-class"
          });

          _this8.selected = [];
        })["catch"](function (err) {
          _this8.flashMessage.error({
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Shipping/listfee.vue?vue&type=style&index=0&id=4c8b5ea6&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Shipping/listfee.vue?vue&type=style&index=0&id=4c8b5ea6&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.feeshipmoney[data-v-4c8b5ea6] {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  height: 48px;\n  border-radius: 25px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Shipping/listfee.vue?vue&type=style&index=0&id=4c8b5ea6&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Shipping/listfee.vue?vue&type=style&index=0&id=4c8b5ea6&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_listfee_vue_vue_type_style_index_0_id_4c8b5ea6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./listfee.vue?vue&type=style&index=0&id=4c8b5ea6&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Shipping/listfee.vue?vue&type=style&index=0&id=4c8b5ea6&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_listfee_vue_vue_type_style_index_0_id_4c8b5ea6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_listfee_vue_vue_type_style_index_0_id_4c8b5ea6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/admin/views/Shipping/listfee.vue":
/*!*******************************************************!*\
  !*** ./resources/js/admin/views/Shipping/listfee.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _listfee_vue_vue_type_template_id_4c8b5ea6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listfee.vue?vue&type=template&id=4c8b5ea6&scoped=true& */ "./resources/js/admin/views/Shipping/listfee.vue?vue&type=template&id=4c8b5ea6&scoped=true&");
/* harmony import */ var _listfee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listfee.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/Shipping/listfee.vue?vue&type=script&lang=js&");
/* harmony import */ var _listfee_vue_vue_type_style_index_0_id_4c8b5ea6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listfee.vue?vue&type=style&index=0&id=4c8b5ea6&scoped=true&lang=css& */ "./resources/js/admin/views/Shipping/listfee.vue?vue&type=style&index=0&id=4c8b5ea6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _listfee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _listfee_vue_vue_type_template_id_4c8b5ea6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _listfee_vue_vue_type_template_id_4c8b5ea6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4c8b5ea6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/Shipping/listfee.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/Shipping/listfee.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/admin/views/Shipping/listfee.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_listfee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./listfee.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Shipping/listfee.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_listfee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/Shipping/listfee.vue?vue&type=style&index=0&id=4c8b5ea6&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/admin/views/Shipping/listfee.vue?vue&type=style&index=0&id=4c8b5ea6&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_listfee_vue_vue_type_style_index_0_id_4c8b5ea6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./listfee.vue?vue&type=style&index=0&id=4c8b5ea6&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Shipping/listfee.vue?vue&type=style&index=0&id=4c8b5ea6&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/admin/views/Shipping/listfee.vue?vue&type=template&id=4c8b5ea6&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/admin/views/Shipping/listfee.vue?vue&type=template&id=4c8b5ea6&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_listfee_vue_vue_type_template_id_4c8b5ea6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_listfee_vue_vue_type_template_id_4c8b5ea6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_listfee_vue_vue_type_template_id_4c8b5ea6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./listfee.vue?vue&type=template&id=4c8b5ea6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Shipping/listfee.vue?vue&type=template&id=4c8b5ea6&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Shipping/listfee.vue?vue&type=template&id=4c8b5ea6&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/views/Shipping/listfee.vue?vue&type=template&id=4c8b5ea6&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c(
          "form",
          {
            on: {
              submit: function ($event) {
                $event.preventDefault()
                return _vm.savefeeship.apply(null, arguments)
              },
            },
          },
          [
            _c("table", { staticClass: "table" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c(
                    "td",
                    [
                      _c("v-autocomplete", {
                        attrs: {
                          rounded: "",
                          solo: "",
                          items: _vm.getallcity,
                          "item-text": "name",
                          "item-value": "id",
                          id: "fromcity",
                        },
                        model: {
                          value: _vm.form_feeshipping.fromcity,
                          callback: function ($$v) {
                            _vm.$set(_vm.form_feeshipping, "fromcity", $$v)
                          },
                          expression: "form_feeshipping.fromcity",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c("v-autocomplete", {
                        attrs: {
                          rounded: "",
                          solo: "",
                          items: _vm.getallcity,
                          "item-text": "name",
                          "item-value": "id",
                          id: "tocity",
                        },
                        model: {
                          value: _vm.form_feeshipping.tocity,
                          callback: function ($$v) {
                            _vm.$set(_vm.form_feeshipping, "tocity", $$v)
                          },
                          expression: "form_feeshipping.tocity",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      staticClass: "form-control feeshipmoney",
                      attrs: { type: "text", id: "feeshipmoney", value: "" },
                      on: { keyup: _vm.feeshipmoney },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      staticClass: "form-control feeshipmoney",
                      attrs: {
                        type: "submit",
                        value: "Submit",
                        disabled:
                          _vm.form_feeshipping.fromcity == "" ||
                          _vm.form_feeshipping.tocity == "" ||
                          _vm.form_feeshipping.fee == "",
                      },
                    }),
                  ]),
                ]),
              ]),
            ]),
          ]
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "card" }, [
      _vm._m(2),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c(
          "form",
          {
            on: {
              submit: function ($event) {
                $event.preventDefault()
                return _vm.savefeeshipCity.apply(null, arguments)
              },
            },
          },
          [
            _c("table", { staticClass: "table" }, [
              _vm._m(3),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c(
                    "td",
                    [
                      _c("v-autocomplete", {
                        attrs: {
                          rounded: "",
                          solo: "",
                          items: _vm.getallcity,
                          "item-text": "name",
                          "item-value": "id",
                          id: "town",
                        },
                        model: {
                          value: _vm.feeshipCity.city,
                          callback: function ($$v) {
                            _vm.$set(_vm.feeshipCity, "city", $$v)
                          },
                          expression: "feeshipCity.city",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      staticClass: "form-control feeshipmoney",
                      attrs: {
                        type: "text",
                        id: "feeshipmoneyCityOn",
                        value: "",
                      },
                      on: { keyup: _vm.feeshipmoneyCityOn },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      staticClass: "form-control feeshipmoney",
                      attrs: {
                        type: "text",
                        id: "feeshipmoneyCityOut",
                        value: "",
                      },
                      on: { keyup: _vm.feeshipmoneyCityOut },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      staticClass: "form-control feeshipmoney",
                      attrs: {
                        type: "submit",
                        value: "Submit",
                        disabled:
                          _vm.feeshipCity.feeIn == "" ||
                          _vm.feeshipCity.feeOut == "" ||
                          _vm.feeshipCity.city == "",
                      },
                    }),
                  ]),
                ]),
              ]),
            ]),
          ]
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "mx-auto row" }, [
      _c("div", { staticClass: "card col" }, [
        _c("div", { staticClass: "card-header" }, [
          _vm._v("List shipping fee between city"),
        ]),
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
                      attrs: {
                        items: _vm.items,
                        "item-text": "name",
                        "item-value": "value",
                        label: "Group by",
                      },
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
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Ship from:")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Ship to:")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Ship fee:")]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.GetAllFeeship.data, function (feeship, index) {
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
                            value: feeship.id,
                            checked: Array.isArray(_vm.selected)
                              ? _vm._i(_vm.selected, feeship.id) > -1
                              : _vm.selected,
                          },
                          on: {
                            change: [
                              function ($event) {
                                var $$a = _vm.selected,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = feeship.id,
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
                        "\n              " +
                          _vm._s(
                            _vm._f("minus")(_vm.GetAllFeeship.from + index)
                          ) +
                          "\n            "
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      _vm._l(_vm.getallcity, function (city) {
                        return _c("div", { key: "A" + city.id }, [
                          feeship.form_city_id == city.id
                            ? _c("span", [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(city.name) +
                                    "\n                "
                                ),
                              ])
                            : _vm._e(),
                        ])
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      _vm._l(_vm.getallcity, function (city2) {
                        return _c("div", { key: "B" + city2.id }, [
                          feeship.to_city_id == city2.id
                            ? _c("span", [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(city2.name) +
                                    "\n                "
                                ),
                              ])
                            : _vm._e(),
                        ])
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { attrs: { id: "feeshipEditAble_" + feeship.id } },
                      [_vm._v(_vm._s(_vm._f("moneyFormat")(feeship.price)))]
                    ),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "a",
                        {
                          on: {
                            click: function ($event) {
                              return _vm.editfeeship(feeship.id)
                            },
                          },
                        },
                        [_c("v-icon", [_vm._v("mdi-pencil")])],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "a",
                        {
                          on: {
                            click: function ($event) {
                              return _vm.deletefeeship(feeship)
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
                        disabled: _vm.GetAllFeeship.prev_page_url == null,
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
                                _vm.GetAllFeeship.current_page - 1
                              )
                            },
                          },
                        },
                        [_vm._v("Previous")]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.GetAllFeeship.last_page, function (n) {
                    return _c(
                      "li",
                      {
                        key: n,
                        staticClass: "page-item",
                        class: { active: _vm.GetAllFeeship.current_page == n },
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
                        disabled: _vm.GetAllFeeship.next_page_url == null,
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
                                _vm.GetAllFeeship.current_page + 1
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
      _vm._v(" "),
      _c("div", { staticClass: "card col" }, [
        _c("div", { staticClass: "card-header" }, [
          _vm._v("List shipping fee in and out the town"),
        ]),
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
                    { on: { click: _vm.deleteCheckedTown } },
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
                      attrs: {
                        items: _vm.itemsTown,
                        "item-text": "name",
                        "item-value": "value",
                        label: "Group by",
                      },
                      model: {
                        value: _vm.groupByTown,
                        callback: function ($$v) {
                          _vm.groupByTown = $$v
                        },
                        expression: "groupByTown",
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
                      attrs: {
                        label: "search",
                        disabled: _vm.groupByTown == "",
                      },
                      on: { input: _vm.searchitemTown },
                      model: {
                        value: _vm.searchTown,
                        callback: function ($$v) {
                          _vm.searchTown = $$v
                        },
                        expression: "searchTown",
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
                        on: { change: _vm.checkAllTown },
                        model: {
                          value: _vm.isSelectedAllTown,
                          callback: function ($$v) {
                            _vm.isSelectedAllTown = $$v
                          },
                          expression: "isSelectedAllTown",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("th", [_vm._v("Number")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Town name")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [
                    _vm._v("Fee ship in town:"),
                  ]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [
                    _vm._v("Fee ship out town:"),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(
                  _vm.GetAlltownFeeship.data,
                  function (townFeeship, index) {
                    return _c("tr", { key: index }, [
                      _c("td", [
                        _c("div", { staticClass: "form-check" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.selectedTown,
                                expression: "selectedTown",
                              },
                            ],
                            staticClass: "form-check-input",
                            attrs: { type: "checkbox" },
                            domProps: {
                              value: townFeeship.id,
                              checked: Array.isArray(_vm.selectedTown)
                                ? _vm._i(_vm.selectedTown, townFeeship.id) > -1
                                : _vm.selectedTown,
                            },
                            on: {
                              change: [
                                function ($event) {
                                  var $$a = _vm.selectedTown,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = townFeeship.id,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        (_vm.selectedTown = $$a.concat([$$v]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.selectedTown = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.selectedTown = $$c
                                  }
                                },
                                _vm.selectTown,
                              ],
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n              " +
                            _vm._s(
                              _vm._f("minus")(
                                _vm.GetAlltownFeeship.from + index
                              )
                            ) +
                            "\n            "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        _vm._l(_vm.getallcity, function (city) {
                          return _c("div", { key: "A" + city.id }, [
                            townFeeship.city_id == city.id
                              ? _c("span", [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(city.name) +
                                      "\n                "
                                  ),
                                ])
                              : _vm._e(),
                          ])
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { attrs: { id: "price_in_town_" + townFeeship.id } },
                        [
                          _vm._v(
                            _vm._s(
                              _vm._f("moneyFormat")(townFeeship.price_in_town)
                            )
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { attrs: { id: "price_out_town_" + townFeeship.id } },
                        [
                          _vm._v(
                            _vm._s(
                              _vm._f("moneyFormat")(townFeeship.price_out_town)
                            )
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(townFeeship.fee))]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            on: {
                              click: function ($event) {
                                return _vm.editfeeshipTown(townFeeship.id)
                              },
                            },
                          },
                          [_c("v-icon", [_vm._v("mdi-pencil")])],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            on: {
                              click: function ($event) {
                                return _vm.deletefeeshipTown(townFeeship)
                              },
                            },
                          },
                          [_c("v-icon", [_vm._v("mdi-delete")])],
                          1
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
                        disabled: _vm.GetAlltownFeeship.prev_page_url == null,
                      },
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "page-link",
                          on: {
                            click: function ($event) {
                              return _vm.PageChangeTown(
                                _vm.GetAlltownFeeship.current_page - 1
                              )
                            },
                          },
                        },
                        [_vm._v("Previous")]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.GetAlltownFeeship.last_page, function (n) {
                    return _c(
                      "li",
                      {
                        key: n,
                        staticClass: "page-item",
                        class: {
                          active: _vm.GetAlltownFeeship.current_page == n,
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
                                return _vm.PageChangeTown(n)
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
                        disabled: _vm.GetAlltownFeeship.next_page_url == null,
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
                              return _vm.PageChangeTown(
                                _vm.GetAlltownFeeship.current_page + 1
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
    return _c("div", { staticClass: "card-header" }, [
      _c("label", [_vm._v("Add shipping fee :")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", [_vm._v("Shipping from:")]),
      _vm._v(" "),
      _c("th", [_vm._v("Shipping to:")]),
      _vm._v(" "),
      _c("th", [_vm._v("Price")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("label", [_vm._v("Add city shipping fee:")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", [_vm._v("City:")]),
      _vm._v(" "),
      _c("th", [_vm._v("Shipping fee in town:")]),
      _vm._v(" "),
      _c("th", [_vm._v("Shipping fee out town:")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);