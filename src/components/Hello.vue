<template>
  <div class="hello">

    <div class="hello-header">

    </div>

    <h1> {{number}}</h1>
    <my-button title="按钮" @button-click="increment"/>
    <button type="button" name="button"   @click="increment">click</button>
    <h1 ref="title">{{ msg }}</h1>
    <input type="text" ref="msg" name="" value="">
    <ul>
      <li v-for="item in lists">
          <User  :data="item"/>
      </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios'

import Item from './Item'

import Button from './Button'
import User from './User'

import router from '../router/'

export default {
  name: 'hello',
  data () {
    return {
      msg: '列表渲染',
      lists:[],
      number:0
    }
  },
  components:{
    Item,"my-button":Button,User
  },
  methods:{
    increment(){
      this.number++;

      console.log(this.$refs.title.innerHTML)
      console.log(this.$refs.msg.value)
    }
  },
  created:function(){

    var self  = this;
    var name = 'hello world'
    axios.get('https://api.github.com/users')
    .then(function (response) {
        return response.data
    })
    .then(function(users){
      console.log(users)
       self.lists = users;
    })
    .catch(function (error) {
      console.log(error);
    });

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello-header{
  width:100%;
  height: 50px;
  background: #fff;
  position: fixed;
  top: 0;
  box-shadow: 2px 2px 3px #ccc;
}


h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  height: 100px;
  display: flex;
  margin-top: 3px;
  flex-direction: row;
  background-color: #fff;
}

li div{
  flex: 1;
  height: 100%;
}

li div img{
  height: 100%;
}

a {
  color: #42b983;
}
</style>
