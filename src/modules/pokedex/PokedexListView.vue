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

	props: [
    "pokedexList"
  ],

	data: function() {
		return {
			isHovered: false
		};
	},

	created: function() {
		this.onScroll = debounce(this.onScroll, 100);
	},

	methods: {
		onPokeHover: function(pokemon) {
			this.$emit('poke-hover', pokemon);
		},

		onScroll: function() {
			let wholeHeight = this.$el.scrollHeight;
			let containerHeight = this.$el.clientHeight;
			let currentPosition = this.$el.scrollTop;
			
			if (currentPosition + containerHeight >= (wholeHeight)*0.9) {
				this.$emit('list-scroll-end');
			}
		}
	}

}
</script>


<style scoped lang="scss" src="./pokedex-list.scss">
</style>