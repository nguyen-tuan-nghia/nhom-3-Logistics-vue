"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  namespaced: true,
  state: {
    allCustomer: [],
    allCustomerID: []
  },
  getters: {
    GetAllCustomer: function GetAllCustomer(state) {
      return state.allCustomer;
    },
    GetAllCustomerID: function GetAllCustomerID(state) {
      return state.allCustomerID;
    }
  },
  actions: {
    GetAllCustomer: function GetAllCustomer(_ref, playload) {
      var commit = _ref.commit;

      _axios["default"].get('/api/Customer/index', {
        params: playload
      }).then(function (res) {
        console.log(res.data);
        commit('GetAllCustomer', res.data.data_all);
        commit('GetAllCustomerID', res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getPageCustomer: function getPageCustomer(_ref2, page) {
      var commit = _ref2.commit;

      _axios["default"].get('/api/Customer/index?page=' + page).then(function (res) {
        commit('GetAllCustomer', res.data.data_all);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    searchItem: function searchItem(_ref3, playload) {
      var commit = _ref3.commit;
      console.log(playload);

      _axios["default"].get('/api/Customer/index', {
        params: playload
      }).then(function (res) {
        console.log(res.data);
        commit('GetAllCustomer', res.data.data_all);
        commit('GetAllCustomerID', res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  mutations: {
    GetAllCustomer: function GetAllCustomer(state, data) {
      return state.allCustomer = data;
    },
    GetAllCustomerID: function GetAllCustomerID(state, data) {
      return state.allCustomerID = data;
    }
  }
};
exports["default"] = _default;