<template>
  <div id="app">
    <div>
      <label for="favorite">Favorite ice cream flavor?</label>
      <input @input="changed" name="favorite">
    </div>
    <p>{{this.$store.getters.favorites}}</p>
    <router-link class="nav-link" to="login">Login</router-link>
    <router-view />
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
      const baseURI = 'https://www.themealdb.com/api/json/v1/1/random.php'
      this.$http.get(baseURI)
      .then((result) => {
        this.meals = result.data
      })
    },
    changed: function(event) {
      this.$store.commit('change', event.target.value)
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
