<template>
	<div class="typelist" :class="bindIsStrictClass">
		<span class="typelist__title">Types Selected
			<span class="typelist__title__ann">(Max. {{ filterList.maxLength }})</span>
		</span>
		<div v-for="type in filterList.list" :key="type" class="typelist__list">
			<span>{{ type }}</span>
			<span class="typelist__list__remove" @click="onRemoveType(type)">
				<i class="fa fa-xs fa-times-circle" aria-hidden="true"></i>
			</span>
		</div>
	</div>
</template>


<script>
import { mapState } from 'vuex'

export default {
	name: 'PokedexSideboxFiltersTypelist',

	props: {
		filterList: Object
	},

	computed: mapState({
		bindIsStrictClass: function(state) {
			return (state.pokedex.filters.isStrict) ? 'filters__typelist_strict-true' : 'filters__typelist_strict-false'; 
		},
	}),

	methods: {
		onRemoveType: function(typeToRemove) {
			this.$store.dispatch("pokedex/removeFilterType", typeToRemove);
			this.$emit("text-prompt", "");
		}
	}

}
</script>


<style scoped lang="scss" src="./pokedex-sidebox-filters-typelist.scss">
</style>