<template>
  <div>
    <div class="flex-box">
      <div class="side">
        {{textValue}}
          <button @click="headerHide">버튼</button>
      </div>
      <Content :textValue="textValue" @headerShowChild='onChange'></Content>
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
      // inputText : this.textValue,
      showEmit: true
    }
  },
  methods:{
    headerHide(){
      this.$emit('headerShowChild1', this.showEmit);
    },
    onChange(value){
      this.$emit('headerShowChild1', value);
    }
  },
  // updated(){
  //   this.inputText = this.textValue
  // }
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