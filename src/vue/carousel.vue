<template lang="html">
   <div class="d-flex justify-content-center">
      <div id="gameCarousel" class="carousel slide" data-ride="carousel">
         <div class="carousel-inner">
           <carouselItem v-for="(game, id) in gameData" :game="game" :isActive="slide == id" :key="game.title"></carouselItem>
         </div>
         <a class="carousel-control-prev" href="#gameCarousel" role="button" data-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="sr-only">Previous</span>
         </a>
         <a class="carousel-control-next" href="#gameCarousel" role="button" data-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
           <span class="sr-only">Next</span>
         </a>
      </div>
   </div>
</template>

<script>
import carouselItem from "../vue/carouselItem.vue"
import gameData from "../js/games.js"

export default {
   name : "carousel",
   components: {carouselItem},
   data : function(){
      return {
         gameData,
         slide : 0,
         sliding: null
       }
   },
   methods:{
      onSlideStart(slide) {
         this.sliding = true
      },
      onSlideEnd(slide) {
         this.sliding = false
      }
   }
}
</script>

<style lang="css" scoped>
   .carousel{
      padding: 2%;
      max-width: 80%;
      max-height: 20%;
      @sliding-start="onSlideStart";
      @sliding-end="onSlideEnd";
      :sliding = null;
   }
</style>
