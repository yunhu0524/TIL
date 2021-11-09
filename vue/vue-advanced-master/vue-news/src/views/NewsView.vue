<template>
  <div>
    <p v-for="news in this.$store.state.news" :key="news.id">
      <a :href="news.url">{{ news.title }}</a><br>
      <small>{{ news.time_ago }} by 
        <router-link :to="`/user/${news.user}`">{{ news.domain }}</router-link>
        </small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS')
      .then()
      .catch()
  }
}
</script>

<style>

</style>
