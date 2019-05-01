<template>
	<div class="pokedex">
		<div class="pokedex__title" v-if="!(isMobile)">
			<span>National Pokedex</span>
		</div>
		<pokedex-sidebox v-bind:pokemon-hovered="pokemonHovered"></pokedex-sidebox>
		<pokedex-list v-on:poke-hover="onPokeHover" ></pokedex-list>
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
			pokemonHovered: {},
		};
	},

	computed: {
		isMobile: function() {
			return queryMedia.isMobile(this.$mq);
		}
	},

	methods: {
		onPokeHover: function(pokemon) {
			this.pokemonHovered = pokemon;
		}
	}

}
</script>


<style scoped lang="scss" src="./pokedex-layout.scss">
</style>