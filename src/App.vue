<template>
   <main class="text-light">
      <navbar></navbar>
      <div class="d-flex justify-content-center" style="padding: 1rem;">
         <card v-for="cat in categories" :key="cat.name" :categorie="cat"></card>
      </div>
      <customFooter></customFooter>
   </main>
</template>

<script>
   import navbar from './vue/navbar.vue'
   import card from './vue/card.vue'
   import categories from './js/categorie.js'
   import customFooter from './vue/footer.vue'

   export default {
     name: 'app',
     components: { navbar, card, customFooter },
     data: function(){
        return { categories }
     }
   }
</script>

<style lang="scss">
   html {
     position: relative;
     min-height: 100%;
   }

   main {
     /* Margin bottom by footer height */
     margin-bottom: 60px;
     width: 100%;
   }
</style>
