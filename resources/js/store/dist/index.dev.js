"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _posts = _interopRequireDefault(require("./modules/posts"));

var _User = _interopRequireDefault(require("./modules/User"));

var _Permission = _interopRequireDefault(require("./modules/Permission"));

var _feeship = _interopRequireDefault(require("./modules/feeship"));

var _townFeeship = _interopRequireDefault(require("./modules/townFeeship"));

var _comapany = _interopRequireDefault(require("./modules/comapany"));

var _order = _interopRequireDefault(require("./modules/order"));

var _shipper_order = _interopRequireDefault(require("./modules/shipper_order"));

var _csPermission = _interopRequireDefault(require("./modules/csPermission"));

var _Customer = _interopRequireDefault(require("./modules/Customer"));

var _customerStatistic = _interopRequireDefault(require("./modules/customerStatistic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var store = new _vuex["default"].Store({
  modules: {
    posts: _posts["default"],
    User: _User["default"],
    Permission: _Permission["default"],
    feeship: _feeship["default"],
    townFeeship: _townFeeship["default"],
    company: _comapany["default"],
    order: _order["default"],
    shipper_order: _shipper_order["default"],
    csPermission: _csPermission["default"],
    Customer: _Customer["default"],
    customerStatistic: _customerStatistic["default"]
  }
});
var _default = store;
exports["default"] = _default;