<template>
   <div class="card bg-main-color">
      <a class="card-link" :href="categorie.name.replaceAll(' ', '') + '.html'">
         <img :src="categorie.thumbnail" class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title"> {{categorie.name}} </h5>
            <p class="card-text"> {{categorie.description}} </p>
         </div>
      </a>
   </div>
</template>

<script>
import GlobalsFunc from '../js/GlobalsFunc.js'

export default {
   props: {
      categorie: {type: Object, default: null}
   },
   data: function(){
      return { GlobalsFunc }
   }
}
</script>

<style lang= "css">
   .card {
      width: 30rem;
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
      height: 20rem;
      object-fit: cover;
   }
   .card-title {
      font-weight: bold;
      font-size: 1.8rem;
   }
   .card-text{
      font-weight: lighter;
      font-size: 1.2rem;
   }

</style>
