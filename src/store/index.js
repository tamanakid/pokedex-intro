import Vue from 'vue'
import Vuex from 'vuex'

import pokedex from './modules/pokedex'
import pokemonData from './modules/pokemon-data'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    pokedex,
    pokemonData
  }
});

export { store as default };