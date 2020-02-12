<template>
    <div>
        <h2>Home Page</h2>
        <div class="jumbotron">{{favorites}}</div>
    </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      favorites: this.$store.getters.favorites
    }
  },
  mounted () {
    console.log(this.$store.getters.favorites)
  }
}
</script>

<style>
</style>