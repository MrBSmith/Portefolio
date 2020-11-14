<template lang="html">
      <div id="gameCarousel" class="carousel slide" data-ride="carousel">
         <div class="carousel-inner">
           <carouselItem v-for="(game, id) in gameData" :game="game" :class="{active: id == 0}" :key="game.title"></carouselItem>
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

<style lang= "css">
   .carousel{
      padding: 0.5%;
      max-width: 65%;
      max-height: 20%;
      margin: 2rem;
      margin-top: 3rem;
      border-radius: 1rem;
      background-color: var(--main-color);
      align-self: center;
      object-fit: contain;
      @sliding-start="onSlideStart";
      @sliding-end="onSlideEnd";
      :sliding = null;

   }
</style>
