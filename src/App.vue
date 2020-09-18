<template>
   <main class="text-light">
      <navbar></navbar>
      <BackToTop text="Haut de page"></BackToTop>
      <indexPage v-if="Globals.get_page() == 'index'"></indexPage>
      <pixelArtPage v-if="Globals.get_page() == 'Pixel Art'"></pixelArtPage>
      <gameDevPage v-if="Globals.get_page() == 'Game Dev'"></gameDevPage>
      <customFooter></customFooter>
   </main>
</template>

<script>
   import navbar from './vue/navbar.vue'
   import customFooter from './vue/footer.vue'
   import indexPage from './vue/indexPage.vue'
   import pixelArtPage from './vue/pixelArtPage.vue'
   import gameDevPage from './vue/gameDevPage.vue'
   import Globals from './js/Globals.js'
   import BackToTop from './vue/BackToTopButton.vue'

   export default {
     name: 'app',
     components: { navbar, pixelArtPage, indexPage, customFooter, gameDevPage, BackToTop },
     data: function(){
       return {
         Globals
       }
    },
     created: function(){
        Globals.set_page('index')
     }
   }
</script>

<style lang="scss">
   html {
     position: relative;
     min-height: 100%;
   }

   main {
     /* Margin bottom by footer height */
     margin-bottom: 60px;
     width: 100%;
   }
</style>
