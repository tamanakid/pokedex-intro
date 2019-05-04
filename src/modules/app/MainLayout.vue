<template>
	<div>
		<menu-layout class="layout__menu"></menu-layout>
		<transition name='router-fade' mode='out-in'>
			<router-view class="layout__content"></router-view>
    </transition>
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
.router-fade-enter-to, .router-fade-leave {
	transition: opacity 0.75s;
}

.router-fade-enter, .router-fade-leave-to {
	opacity: 0
}


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
		padding: 5rem 4rem 2rem;
	}

  @include media-ml-down {
		padding: 4rem 1rem 1rem;
  }

  

  /**
   * SCROLLBAR
   */
	// Chrome and Safari
	::-webkit-scrollbar {
		width: 0.5em;
		&-track {
			background-color: $poke-scarlett-light;
			width: 0.5em;
		}

		&-thumb {
			background-color: $poke-scarlett-dark;
			border-radius: 0.5rem 0;
		}
	}

	// Firefox
	* {
		scrollbar-width: thin;
		scrollbar-color: $poke-scarlett-dark $poke-scarlett-light;
	}
  
	

	
}

</style>