<template>
	<div class="filters">

		<div class="filters__name">
			<span class="filters__name__title">By Name</span>
			<input :value="getName" @input="setName" placeholder="Name">
		</div>

		<dropdown :filterList="filterList" :prompt="textPrompt" v-on:text-prompt="changeTextPrompt"></dropdown>
		
		<typelist :filterList="filterList" v-on:text-prompt="changeTextPrompt"></typelist>
		
		<div class="filters__strict">
			<button class="pokebtn" :class="bindIsStrictClass" @click="onToggleStrict">Strict Filters</button>
		</div>
		<div class="filters__clear">
			<button class="pokebtn pokebtn-active" @click="onClearFilters">Clear Filters</button>
		</div>

	</div>
</template>


<script>
import FiltersDropdown from './PokedexSideboxFiltersDropdownView.vue'
import FiltersTypelist from './PokedexSideboxFiltersTypelistView.vue'
import debounce from 'lodash.debounce';

export default {
	name: 'PokedexSideboxFilters',

	components: {
		'dropdown': FiltersDropdown,
		'typelist': FiltersTypelist
	},

	created: function() {
		this.setName = debounce(this.setName, 500);
	},

	data: function() {
		return {
			textPrompt: ""
		}
	},

	computed: {
		getName: function() {
			return this.$store.getters['pokedex/getFilterName'];
		},

		filterList: function() {
			if (this.isStrict) {
				return this.$store.getters['pokedex/getFilterStrictTypes'];
			} else {
				return this.$store.getters['pokedex/getFilterTypes'];
			}
		},
		
		isStrict: function() {
			return this.$store.getters['pokedex/getIsFilterStrict'];
		},

		bindIsStrictClass: function() {
			return (this.isStrict) ? 'pokebtn-on' : 'pokebtn-off';
		}
	},

	methods: {
		setName(ev) {
			this.$store.dispatch('pokedex/setFilterName', ev.target.value);
		},

		onToggleStrict: function() {
			this.$store.dispatch("pokedex/toggleStrictFilter");
			this.changeTextPrompt("");
		},

		onClearFilters: function() {
			this.$store.dispatch("pokedex/clearFilters");
			this.changeTextPrompt("");
		},

		changeTextPrompt: function(textPrompt) {
			this.textPrompt = textPrompt;
		}

	}

}
</script>


<style scoped lang="scss" src="./pokedex-sidebox-filters.scss">
</style>