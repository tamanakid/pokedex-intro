<template>
	<div class="pokedex">
		<div class="pokedex__title" v-if="!(isMobile)">
			<span>National Pokedex</span>
		</div>
		<pokedex-sidebox v-bind:pokemon-hovered="pokemonHovered"></pokedex-sidebox>
		<pokedex-list v-bind:pokedexList="pokedexPage" v-on:poke-hover="onPokeHover" v-on:list-scroll-end="onListScrollEnd"></pokedex-list>
	</div>
</template>


<script>
import PokedexListView from './PokedexListView.vue'
import PokedexSideboxView from './PokedexSideboxView.vue'
import { queryMedia } from '@/config/vue-mq.config';

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
			pagesLoaded: 0,
			pokemonHovered: {},
		};
	},

	computed: {
		pokedexPage: function() {
			return this.doPagination(this.$store.getters['pokedex/getPokedexFiltered']);
		},

		isMobile: function() {
			return queryMedia.isMobile(this.$mq);
		}
	},

	methods: {
		// better as mixin or at store (?)
		doPagination: function(pokedex) {
			return pokedex.slice(0, (this.pagesLoaded + 1)*18);
		},

		onPokeHover: function(pokemon) {
			this.pokemonHovered = pokemon;
		},

		onListScrollEnd: function() {
			this.pagesLoaded++;
		}
	}

}
</script>


<style scoped lang="scss" src="./pokedex-layout.scss">
</style>