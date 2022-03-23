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
    allcustomerStatistic: [],
    allcustomerStatisticID: []
  },
  getters: {
    GetAllcustomerStatistic: function GetAllcustomerStatistic(state) {
      return state.allcustomerStatistic;
    },
    GetAllcustomerStatisticID: function GetAllcustomerStatisticID(state) {
      return state.allcustomerStatisticID;
    }
  },
  actions: {
    GetAllcustomerStatistic: function GetAllcustomerStatistic(_ref) {
      var commit = _ref.commit;

      _axios["default"].get("/api/customerStatistic/index").then(function (res) {
        console.log(res.data);
        commit("GetAllcustomerStatistic", res.data.data_all);
        commit("GetAllcustomerStatisticID", res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getPagecustomerStatistic: function getPagecustomerStatistic(_ref2, page) {
      var commit = _ref2.commit;

      _axios["default"].get("/api/customerStatistic/index?page=" + page).then(function (res) {
        commit("GetAllcustomerStatistic", res.data.data_all);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    searchItem: function searchItem(_ref3, playload) {
      var commit = _ref3.commit;
      console.log(playload);

      _axios["default"].get("/api/customerStatistic/index", {
        params: playload
      }).then(function (res) {
        console.log(res.data);
        commit("GetAllcustomerStatistic", res.data.data_all);
        commit("GetAllcustomerStatisticID", res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  mutations: {
    GetAllcustomerStatistic: function GetAllcustomerStatistic(state, data) {
      return state.allcustomerStatistic = data;
    },
    GetAllcustomerStatisticID: function GetAllcustomerStatisticID(state, data) {
      return state.allcustomerStatisticID = data;
    }
  }
};
exports["default"] = _default;