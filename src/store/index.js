import Vue from 'vue'
import Vuex from 'vuex'

import pokedex from './modules/pokedex'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    pokedex
  }
});

export { store as default };