<template>
    <div>
      <h2>Favorites</h2>
      <div v-if="!favorite.meals">
        <h2>There is no favorites</h2>
      </div>
      <div class="row">
        <div v-for="meal in favorite.meals" :key="meal.idMeal">
          <MealCard :image="meal.strMealThumb" :title="meal.strMeal" :tags="meal.strTags" :id="meal.idMeal" />
        </div>
      </div>
    </div>
</template>

<script>
import MealCard from './MealCard.vue'

export default {
  name: 'FavoritesPage',
  components: { 
    MealCard, 
  },
  data () {
    return {
      favorite: { 
        meals: []
      }
    }
  },
  methods: {
    fetchFavorites (id) {
      console.log(id)
      const baseURI = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

      this.$http.get(baseURI)
      .then((result) => {
        this.favorite.meals.push(result.data.meals[0])
      })
    },
  },
  mounted () {
    const ids = this.$store.getters.favorites
    ids.map((id) => (this.fetchFavorites(id)) )
  }
}
</script>

<style>
</style>