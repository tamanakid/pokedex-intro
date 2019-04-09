import axios from '@/config/axios.config'


const actions = {

  // Perhaps it is better to do the actual filtering in a global util?
  fetchPokedex: ({ commit }) => {
    axios.get("http://localhost:3000/pokemon")
      .then(response => {
        commit('setPokedex', response.data);
      })
      .catch(() => {
        commit('setPokedex', null);
      });
  },

};


export { actions as default };