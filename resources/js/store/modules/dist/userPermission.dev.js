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
    allUserPermission: [],
    allUserPermissionID: []
  },
  getters: {
    GetAllUserPermission: function GetAllUserPermission(state) {
      return state.allUserPermission;
    },
    GetAllUserPermissionID: function GetAllUserPermissionID(state) {
      return state.allUserPermissionID;
    }
  },
  actions: {
    GetAllUserPermission: function GetAllUserPermission(_ref) {
      var commit = _ref.commit;

      _axios["default"].get('/api/UserPermission/index').then(function (res) {
        console.log(res.data);
        commit('GetAllUserPermission', res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getPageUserPermission: function getPageUserPermission(_ref2, page) {
      var commit = _ref2.commit;

      _axios["default"].get('/api/UserPermission/index?page=' + page).then(function (res) {
        commit('GetAllUserPermission', res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    GetAllUserPermissionID: function GetAllUserPermissionID(_ref3) {
      var commit = _ref3.commit;

      _axios["default"].get('/api/UserPermission/index/id').then(function (res) {
        console.log(res.data);
        commit('GetAllUserPermissionID', res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    searchItem: function searchItem(_ref4, playload) {
      var commit = _ref4.commit;
      console.log(playload);

      _axios["default"].get('/api/UserPermission/index', {
        params: playload
      }).then(function (res) {
        console.log(res.data);
        commit('GetAllUserPermission', res.data);
        commit('GetAllUserPermissionID', res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  mutations: {
    GetAllUserPermission: function GetAllUserPermission(state, data) {
      return state.allUserPermission = data;
    },
    GetAllUserPermissionID: function GetAllUserPermissionID(state, data) {
      return state.allUserPermissionID = data;
    }
  }
};
exports["default"] = _default;