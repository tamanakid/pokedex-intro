<template>
  <div>
    <template v-for="item in menuItems">
      <div class="menu__contents__item" v-bind:key="item.navigation" v-on:click="onNavigate(item.navigation)">
        <span>{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>


<script>

export default {
  name: 'MenuContentsView',

  data: function() {
    return {
      menuItems: [
        { text: "National Pokedex", navigation: "pokedex" },
        { text: "Register New Pokemon", navigation: "new-pokemon" },
        { text: "My Favorites", navigation: "favorites" }
      ],
    };
  },

  methods: {
    onNavigate: function(route) {
      this.$router.push({ name: route });
    }
  }

}
</script>


<style scoped lang="scss" src="./menu-contents-view.scss">


</style>