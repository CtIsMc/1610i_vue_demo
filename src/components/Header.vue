<template lang="html">
  <div class="container" @click="click">
      <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name:'header',
  props:['title'],
  methods:{
    click: function(){
      this.$emit('toapp')
    }
  }
}
</script>

<style lang="css">

.container{
  width: 100%;
  height: 50px;
}
</style>
