<template lang="html">
   <div class="page">
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

<style lang="css" scoped>
   .desc-container{
      margin-top: 5rem;
      margin-bottom: 5rem;
   }
</style>
