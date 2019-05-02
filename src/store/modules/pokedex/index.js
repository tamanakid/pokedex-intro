import getters from './getters';
import actions from './actions';
import mutations from './mutations';


const state = {
  pokemon: [],
  filters: {
    name: "",
    types: {
      list: [],
      maxLength: 4
    },
    strictTypes: {
      list: [],
      maxLength: 2
    },
    isStrict: false
  }
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
