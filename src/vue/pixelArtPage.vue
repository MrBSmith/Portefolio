<template lang="html">
   <div class="page">
      <h5 class="title">Pixel Art Galery</h5>

      <div class="d-flex flex-column" style = "padding: 1.5rem;">

         <!-- First line -->
         <div class="d-flex align-self-center">
            <thumbnail src="../src/assets/PixelArt/Illustration/Galaxie.png" alt="..."></thumbnail>
            <div class="d-flex flex-column" style="margin: 1rem;">
               <thumbnail src="../src/assets/PixelArt/Portraits/Hart.png" alt="..."></thumbnail>
               <div class="d-flex justify-content-center">
                  <thumbnail src="../src/assets/PixelArt/Portraits/HartPort.png" alt="..."></thumbnail>
                  <thumbnail src="../src/assets/PixelArt/Portraits/Tortue.png" alt="..."></thumbnail>
                  <thumbnail src="../src/assets/PixelArt/Portraits/Wayne.png" alt="..."></thumbnail>
                  <thumbnail src="../src/assets/PixelArt/Portraits/Overseer.png" alt="..."></thumbnail>
               </div>
               <div class="d-flex justify-content-center">
                  <thumbnail src="../src/assets/PixelArt/Portraits/MrSam.png" alt="..."></thumbnail>
                  <thumbnail src="../src/assets/PixelArt/Portraits/SuperCanard.png" alt="..."></thumbnail>
               </div>
            </div>
         </div>

         <!-- Second line -->
         <div class="d-flex justify-content-center">
            <div class="d-flex align-items-center">
               <div class="flex-column" style="margin: 1rem;">
                  <thumbnail src="../src/assets/PixelArt/Animations/SmallExplosion.gif" alt="..."></thumbnail>
                  <thumbnail src="../src/assets/PixelArt/Animations/LargeExplosion.gif" alt="..."></thumbnail>
               </div>
               <div class="flex-column" style="margin: 1rem;">
                  <thumbnail src="../src/assets/PixelArt/XLchara.png" alt="..."></thumbnail>
                  <thumbnail src="../src/assets/PixelArt/Animations/Checkpoint.gif" alt="..."></thumbnail>
               </div>
               <thumbnail src="../src/assets/PixelArt/Illustration/LaTour.png" alt="..."></thumbnail>
            </div>
         </div>

         <!-- Third line -->
         <div class="flex-column" style="margin: 1rem;">
            <div class="d-flex justify-content-center" style="margin: 1rem;">
               <thumbnail src="../src/assets/PixelArt/Illustration/Stormx4.png"></thumbnail>
               <thumbnail src="../src/assets/PixelArt/Illustration/Dunex4.png"></thumbnail>
            </div>
         </div>
         <div class="flex-column" style="margin: 1rem;">
            <thumbnail src="../src/assets/PixelArt/Illustration/Music.png"></thumbnail>
         </div>
      </div>

      <!-- fourth line -->
      <div class="flex-column" style="margin-bottom: 4rem">
         <div class="d-flex justify-content-center">
            <thumbnail src="../src/assets/PixelArt/Illustration/Slippery.png"></thumbnail>
            <div class="flex-column" style="margin: 1rem;">
               <thumbnail src="../src/assets/PixelArt/Illustration/Coral.png"></thumbnail>
               <thumbnail src="../src/assets/PixelArt/Illustration/Outpost.png"></thumbnail>
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
   import thumbnail from "./image.vue"

   export default {
      name: "pixelArtPage",
      components: {
         thumbnail
      }
   }
</script>

<style lang="css" scoped>
</style>
