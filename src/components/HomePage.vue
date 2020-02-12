<template>
    <div>
        <h2>Home</h2>
        <div class="row">
          <MealCard />
        </div>
    </div>
</template>

<script>
import MealCard from './MealCard.vue'
export default {
  name: 'HomePage',
  components: { 
    MealCard, 
  },
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