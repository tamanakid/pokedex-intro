<template>
  <div class="main-layout">
    <router-view></router-view>
    <menu-layout></menu-layout>
  </div>
</template>


<script>
import MenuLayout from './menu/MenuLayout.vue'

export default {
  name: 'MainLayout',

  components: {
    "menu-layout": MenuLayout
  }

}
</script>


<style scoped lang="scss">



</style>