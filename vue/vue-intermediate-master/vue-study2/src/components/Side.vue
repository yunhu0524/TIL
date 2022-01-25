<template>
  <div>
    <div class="flex-box">
      <div class="side">
    </div>
      <Content></Content>
    </div>
  </div>
</template>

<script>
import Content from './Content.vue'

export default {
  components:{
    'Content': Content,
  },
  data(){
    return{
    }
  },
  methods:{
  },
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