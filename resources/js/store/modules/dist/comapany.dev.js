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
    allCompany: [],
    allCompanyID: []
  },
  getters: {
    GetAllCompany: function GetAllCompany(state) {
      return state.allCompany;
    },
    GetAllCompanyID: function GetAllCompanyID(state) {
      return state.allCompanyID;
    }
  },
  actions: {
    GetAllCompany: function GetAllCompany(_ref) {
      var commit = _ref.commit;

      _axios["default"].get('/api/company/index').then(function (res) {
        console.log(res.data);
        commit('GetAllCompany', res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    searchItem: function searchItem(_ref2, playload) {
      var commit = _ref2.commit;
      console.log(playload);

      _axios["default"].get('/api/company/index', {
        params: playload
      }).then(function (res) {
        console.log(res.data);
        commit('GetAllCompany', res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  mutations: {
    GetAllCompany: function GetAllCompany(state, data) {
      return state.allCompany = data;
    },
    GetAllCompanyID: function GetAllCompanyID(state, data) {
      return state.allCompanyID = data;
    }
  }
};
exports["default"] = _default;