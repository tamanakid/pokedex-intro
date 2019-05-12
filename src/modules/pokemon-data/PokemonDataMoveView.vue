<template>
	<div class="move" :class="bindTypeClass" @mouseenter="toggleShowDetailModal" @mouseleave="toggleShowDetailModal">
		<span class="move__name">{{ moveDetails.name }}</span>
		<span class="move__type">{{ moveDetails.type }}</span>
		<transition name="detail-modal">
			<div v-if="showDetailModal" class="move__details">
				<div>Power: {{ parsePower }}</div>
				<div>Accuracy: {{ parseAcc }}</div>
				<div>PP: {{ moveDetails.pp }}</div>
			</div>
		</transition>
	</div>
</template>


<script>
export default {
	name: 'PokemonDataMove',

	props: {
		moveId: {
			type: Number,
			required: true
		}
	},

	data: function() {
		return {
			showDetailModal: false
		};
	},

	computed: {
		moveDetails: function() {
			return this.$store.getters['pokemonData/getMove'](this.moveId);
		},

		bindTypeClass: function() {
			return 'move-type-' + this.moveDetails.type.toLowerCase();
		},

		parsePower: function() {
			return (this.moveDetails.power) ? this.moveDetails.power : '-';
		},
		parseAcc: function() {
			return (this.moveDetails.accuracy) ? this.moveDetails.accuracy : '-';
		}
	},

	methods: {
		toggleShowDetailModal: function() {
			this.showDetailModal = !this.showDetailModal;
		}
	}

}
</script>


<style scoped lang="scss" src="./pokemon-data-move.scss">
</style>