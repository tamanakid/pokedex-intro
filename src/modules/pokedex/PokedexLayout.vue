<template>
	<div class="pokedex">
		<h3>Pokedex</h3>
		<p class="tal">Pokedex Layout</p>
		<div v-for="pokemon in pokedexPage" v-bind:key="pokemon.id">
			<p>{{ pokemon.name }}</p>
		</div>
	</div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
	name: 'app',

	components: {
		//HelloWorld
	},
	
	data: function() {
		return {
			currentPage: 0
		};
	},
	
	beforeCreate: function() {
		this.$store.dispatch('pokedex/fetchPokedex');
	},

	computed: {
		pokedexPage: function() {
			return this.doPagination(this.$store.getters['pokedex/getPokedexFiltered']);
		}
	},

	methods: {
		// may be better as a util (?) or maybe call the util from the store (?)
		doPagination: function(pokedex) {
			return pokedex.slice((this.currentPage)*10, (this.currentPage + 1)*10);
		},

	}


}
</script>

<style scoped lang="scss">
/* This margin should be in the layout
.pokedex {
	@include media-tp-down {
		margin: 5rem;
	}
}
*/

.tal {
	font: $font-subtitle;
	color: $poke-scarlett-light;
}
</style>