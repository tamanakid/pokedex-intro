<template>
	<div class="pokemon-data">
		<div class="pokemon-data__summary">
			<div class="pokemon-data__summary__name">
				<span>{{ currentPokemon.name }}</span>
			</div>
			<div class="pokemon-data__summary__regnum">
				<span>{{ currentPokemon.regnum }}</span>
			</div>
			<div class="pokemon-data__summary__types">
				<div v-for="type in currentPokemon.types" :key="type" class="poke-type" :class="bindTypeClass(type)">
					<span>{{ type }}</span>
				</div>
			</div>
			<div class="pokemon-data__summary__measures">
				<span>Height: {{ currentPokemon.height }}</span>
				<span>Weight: {{ currentPokemon.weight }}</span>
			</div>
		</div>
		<div class="pokemon-data__img">
			<img :src="currentPokemon.img">
		</div>
		<div class="pokemon-data__stats">
			<div v-for="(value, stat) in currentPokemon.stats" :key="stat" class="pokemon-data__stats__stat">
				<span>{{ stat }}: {{ value }}</span>
			</div>
		</div>
		<div class="pokemon-data__moves">

		</div>
		<!--
			<p v-for="(value, key) in currentPokemon" :key="key">{{ key }}: {{ value }}</p>
		-->
	</div>
</template>


<script>

export default {
	name: 'PokemonDataLayout',

	computed: {		
		currentPokemon: function() {
			return this.$store.getters['pokemonData/getCurrentPokemonData'];
		},

		pokemonMoves: function() {
			return this.currentPokemon.moves.map(function(move) {
				return this.$store.getters['pokemonData/getMove'](move);
			});
		}
	},

	methods: {
		bindTypeClass: function(type) {
			return 'poke-type-' + type.toLowerCase();
		},
	}

}
</script>


<style scoped lang="scss" src="./pokemon-data-layout.scss">
</style>