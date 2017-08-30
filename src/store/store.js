import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
      students:[
        {id:0,name:'aaaa'},
        {id:1,name:'bbbb'},
        {id:2,name:'cccc'}
      ]
  },
  getters: {
      getStudent: state => state.students
  },
  mutations: {
      addStudent : (state,student) => {
        state.students.push(student)
      },
      delStu( state ,obj){
        for(let i = 0; i < state.students.length;i++){
            if(obj.id === state.students[i].id){
              state.students.splice(i,1)
            }
        }
      }
  },
  actions: {
      addStudent( store, student ){
        store.commit('addStudent',student)
      },
      delStu ( store , obj) {
        store.commit('delStu',obj)
      }
  }

})
