<template lang="html">
   <div class="page">
      <carousel></carousel>
      <gameDesc v-for="game in games" :game="game"></gameDesc>
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
      return {games};
   }
}

</script>

<style lang="css" scoped>
</style>
