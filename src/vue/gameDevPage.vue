<template lang="html">
   <div class="page">
      <h1 class="Title">Game Dev<h1>
      <carousel></carousel>
      <div class="desc-container">
         <gameDesc v-for="(game, id) in games" :game="game" :key="game.name" :isLast="id == games.length - 1"></gameDesc>
      </div>
   </div>
</template>

<script>
   import carousel from '../vue/carousel.vue'
   import gameDesc from '../vue/gameDesc.vue'
   import games from '../js/games.js'

   export default {
      name : "gameDevPage",
      components : { carousel , gameDesc },
      data : function(){
         return { games };
      }
   }
</script>

<style lang= "css">
   .desc-container{
      margin-top: 5rem;
      margin-bottom: 5rem;
   }
</style>
