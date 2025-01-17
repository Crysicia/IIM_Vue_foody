import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './../components/HomePage.vue'
import MealDetails from './../components/MealDetails.vue'
import FavoritesPage from './../components/FavoritesPage.vue'

Vue.use(Router)

export default new Router({
    routes: [
      { path: '/', component: HomePage, props: (route) => ({ s: route.query.s }) },
      { path: '/meal/:id', component: MealDetails },
      { path: '/favorites', component: FavoritesPage },
    ]
})