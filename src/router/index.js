import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'
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
		component: PokedexLayout,
		beforeEnter(to, from, next) {
			store.dispatch('pokedex/fetchPokedex')
			.then(() => {
				next();
			})
			.catch(() => {
				next({name: 'favorites' }); // should be error!
			});
		}
	},
	{
		name: "pokemon-data",
		path: '/pokedex/:regnum',
		component: PokemonDataLayout,
		beforeEnter(to, from, next) {
			let pokeDataPromise = store.dispatch('pokemonData/fetchPokemonData', to.params.regnum);
			pokeDataPromise.then(({ isAlreadyFetched, moves }) => {
				if (!isAlreadyFetched) {
					store.dispatch('pokemonData/fetchMoves', moves)
					.then(() => {
						next();
					})
					.catch(() => {
						next({name: 'favorites' }); // should be error!
					});
				} else {
					next();
				}
			})
			.catch(() => {
				next({name: 'favorites' }); // should be error!
			});
		}
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