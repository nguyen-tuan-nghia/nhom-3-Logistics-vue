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
    allPermission: [],
    allPermissionID: []
  },
  getters: {
    GetAllPermission: function GetAllPermission(state) {
      return state.allPermission;
    },
    GetAllPermissionID: function GetAllPermissionID(state) {
      return state.allPermissionID;
    }
  },
  actions: {
    GetAllPermission: function GetAllPermission(_ref) {
      var commit = _ref.commit;

      _axios["default"].get('/api/Permission/index').then(function (res) {
        console.log(res.data);
        commit('GetAllPermission', res.data.data_all);
        commit('GetAllPermissionID', res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getPagePermission: function getPagePermission(_ref2, page) {
      var commit = _ref2.commit;

      _axios["default"].get('/api/Permission/index?page=' + page).then(function (res) {
        commit('GetAllPermission', res.data.data_all);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    searchItem: function searchItem(_ref3, playload) {
      var commit = _ref3.commit;
      console.log(playload);

      _axios["default"].get('/api/Permission/index', {
        params: playload
      }).then(function (res) {
        console.log(res.data);
        commit('GetAllPermission', res.data.data_all);
        commit('GetAllPermissionID', res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  mutations: {
    GetAllPermission: function GetAllPermission(state, data) {
      return state.allPermission = data;
    },
    GetAllPermissionID: function GetAllPermissionID(state, data) {
      return state.allPermissionID = data;
    }
  }
};
exports["default"] = _default;