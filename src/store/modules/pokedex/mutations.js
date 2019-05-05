const mutations = {

  // Perhaps it is better to do the actual filtering in a global util?
  UPDATE_POKEDEX: (state, data) => {
    state.pokemon = data;
  },

  UPDATE_FILTER_NAME: (state, name) => {
    state.filters.name = name;
  },

  INSERT_FILTER_TYPE: (state, type) => {
    if (state.filters.isStrict) {
      state.filters.strictTypes.list.push(type);
    } else {
      state.filters.types.list.push(type);
    }
  },

  DELETE_FILTER_TYPE: (state, index) => {
    if (state.filters.isStrict) {
      state.filters.strictTypes.list.splice(index, 1);
    } else {
      state.filters.types.list.splice(index, 1);
    }
  },

  UPDATE_FILTER_STRICT: (state) => {
    state.filters.isStrict = !state.filters.isStrict;
  },

  DELETE_ALL_FILTERS: (state) => {
    state.filters.name = "";
    state.filters.types.list = [];
    state.filters.strictTypes.list = [];
    state.filters.isStrict = false; 
  }

};


export { mutations as default };