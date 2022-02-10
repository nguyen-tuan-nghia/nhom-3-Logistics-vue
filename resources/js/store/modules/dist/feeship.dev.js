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
    city: [],
    wards: [],
    district: [],
    allFeeship: [],
    allFeeshipID: []
  },
  getters: {
    getallcity: function getallcity(state) {
      return state.city;
    },
    getallwards: function getallwards(state) {
      return state.wards;
    },
    getallDistrict: function getallDistrict(state) {
      return state.district;
    },
    GetAllFeeship: function GetAllFeeship(state) {
      return state.allFeeship;
    },
    GetAllFeeshipID: function GetAllFeeshipID(state) {
      return state.allFeeshipID;
    }
  },
  actions: {
    getallcity: function getallcity(_ref) {
      var commit = _ref.commit;

      _axios["default"].get('/api/all-city').then(function (res) {
        console.log(res.data.data);
        commit('getallcity', res.data.data);
      });
    },
    getallwards: function getallwards(_ref2) {
      var commit = _ref2.commit;

      _axios["default"].get('/api/all-wards').then(function (res) {
        console.log(res.data.data);
        commit('getallwards', res.data.data);
      });
    },
    getallDistrict: function getallDistrict(_ref3) {
      var commit = _ref3.commit;

      _axios["default"].get('/api/all-district').then(function (res) {
        console.log(res.data.data);
        commit('getallDistrict', res.data.data);
      });
    },
    GetAllFeeship: function GetAllFeeship(_ref4) {
      var commit = _ref4.commit;

      _axios["default"].get('/api/feeship/index').then(function (res) {
        console.log(res.data);
        commit('GetAllFeeship', res.data.data_all);
        commit('GetAllFeeshipID', res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getPageFeeship: function getPageFeeship(_ref5, page) {
      var commit = _ref5.commit;

      _axios["default"].get('/api/feeship/index?page=' + page).then(function (res) {
        commit('GetAllFeeship', res.data.data_all);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    searchItem: function searchItem(_ref6, playload) {
      var commit = _ref6.commit;
      console.log(playload);

      _axios["default"].get('/api/feeship/index', {
        params: playload
      }).then(function (res) {
        console.log(res.data.data);
        commit('GetAllFeeship', res.data.data_all);
        commit('GetAllFeeshipID', res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  mutations: {
    getallcity: function getallcity(state, data) {
      return state.city = data;
    },
    getallwards: function getallwards(state, data) {
      return state.wards = data;
    },
    getallDistrict: function getallDistrict(state, data) {
      return state.district = data;
    },
    GetAllFeeship: function GetAllFeeship(state, data) {
      return state.allFeeship = data;
    },
    GetAllFeeshipID: function GetAllFeeshipID(state, data) {
      return state.allFeeshipID = data;
    }
  }
};
exports["default"] = _default;