import axios from 'axios';
export default{
namespaced: true,
  state: {
    allPermission:[],
    allPermissionID:[],
  },
  getters:{
      GetAllPermission(state){
          return state.allPermission;
      },
      GetAllPermissionID(state){
          return state.allPermissionID;
      }
  },
  actions:{
      GetAllPermission({commit}){
          axios.get('/api/csPermission/index').then(res=>{
                  console.log(res.data);
                  commit('GetAllPermission',res.data.data_all);
                  commit('GetAllPermissionID',res.data);
          }).catch(err=>{
              console.log(err);
          });
      },
      getPagePermission({commit},page){
          axios.get('/api/csPermission/index?page=' + page)
          .then(res => {
            commit('GetAllPermission',res.data.data_all);
        }).catch(err=>{
              console.log(err);
          });
      },
      searchItem({commit},playload){
          console.log(playload);
          axios.get('/api/csPermission/index',{params:playload}).then(res=>{
              console.log(res.data);
              commit('GetAllPermission',res.data.data_all);
              commit('GetAllPermissionID',res.data);
          }).catch(err=>{
              console.log(err);
          })
      }
  },
  mutations: {
    GetAllPermission (state,data) {
      return state.allPermission=data;
    },
    GetAllPermissionID (state,data) {
      return state.allPermissionID=data;
    },
}
}
