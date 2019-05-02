<template>
	<div class="dropdown">
		<span class="dropdown__title">By Type</span>
		<div class="dropdown__select">
			<select v-model="typeSelected" class="dropdown__select__dropdown">
				<option disabled value="">Select a Type</option>
				<option v-for="type in typesEnum" :key="type">{{ type }}</option>
			</select>
			<button class="dropdown__select__button pokebtn pokebtn-action" :disabled="isDisabledDropdownButton" @click="addTypeSelected">Add</button>
		</div>
		<div class="dropdown__prompt" v-show="prompt">
			<span>{{ prompt }}</span>
		</div>
	</div>
</template>


<script>
import typesEnum from "@/commons/enums/TypesEnum"

export default {
	name: 'PokedexSideboxFiltersDropdown',

	props: {
		filterList: Object,
		prompt: String
	},

	data: function() {
		return {
			typeSelected: "",
			typesEnum
		}
	},

	computed: {
		isDisabledDropdownButton: function() {
			return (this.filterList.list.length >= this.filterList.maxLength) || (!this.typeSelected);
		}
	},

	methods: {
		addTypeSelected: function() {
			let typeExists = this.filterList.list.find(function(type) {
				return this.typeSelected === type;
			}, this);

			if (!typeExists) {
				this.$store.dispatch("pokedex/pushFilterType", this.typeSelected);
				if (this.filterList.list.length == this.filterList.maxLength) {
					this.$emit("text-prompt", "You can only select " + this.filterList.maxLength + " types.");
				} else {
					this.$emit("text-prompt", "");
				}
			} else {
				this.$emit("text-prompt", this.typeSelected + " is already Selected!");
			}
		}
	}

}
</script>


<style scoped lang="scss" src="./pokedex-sidebox-filters-dropdown.scss">
</style>