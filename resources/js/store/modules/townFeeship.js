import axios from 'axios';
export default{
namespaced: true,
  state: {
    alltownFeeship:[],
    alltownFeeshipID:[],
  },
  getters:{
      GetAlltownFeeship(state){
          return state.alltownFeeship;
      },
      GetAlltownFeeshipID(state){
          return state.alltownFeeshipID;
      }
  },
  actions:{
      GetAlltownFeeship({commit}){
          axios.get('/api/townFeeship/index').then(res=>{
                  console.log(res.data);
                  commit('GetAlltownFeeship',res.data.data_all);
                  commit('GetAlltownFeeshipID',res.data);
          }).catch(err=>{
              console.log(err);
          });
      },
      getPagetownFeeship({commit},page){
          axios.get('/api/townFeeship/index?page=' + page)
          .then(res => {
            commit('GetAlltownFeeship',res.data.data_all);
        }).catch(err=>{
              console.log(err);
          });
      },
      searchItem({commit},playload){
          console.log(playload);
          axios.get('/api/townFeeship/index',{params:playload}).then(res=>{
              console.log(res.data);
              commit('GetAlltownFeeship',res.data.data_all);
              commit('GetAlltownFeeshipID',res.data);
          }).catch(err=>{
              console.log(err);
          })
      }
  },
  mutations: {
    GetAlltownFeeship (state,data) {
      return state.alltownFeeship=data;
    },
    GetAlltownFeeshipID (state,data) {
      return state.alltownFeeshipID=data;
    },
}
}
