<template>
	<div class="pokedex">
		<h3>Pokedex</h3>
		<p class="tal">Pokedex Layout</p>
	</div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
	name: 'app',

	components: {
		//HelloWorld
	}
}
</script>

<style scoped lang="scss">
.pokedex {
	@include media-tp-down {
		margin: 5rem;
	}
}

.tal {
	font: $font-subtitle;
	color: $poke-scarlett-light;
}
</style>