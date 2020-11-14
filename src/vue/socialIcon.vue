<template lang="html">
   <a class="d-flex justify-content-center socialIcon bg-dark" :href="link">
      <img class="d-flex align-self-center" :src="src" :id="name"></img>
   </a>
</template>

<script>
   export default {
      props : {
         src: {type: String, default: ""},
         link: {type: String, default: ""},
         name: {type: String, default: ""},
         desc: {type: String, default: ""}
      }
   }
</script>

<style lang= "css">
   .socialIcon {
      margin: 0.2rem;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      filter: saturate(0);
      filter: grayscale(100%);
      transition: var(--main-transition);
   }
   .socialIcon:hover{
      filter: saturate(3);
   }
   .socialIcon > img {
      width: 2.5rem;
      height: 2.5rem;
   }
   .socialIcon > #GitHub {
      filter: invert(100%);
   }
   .socialIcon > #Mail{
      filter: invert(100%);
   }
</style>
