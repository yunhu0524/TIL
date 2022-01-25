<template>
  <div>
    <div class="flex-box">
      <div class="side">
      <div>{{textValue}}</div>
    </div>
      <Content :textValue="inputText"></Content>
    </div>
  </div>
</template>

<script>
import Content from './Content.vue'

export default {
  props:['textValue'],
  components:{
    'Content': Content,
  },
  data(){
    return{
      inputText : this.textValue,
      showEmit: true
    }
  },
  methods:{
  },
  updated(){
    this.inputText = this.textValue
  }
}
</script>

<style>
.flex-box{
  display: flex;
}
.side{
  width: 200px;
  height: 100vh;
  background-color: blanchedalmond;
}
</style>