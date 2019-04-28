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

};


export { actions as default };