<template>
  <div>
    <div class="header" v-if="this.$store.state.show">
      {{this.$store.state.headerText}}
      <input type="text" v-model="$store.state.textInput">
    </div>
    <Aside></Aside>  
  </div>
</template>

<script>
import Aside from './Side.vue'

export default {
  data(){
    return{
    }
  },
  methods:{
  },
  components:{
    'Aside': Aside,
  },
}
</script>

<style>
.header{
  width: 100%;
  height: 50px;
  background-color: aquamarine;
}
</style>