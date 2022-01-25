<template>
  <div>
    <div class="content">
      <div>
        {{textValue}}
      </div>
      <div>{{showEmit}}</div>
      <!-- <button @click="headerShow()" >on</button> -->
      <button @click="handleToggle()" >toggle</button>
    </div>
  </div>
</template>

<script>
export default {
  props:['textValue'],
  data(){
    return{
      showEmit: true
    }
  },
  methods:{
    handleToggle(){
      this.showEmit = !this.showEmit;
      this.$emit('headerShowChild', this.showEmit);
    }
    // headerHide(){
    //   this.showEmit = false
    //   this.$emit('headerShowChild', this.showEmit);
    // },
    // headerShow(){
    //   this.showEmit = true
    //   this.$emit('headerShowChild', this.showEmit);
    // }
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