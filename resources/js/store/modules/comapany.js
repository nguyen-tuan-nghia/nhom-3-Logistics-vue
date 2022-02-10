import axios from 'axios';
export default{
namespaced: true,
  state: {
    allCompany:[],
    allCompanyID:[],
  },
  getters:{
      GetAllCompany(state){
          return state.allCompany;
      },
      GetAllCompanyID(state){
          return state.allCompanyID;
      }
  },
  actions:{
      GetAllCompany({commit}){
          axios.get('/api/company/index').then(res=>{
                  console.log(res.data);
                  commit('GetAllCompany',res.data);
          }).catch(err=>{
              console.log(err);
          });
      },
      searchItem({commit},playload){
          console.log(playload);
          axios.get('/api/company/index',{params:playload}).then(res=>{
              console.log(res.data);
              commit('GetAllCompany',res.data);
          }).catch(err=>{
              console.log(err);
          })
      }
  },
  mutations: {
    GetAllCompany (state,data) {
      return state.allCompany=data;
    },
    GetAllCompanyID (state,data) {
      return state.allCompanyID=data;
    },
}
}
