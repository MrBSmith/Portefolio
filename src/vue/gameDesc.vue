<template lang="html">
   <div class="game">
      <div class= "main-container">
         <h5 class="d-flex game-title">{{ game.title }}</h5>
         <p calss="d-flex game-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
         </p>
      </div>
   </div>
</template>

<script>
export default {
   name: "gameDesc",
   props: {
      game : {type: Object, default: null}
   }
}
</script>

<style lang="css" scoped>
.game{
   margin-top: 2rem;
   margin-bottom: 2rem;
   background-color: var(--main-color);
   color: var(--dark-color);
}
.game-title{
   color: var(--text-main-color);
   font-size: 3rem;
}
.main-container{
   display: flex;
   flex-direction: column;
   align-content: center;
   justify-self: center;
   max-width: 85%;
}

</style>
