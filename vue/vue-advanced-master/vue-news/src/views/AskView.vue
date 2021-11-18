<template>
  <div>
  <list-item></list-item>
    <!-- <p v-for="ask in this.$store.state.ask" :key="ask.id">
      <router-link :to="`item/${ask.id}`">
        {{ask.title}}
      </router-link>
      <small>{{ ask.time_ago }} by {{ ask.user }}</small>
    </p> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'

export default {
  components:{
    ListItem,
  }
}
</script>

<style>

</style>
