const mutations = {

  // Perhaps it is better to do the actual filtering in a global util?
  setPokedex: (state, data) => {
    state.pokemon = data;
  },

  setFilterName: (state, name) => {
    state.filters.name = name;
  },

  pushFilterType: (state, type) => {
    if (state.filters.isStrict) {
      state.filters.strictTypes.list.push(type);
    } else {
      state.filters.types.list.push(type);
    }
  },

  removeFilterType: (state, index) => {
    if (state.filters.isStrict) {
      state.filters.strictTypes.list.splice(index, 1);
    } else {
      state.filters.types.list.splice(index, 1);
    }
  },

  toggleStrictFilter: (state) => {
    state.filters.isStrict = !state.filters.isStrict;
  },

  clearFilters: (state) => {
    state.filters.name = "";
    state.filters.types.list = [];
    state.filters.strictTypes.list = [];
    state.filters.isStrict = false; 
  }

};


export { mutations as default };