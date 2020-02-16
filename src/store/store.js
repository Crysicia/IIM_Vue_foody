import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    favorites: ['52993']
  },
  mutations: {
    add(state, favorite) {
      state.favorites.push(favorite)
    },
    remove(state, favorite) {
      state.favorites.splice(state.favorites.indexOf(favorite), 1)
    }
  },
  getters: {
    favorites: state => state.favorites
  }
})