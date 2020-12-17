<template>
  <div>
    <nuxt-link to="/" id="link-home">Home</nuxt-link>
    <h1>Login</h1>
    <div class="box-form-login">
      <form @submit="fnSubmit">
        <div class="form-group">
          <div class="form-label">
            <label>E-mail</label>
          </div>
          <div class="form-control">
            <input type="email" v-model="email" />
          </div>
        </div>
        <div class="form-group">
          <div class="form-label">
            <label>Senha</label>
          </div>
          <div class="form-control">
            <input type="password" v-model="password" />
          </div>
        </div>
        <div class="form-group">
          <button type="submit" :disabled="email == '' || password == ''">
            Continue
          </button>
        </div>
      </form>
      <div class="background" v-if="loading"></div>
      <div class="loader" v-if="loading">Loading...</div>
    </div>
  </div>
</template>

<script>
import * as $ from 'jquery'
import * as Http from '../api'

export default {
  data: () => ({
    email: '',
    password: '',
    loading: false
  }),
  methods: {
    fnSubmit(e) {
      e.preventDefault()
      this.loading = true
      const data = {
        email: this.email,
        password: this.password
      }
      Http.Login('session_account', data)
        .then(({ data }) => {
          if (data.login) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('id', data.id)
            localStorage.setItem('id_pos', data.id_pos)
            localStorage.setItem('email', data.email)
            router.push('/')
          } else {
            this.loading = false
          }
        })
        .catch((err) => console.log(err.message))
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../src/styles/loading.css');
@import url('../src/styles/pages/login/login.css');
</style>
