<template>
  <div class="col-sm-3">
    <div class="card text-center" style="width: 18rem;">
      <img :src="image" class="card-img-top" alt="Image du plat">
      <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ tags }}</h6>
          <router-link class="btn btn-primary mb-2" :to="`/meal/${id}`">En savoir plus</router-link>
          <br>
          <a href="#" @click="$store.commit('add', id)" v-if="!favorite()">Ajouter aux favoris</a>
          <a href="#" @click="$store.commit('remove', id)" v-else>Retirer des favoris</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MealCard',
  props: [
    'id',
    'title',
    'tags',
    'image'
  ],
  methods: {
    favorite () {
      return this.$store.getters.favorites.includes(this.id)
    }
  }
}
</script>

<style>
</style>