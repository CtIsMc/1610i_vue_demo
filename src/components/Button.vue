<template lang="html">
    <div class="container"  @click="add">
        {{ title }}
    </div>
</template>

<script>
export default {
  props:['title'],
  methods:{
    add(){
      this.$emit('button-click')
    }
  }
}
</script>

<style lang="css">


.container{
  width: 100px;
  height: 45px;
  border-radius: 5px;
  background-color: #aaf;
  box-shadow: 2px 2px 4px #55f;
  text-align: center;
  line-height: 45px;
  color: #fff;
  font-size:24px;
  font-weight: 800;
}
</style>
