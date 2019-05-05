import axios from '@/config/axios.config'


const actions = {

  // Perhaps it is better to do the actual filtering in a global util?
  fetchPokemonData: ({ commit, getters }, regnum) => {
    return new Promise((resolve, reject) => {
      if (!getters.getPokemonData(regnum)) {
        axios.get("http://localhost:3000/pokemon-detail/" + regnum)
        .then(response => {
          let pokemonData = response.data
          commit('INSERT_POKEMON_DATA', pokemonData);
          resolve({
            isAlreadyFetched: false,
            moves: pokemonData.moves
          });
        })
        .catch(() => {
          reject();
        });
      } else {
        resolve({
          isAlreadyFetched: true,
          moves: null
        });
      }
      
    })
  },

  fetchMoves: ({ commit, getters }, moves) => {
    let movesQuery = "";
    moves.forEach(function(moveId) {
      if (!getters.getMove(moveId)) {
        movesQuery = movesQuery + "id=" + moveId + "&";
      }
    }, this);

    return new Promise((resolve, reject) => {
      axios.get("http://localhost:3000/moves?" + movesQuery)
      .then(response => {
        commit('INSERT_MOVE_DATA', response.data);
        resolve();
      })
      .catch(() => {
        reject();
      });
    })
  },


};


export { actions as default };