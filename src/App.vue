<template>
  <div id="app">
    <MainLayout />
  </div>
</template>

<script>
import MainLayout from './modules/MainLayout.vue'

export default {
  name: 'app',
  components: {
    MainLayout
  }
}
</script>

<style lang="scss">
body {
  background-color: $poke-black-bg;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: $poke-scarlett-light;
  font-family: $font-family-main, 'Avenir', sans-serif;
  text-align: center;
}
</style>
