import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
      lists:[
        {id:0,name:'aaa'},
        {id:1,name:'bbb'},
        {id:2,name:'ccc'}
      ]
  },
  getters: {
      lists : state => state.lists
  },
  mutations: {
      addUser(state,user){
        state.lists.push(user)
      },
      delitem(state,obj){
        console.log(obj.id)
          for(let i = 0; i < state.lists.length;i++){
            if(obj.id == state.lists[i].id){
              state.lists.splice(i,1)
            }
          }
      }
  },
  actions: {
    addUser(store,user){
      store.commit('addUser',user)
    },
    delitem(store,id){
      store.commit('delitem',id)
    }
  }
})
