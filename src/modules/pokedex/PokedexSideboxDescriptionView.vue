<template>
	<div class="sidebox-description">
		<div class="sidebox-description__img">
			<img src="https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png">
			<!--
			<img v-bind:src="hovered.srcImg">
			-->
		</div>
		<div class="sidebox-description__regnum">
			<span>{{ regnumFormatting(regnum) }}</span>
		</div>
		<div class="sidebox-description__name">
			<span>{{ name }}</span>
		</div>
		<div class="sidebox-description__types">
			<div class="sidebox-description__types__type poke-type" :class="getTypeClass(types)">
				<span>{{ types ? types[0] : '' }}</span>
			</div>
			<div class="sidebox-description__types__type poke-type" :class="getTypeClass(types)">
				<span>{{ (types && types[1]) ? types[1] : ''}}</span>
			</div>
		</div>
		<div class="sidebox-description__details">
			<span>Height</span>
			<span>Weight</span>
		</div>
	</div>
</template>


<script>
export default {
	name: 'PokedexSideboxDescription',
	
	props: [
    'name',
    'types',
    'regnum'
  ],
    
	data: function() {
		return {
			pokemonHovered: null,
		};
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

		getTypeClass: function(types) {
			if (types) {
				return 'poke-type-' + types[0].toLowerCase();
			} else {
				return '';
			}
		}
	}

}
</script>


<style scoped lang="scss" src="./pokedex-sidebox-description.scss">
</style>