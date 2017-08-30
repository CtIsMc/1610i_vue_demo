<template lang="html">
      <div class="todo-class">

            <div class="todo-head">
                <input type="text"  v-model="name" @keyup.enter="addItem" value="">
            </div>
            <div class="todo-lists">
                <ul>
                  <li v-for="item in lists">
                    {{item.name}}    <span @click="delUser(item.id)"> 删除</span>
                  </li>
                </ul>
            </div>
      </div>
</template>

<script>
import { mapGetters,mapState } from 'vuex'

import uuid from 'uuid'

export default {
  data () {
    return {
      name:''
    }
  },
  // computed : {
  //   lists () {
  //     // console.log(this.$store)
  //     return this.$store.getters.lists
  //   }
  // },

  // computed : mapGetters([
  //   'lists'
  // ]),

  // computed: {
  //   // 使用对象展开运算符将 getters 混入 computed 对象中
  //   ...mapGetters([
  //     'lists'
  //     // ...
  //   ])
  // },

  computed: mapState([
    // 映射 this.count 为 store.state.count
    'lists'
  ]),

  methods : {
    addItem (){

        let id = uuid();
        console.log(id)
        this.$store.dispatch('addUser',{
          id:id,
          name:this.name
        })

        this.name = ''
    },
     delUser(id){
        this.$store.dispatch('delitem',{
          id:id
        })
     }
  }
}
</script>

<style lang="css">

.todo-class{
  width: 100%;
}

.todo-head{
  width: 100%;
  position: fixed;
  top:0
}

.todo-head input{
  width: 100%;
  height: 50px;
}

.todo-lists{
  width: 100%;
}

.todo-lists ul{
  list-style: none;
  padding: 0;
}

.todo-lists ul li{
  width: 100%;
  height: 50px;
  margin-top: 3px;
  background-color: #fff;
}

</style>
