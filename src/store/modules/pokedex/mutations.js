const mutations = {

  // Perhaps it is better to do the actual filtering in a global util?
  setPokedex: (state, data) => {
    state.pokemon = data;
  },

  setFilters: (state, filters) => {
    state.filters.name = filters.name;
    state.filters.types = filters.types;
  },

  setFilterName: (state, name) => {
    state.filters.name = name;
  },

  pushFilterType: (state, type) => {
    state.filters.types.push(type);
  },

  removeFilterType: (state, index) => {
    state.filters.types.splice(index, 1);
  },

  toggleTypeRestrain: (state, index) => {
    state.filters.types[index].restrained = !state.filters.types[index].restrained;
  }

};


export { mutations as default };