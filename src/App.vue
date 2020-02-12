<template>
  <div id="app">
    <router-link class="nav-link" to="login">Login</router-link>
    <router-view />
    <p>{{meals}}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      meals: null
    }
  },
  methods: {
    fetchMeals: function () {
      const baseURI = 'https://jsonplaceholder.typicode.com/users'
      this.$http.get(baseURI)
      .then((result) => {
        this.meals = result.data
      })
    }
  },
  mounted() {
    this.fetchMeals()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
