"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var routes = [//admin
{
  path: '/ad',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./admin/layout/layout.vue'));
    });
  },
  children: [{
    path: '',
    name: 'dashboard',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./admin/views/dashboard.vue'));
      });
    }
  }, {
    path: 'create-Posts',
    name: 'addAdminPosts',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./admin/views/Posts/create.vue'));
      });
    }
  }, {
    path: 'list-Posts',
    name: 'listAdminPosts',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./admin/views/Posts/index.vue'));
      });
    }
  }, {
    path: 'edit-Posts/:id',
    name: 'editPosts',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./admin/views/Posts/edit.vue'));
      });
    }
  }, {
    path: 'list-User',
    name: 'listAdminUser',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./admin/views/User/index.vue'));
      });
    }
  }, {
    path: 'create-permission',
    name: 'createPermission',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./admin/views/user_permission/create.vue'));
      });
    }
  }, {
    path: 'list-permission',
    name: 'listPermission',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./admin/views/user_permission/index.vue'));
      });
    }
  }, {
    path: 'edit-Permission/:id',
    name: 'editPermission',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./admin/views/user_permission/edit.vue'));
      });
    }
  }, {
    path: 'list-userPermission/:name',
    name: 'userPermission',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./admin/views/user_permission/user.vue'));
      });
    }
  }, {
    path: 'list-Fee',
    name: 'listFee',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./admin/views/Shipping/listfee.vue'));
      });
    }
  }, {
    path: 'list-weight-fee',
    name: 'listweight',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./admin/views/weight/index.vue'));
      });
    }
  }, {
    path: 'list-all-order',
    name: 'shipper.listallorder',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./admin/views/order/index.vue'));
      });
    }
  }, {
    path: 'list-your-order',
    name: 'shipper.listYourorder',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./admin/views/order/yourOrder.vue'));
      });
    }
  }, {
    path: 'ad-setting',
    name: 'adSetting',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./admin/log/setting.vue'));
      });
    }
  }],
  beforeEnter: function beforeEnter(to, from, next) {
    _axios["default"].post('/api/login/auth').then(function (res) {
      next();
    })["catch"](function (err) {
      next({
        name: 'login'
      });
    });
  }
}, //log
{
  path: '/login',
  name: 'login',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./cs/log/login.vue'));
    });
  }
}, {
  path: '/ad/login',
  name: 'adlogin',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./admin/log/login.vue'));
    });
  }
}, {
  path: '/registerCustomer',
  name: 'registerCustomer',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./cs/log/resgister.vue'));
    });
  }
}, //customer
{
  path: '/cs',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./cs/layout/layout.vue'));
    });
  },
  children: [{
    path: '',
    name: 'csdashboard',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./cs/views/dashboard.vue'));
      });
    }
  }, {
    path: 'create-order',
    name: 'addOrder',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./cs/views/order/create.vue'));
      });
    }
  }, {
    path: 'list-order',
    name: 'listOrders',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./cs/views/order/index.vue'));
      });
    }
  }, {
    path: 'edit-Order/:id',
    name: 'editOrder',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./cs/views/order/edit.vue'));
      });
    }
  }, {
    path: 'list-company',
    name: 'listCustomerCompany',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./cs/views/company/index.vue'));
      });
    }
  }, {
    path: 'cs-create-permission',
    name: 'cscreatePermission',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./cs/views/user_permission/create.vue'));
      });
    }
  }, {
    path: 'cs-list-permission',
    name: 'cslistPermission',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./cs/views/user_permission/index.vue'));
      });
    }
  }, {
    path: 'cs-edit-Permission/:id',
    name: 'cseditPermission',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./cs/views/user_permission/edit.vue'));
      });
    }
  }, {
    path: 'list-userPermission/:name',
    name: 'csuserPermission',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./cs/views/user_permission/user.vue'));
      });
    }
  }, {
    path: 'cs-setting',
    name: 'csSetting',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./cs/log/setting.vue'));
      });
    }
  }],
  beforeEnter: function beforeEnter(to, from, next) {
    _axios["default"].post('/api/login/auth/customer').then(function (res) {
      next();
    })["catch"](function (err) {
      next({
        name: 'login'
      });
    });
  }
}, //public view
{
  path: '/',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./public/layout/layout.vue'));
    });
  },
  children: [{
    path: '',
    name: 'home',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./public/view/index.vue'));
      });
    }
  }, {
    path: '/about-us',
    name: 'aboutUs',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./public/view/abount.vue'));
      });
    }
  }, {
    path: '/services',
    name: 'services',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./public/view/services.vue'));
      });
    }
  }]
}, {
  path: '*',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./404.vue'));
    });
  }
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  routes: routes
});
var _default = router;
exports["default"] = _default;