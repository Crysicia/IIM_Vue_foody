<template>
  <div>
    <div class="d-flex justify-content-around">
      <img :src="image" class="rounded-lg" alt="Image du plat">
      <h2 class="font-italic">{{ this.title }}</h2>
    </div>
    <h3 class="p-3"> Recette </h3>
    <p>{{ this.recipe }}</p>
  </div>
</template>

<script>
export default {
  name: 'MealDetails',
  data () {
    return {
      title: 'This recipe does not exist',
      recipe: '',
      image: 'https://picsum.photos/700/700'
    }
  },
  methods: {
    fetchMeal (id) {
      const baseURI = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

      this.$http.get(baseURI)
      .then((result) => {
        console.log(result)
        this.title = result.data.meals[0].strMeal
        this.recipe = result.data.meals[0].strInstructions
        this.image = result.data.meals[0].strMealThumb
      })
    }
  },
  mounted () {
    this.fetchMeal(this.$route.params.id)
  }
}
</script>

<style>
</style>