<template lang="html">
    <div class="student-class">

            <Item  title="student"/>

            <div class="input-class">
                  <input type="text" name=""  v-model="name"    @keyup.enter="addStudent">
            </div>
            <div class="list-class">
                <ul>
                  <li v-for="stu in student">
                      <div class="">
                          {{  stu.name }}
                      </div>
                      <div class="" @click="delStu(stu.id)">
                          删除
                      </div>
                  </li>
                </ul>
            </div>
    </div>
</template>

<script>

import uuid from 'uuid'

import Item from './Item'
export default {

    data: function(){
        return {
          name:''
        }
    },
    computed: {
        student(){
          return this.$store.getters.getStudent
        }
    },
    components:{
      Item
    },
    methods:{
      addStudent(){

        var name = this.name;
          console.log('enter' + name)

        this.$store.dispatch('addStudent',{
          id: uuid(),
          name:name
        })

        this.name = ''
      },
      delStu(id){
          console.log(id)

          this.$store.dispatch('delStu',{
            id:id
          })
      }
    }
}
</script>

<style lang="css">

.student-class{
    width: 100%;
}
.input-class{
  width: 100%;
}
.input-class input{
  width: 100%;
  height: 60px;
  font-size: 36px;
  text-align: center;
}


.list-class ul{
  list-style: none;
}

ul{
  padding: 0;
  width: 100%;
}

ul li{
width: 100%;
display: flex;
flex-direction: row;
}

ul li div{
    flex:1;

}


</style>
