<template>
  <div>
    <div class="header" v-if="this.show">
      Header
      <input type="text" v-model="inputText">
      <div :inputText="inputText">{{inputText}}</div>
    </div>
    <Aside :textValue="inputText" @headerShowChild1='onchange'></Aside>  
  </div>
</template>

<script>
import Aside from './Side.vue'

export default {
  data(){
    return{
      inputText:"",
      show: true
    }
  },
  methods:{
    onchange(value){
      console.log(value)
      this.show = value
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