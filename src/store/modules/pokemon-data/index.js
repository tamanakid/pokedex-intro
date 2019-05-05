import getters from './getters';
import actions from './actions';
import mutations from './mutations';


const state = {
  fetchedPokemon: [],
  fetchedMoves: [],
  currentPokemon: null
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
