<template>
  <div>
    <div class="content">
      <div>
        {{$store.state.textInput}}
      </div>
      <button @click="toggleBtn()">toggle</button>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    toggleBtn(){
      this.$store.commit('toggleBtn')
    },
  },
}
</script>

<style>
.content{
  width: 100vh;
  height: 100vh;
  background-color: brown;
}
</style>