<template>
  <div>
    <nuxt-link to="/login">Login</nuxt-link>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  head() {},
  data: () => ({
    msg: 'Hello world!...'
  })
}
</script>

<style lang="scss" scoped>
@import url('../src/styles/pages/home/home.css');
</style>
