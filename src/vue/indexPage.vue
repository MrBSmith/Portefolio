<template lang="html">
   <div class="page">
      <div class="d-flex justify-content-center" style="padding-top: 1rem;">
         <card v-for="cat in categories" :key="cat.name" :categorie="cat"></card>
      </div>
      <separation></separation>

      <div class= "AboutMe">
         <div class="container">
            <h5 class="AboutMe-title">About Me</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         </div>
      </div>
      <separation></separation>
   </div>
</template>

<script>
   import card from '../vue/card.vue'
   import categories from '../js/categorie.js'
   import separation from '../vue/separation.vue'

   export default {
      name: "indexPage",
      components: { card, separation },
      data: function(){
        return { categories }
      }
   }
</script>

<style lang="css" scoped>
   .AboutMe{
      padding-bottom: 2rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
      background-color: var(--main-color);
      color: var(--dark-color);
   }
   .AboutMe-title{
      margin: 2rem;
      color: var(--text-main-color);
      font-size: 3rem;
   }
</style>
