<template>
   <li v-if="Globals.Page == categorie.name" class="nav-item active">
       <div class="nav-link disabled-link" :onclick="Globals.set_page(categorie.name)">{{ categorie.name }}
          <span class="sr-only">(current)</span>
       </div>
    </li>

    <li v-else class="nav-item">
        <div class="nav-link" v-on:click="Globals.set_page(categorie.name)">{{ categorie.name }}</div>
     </li>
</template>

<script>
   import Globals from '../js/Globals.js'

   export default {
      props : {
         categorie : {type: Object, default: null}
      },
      data: function() {
         return { Globals }
      }
   }
</script>

<style>
   .nav-link {
      border: none;
      background-color: inherit;
      color: var(--text-main-color);
      transition: var(--main-transition);
      cursor: pointer;
      display: inline-block;
   }

   .disabled-link {
      opacity: 50%;
   }

   .nav-link:hover {
      color: var(--focus-color);
   }

   .disabled-link:hover {
      opacity: 50%;
      color: var(--text-main-color);
   }
</style>
