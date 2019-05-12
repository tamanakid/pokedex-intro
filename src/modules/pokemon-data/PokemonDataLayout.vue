<template>
	<div class="pokemon-data" :class="bindTypeFirstClass">
		<div class="pokemon-data__stats">
			<div class="pokemon-data__stats__title">
				<span>Base Stats</span>
			</div>
			<template v-for="(value, stat) in currentPokemon.stats">
				<data-stat :key="stat" :stat="stat" :value="value"></data-stat>
			</template>
		</div>

		<div class="pokemon-data__img">
			<img :src="currentPokemon.img">
		</div>

		<div class="pokemon-data__moves">
			<div class="pokemon-data__moves__title">
				<span>Moves</span>
			</div>
			<template v-for="moveId in currentPokemon.moves">
				<data-move :key="moveId" :moveId="moveId"></data-move>
			</template>
		</div>

		<data-summary :currentPokemon="currentPokemon"></data-summary>

	</div>
</template>


<script>
import PokemonDataSummaryView from './PokemonDataSummaryView.vue'
import PokemonDataStatView from './PokemonDataStatView.vue'
import PokemonDataMoveView from './PokemonDataMoveView.vue'

export default {
	name: 'PokemonDataLayout',

	components: {
		'data-summary': PokemonDataSummaryView,
		'data-stat': PokemonDataStatView,
		'data-move': PokemonDataMoveView
		},

	computed: {
		currentPokemon: function() {
			return this.$store.getters['pokemonData/getCurrentPokemonData'];
		},

		pokemonMoves: function() {
			return this.currentPokemon.moves.map(function(move) {
				return this.$store.getters['pokemonData/getMove'](move);
			});
		},

		bindTypeFirstClass: function() {
			return 'pokemon-data_types-' + this.currentPokemon.types[0].toLowerCase();
		}
	}

}
</script>


<style scoped lang="scss" src="./pokemon-data-layout.scss">
</style>