<template>
	<div class="filters">
		<div class="filters__param filters__param-single filters__name">
			<span class="filters__param__title">By Name</span>
			<input placeholder="Name">
		</div>
		<div class="filters__param filters__param-single filters__type">
			<span class="filters__param__title">By Type</span>
			<input placeholder="Type">
		</div>
		<div class="filters__param filters__param-compound filters__stats">
			<span class="filters__param__title">By Stats</span>
			<input placeholder="Stats">
			<input placeholder="Value">
		</div>
	</div>
</template>


<script>
export default {
	name: 'PokedexSideboxDescription'
}
</script>


<style scoped lang="scss" src="./pokedex-sidebox-filters.scss">
</style>