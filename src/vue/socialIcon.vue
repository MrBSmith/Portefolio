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

<style lang="css" scoped>
   .socialIcon {
      margin: 0.2rem;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      filter: saturate(0);
      filter: grayscale(100%);
      transition: var(--main-transition);
   }
   .socialIcon:hover{
      filter: saturate(3);
   }
   .socialIcon > img {
      width: 30px;
      height: 30px;
   }
   .socialIcon > #GitHub {
      filter: invert(100%);
   }
   .socialIcon > #Mail{
      filter: invert(100%);
   }
</style>
