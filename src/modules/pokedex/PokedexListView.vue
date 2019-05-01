<template>
  <div class="pokedex-list" @scroll="onScroll">
		<template v-for="pokemon in pokedexList">
			<list-pokemon :key="pokemon.id" v-bind="pokemon" v-on:poke-hover="onPokeHover(pokemon)"></list-pokemon>
		</template>
  </div>
</template>


<script>
import PokedexListPokemonView from './PokedexListPokemonView.vue'
import regnumMixin from '@/commons/mixins/regnumMixin'
import debounce from 'lodash.debounce';

export default {
	name: 'PokedexList',

	mixins: [regnumMixin],

	components: {
		'list-pokemon': PokedexListPokemonView
	},

	created: function() {
		this.onScroll = debounce(this.onScroll, 100);
	},

	data: function() {
		return {
			pagesLoaded: 0,
			isHovered: false
		};
	},

	computed: {
		pokedexList: function() {
			return this.doPagination(this.$store.getters['pokedex/getPokedexFiltered']);
		},
	},

	methods: {
		// better as mixin or at store (?)
		doPagination: function(pokedex) {
			return pokedex.slice(0, (this.pagesLoaded + 1)*18);
		},

		onPokeHover: function(pokemon) {
			this.$emit('poke-hover', pokemon);
		},

		onScroll: function() {
			let wholeHeight = this.$el.scrollHeight;
			let containerHeight = this.$el.clientHeight;
			let currentPosition = this.$el.scrollTop;
			
			if (currentPosition + containerHeight >= (wholeHeight)*0.9) {
				this.pagesLoaded++;
			}
		}
	}

}
</script>


<style scoped lang="scss" src="./pokedex-list.scss">
</style>