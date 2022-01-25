<template>
  <div>
    <div class="content">
      <div>
        {{textValue}}
      </div>
      <button @click="headerShow()" >on</button>
      <button @click="headerHide()" >off</button>
    </div>
  </div>
</template>

<script>
export default {
  props:['textValue'],
  data(){
    return{
      inputText: ""
    }
  },
  methods:{
    headerHide(){
      this.$store.commit('headerHide')
      // this.$emit('headerShowChild', this.showEmit);
    },
    headerShow(){
      this.$store.commit('headerShow')
      // this.$emit('headerShowChild', this.showEmit);
    }
  },
  updated(){
    this.inputText = this.$store.state.textInput
  }
}
</script>

<style>
.content{
  width: 100vh;
  height: 100vh;
  background-color: brown;
}
</style>