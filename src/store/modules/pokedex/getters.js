const getters = {

  // Perhaps it is better to do the actual filtering in a global util?
  getPokedexFiltered: (state, getters) => {
    return state.pokemon.filter(function(poke) {
      let compliesWithTypes = true;
      let compliesWithName = poke.name.toLowerCase().includes(state.filters.name.toLowerCase());

      if (state.filters.isStrict) {
        if (state.filters.strictTypes.list.length) {
          compliesWithTypes = state.filters.strictTypes.list.every(function(filterType) {
            return getters.doTypesMatch(poke, filterType);
          });
        }
      } else {
        if (state.filters.types.list.length) {
          compliesWithTypes = state.filters.types.list.some(function(filterType) {
            return getters.doTypesMatch(poke, filterType);
          });
        }
      }

      return (compliesWithName && compliesWithTypes);
    });
  },

  doTypesMatch: () => (poke, filterType) => {
    return poke.types.some(function(pokeType) {
      return pokeType == filterType
    });
  },

};

export { getters as default };