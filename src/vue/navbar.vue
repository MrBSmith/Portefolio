<template>
   <header>
      <nav class="navbar navbar-expand-lg bg-main-color" id="navbar">
         <a class="navbar-brand" href="index.html">Baba des Bois</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <navbarMenuIcon></navbarMenuIcon>
         </button>

         <div class="navbar-collapse collapse" id="navbarSupportedContent">
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
   import GlobalsFunc from '../js/GlobalsFunc.js'
   import navbarMenuIcon from '../vue/navbarMenuIcon.vue'

   export default {
      components: { navbarCat, navbarMenuIcon},
      data : function(){ return { categories_array, GlobalsFunc }}
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
