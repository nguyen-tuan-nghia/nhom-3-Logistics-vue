import axios from 'axios';
export default{
namespaced: true,
  state: {
    allCustomer:[],
    allCustomerID:[],
  },
  getters:{
      GetAllCustomer(state){
          return state.allCustomer;
      },
      GetAllCustomerID(state){
          return state.allCustomerID;
      }
  },
  actions:{
      GetAllCustomer({commit},playload){
          axios.get('/api/Customer/index',{params:playload}).then(res=>{
                  console.log(res.data);
                  commit('GetAllCustomer',res.data.data_all);
                  commit('GetAllCustomerID',res.data);
          }).catch(err=>{
              console.log(err);
          });
      },
      getPageCustomer({commit},page){
          axios.get('/api/Customer/index?page=' + page)
          .then(res => {
            commit('GetAllCustomer',res.data.data_all);
        }).catch(err=>{
              console.log(err);
          });
      },
      searchItem({commit},playload){
          console.log(playload);
          axios.get('/api/Customer/index',{params:playload}).then(res=>{
              console.log(res.data);
              commit('GetAllCustomer',res.data.data_all);
              commit('GetAllCustomerID',res.data);
          }).catch(err=>{
              console.log(err);
          })
      }
  },
  mutations: {
    GetAllCustomer (state,data) {
      return state.allCustomer=data;
    },
    GetAllCustomerID (state,data) {
      return state.allCustomerID=data;
    },
}
}
