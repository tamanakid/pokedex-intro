<template>
	<div class="sidebox-description">
		<div class="sidebox-description__img">
			<template v-if="img">
				<img v-bind:src="img">
			</template>
			<template v-else>
				<img src="https://cdn.bulbagarden.net/upload/d/dc/GO_Pok%C3%A9_Ball.png">
			</template>
		</div>

		<div class="sidebox-description__regnum">
			<span>{{ formatRegnum(regnum) }}</span>
		</div>
		<div class="sidebox-description__name">
			<span>{{ name }}</span>
		</div>

		<div class="sidebox-description__types" :class="bindTypesGridClass">
			<div v-for="type in types" :key="type" class="sidebox-description__types__type poke-type" :class="getTypeClass(type)">
				<span>{{ type }}</span>
			</div>
		</div>

		<div v-if="height && weight" class="sidebox-description__details">
			<div class="sidebox-description__details__height">
				<span>Height: {{ height }}</span>
			</div>
			<div class="sidebox-description__details__height">
				<span>Weight: {{ weight }}</span>
			</div>
		</div>
	</div>
</template>


<script>
import regnumMixin from '@/commons/mixins/regnumMixin'

export default {
	name: 'PokedexSideboxDescription',

	mixins: [regnumMixin],
	
	props: {
		name: String,
		types: {
			type: Array,
			default: function() {
        return [];
      }
		},
		regnum: {
			type: Number,
			default: null
		},
		height: String,
		weight: String,
		img: String
	},

	computed: {
		bindTypesGridClass: function() {
			return (this.types.length === 2) ? "sidebox-description__types_grid-two" : "sidebox-description__types_grid-one"; 
		}
	},

	methods: {
		getTypeClass: function(type) {
			return 'poke-type-' + type.toLowerCase();
		}
	}

}
</script>


<style scoped lang="scss" src="./pokedex-sidebox-description.scss">
</style>