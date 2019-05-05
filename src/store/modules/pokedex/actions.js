import axios from '@/config/axios.config'


const actions = {

  // Perhaps it is better to do the actual filtering in a global util?
  fetchPokedex: ({ commit }) => {
    return new Promise((resolve, reject) => {
      axios.get("http://localhost:3000/pokedex")
      .then(response => {
        commit('UPDATE_POKEDEX', response.data);
        resolve();
      })
      .catch(() => {
        commit('UPDATE_POKEDEX', null);
        reject();
      });
    })
  },


  setFilterName: ({ commit }, name) => {
    commit('UPDATE_FILTER_NAME', name);
  },


  pushFilterType: ({ commit }, type) => {
    commit('INSERT_FILTER_TYPE', type);
  },


  removeFilterType: ({ commit, state }, typeToRemove) => {
    let index;
    
    if (state.filters.isStrict) {
      index = state.filters.strictTypes.list.indexOf(typeToRemove);
    } else {
      index = state.filters.types.list.indexOf(typeToRemove);
    }
    
    commit('DELETE_FILTER_TYPE', index);
  },


  toggleStrictFilter: ({ commit }) => {
    commit('UPDATE_FILTER_STRICT');
  },


  clearFilters: ({ commit }) => {
    commit('DELETE_ALL_FILTERS');
  }
};


export { actions as default };