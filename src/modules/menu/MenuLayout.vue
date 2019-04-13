<template>
  <div class="menu">

    <div class="menu__title">
      <div class="menu__title__text">
        <span>Pokedex</span>
      </div>
      <div class="menu__title__toggle" v-if="isTpDown" v-on:click="onToggleMenu">
        <i class="fa fa-lg" v-bind:class="caretSquareClass" aria-hidden="true"></i>
      </div>
    </div>

    <template v-if="isTpDown">
      <transition name="menu__contents_toggle">
        <div class="menu__contents" v-show="isMenuToggled">
          <menu-contents></menu-contents>
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="menu__contents">
        <menu-contents></menu-contents>
      </div>
    </template>

  </div>
</template>



<script>
import MenuContentsView from './MenuContentsView.vue';
import { mqLayouts } from '@/config/vue-mq.config';

export default {
  name: 'MenuLayout',

  components: {
    "menu-contents": MenuContentsView
  },

  data: function() {
    return {
      isMenuToggled: false
    };
  },

  computed: {
    isTpDown: function() {
      return mqLayouts.mediaTpDown.includes(this.$mq);
    },

    caretSquareClass: function() {
      return this.isMenuToggled ? "fa-caret-square-o-up": "fa-caret-square-o-down";
    }
  },

  watch: {
    '$route': 'closeOnNavigation'
  },

  methods: {
    onToggleMenu: function() {
      this.isMenuToggled = !this.isMenuToggled;
    },

    closeOnNavigation: function() {
      this.isMenuToggled = false;
    }
  }

}
</script>



<style scoped lang="scss" src="./menu-layout.scss"></style>