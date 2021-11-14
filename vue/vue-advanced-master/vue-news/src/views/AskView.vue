<template>
  <div>
    <p v-for="ask in this.$store.state.ask" :key="ask.id">
      <router-link :to="`item/${ask.id}`">
        {{ask.title}}
      </router-link>
      <small>{{ ask.time_ago }} by {{ ask.user }}</small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_ASK')
      .then()
      .catch();
  }
}
</script>

<style>

</style>
