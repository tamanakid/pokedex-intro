const getters = {

  // Perhaps it is better to do the actual filtering in a global util?
  getPokedexFiltered: (state) => {
    return state.pokemon;
  },

};

export { getters as default };