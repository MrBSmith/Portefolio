<template>
   <header>
      <nav class="navbar navbar-expand-lg bg-main-color" id="navbar">
         <div class="navbar-brand" v-on:click="Globals.set_page('index')">Baba des Bois</div>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>

         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
               <navbarCat v-for="cat in categories_array" :key="cat.name" :data="cat" :categorie="cat"></navbarCat>
            </ul>
         </div>
       </nav>
    </header>
</template>

<script>
   import navbarCat from '../vue/navbarCat.vue'
   import categories_array from '../js/categorie.js'
   import Globals from '../js/Globals.js'

   export default {
      components: { navbarCat: navbarCat },
      data : function(){ return { categories_array, Globals }}
   }
</script>

<style lang="css">
   .navbar-brand {
      border: none;
      background-color: inherit;
      font-weight: bold;
      font-size: 1.6rem;
      color: var(--text-main-color);
      transition: var(--main-transition);
      opacity: 100%;
   }

   .navbar-brand:hover {
      color: var(--focus-color);
   }

</style>
