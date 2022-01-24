<template>
  <div>
    <div class="header">
      Header
      <input type="text" v-model="inputText">
    </div>
    <Aside></Aside>  
  </div>
</template>

<script>
import Aside from './Side.vue'

export default {
  data(){
    return{
      inputText:""
    }
  },
  components:{
    'Aside': Aside,
  }
}
</script>

<style>
.header{
  width: 100%;
  height: 50px;
  background-color: aquamarine;
}
</style>