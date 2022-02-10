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
    alltownFeeship: [],
    alltownFeeshipID: []
  },
  getters: {
    GetAlltownFeeship: function GetAlltownFeeship(state) {
      return state.alltownFeeship;
    },
    GetAlltownFeeshipID: function GetAlltownFeeshipID(state) {
      return state.alltownFeeshipID;
    }
  },
  actions: {
    GetAlltownFeeship: function GetAlltownFeeship(_ref) {
      var commit = _ref.commit;

      _axios["default"].get('/api/townFeeship/index').then(function (res) {
        console.log(res.data);
        commit('GetAlltownFeeship', res.data.data_all);
        commit('GetAlltownFeeshipID', res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getPagetownFeeship: function getPagetownFeeship(_ref2, page) {
      var commit = _ref2.commit;

      _axios["default"].get('/api/townFeeship/index?page=' + page).then(function (res) {
        commit('GetAlltownFeeship', res.data.data_all);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    searchItem: function searchItem(_ref3, playload) {
      var commit = _ref3.commit;
      console.log(playload);

      _axios["default"].get('/api/townFeeship/index', {
        params: playload
      }).then(function (res) {
        console.log(res.data);
        commit('GetAlltownFeeship', res.data.data_all);
        commit('GetAlltownFeeshipID', res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  mutations: {
    GetAlltownFeeship: function GetAlltownFeeship(state, data) {
      return state.alltownFeeship = data;
    },
    GetAlltownFeeshipID: function GetAlltownFeeshipID(state, data) {
      return state.alltownFeeshipID = data;
    }
  }
};
exports["default"] = _default;