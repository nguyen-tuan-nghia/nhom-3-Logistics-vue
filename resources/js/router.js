import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

Vue.use(VueRouter);
const routes = [
    //admin
    {
        path: '/ad',
        component: () => import('./admin/layout/layout.vue'),
        children: [{
            path: '',
            name: 'dashboard',
            component: () => import('./admin/views/dashboard.vue')
        }, {
            path: 'create-Posts',
            name: 'addAdminPosts',
            component: () => import('./admin/views/Posts/create.vue')
        }, {
            path: 'list-Posts',
            name: 'listAdminPosts',
            component: () => import('./admin/views/Posts/index.vue')
        }, {
            path: 'edit-Posts/:id',
            name: 'editPosts',
            component: () => import('./admin/views/Posts/edit.vue')
        }, {
            path: 'list-User',
            name: 'listAdminUser',
            component: () => import('./admin/views/User/index.vue')
        }, {
            path: 'create-permission',
            name: 'createPermission',
            component: () => import('./admin/views/user_permission/create.vue')
        }, {
            path: 'list-permission',
            name: 'listPermission',
            component: () => import('./admin/views/user_permission/index.vue')
        }, {
            path: 'edit-Permission/:id',
            name: 'editPermission',
            component: () => import('./admin/views/user_permission/edit.vue')
        }, {
            path: 'list-userPermission/:name',
            name: 'userPermission',
            component: () => import('./admin/views/user_permission/user.vue')
        }, {
            path: 'list-Fee',
            name: 'listFee',
            component: () => import('./admin/views/Shipping/listfee.vue')
        }, {
            path: 'list-weight-fee',
            name: 'listweight',
            component: () => import('./admin/views/weight/index.vue')
        }, {
            path: 'list-all-order',
            name: 'shipper.listallorder',
            component: () => import('./admin/views/order/index.vue')
        }, {
            path: 'list-your-order',
            name: 'shipper.listYourorder',
            component: () => import('./admin/views/order/yourOrder.vue')
        }, {
            path: 'ad-setting',
            name: 'adSetting',
            component: () => import('./admin/log/setting.vue')
        }],
        beforeEnter: (to, from, next) => {
            axios.post('/api/login/auth').then(res => {
                next();
            }).catch(err => {
                next({
                    name: 'login'
                });
            })
        }
    },
    //log
    {
        path: '/login',
        name: 'login',
        component: () => import('./cs/log/login.vue')
    },
    {
        path: '/ad/login',
        name: 'adlogin',
        component: () => import('./admin/log/login.vue')
    },
    {
        path: '/registerCustomer',
        name: 'registerCustomer',
        component: () => import('./cs/log/resgister.vue')
    },
    //customer
    {
        path: '/cs',
        component: () => import('./cs/layout/layout.vue'),
        children: [{
            path: '',
            name: 'csdashboard',
            component: () => import('./cs/views/dashboard.vue')
        }, {
            path: 'create-order',
            name: 'addOrder',
            component: () => import('./cs/views/order/create.vue')
        }, {
            path: 'list-order',
            name: 'listOrders',
            component: () => import('./cs/views/order/index.vue')
        }, {
            path: 'edit-Order/:id',
            name: 'editOrder',
            component: () => import('./cs/views/order/edit.vue')
        }, {
            path: 'list-company',
            name: 'listCustomerCompany',
            component: () => import('./cs/views/company/index.vue')
        }, {
            path: 'cs-create-permission',
            name: 'cscreatePermission',
            component: () => import('./cs/views/user_permission/create.vue')
        }, {
            path: 'cs-list-permission',
            name: 'cslistPermission',
            component: () => import('./cs/views/user_permission/index.vue')
        }, {
            path: 'cs-edit-Permission/:id',
            name: 'cseditPermission',
            component: () => import('./cs/views/user_permission/edit.vue')
        }, {
            path: 'list-userPermission/:name',
            name: 'csuserPermission',
            component: () => import('./cs/views/user_permission/user.vue')
        }, {
            path: 'cs-setting',
            name: 'csSetting',
            component: () => import('./cs/log/setting.vue')
        }],
        beforeEnter: (to, from, next) => {
            axios.post('/api/login/auth/customer').then(res => {
                next();
            }).catch(err => {
                next({
                    name: 'login'
                });
            })
        }
    },
    //public view
    {
        path: '/',
        component: () => import('./public/layout/layout.vue'),
        children: [{
                path: '',
                name: 'home',
                component: () => import('./public/view/index.vue')
            },
            {
                path: '/about-us',
                name: 'aboutUs',
                component: () => import('./public/view/abount.vue')
            },
            {
                path: '/services',
                name: 'services',
                component: () => import('./public/view/services.vue')
            }
        ]
    },
    {
        path: '*',
        component: () => import('./404.vue')
    }
]
const router = new VueRouter({
    mode: 'history',
    routes: routes
});
export default router;
