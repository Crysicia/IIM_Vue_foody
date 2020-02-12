<template>
  <div class="col-sm-3">
    <div class="card text-center" style="width: 18rem;">
      <img :src="image" class="card-img-top" alt="Image du plat">
      <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ tags }}</h6>
          <a href="#" class="btn btn-primary mb-2"> En savoir plus </a> <br>
          <a href="#">Ajouter dans les favoris</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MealCard',
  props: [
    'title',
    'tags',
    'image'
  ]
}
</script>

<style>
</style>