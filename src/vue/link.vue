<template lang="html">
   <button class="link" :onclick="Globals.set_page(page_name)"> {{ page_name }} </button>
</template>

<script>
import Globals from '../js/Globals.js'

export default {
   name: "link",
   props :{
      page_name : {Type: String, default: ""}
   },
   data: function() {
      return { Globals }
   }
}
</script>

<style lang="css" scoped>
   .link {
      border: none;
      background-color: inherit;
      color: var(--text-main-color);
      transition: var(--main-transition);
      cursor: pointer;
      display: inline-block;
   }

</style>
