const mutations = {

  // Perhaps it is better to do the actual filtering in a global util?
  setPokedex: (state, data) => {
    state.pokemon = data;
  },

  setFilters: (state, filters) => {
    state.filters = filters;
  }
};


export { mutations as default };