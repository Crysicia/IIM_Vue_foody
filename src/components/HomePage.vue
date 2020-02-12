<template>
    <div>
        <h2>Home</h2>
        <div class="row">
          <div v-for="meal in meals.meals" :key="meal.idMeal">
            <MealCard :image="meal.strMealThumb" :title="meal.strMeal" :tags="meal.strTags" />
          </div>
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
      favorites: this.$store.getters.favorites,
      meals: { 
        meals: []
      }
    }
  },
  methods: {
    fetchMeals () {
      const baseURI = 'https://www.themealdb.com/api/json/v1/1/random.php'

      this.$http.get(baseURI)
      .then((result) => {
        this.meals.meals.push(result.data.meals[0])
      })
    },
  },
  mounted () {
    for (let i = 0; i < 15; i++) {
      this.fetchMeals();
    }
  }
}
</script>

<style>
</style>