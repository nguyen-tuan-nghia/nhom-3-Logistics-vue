import axios from 'axios';
export default{
namespaced: true,
    state:{
        city:[],
        wards:[],
        district:[],
        allFeeship:[],
        allFeeshipID:[]
    },
    getters:{
        getallcity(state){
            return state.city;
        },
        getallwards(state){
            return state.wards;
        },
        getallDistrict(state){
            return state.district;
        },
        GetAllFeeship(state){
            return state.allFeeship;
        },
        GetAllFeeshipID(state){
            return state.allFeeshipID;
        }
    },
    actions:{
        getallcity({commit}){
            axios.get('/api/all-city').then(res=>{
                console.log(res.data.data);
                commit('getallcity',res.data.data);
            })
        },
        getallwards({commit}){
            axios.get('/api/all-wards').then(res=>{
                console.log(res.data.data);
                commit('getallwards',res.data.data);
            })
        },
        getallDistrict({commit}){
            axios.get('/api/all-district').then(res=>{
                console.log(res.data.data);
                commit('getallDistrict',res.data.data);
            })
        },
        GetAllFeeship({commit}){
            axios.get('/api/feeship/index').then(res=>{
                    console.log(res.data);
                    commit('GetAllFeeship',res.data.data_all);
                    commit('GetAllFeeshipID',res.data);
            }).catch(err=>{
                console.log(err);
            });
        },
        getPageFeeship({commit},page){
            axios.get('/api/feeship/index?page=' + page)
            .then(res => {
                commit('GetAllFeeship',res.data.data_all);
            }).catch(err=>{
                console.log(err);
            });
        },
        searchItem({commit},playload){
            console.log(playload);
            axios.get('/api/feeship/index',{params:playload}).then(res=>{
                console.log(res.data.data);
                commit('GetAllFeeship',res.data.data_all);
                commit('GetAllFeeshipID',res.data);
                }).catch(err=>{
                console.log(err);
            })
        }
    },
    mutations:{
        getallcity(state,data){
            return state.city=data;
        },
        getallwards(state,data){
            return state.wards=data;
        },
        getallDistrict(state,data){
            return state.district=data;
        },
        GetAllFeeship (state,data) {
            return state.allFeeship=data;
        },
        GetAllFeeshipID (state,data) {
            return state.allFeeshipID=data;
        },
    }
}
