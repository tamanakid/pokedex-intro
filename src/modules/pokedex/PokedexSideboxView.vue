<template>
  <div class="pokedex-box" @mouseleave="offHoverFilters">
    <div class="pokedex-box__description" v-if="showDescription">
      <sidebox-description :name="name" :types="types" :regnum="regnum"></sidebox-description>
    </div>
    <div class="pokedex-box__filters" @mouseenter="onHoverFilters">
      <div class="pokedex-box__filters__title">
        <span>Filters</span>
      </div>
      <template v-if="showPhoneFilter">
        <div class="pokedex__box__filters__dropdown">
          <span>X</span>
        </div>
      </template>
      <template v-else>
        <transition name="show-filter">
          <div class="pokedex-box__filters__detail" v-show="showFilterOptions">
            <sidebox-filters></sidebox-filters>
          </div>
        </transition>
      </template>
    </div>    
  </div>
</template>


<script>
import PokedexSideboxDescriptionView from './PokedexSideboxDescriptionView.vue'
import PokedexSideboxFiltersView from './PokedexSideboxFiltersView.vue'
import { mqLayouts } from '@/config/vue-mq.config';

export default {
	name: 'PokedexCustomBox',

	components: {
    'sidebox-description': PokedexSideboxDescriptionView,
    'sidebox-filters': PokedexSideboxFiltersView
  },
  
  /**
   * Should it be passed the whole object instead? Analysis for after the Filter box is formatted and modularized
   */
  props: [
    'name',
    'types',
    'regnum'
  ],

  
	data: function() {
		return {
			isFilterHovered: false
		};
  },

	computed: {
    showDescription: function() {
			return (this.$mq === 'd');
    },

    showFilterOptions: function() {
      return (this.$mq === 'd') ? this.isFilterHovered : true;      
    },

    showPhoneFilter: function() {
      return (mqLayouts.mediaMlDown.includes(this.$mq));
    }
	},

	methods: {
    onHoverFilters: function() {
      this.isFilterHovered = true;
    },

    offHoverFilters: function() {
      this.isFilterHovered = false;
    },

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