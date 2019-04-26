<template>
  <div class="list-pokemon" :class="bindClasses" @mouseenter="onHoverPokemon" @mouseleave="offHoverPokemon">
    <div class="list-pokemon__icon">
      <img v-bind:src="icon">
    </div>
    <div class="list-pokemon__name">
      <span>{{ name }}</span>
    </div>
    <div class="list-pokemon__regnum">
      <span>{{ formatRegnum(regnum) }}</span>
    </div>
  </div>
</template>


<script>
import regnumMixin from '@/commons/mixins/regnumMixin'

export default {
	name: 'PokedexListPokemon',

	mixins: [regnumMixin],

	props: {
    icon: String,
    name: String,
    regnum: Number,
    types: {
			type: Array,
			default: function() {
        return [];
      }
		}
  },

	data: function() {
		return {
      isHovered: false,
      typesCount: this.types.length
		};
  },

	computed: {
		bindClasses: function() {
      let isHoveredClasses = (this.isHovered) ? 'list-pokemon_hovered-true' : 'list-pokemon_hovered-false';
      let typeClasses = ' type';
      this.types.forEach(function(type) {
        typeClasses += '-' + type.toLowerCase();
      });
      
			return isHoveredClasses + '' + typeClasses;       
		}
	},

	methods: {
		onHoverPokemon: function() {
			this.isHovered = true;
			this.$emit('poke-hover');
		},

		offHoverPokemon: function() {
			this.isHovered = false;
		}
	}

}
</script>


<style scoped lang="scss" src="./pokedex-list-pokemon.scss">
</style>