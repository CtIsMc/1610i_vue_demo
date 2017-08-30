<template lang="html">
    <div class="todo-class">
      <Item  title="Todolist"/>

      <div class="input-cover">
          <input type="text" name="" v-model="name"  @keyup.enter="addUser">
      </div>

      <div class="lists">
          <ul>
            <li v-for="item in lists">
              <div>
                {{item.name}}
              </div>
              <div @click="delitem(item.id)">
                  删除
              </div>
            </li>
          </ul>
      </div>
    </div>
</template>

<script>


import Item from './Item'
import uuid from 'uuid'

export default {
  data: function(){
    return {
      name:'',
    }
  },
  computed:{
      lists(){
        return this.$store.getters.lists
      }
  },
  components:{
    Item
  },
  methods:{
      addUser(){
        var name = this.name;
        this.$store.dispatch('addUser',{
            id:uuid(),
            name: name
        })

        this.name = ''
      },
      delitem(id){
        console.log(id)
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

.input-cover{
  width: 100%;
}
.input-cover input{
  width: 100%;
  height: 60px;
  text-align: center;
  font-size: 36px;
  border: none;
}
ul{
  list-style: none;
  padding: 0;
}
ul li{
  display: flex;
  flex-direction: row;
  height: 45px;
  background-color: #fff;
  margin-top: 3px;
  line-height: 45px;
}
ul li div{
  flex: 1;
}

ul li:nth-child(odd){

}
</style>
