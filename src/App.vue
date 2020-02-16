<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">Foody</router-link>
      
      <input @input="changed" name="search" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">

      <router-link class="nav-link float-right" to="/">Home</router-link>
      <router-link class="nav-link float-right" to="/favorites">Favorites</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    changed: function(event) {
      this.$router.push({ path: '/', query: { s: event.target.value } })
    }
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
}
</style>
