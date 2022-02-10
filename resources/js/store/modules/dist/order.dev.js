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
    allOrder: [],
    allOrderID: []
  },
  getters: {
    GetAllOrder: function GetAllOrder(state) {
      return state.allOrder;
    },
    GetAllOrderID: function GetAllOrderID(state) {
      return state.allOrderID;
    }
  },
  actions: {
    GetAllOrder: function GetAllOrder(_ref) {
      var commit = _ref.commit;

      _axios["default"].get("/api/order/index").then(function (res) {
        console.log(res.data);
        commit("GetAllOrder", res.data.data_all);
        commit("GetAllOrderID", res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getPageOrder: function getPageOrder(_ref2, page) {
      var commit = _ref2.commit;

      _axios["default"].get("/api/order/index?page=" + page).then(function (res) {
        commit("GetAllOrder", res.data.data_all);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    searchItem: function searchItem(_ref3, playload) {
      var commit = _ref3.commit;
      console.log(playload);

      _axios["default"].get("/api/order/index", {
        params: playload
      }).then(function (res) {
        console.log(res.data);
        commit("GetAllOrder", res.data.data_all);
        commit("GetAllOrderID", res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    searchDate: function searchDate(_ref4, playload) {
      var commit = _ref4.commit;
      console.log(playload);

      _axios["default"].get("/api/order/findDate", {
        params: playload
      }).then(function (res) {
        console.log(res.data);
        commit("GetAllOrder", res.data.data_all);
        commit("GetAllOrder", res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    ShipperGetAllOrder: function ShipperGetAllOrder(_ref5) {
      var commit = _ref5.commit;

      _axios["default"].get("/api/shipper/allorder/index").then(function (res) {
        console.log(res.data);
        commit("GetAllOrder", res.data.data_all);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    ShippergetPageOrder: function ShippergetPageOrder(_ref6, page) {
      var commit = _ref6.commit;

      _axios["default"].get("/api/shipper/allorder/index?page=" + page).then(function (res) {
        commit("GetAllOrder", res.data.data_all);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    ShippersearchItem: function ShippersearchItem(_ref7, playload) {
      var commit = _ref7.commit;
      console.log(playload);

      _axios["default"].get("/api/shipper/allorder/index", {
        params: playload
      }).then(function (res) {
        console.log(res.data);
        commit("GetAllOrder", res.data.data_all);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    ShippersearchDate: function ShippersearchDate(_ref8, playload) {
      var commit = _ref8.commit;
      console.log(playload);

      _axios["default"].get("/api/shipper/allorder/findDate", {
        params: playload
      }).then(function (res) {
        console.log(res.data);
        commit("GetAllOrder", res.data.data_all);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  mutations: {
    GetAllOrder: function GetAllOrder(state, data) {
      return state.allOrder = data;
    },
    GetAllOrderID: function GetAllOrderID(state, data) {
      return state.allOrderID = data;
    }
  }
};
exports["default"] = _default;