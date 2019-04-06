<template>
  <div>
    <menu-layout class="layout-menu"></menu-layout>
    <router-view class="layout-content"></router-view>
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
.layout-menu {
	background-color: $poke-scarlett-dark;
}
</style>