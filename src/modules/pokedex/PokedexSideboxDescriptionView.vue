<template>
	<div class="sidebox-description">
		<div class="sidebox-description__img">
			<template v-if="img">
				<img v-bind:src="img">
			</template>
			<template v-else>
				<img src="https://cdn.bulbagarden.net/upload/d/dc/GO_Pok%C3%A9_Ball.png">
			</template>
			<!--
			<img src="https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png">
			-->
		</div>
		<div class="sidebox-description__regnum">
			<span>{{ regnumFormatting(regnum) }}</span>
		</div>
		<div class="sidebox-description__name">
			<span>{{ name }}</span>
		</div>

		<div class="sidebox-description__types" :class="bindTypesGridClass">
			<div v-for="type in types" class="sidebox-description__types__type poke-type" :class="getTypeClass(type)">
				<span>{{ type }}</span>
			</div>
		</div>

		<!--
		<div class="sidebox-description__types">
			<div class="sidebox-description__types__type poke-type" :class="getTypeClass(types)">
				<span>{{ types ? types[0] : '' }}</span>
			</div>
			<div v-if="(types && types[1])" class="sidebox-description__types__type poke-type" :class="getTypeClass(types)">
				<span>{{ (types && types[1]) ? types[1] : ''}}</span>
			</div>
		</div>
		-->

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
export default {
	name: 'PokedexSideboxDescription',
	
	props: {
		name: String,
		types: {
			type: Array,
			default: function() {
        return [];
      }
		},
		regnum: Number,
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
		getRegnum: function(regnum) {
			return "#" + this.regnumFormatting(regnum);
		},

		regnumFormatting: function(regnum) {
      if (regnum) {
        regnum = regnum.toString();
			  while (regnum.length < 3) {
				  regnum = "0" + regnum;
        }
        regnum = "#" + regnum;
			  return regnum;
      } else {
        return '';
      }
		},

		getTypeClass: function(type) {
			return 'poke-type-' + type.toLowerCase();
		}
	}

}
</script>


<style scoped lang="scss" src="./pokedex-sidebox-description.scss">
</style>