<template lang="html">
   <div class="d-flex flex-column">
      <div class="game">
         <div class= "container">
            <h5 class="d-flex game-title" :id="game.title + 'Title'">{{ game.title }}</h5>
            <p class="d-flex game-desc"> {{game.description[0]}} </p>
            <img class="game-thumbnail" :src="game.thumbnail" alt="">
            <p class="d-flex game-desc"> {{game.description[1]}} </p>
            <iframe v-if="game.video != ''" width="560" height="315" :src="game.video"
             frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
             gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
         </div>
      </div>
      <separation v-if="isLast == false"></separation>
   </div>
</template>

<script>
   import separation from '../vue/separation.vue'

   export default {
      name: "gameDesc",
      components: { separation },
      props: {
         game : {type: Object, default: null},
         isLast : {type: Boolean, default: false}
      }
   }
</script>

<style lang="css" scoped>
   .game{
      padding-bottom: 2rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
      background-color: var(--main-color);
      color: var(--dark-color);
   }
   .game-title{
      margin: 2rem;
      color: var(--text-main-color);
      font-size: 3rem;
   }
   .container{
      display: flex;
      flex-direction: column;
      align-content: center;
      max-width: 85%;
   }
   .game-thumbnail{
      border-radius: 1rem;
      margin: 2rem;
      object-fit: contain;
      max-width: 50%;
      align-self: center;
   }
   .game-desc{
      width: 90%;
      margin: auto;
   }
   iframe{
      align-self: center;
      margin: 2rem;
   }
</style>
