<template>
  <div class="pokedex-list">
		<template v-for="pokemon in pokedexList">
			<list-pokemon :key="pokemon.id" v-bind="pokemon" v-on:poke-hover="onPokeHover(pokemon)"></list-pokemon>
		</template>
  </div>
</template>


<script>
import PokedexListPokemonView from './PokedexListPokemonView.vue'
import regnumMixin from '@/commons/mixins/regnumMixin'

export default {
	name: 'PokedexList',

	mixins: [regnumMixin],

	components: {
		'list-pokemon': PokedexListPokemonView
	},

	props: [
    "pokedexList"
  ],

	data: function() {
		return {
			isHovered: false
		};
	},

	methods: {
		onPokeHover: function(pokemon) {
			this.$emit('poke-hover', pokemon);
		}
	}

}
</script>


<style scoped lang="scss" src="./pokedex-list.scss">
</style>