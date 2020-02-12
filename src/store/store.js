import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    favorites: ''
  },
  mutations: {
    change(state, favorite) {
      state.favorites = favorite
    }
  },
  getters: {
    favorites: state => state.favorites
  }
})