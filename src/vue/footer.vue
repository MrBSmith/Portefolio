<template lang="html">
   <footer class="d-flex bg-main-color">
      <div class="container d-flex justify-content-around align-self-center">
         <div class="d-flex justify-content-center">
            <span class="d-flex align-self-center text-light" style="margin: 0.7rem;">This website was made by Mr. Baba using Vue.js</span>
            <socialIcon src="./src/assets/Icons/Vue.png" link="https://vuejs.org/" name="Vue"></socialIcon>
         </div>
         <div class="d-flex align-self-center justify-content-center">
            <socialIcon v-for="med in socialMedias" :key="med.name" :desc="med.description" :src="med.svg" :link="med.link" :name="med.name"></socialIcon>
         </div>
      </div>
   </footer>
</template>

<script lang="js">
   import socialIcon from "../vue/socialIcon.vue"
   import socialMedias from "../js/socialMedia.js"

   export default {
      components: { socialIcon },
      data: function(){
         return {
            socialMedias
         }
      }
   }
</script>

<style lang="css">
   footer {
     position: absolute;
     bottom: 0;
     width: 100%;
     /* Set the fixed height of the footer here */
     height: 60px;
   }
</style>
