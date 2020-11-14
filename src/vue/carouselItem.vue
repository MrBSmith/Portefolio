<template lang="html">
   <a :class="[isActive ? 'carousel-item-active' : 'carousel-item']" :href="'#'+game.title+'Title'">
      <img :src="game.thumbnail" class="carousel-image d-block w-100" alt="">
      <div class="carousel-caption d-none d-md-block">
         <h5 class="carousel-title">{{ game.title }}</h5>
         <p class="carousel-description">{{ game.short_desc }}</p>
      </div>
   </a>
</template>

<script>
export default {
   name: "carouselItem",
   props: {
      game : {type: Object, default: null},
      index : {type: Number, default: 0},
      isActive : {type: Boolean}
   }
}
</script>

<style lang= "css">
   .carousel-item{
      transition-duration: 800ms;
      transition-timing-function: ease;
   }
   .carousel-item-active{
      transition-duration: 800ms;
      transition-timing-function: ease;
   }
   .carousel-title{
      font-size: 2.5rem;
   }
   .carousel-description{
      font-size: 1rem;
   }
   .d-block{
      object-fit: cover;
   }
</style>
