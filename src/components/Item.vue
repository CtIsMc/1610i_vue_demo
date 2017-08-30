<template lang="html">
    <div class="item-class">

          {{ title }}
    </div>
</template>

<script>
export default {
  props:['title']
}
</script>

<style lang="css">

.item-class{
  width: 100%;
  height: 60px;
  background-color: #fff;
  position: fixed;
  line-height: 60px;
  top: 0;
  font-size: 36px;
  box-shadow: 0 2px 3px #ccc;
}
</style>
