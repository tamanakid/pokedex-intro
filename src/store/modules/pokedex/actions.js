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

  setFilters: ({ commit }, filters) => {
    commit('setFilters', filters);
  },

  setFilterName: ({ commit }, name) => {
    commit('setFilterName', name);
  },

  pushFilterType: ({ commit }, type) => {
    commit('pushFilterType', {
      name: type,
      restrained: false
    });
  },

  removeFilterType: ({ commit, state }, typeToRemove) => {
    let index = state.filters.types.indexOf(typeToRemove);
    commit('removeFilterType', index);
  },

  toggleTypeRestrain: ({ commit, state }, typeToRestrain) => {
    let index = state.filters.types.indexOf(typeToRestrain);
    commit('toggleTypeRestrain', index);
  }

};


export { actions as default };