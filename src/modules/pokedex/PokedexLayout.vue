<template>
	<div class="pokedex">
		<div class="pokedex__title">
			<span>National Pokedex</span>
		</div>
		<pokedex-sidebox v-bind="pokemonHovered"></pokedex-sidebox> <!-- We ought to pass the hovered-on pokemon as a prop -->
		<pokedex-list v-bind:pokedexList="pokedexPage" v-on:test="onPokeHover"></pokedex-list>
	</div>
</template>


<script>
import PokedexListView from './PokedexListView.vue'
import PokedexSideboxView from './PokedexSideboxView.vue'

export default {
	name: 'PokedexLayout',

	components: {
		'pokedex-list': PokedexListView,
		'pokedex-sidebox': PokedexSideboxView
	},

	beforeCreate: function() {
		this.$store.dispatch('pokedex/fetchPokedex');
	},

	data: function() {
		return {
			currentPage: 0,
			pokemonHovered: null,
		};
	},

	computed: {
		pokedexPage: function() {
			return this.doPagination(this.$store.getters['pokedex/getPokedexFiltered']);
		}
	},

	methods: {
		// may be better as a util (?) or maybe call the util from the store (?)
		doPagination: function(pokedex) {
			return pokedex.slice((this.currentPage)*25, (this.currentPage + 1)*25);
		},

		getRegnum: function(regnum) {
			return "#" + this.regnumFormatting(regnum);
		},

		regnumFormatting: function(regnum) {
			regnum = regnum.toString();
			while (regnum.length < 3) {
				regnum = "0" + regnum;
			}
			return regnum;
		},

		onPokeHover: function(pokemon) {
			console.log("emit works");
			this.pokemonHovered = pokemon;
			console.log(this.pokemonHovered);
		}
	}

}
</script>


<style scoped lang="scss" src="./pokedex-layout.scss">
</style>