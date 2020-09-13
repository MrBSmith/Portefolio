<template>
   <div class="card bg-main-color">
      <a class="card-link" v-on:click="Globals.set_page(categorie.name)">
         <img :src="categorie.thumbnail" class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title"> {{categorie.name}} </h5>
            <p class="card-text"> {{categorie.description}} </p>
         </div>
      </a>
   </div>
</template>

<script>
import Globals from '../js/Globals.js'

export default {
   props: {
      categorie: {type: Object, default: null}
   },
   data: function(){
      return { Globals }
   }
}
</script>

<style media="screen">
   .card {
      width: 22rem;
      margin : 1rem;
      background-color: var(--main-color);
      color: var(--text-main-color);
      filter: grayscale(30%);
      transition: all 0.2s ease-out;
   }
   .card:hover {
      filter: grayscale(0%);
      color: var(--focus-color);
   }
   .card-link{
      color: inherit;
   }
   .card-link:hover{
      color: inherit;
   }
   .card-link > img{
      height: 14rem;
      object-fit: cover;
   }
   .card-title {
      font-weight: bold;
   }

</style>
