"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _router = _interopRequireDefault(require("./router"));

var _axios = _interopRequireDefault(require("axios"));

var _vueAxios = _interopRequireDefault(require("vue-axios"));

var _vueSocialAuth = _interopRequireDefault(require("vue-social-auth"));

var _vuetify = _interopRequireDefault(require("vuetify"));

require("vuetify/dist/vuetify.min.css");

var _vue2Editor = _interopRequireDefault(require("vue2-editor"));

require("@mdi/font/css/materialdesignicons.css");

var _vueFlashMessage = _interopRequireDefault(require("@smartweb/vue-flash-message"));

var _index = _interopRequireDefault(require("./store/index"));

var _moment = _interopRequireDefault(require("moment"));

var _laravelEcho = _interopRequireDefault(require("laravel-echo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Ensure you are using css-loader
window.io = require('socket.io-client');

_vue["default"].use(_vueAxios["default"], _axios["default"]);

_vue["default"].use(_vuetify["default"]);

_vue["default"].use(_vue2Editor["default"]);

_vue["default"].use(_vueFlashMessage["default"]);

window.Echo = new _laravelEcho["default"]({
  broadcaster: 'socket.io',
  host: window.location.hostname + ':6001'
});

_vue["default"].use(_vueSocialAuth["default"], {
  providers: {
    facebook: {
      clientId: process.env.MIX_FACEBOOK_APP_ID,
      client_secret: process.env.MIX_FACEBOOK_APP_SECRET,
      redirectUri: 'http://127.0.0.1:8000/sociallogin/facebook'
    }
  }
});

_vue["default"].component('main-main', require('./app.vue')["default"]);

_vue["default"].filter('dateformat', function (obj) {
  _moment["default"].locale('en');

  return (0, _moment["default"])(obj).format('LLLL');
});

_vue["default"].filter('minus', function (obj) {
  if (obj < 0) {
    return obj = obj * -1;
  } else {
    return obj;
  }
});

_vue["default"].filter('moneyFormat', function (obj) {
  obj = obj.toString();
  obj = obj.replace(/[^\d]/g, "");
  return obj = obj.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}); //


new _vue["default"]({
  el: '#app',
  router: _router["default"],
  store: _index["default"],
  vuetify: new _vuetify["default"]({
    icons: {
      iconfont: 'mdi'
    }
  })
}); // http://127.0.0.1:8000/sociallogin/facebook