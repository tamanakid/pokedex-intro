<template>
  <div class="pokedex-box" @mouseleave="offHoverFilters">
    <template v-if="showDescription">
      <sidebox-description :name="name" :types="types" :regnum="regnum"></sidebox-description>
    </template>

    <!--<div class="pokedex-box__filters" @mouseleave="offHoverFilters">-->
    <div class="pokedex-box__filters"> 
      <div class="pokedex-box__filters__title" @mouseenter="onHoverFilters">
        <span>Filters</span>
      </div>
      <transition name="showfilter">
        <template v-if="showFilterOptions">
          <sidebox-filters></sidebox-filters>
        </template>
      </transition>
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
			// return (this.$mq === 'd' && !this.isFilterHovered)
      // return !(mqLayouts.mediaTpDown.includes(this.$mq));
      return !this.isFilterHovered;
    },

    showFilterOptions: function() {
      // really depends on hover action
      // return !(this.$mq === 'd') || this.isFilterHovered;
      return this.isFilterHovered;
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
.showfilter-enter-active, .showfilter-leave-active {
  transition: transform 1s ease-in-out;
}

.showfilter-enter, .showfilter-leave-to {
  transform: scale(1, 0);
}
</style>