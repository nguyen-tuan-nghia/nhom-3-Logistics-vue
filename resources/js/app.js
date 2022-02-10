import Vue from "vue";
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSocialauth from 'vue-social-auth'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vue2Editor from "vue2-editor";
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import FlashMessage from '@smartweb/vue-flash-message';
import store from './store/index';
import moment from 'moment';
Vue.use(VueAxios, axios);
Vue.use(Vuetify);
Vue.use(Vue2Editor);
Vue.use(FlashMessage);
Vue.use(VueSocialauth, {
    providers: {
        facebook: {
            clientId: process.env.MIX_FACEBOOK_APP_ID,
            client_secret: process.env.MIX_FACEBOOK_APP_SECRET,
            redirectUri: 'http://127.0.0.1:8000/sociallogin/facebook'
        }
    }
});

Vue.component('main-main', require('./app.vue').default);
Vue.filter('dateformat',function(obj){
    moment.locale('en');
    return  moment(obj).format('LLLL');
});
Vue.filter('minus',function(obj){
    if(obj<0){
       return obj=obj*-1;
    }else{
        return obj
    }
});
Vue.filter('moneyFormat',function(obj){
    obj=obj.toString();
    obj = obj.replace(/[^\d]/g, "");
    return obj=obj.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
});
//

new Vue({
    el:'#app',
    router,
    store,
    vuetify: new Vuetify({
        icons: {
            iconfont: 'mdi',
          },
    })
});
// http://127.0.0.1:8000/sociallogin/facebook
