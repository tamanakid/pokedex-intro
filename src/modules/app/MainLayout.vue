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
  height: 100vh;
  
  @include media-tl-up {
		padding: 4rem;
    width: 80%;
  }
  
  @include media-tp {
		padding: 5rem 4rem;
	}

  @include media-ml-down {
		padding: 5rem 1rem 1rem;
  }
  
	

	
}

</style>