<template>
    <div>
      <div v-if="!meals.meals">
        <h2>There is no meals</h2>
      </div>
      <div class="row">
        <div v-for="meal in meals.meals" :key="meal.idMeal">
          <MealCard :image="meal.strMealThumb" :title="meal.strMeal" :tags="meal.strTags" :id="meal.idMeal" />
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
  props: ['s'],
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
    if (this.s) {
      const baseURI = `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.s}`

      this.$http.get(baseURI)
      .then((result) => {
        this.meals.meals = result.data.meals
      })
    } else {
      for (let i = 0; i < 15; i++) {
        this.fetchMeals();
      }
    }
  },
  watch: {
    s: function() {
      const baseURI = `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.s}`

      this.$http.get(baseURI)
      .then((result) => {
        this.meals.meals = result.data.meals
      })
    }
  }
}
</script>

<style>
</style>