<template>
  <div>
    <menu-layout class="layout__menu"></menu-layout>
    <router-view class="layou__content"></router-view>
  </div>
</template>


<script>
import MenuLayout from '@/modules/menu/MenuLayout.vue'

export default {
  name: 'MainLayout',

  components: {
    "menu-layout": MenuLayout
  }

}
</script>


<style scoped lang="scss">
/*
.layout__menu {
	background-color: $poke-scarlett-dark;
}
*/
</style>