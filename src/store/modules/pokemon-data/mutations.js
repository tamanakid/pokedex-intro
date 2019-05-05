const mutations = {

  INSERT_POKEMON_DATA: (state, pokemon) => {
    state.fetchedPokemon.push(pokemon);
    state.currentPokemon = pokemon.regnum;
  },

  INSERT_MOVE_DATA: (state, move) => {
    state.fetchedMoves.push(move);
  },

};


export { mutations as default };