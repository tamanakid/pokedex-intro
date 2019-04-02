import Vue from 'vue'
import VueRouter from 'vue-router'

import PokedexLayout from '@/modules/pokedex/PokedexLayout.vue'

Vue.use(VueRouter);

const routes = [
    { path: "/", redirect: { name: "pokedex" } },
    { name: "pokedex", path: "/pokedex", component: PokedexLayout }
]

const router = new VueRouter({
    routes
});

export { router as default };