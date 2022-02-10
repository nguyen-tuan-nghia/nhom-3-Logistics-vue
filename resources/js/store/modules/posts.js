import axios from 'axios';
export default{
namespaced: true,
  state: {
    allPosts:[],
    allPostsID:[],
  },
  getters:{
      GetAllPosts(state){
          return state.allPosts;
      },
      GetAllPostsID(state){
          return state.allPostsID;
      }
  },
  actions:{
      GetAllPosts({commit}){
          axios.get('/api/posts/index').then(res=>{
                  console.log(res.data);
                  commit('GetAllPosts',res.data.data_all);
                  commit('GetAllPostsID',res.data);
          }).catch(err=>{
              console.log(err);
          });
      },
      getPagePosts({commit},page){
          axios.get('/api/posts/index?page=' + page)
          .then(res => {
            commit('GetAllPosts',res.data.data_all);
        }).catch(err=>{
              console.log(err);
          });
      },
      searchItem({commit},playload){
          console.log(playload);
          axios.get('/api/posts/index',{params:playload}).then(res=>{
              console.log(res.data);
              commit('GetAllPosts',res.data.data_all);
              commit('GetAllPostsID',res.data);
          }).catch(err=>{
              console.log(err);
          })
      }
  },
  mutations: {
    GetAllPosts (state,data) {
      return state.allPosts=data;
    },
    GetAllPostsID (state,data) {
      return state.allPostsID=data;
    },
}
}
