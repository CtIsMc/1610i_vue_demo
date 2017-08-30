<template>
  <div id="app">

    <footer>

      <router-link to="/hello">Go to Hello</router-link>
      <router-link to="/box">Go to Box</router-link>
      <router-link to="/todo">todolist</router-link>
      <router-link to="/student">student</router-link>

    </footer>

    <router-view></router-view>
  </div>
</template>

<script>

import myHeader from './components/Header'

import Item from './components/Item'


export default {
  name: 'app',
  data:function(){
    return{
        msg:'hello 1610i',
        title:"home page"
    }
  },
  components:{
    myHeader,Item
  },
  methods:{
    click: function(){
      console.log('add')
    }
  }
}
</script>

<style>


html,body{
  width: 100%;
  height: 100%;
}
body{
  background-color: #eee;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

footer{
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  display: flex;
  background-color: #fff;
}

footer a{
  flex: 1;
  display: block;
  text-align: center;
  line-height: 50px;
  text-decoration: none;
  color: #888;
}

footer .active{
  color: #faa;
}

</style>
