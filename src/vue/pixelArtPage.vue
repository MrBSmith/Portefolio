<template lang="html">
   <div class="page">
      <h1 class="title">Pixel Art Galery</h1>

      <div class="d-flex flex-column" style = "padding: 1.5rem;">

         <!-- First line -->
         <div class="d-flex align-self-center">
            <thumbnail src="src/assets/PixelArt/Illustration/Galaxie.png" alt="A galaxy"></thumbnail>
            <div class="d-flex flex-column" style="margin: 1rem;">
               <thumbnail src="src/assets/PixelArt/Portraits/Hart.png" alt="Full body portrait of a humanoid cameleon"></thumbnail>
               <div class="d-flex justify-content-center">
                  <thumbnail src="src/assets/PixelArt/Portraits/HartPort.png" alt="Portrait of a humanoid cameleon"></thumbnail>
                  <thumbnail src="src/assets/PixelArt/Portraits/Tortue.png" alt="Portrait of a humanoid tortoise"></thumbnail>
                  <thumbnail src="src/assets/PixelArt/Portraits/Wayne.png" alt="Portrait of a blue humanoid lizard"></thumbnail>
                  <thumbnail src="src/assets/PixelArt/Portraits/Overseer.png" alt="Portrait of the overseer from XionLeak"></thumbnail>
               </div>
               <div class="d-flex justify-content-center">
                  <thumbnail src="src/assets/PixelArt/Portraits/MrSam.png" alt="A portrait of MrSam, a belgian Youtuber"></thumbnail>
                  <thumbnail src="src/assets/PixelArt/Portraits/SuperCanard.png" alt="A portrait of SuperCanard, a french Youtuber"></thumbnail>
               </div>
            </div>
         </div>

         <!-- Second line -->
         <div class="d-flex justify-content-center">
            <div class="d-flex align-items-center">
               <div class="flex-column" style="margin: 1rem;">
                  <thumbnail src="src/assets/PixelArt/Animations/SmallExplosion.gif" alt="A small explosion animation"></thumbnail>
                  <thumbnail src="src/assets/PixelArt/Animations/LargeExplosion.gif" alt="A big explosion animation"></thumbnail>
               </div>
               <div class="flex-column" style="margin: 1rem;">
                  <thumbnail src="src/assets/PixelArt/XLchara.png" alt="Characters from Xion Leak"></thumbnail>
                  <thumbnail src="src/assets/PixelArt/Animations/Checkpoint.gif" alt="A checkpoint activation animation"></thumbnail>
               </div>
               <thumbnail src="src/assets/PixelArt/Illustration/LaTour.png" alt="A huge tower embraced by a massive tree"></thumbnail>
            </div>
         </div>

         <!-- Third line -->
         <div class="flex-column" style="margin: 1rem;">
            <div class="d-flex justify-content-center" style="margin: 1rem;">
               <thumbnail src="src/assets/PixelArt/Illustration/Stormx4.png" alt="A massive storm"></thumbnail>
               <thumbnail src="src/assets/PixelArt/Illustration/Dunex4.png" alt="A man traveling through a desert with his camels"></thumbnail>
            </div>
         </div>
         <div class="flex-column" style="margin: 1rem;">
            <thumbnail src="src/assets/PixelArt/Illustration/Music.png" alt="Some skeletons playing jazz"></thumbnail>
         </div>
      </div>

      <!-- fourth line -->
      <div class="flex-column" style="margin-bottom: 4rem">
         <div class="d-flex justify-content-center">
            <thumbnail src="src/assets/PixelArt/Illustration/Slippery.png" alt="A frozen landscape"></thumbnail>
            <div class="flex-column" style="margin: 1rem;">
               <thumbnail src="src/assets/PixelArt/Illustration/Coral.png" alt="An underwater landscape"></thumbnail>
               <thumbnail src="src/assets/PixelArt/Illustration/Outpost.png" alt="A native american observing a cavalryman from afar"></thumbnail>
            </div>
         </div>
      </div>

      <!-- Screenshots -->
      <!--
      <h5 class="title">Games Screenshots</h5>
      <div class="d-flex justify-content-center">
         <div class="flex-column" style="padding: 1.5rem;">
            <thumbnail src="../src/assets/PixelArt/Screenshots/RPGSF.png" :screenshot="true" alt="..."></thumbnail>
            <thumbnail src="../src/assets/PixelArt/Screenshots/TRPG.png" :screenshot="true" alt="..."></thumbnail>
            <thumbnail src="../src/assets/PixelArt/Screenshots/XionLeak.png" :screenshot="true" alt="..."></thumbnail>
            <thumbnail src="../src/assets/PixelArt/Screenshots/RPGFantasy.png" alt="..."></thumbnail>
         </div>
      </div>
      -->
   </div>
</template>

<script>
   import thumbnail from "./thumbnail.vue"

   export default {
      name: "pixelArtPage",
      components: {
         thumbnail
      }
   }
</script>

<style lang= "css">
</style>
