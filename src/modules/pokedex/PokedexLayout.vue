<template>
	<div class="pokedex">
		<div class="pokedex__title">
			<span>National Pokedex</span>
		</div>

		<div class="pokedex__box">
			<div class="pokedex__box__description" v-if="showDescription">
				<div class="pokedex__box__description__img">
					<img src="https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png">
					<!--
					<img v-bind:src="hovered.srcImg">
					-->
				</div>
				<div class="pokedex__box__description__regnum">
					<span>#001</span>
				</div>
				<div class="pokedex__box__description__name">
					<span>Bulbasaur</span>
				</div>
				<div class="pokedex__box__description__types">
					<span>Grass</span>
					<span>Poison</span>
				</div>
				<div class="pokedex__box__description__details">
					<span>Height</span>
					<span>Weight</span>
				</div>
			</div>
			
			<div class="pokedex__box__filters">
				<span>Filters</span>
			</div>
		</div>

		<div class="pokedex__list">
			<div class="pokedex__list__pokemon" v-for="pokemon in pokedexPage" v-bind:key="pokemon.id">
				<div class="pokedex__list__pokemon__icon">
					<img src="https://cdn.bulbagarden.net/upload/e/ec/001MS.png">
				</div>
				<div class="pokedex__list__pokemon__name">
					<span>{{ pokemon.name }}</span>
				</div>
				<div class="pokedex__list__pokemon__regnum">
					<span>{{ pokemon.regnum }}</span>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import { mqLayouts } from '@/config/vue-mq.config';

export default {
	name: 'app',

	components: {
		//HelloWorld
	},

	beforeCreate: function() {
		this.$store.dispatch('pokedex/fetchPokedex');
	},

	data: function() {
		return {
			currentPage: 0
		};
	},

	computed: {
		pokedexPage: function() {
			return this.doPagination(this.$store.getters['pokedex/getPokedexFiltered']);
		},

    	showDescription: function() {
      		return !(mqLayouts.mediaTpDown.includes(this.$mq));
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
		}
	}

}
</script>


<style scoped lang="scss" src="./pokedex-layout.scss">
</style>