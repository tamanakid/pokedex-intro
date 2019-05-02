<template>
  <div class="pokedex-box" @mouseleave="offHoverFilters">
    <div class="pokedex-box__description" v-if="showDescription">
      <sidebox-description v-bind="pokemonHovered"></sidebox-description>
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
          <div class="pokedex-box__filters__detail" :class="classFilterOff" v-show="showFilterOptions">
            <sidebox-filters></sidebox-filters>
          </div>
        </transition>
      </template>
    </div>    
  </div>
</template>


<script>
import PokedexSideboxDescriptionView from './PokedexSideboxDescriptionView.vue'
import PokedexSideboxFiltersView from './filters/PokedexSideboxFiltersView.vue'
import { queryMedia } from '@/config/vue-mq.config';

export default {
	name: 'PokedexSidebox',

	components: {
    'sidebox-description': PokedexSideboxDescriptionView,
    'sidebox-filters': PokedexSideboxFiltersView
  },

  props: {
    pokemonHovered: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },

  
	data: function() {
		return {
			isFilterHovered: false
		};
  },

	computed: {
    showDescription: function() {
			return queryMedia.isDesktop(this.$mq);
    },

    showFilterOptions: function() {
      return (queryMedia.isDesktop(this.$mq)) ? this.isFilterHovered : true;      
    },

    showPhoneFilter: function() {
      return queryMedia.isMobile(this.$mq);
    },

    classFilterOff: function() {
      return this.showFilterOptions ? '' : 'pokedex-box__filters__detail_off';
    }
	},

	methods: {
    onHoverFilters: function() {
      this.isFilterHovered = true;
    },

    offHoverFilters: function() {
      this.isFilterHovered = false;
    },
	}

}
</script>


<style scoped lang="scss" src="./pokedex-sidebox.scss">

</style>