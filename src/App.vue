<template>
   <main class="text-light">
      <navbar></navbar>
      <BackToTop text="Back to Top"></BackToTop>
      <indexPage v-if="GlobalsFunc.get_current_page() == 'BabadesBois'"></indexPage>
      <pixelArtPage v-if="GlobalsFunc.get_current_page() == 'PixelArt'"></pixelArtPage>
      <gameDevPage v-if="GlobalsFunc.get_current_page() == 'GameDev'"></gameDevPage>
      <musicPage v-if="GlobalsFunc.get_current_page() == 'Music'"></musicPage>
      <customFooter></customFooter>
   </main>
</template>

<script>
   import navbar from './vue/navbar.vue'
   import customFooter from './vue/footer.vue'
   import indexPage from './vue/indexPage.vue'
   import pixelArtPage from './vue/pixelArtPage.vue'
   import gameDevPage from './vue/gameDevPage.vue'
   import GlobalsFunc from './js/GlobalsFunc.js'
   import BackToTop from './vue/BackToTopButton.vue'
   import musicPage from './vue/musicPage.vue'

   export default {
     name: 'app',
     components: { navbar, pixelArtPage, indexPage, customFooter, gameDevPage, BackToTop, musicPage },
     data: function(){
       return {
         GlobalsFunc
       }
    },
     created: function(){
        GlobalsFunc.set_page('index')
     }
   }
</script>

<style lang="css">
   @import '../src/css/myColors.css';
   @import '../src/css/page.css';

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
