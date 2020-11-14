<template lang="html">
   <div class="d-flex justify-content-center" style="margin-top: 1rem;">
      <img v-if="screenshot == false" :src="src" class="img-thumbnail" :alt="alt">
      <img v-else :src="src" class="img-thumbnail game-screenshot" :alt="alt">
   </div>
</template>

<script>
   export default {
      name: "thumbnail",
      props: {
         src: {type: String, default: ""},
         alt: {type: String, default: ""},
         screenshot: {type: Boolean, default: false}
      }
   }
</script>

<style lang= "css">
   .img-thumbnail{
      margin: 0.3rem;
      background-color: var(--main-color);
      border: 0px;
      align-self: center;
      object-fit: contain;
   }
   .game-screenshot{
      width: 66%;
      height: 66%;
   }
</style>
