<template>
	<div class="filters">
		<div class="filters__name">
			<span class="filters__name__title">By Name</span>
			<input :value="getName" @input="setName" placeholder="Name">
		</div>
		<div class="filters__dropdown">
			<span class="filters__dropdown__title">By Type</span>
			<div class="filters__dropdown__select">
				<select v-model="typeSelected" class="filters__dropdown__select__dropdown">
					<option disabled value="">Select a Type</option>
					<option v-for="type in typesEnum" :key="type">{{ type }}</option>
				</select>
				<button class="filters__dropdown__select__button" :disabled="isDisabledDropdownButton" @click="addTypeSelected">Add</button>
			</div>
			<div class="filters__dropdown__prompt" v-show="textPrompt">
				<span>{{ textPrompt }}</span>
			</div>
		</div>
		<div class="filters__typelist">
			<span class="filters__typelist__title">Types Selected
				<span class="filters__typelist__title__ann">(Max. 4)</span>
			</span>
			<div v-for="type in types" :key="type.name" class="filters__typelist__list">
				<span>{{ type.name }}</span>
				<!--
				<span class="filters__typelist__list__restrained" @click="onToggleTypeRestrain(type)">
					<i class="fa fa-xs" :class="(type.restrained) ? 'fa-bullseye' : 'fa-genderless'" aria-hidden="true"></i>
				</span>
				-->
				<span class="filters__typelist__list__remove" @click="onRemoveType(type)">
					<i class="fa fa-xs fa-times-circle" aria-hidden="true"></i>
				</span>
			</div>
		</div>
		<div class="filters__strict">
			<button>Strict Filters</button>
		</div>
		<div class="filters__clear">
			<button>Clear Filters</button>
		</div>
	</div>
</template>


<script>
import typesEnum from "@/commons/enums/TypesEnum"
import debounce from 'lodash.debounce';

export default {
	name: 'PokedexSideboxFilters',

	created: function() {
		this.setName = debounce(this.setName, 500);
	},

	data: function() {
		return {
			typeSelected: "",
			textPrompt: "",
			typesEnum
		}
	},

	computed: {
		getName: function() {
			return this.$store.getters['pokedex/getFilterName'];
		},

		types: function() {
			return this.$store.getters['pokedex/getFilterTypes'];
		},

		isDisabledDropdownButton: function() {
			return (this.types.length >= 4) || (!this.typeSelected);
		},

		/* Should be here, not as an expression (For that we'd need to pass it into a component, which we should)
		isTypeRestrained: function() {
			return (restrained) ? 'fa-bullseye' : 'fa-circle-notch';
		}
		*/
	},
	
	/*
	watch: {
		'name': 'updateFilters',
		'types': 'updateFilters'
	},
	*/

	methods: {
		setName(ev) {
			this.$store.dispatch('pokedex/setFilterName', ev.target.value);
		},

		updateFilters: function() {
			this.$store.dispatch('pokedex/setFilters', { 
				name: this.name,
				types: this.types
			});
		},

		addTypeSelected: function() {
			let typeExists = this.types.find(function(type) {
				return this.typeSelected === type.name;
			}, this);

			if (!typeExists) {
				this.$store.dispatch("pokedex/pushFilterType", this.typeSelected);
				/*
				this.types.push({
					name: this.typeSelected,
					restrained: false
				});
				*/
				if (this.types.length == 4) {
					this.textPrompt = "You can only select 4 types.";
				} else {
					this.textPrompt = "";
				}
			} else {
				this.textPrompt = this.typeSelected + " is already Selected!";
			}
		},

		onToggleTypeRestrain: function(typeToRestrain) {
			this.$store.dispatch("pokedex/toggleTypeRestrain", typeToRestrain);
		},

		onRemoveType: function(typeToRemove) {
			this.$store.dispatch("pokedex/removeFilterType", typeToRemove);
			/*
			this.types = this.types.filter(function(type) {
				return type !== typeToRemove;
			});
			*/
			this.textPrompt = "";
		}
	}

}
</script>


<style scoped lang="scss" src="./pokedex-sidebox-filters.scss">
</style>