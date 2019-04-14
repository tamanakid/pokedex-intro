<template>
  <div>
    <menu-layout class="layout__menu"></menu-layout>
    <router-view class="layout__content"></router-view>
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


.layout__content {
	
	@include media-tp-down {
		padding: 5rem 2rem;
	}

	@include media-tl-up {
		padding: 4rem;
    width: 80%;
    height: 100vh;
	}
}

</style>