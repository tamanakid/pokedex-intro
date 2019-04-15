<template>
  <div class="pokedex-box">
    <div class="pokedex-box__description" v-if="showDescription">
      <div class="pokedex-box__description__img">
        <img src="https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png">
        <!--
        <img v-bind:src="hovered.srcImg">
        -->
      </div>
      <div class="pokedex-box__description__regnum">
        <span>{{ regnumFormatting(regnum) }}</span>
      </div>
      <div class="pokedex-box__description__name">
        <span>{{ name }}</span>
      </div>
      <div class="pokedex-box__description__types">
        <span>{{ types ? types[0] : '' }}</span>
        <span>{{ (types && types[1]) ? types[1] : ''}}</span>
      </div>
      <div class="pokedex-box__description__details">
        <span>Height</span>
        <span>Weight</span>
      </div>
    </div>
    
    <div class="pokedex-box__filters">
      <div class="pokedex-box__filters__title">
        <span>Filters</span>
      </div>
      <template v-if="showFilterOptions">
        <transition name="deploy-filter">
          <div class="pokedex-box__filters__options">
            <div class="pokedex-box__filters__options__name">
              <span>By Name</span>
            </div>
            <div class="pokedex-box__filters__options__type">
              <span>By Type</span>
            </div>
            <div class="pokedex-box__filters__options__stats">
              <span>By Stats</span>
            </div>
          </div>
        </transition>
      </template>
    </div>
  </div>
</template>


<script>
import { mqLayouts } from '@/config/vue-mq.config';

export default {
	name: 'PokedexCustomBox',

	components: {
    // none yet
  },
  
  /**
   * Should it be passed the whole object instead? Analysis for after the Filter box is formatted and modularized
   */
  props: [
    'name',
    'types',
    'regnum'
  ],

  /*
	data: function() {
		return {
			currentPage: 0
		};
  },
  */

	computed: {
    showDescription: function() {
			return !(mqLayouts.mediaTpDown.includes(this.$mq));
    },

    showFilterOptions: function() {
      // really depends on hover action
      return (mqLayouts.mediaTpDown.includes(this.$mq));
    }
	},

	methods: {
		// may be better as a util (?) or maybe call the util from the store (?)
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
			
		}
	}

}
</script>


<style scoped lang="scss" src="./pokedex-sidebox.scss">
</style>