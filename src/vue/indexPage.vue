<template lang="html">
   <div class="page" style="padding: 1rem;">
      <div class="d-flex justify-content-center">
         <card v-for="cat in categories" :key="cat.name" :categorie="cat"></card>
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
</style>
