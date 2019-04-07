<template>
  <div class="menu">
    <div class="menu__title">
      <div class="menu__title__text">
        <span>Pokedex</span>
      </div>
      <div class="menu__title__toggle" v-if="isTpDown" v-on:click="onToggleMenu">
        <i class="fa fa-caret-square-o-down fa-lg" aria-hidden="true"></i>
      </div>
    </div>
    <template v-if="isTpDown">
      <transition name="menu__contents_toggle">
        <!-- must create new condition (showMenuContents) based on isMenuToggled and $mq-->
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
    </template>
    <template v-else>
      <div class="menu__contents">
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
    </template>
  </div>
</template>


<script>

export default {
  name: 'MenuLayout',

  data: function() {
    return {
      isMenuToggled: false,
      mediaTpDown: ["mp", "ml", "tp"]
    };
  },

  computed: {
    isTpDown: function() {
      return this.mediaTpDown.includes(this.$mq);
    }
  },

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