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
    allPosts: [],
    allPostsID: []
  },
  getters: {
    GetAllPosts: function GetAllPosts(state) {
      return state.allPosts;
    },
    GetAllPostsID: function GetAllPostsID(state) {
      return state.allPostsID;
    }
  },
  actions: {
    GetAllPosts: function GetAllPosts(_ref) {
      var commit = _ref.commit;

      _axios["default"].get('/api/posts/index').then(function (res) {
        console.log(res.data);
        commit('GetAllPosts', res.data.data_all);
        commit('GetAllPostsID', res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getPagePosts: function getPagePosts(_ref2, page) {
      var commit = _ref2.commit;

      _axios["default"].get('/api/posts/index?page=' + page).then(function (res) {
        commit('GetAllPosts', res.data.data_all);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    searchItem: function searchItem(_ref3, playload) {
      var commit = _ref3.commit;
      console.log(playload);

      _axios["default"].get('/api/posts/index', {
        params: playload
      }).then(function (res) {
        console.log(res.data);
        commit('GetAllPosts', res.data.data_all);
        commit('GetAllPostsID', res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  mutations: {
    GetAllPosts: function GetAllPosts(state, data) {
      return state.allPosts = data;
    },
    GetAllPostsID: function GetAllPostsID(state, data) {
      return state.allPostsID = data;
    }
  }
};
exports["default"] = _default;