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
    ShipperGetAllOrder: function ShipperGetAllOrder(_ref) {
      var commit = _ref.commit;

      _axios["default"].get("/api/shipper/your-order/index").then(function (res) {
        console.log(res.data);
        commit("GetAllOrder", res.data.data_all);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    ShippergetPageOrder: function ShippergetPageOrder(_ref2, page) {
      var commit = _ref2.commit;

      _axios["default"].get("/api/shipper/your-order/index?page=" + page).then(function (res) {
        commit("GetAllOrder", res.data.data_all);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    ShippersearchItem: function ShippersearchItem(_ref3, playload) {
      var commit = _ref3.commit;
      console.log(playload);

      _axios["default"].get("/api/shipper/your-order/index", {
        params: playload
      }).then(function (res) {
        console.log(res.data);
        commit("GetAllOrder", res.data.data_all);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    ShippersearchDate: function ShippersearchDate(_ref4, playload) {
      var commit = _ref4.commit;
      console.log(playload);

      _axios["default"].get("/api/shipper/your-order/findDate", {
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