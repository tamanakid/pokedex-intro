const mutations = {

  // Perhaps it is better to do the actual filtering in a global util?
  setPokedex: (state, data) => {
    state.pokemon = data;
  }
};


export { mutations as default };