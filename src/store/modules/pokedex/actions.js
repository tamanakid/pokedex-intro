import axios from '@/config/axios.config'


const actions = {

  // Perhaps it is better to do the actual filtering in a global util?
  fetchPokedex: ({ commit }) => {
    axios.get("http://localhost:3000/pokemon-summary")
      .then(response => {
        commit('setPokedex', response.data);
      })
      .catch(() => {
        commit('setPokedex', null);
      });
  },

  setFilterName: ({ commit }, name) => {
    commit('setFilterName', name);
  },

  pushFilterType: ({ commit }, type) => {
    commit('pushFilterType', type);
  },

  removeFilterType: ({ commit, state }, typeToRemove) => {
    let index;
    
    if (state.filters.isStrict) {
      index = state.filters.strictTypes.list.indexOf(typeToRemove);
    } else {
      index = state.filters.types.list.indexOf(typeToRemove);
    }
    
    commit('removeFilterType', index);
  },

  toggleStrictFilter: ({ commit }) => {
    commit('toggleStrictFilter');
  },

  clearFilters: ({ commit }) => {
    commit('clearFilters');
  }

};


export { actions as default };