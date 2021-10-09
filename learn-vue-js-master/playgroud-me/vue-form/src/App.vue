<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      username:'',
      password:'',
    }
  },
  methods:{
    submitForm(){
      let url = 'https://jsonplaceholder.typicode.com/users'
      let data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
        .then(function(res){
          console.log(res);
        })
        .catch(function(err){
          console.log(err);
        })
      console.log(this.username, this.password);
    }
  }
}
</script>

<style>

</style>