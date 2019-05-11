<template>
	<div class="summary">
		<div class="summary__name">
			<span>{{ currentPokemon.name }}</span>
		</div>
		<div class="summary__regnum">
			<span>{{ formatRegnum(currentPokemon.regnum) }}</span>
		</div>
		<div class="summary__types" :class="bindTypesGridClass">
			<div class="summary__types__title">
				<span>Types:</span>
			</div>
			<div v-for="type in currentPokemon.types" :key="type" class="summary__types__type poke-type" :class="bindTypeClass(type)">
				<span>{{ type }}</span>
			</div>
		</div>
		<div class="summary__measures">
			<span>Height - {{ currentPokemon.height }} ({{ convertHeight }} mts)</span>
			<span>Weight - {{ currentPokemon.weight }} lbs ({{ convertWeight }} kgs)</span>
		</div>
	</div>
</template>


<script>
import regnumMixin from '@/commons/mixins/regnumMixin'

export default {
	name: 'PokemonDataSummaryView',

	mixins: [regnumMixin],

	props: {
		currentPokemon: {
			type: Object,
			required: true
		}
	},

	computed: {
		bindTypesGridClass: function() {
			return (this.currentPokemon.types.length === 2) ? "summary__types_grid-two" : "summary__types_grid-one"; 
		},

		convertHeight: function() {
			let heightSplit = this.currentPokemon.height.split("'");
			return ((parseInt(heightSplit[0])*12 + parseInt(heightSplit[1])) * 2.54 / 100).toFixed(2);
		},

		convertWeight: function() {
			return (parseFloat(this.currentPokemon.weight)*0.454).toFixed(1);
		}
	},

	methods: {
		bindTypeClass: function(type) {
			return 'poke-type-' + type.toLowerCase();
		},
	}

}
</script>


<style scoped lang="scss" src="./pokemon-data-summary.scss">
</style>