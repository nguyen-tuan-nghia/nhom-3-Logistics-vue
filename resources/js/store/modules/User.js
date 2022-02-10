import axios from 'axios';
export default{
namespaced: true,
  state: {
    allUser:[],
    allUserID:[],
  },
  getters:{
      GetAllUser(state){
          return state.allUser;
      },
      GetAllUserID(state){
          return state.allUserID;
      }
  },
  actions:{
      GetAllUser({commit},playload){
          axios.get('/api/User/index',{params:playload}).then(res=>{
                  console.log(res.data);
                  commit('GetAllUser',res.data.data_all);
                  commit('GetAllUserID',res.data);
          }).catch(err=>{
              console.log(err);
          });
      },
      getPageUser({commit},page){
          axios.get('/api/User/index?page=' + page)
          .then(res => {
            commit('GetAllUser',res.data.data_all);
        }).catch(err=>{
              console.log(err);
          });
      },
      searchItem({commit},playload){
          console.log(playload);
          axios.get('/api/User/index',{params:playload}).then(res=>{
              console.log(res.data);
              commit('GetAllUser',res.data.data_all);
              commit('GetAllUserID',res.data);
          }).catch(err=>{
              console.log(err);
          })
      }
  },
  mutations: {
    GetAllUser (state,data) {
      return state.allUser=data;
    },
    GetAllUserID (state,data) {
      return state.allUserID=data;
    },
}
}
