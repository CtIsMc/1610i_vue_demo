<template lang="html">
    <div class="userclass">
        <div>
            {{ data.login }}
        </div>
        <div>
            <img :src="data.avatar_url" alt="">
        </div>
    </div>
</template>

<script>
export default {
  props:['data']
}
</script>

<style lang="css">

.userclass{
  width: 100%;
  height: 100px;
  margin-top: 5px;
  background-color: #ccf;
  display: flex;
  text-align: center;
  line-height: 100px;
  font-size: 24px;
}

.userclass div{
  flex: 1;
}

.userclass div img{
  vertical-align: middle;
  height: 80%;
  border-radius: 50%;
}
</style>
