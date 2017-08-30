<template lang="html">
      <div>
        <Item  title="box page"/>
            <h1>{{num}}</h1>
            <button type="button" name="button" @click="add">+</button>
            <button type="button" name="button" @click="min">-</button>
      </div>
</template>

<script>
import Item from './Item'
export default {
  name:'box',
  data:function(){
    return {
      num:0
    }
  },
  components:{
    Item
  },
  methods:{
    add:function(){
      this.num++;
    },
    min(){
      this.num--
    }
  }
}
</script>

<style lang="css">
</style>
