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
    allUser: [],
    allUserID: []
  },
  getters: {
    GetAllUser: function GetAllUser(state) {
      return state.allUser;
    },
    GetAllUserID: function GetAllUserID(state) {
      return state.allUserID;
    }
  },
  actions: {
    GetAllUser: function GetAllUser(_ref, playload) {
      var commit = _ref.commit;

      _axios["default"].get('/api/User/index', {
        params: playload
      }).then(function (res) {
        console.log(res.data);
        commit('GetAllUser', res.data.data_all);
        commit('GetAllUserID', res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getPageUser: function getPageUser(_ref2, page) {
      var commit = _ref2.commit;

      _axios["default"].get('/api/User/index?page=' + page).then(function (res) {
        commit('GetAllUser', res.data.data_all);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    searchItem: function searchItem(_ref3, playload) {
      var commit = _ref3.commit;
      console.log(playload);

      _axios["default"].get('/api/User/index', {
        params: playload
      }).then(function (res) {
        console.log(res.data);
        commit('GetAllUser', res.data.data_all);
        commit('GetAllUserID', res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  mutations: {
    GetAllUser: function GetAllUser(state, data) {
      return state.allUser = data;
    },
    GetAllUserID: function GetAllUserID(state, data) {
      return state.allUserID = data;
    }
  }
};
exports["default"] = _default;