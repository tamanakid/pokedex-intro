<template>
	<div class="pokedex">
		<div class="pokedex__title">
			<span>National Pokedex</span>
		</div>
		<div class="pokedex__poke-list" >

			<div class="pokedex__pokemon" v-for="pokemon in pokedexPage" v-bind:key="pokemon.id">
				<div class="pokedex__pokemon__img">
					<img v-bind:src="pokemon.img" class="pokedex__pokemon__img_image"/>
				</div>

				<div class="pokedex__pokemon__content">
					<div class="pokedex__pokemon__content__top">
						<span>{{ pokemon.name }}</span>
						<span>{{ getRegnum(pokemon.regnum) }}</span>
					</div>

					<div v-for="type in pokemon.types" v-bind:key="type">
						<!-- the bound 'type_grass' classes must be global, probably from a mixin -->
						<div class="pokedex__pokemon__content__type" v-bind:class="'type_' + type.toLowerCase()">
							<span>{{ type }}</span>
						</div>
					</div>
				</div>

			</div>
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
		}
	},

	methods: {
		// may be better as a util (?) or maybe call the util from the store (?)
		doPagination: function(pokedex) {
			return pokedex.slice((this.currentPage)*10, (this.currentPage + 1)*10);
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