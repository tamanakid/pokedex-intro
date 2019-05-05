const getters = {

  // Perhaps it is better to do the actual filtering in a global util?
  getPokemonData: (state) => (regnum) => {
    return state.fetchedPokemon.find(function(poke) {
      return (poke.regnum === regnum);
    });
  },

  getCurrentPokemonData: (state, getters) => {
    return getters.getPokemonData(state.currentPokemon);
  },

  getMove: (state) => (moveId) => {
    return state.fetchedMoves.find(function(move) {
      return (move.id === moveId);
    });
  }

};

export { getters as default };