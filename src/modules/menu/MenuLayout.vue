<template>
  <div class="menu">
    <div class="menu__title">
      <div class="menu__title__text">
        <span>Pokedex</span>
      </div>
      <div class="menu__title__toggle" v-on:click="onToggleMenu">
        <i class="fa fa-caret-square-o-down fa-lg" aria-hidden="true"></i>
      </div>
    </div>
    <transition name="menu__contents_toggle">
      <div class="menu__contents" v-show="isMenuToggled">
        <div class="menu__contents__item">
          <span>National Pokedex</span>
        </div>
        <div class="menu__contents__item">
          <span>Register Pokemon</span>
        </div>
        <div class="menu__contents__item">
          <span>Favorites</span>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>

export default {
  name: 'MenuLayout',

  data: function() {
    return {
      isMenuToggled: false
    };
  },

  /*
  computed: {
    menuToggleClass: function() {
      return this.isMenuToggled ? 'menu__contents_toggled-on' : 'menu__contents_toggled-off';
    }
  },
  */

  methods: {
    onToggleMenu: function() {
      this.isMenuToggled = !this.isMenuToggled;
    }
  }

}
</script>


<style scoped lang="scss" src="./menu-layout.scss">

/*
.menu-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: $poke-scarlett-dark;
}
*/

</style>