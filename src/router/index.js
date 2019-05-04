import Vue from 'vue'
import VueRouter from 'vue-router'

import PokedexLayout from '@/modules/pokedex/PokedexLayout.vue'
import PokemonDataLayout from '@/modules/pokemon-data/PokemonDataLayout.vue'
import FavoritesLayout from '@/modules/favorites/FavoritesLayout.vue'


Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		redirect: { name: "pokedex" }
	},
	{
		name: "pokedex",
		path: "/pokedex",
		component: PokedexLayout
	},
	{
		name: "pokemon-data",
		path: '/pokedex/:regnum',
		component: PokemonDataLayout
	},
	{
		name: "favorites",
		path: "/favorites",
		component: FavoritesLayout
	}
]

const router = new VueRouter({
	routes
});

export { router as default };