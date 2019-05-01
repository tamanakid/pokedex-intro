const getters = {

  // Perhaps it is better to do the actual filtering in a global util?
  getPokedexFiltered: (state) => {
    return state.pokemon.filter(function(poke) {
      let containsFilterName = poke.name.toLowerCase().includes(state.filters.name.toLowerCase());
      return (containsFilterName);
    });
  },


  getFilterName: (state) => {
    return state.filters.name;
  },

  getFilterTypes: (state) => {
    return state.filters.types;
  },

};

export { getters as default };