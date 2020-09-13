<template>
   <main class="text-light">
      <navbar></navbar>
      <indexPage v-if="Globals.Page == 'index'"></indexPage>
      <pixelArtPage v-if="Globals.Page == 'Pixel Art'"></pixelArtPage>
      <gameDevPage v-if="Globals.Page == 'Game Dev'"></gameDevPage>
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

   export default {
     name: 'app',
     components: { navbar, pixelArtPage, indexPage, customFooter, gameDevPage },
     data: function(){
       return {
         Globals
       }
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
