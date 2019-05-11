<template>
	<div class="stat" :class="bindStatClass">
		<div class="stat__text">
			<span>{{ stat | capitalize }}</span>
		</div>
		<div class="stat__bar">
			<div class="stat__bar__fill" :class="bindWidthClass">{{ value }}</div>
		</div>
	</div>
</template>


<script>
export default {
	name: 'PokemonDataStat',

	props: {
		stat: {
			type: String,
			required: true
		},
		value: {
			type: Number,
			required: true
		}
	},

	computed: {
		bindStatClass: function() {
			return 'stat-' + this.stat;
		},

		bindWidthClass: function() {
			let fraction = (this.value < 150) ? (this.value/5).toFixed(0) : 30;
			return 'stat__bar__fill-' + fraction;
		}
	}

}
</script>


<style scoped lang="scss" src="./pokemon-data-stat.scss">
</style>