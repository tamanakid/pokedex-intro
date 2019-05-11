const mutations = {

  UPDATE_CURRENT_POKEMON: (state, regnum) => {
    state.currentPokemon = regnum;
  },

  INSERT_POKEMON_DATA: (state, pokemon) => {
    state.fetchedPokemon.push(pokemon);
    state.currentPokemon = pokemon.regnum;
  },

  INSERT_MOVES_DATA: (state, moves) => {
    moves.forEach(function(move) {
      state.fetchedMoves.push(move);
    });
  },

};


export { mutations as default };