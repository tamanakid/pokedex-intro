<template>
  <div class="pokedex-list">
		<template v-for="pokemon in pokedexList">
			<div class="pokedex-list__pokemon" :key="pokemon.id" @mouseenter="onHoverPokemon(pokemon, $event)" @mouseleave="offHoverPokemon(pokemon, $event)">
				<div class="pokedex-list__pokemon__icon">
					<img src="https://cdn.bulbagarden.net/upload/e/ec/001MS.png">
				</div>
				<div class="pokedex-list__pokemon__name" :class="bindIsGreen">
					<span>{{ pokemon.name }}</span>
				</div>
				<div class="pokedex-list__pokemon__regnum">
					<span>{{ pokemon.regnum }}</span>
				</div>
			</div>
		</template>
  </div>
</template>


<script>
import { mqLayouts } from '@/config/vue-mq.config';

export default {
	name: 'PokedexList',

	components: {
		// none
	},

	props: [
    "pokedexList"
  ],

	data: function() {
		return {
			isGreen: false
		};
	},

	computed: {
		/** 
		 * Should be separated into a PokedexPokemonView, so each instance has its own isHovered attribute for the background
		 */
		bindIsGreen: function() {
			return (this.isGreen) ? 'bg-green' : '';
		}
	},

	methods: {
		// may be better as a util (?) or maybe call the util from the store (?)
		doPagination: function(pokedex) {
			return pokedex.slice((this.currentPage)*25, (this.currentPage + 1)*25);
		},

		getRegnum: function(regnum) {
			return "#" + this.regnumFormatting(regnum);
		},

		regnumFormatting: function(regnum) {
			regnum = regnum.toString();
			while (regnum.length < 3) {
				regnum = "0" + regnum;
			}
			return regnum;
		},

		onHoverPokemon: function(pokemon, event) {
			this.isGreen = true;
			//console.log(pokemon);
			this.$emit('test', pokemon);
		},

		offHoverPokemon: function(pokemon, event) {
			this.isGreen = false;
		}
	}

}
</script>


<style scoped lang="scss" src="./pokedex-list.scss">
</style>