import Vue from 'vue';
import Vuex from 'vuex';
import posts from './modules/posts';
import user from'./modules/User';
import Permission from './modules/Permission';
import feeship from './modules/feeship';
import townFeeship from './modules/townFeeship';
import company from './modules/comapany';
import order from './modules/order';
import shipper_order from './modules/shipper_order';
import csPermission from './modules/csPermission';
import Customer from './modules/Customer';
import customerStatistic from './modules/customerStatistic';
Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        posts:posts,
        User:user,
        Permission:Permission,
        feeship:feeship,
        townFeeship:townFeeship,
        company:company,
        order:order,
        shipper_order:shipper_order,
        csPermission:csPermission,
        Customer:Customer,
        customerStatistic:customerStatistic
    }
  });
export default store;
