<template>
   <li v-if="GlobalsFunc.get_current_page() == categorie.name.replaceAll(' ', '')" class="nav-item active">
       <div class="nav-link disabled-link" :onclick="GlobalsFunc.set_page(categorie.name)">{{ categorie.name }}
          <span class="sr-only">(current)</span>
       </div>
    </li>

    <li v-else class="nav-item">
        <a class="nav-link" :href="categorie.name.replaceAll(' ', '') + '.html'">{{ categorie.name }}</a>
    </li>
</template>

<script>
   import GlobalsFunc from '../js/GlobalsFunc.js'

   export default {
      props : {
         categorie : {type: Object, default: null}
      },
      data: function() {
         return { GlobalsFunc }
      }
   }
</script>

<style lang= "css">
   .nav-link {
      font-size: 1.3rem;
      border: none;
      background-color: inherit;
      color: var(--text-main-color);
      transition: var(--main-transition);
      cursor: pointer;
      display: inline-block;
   }

   .disabled-link {
      opacity: 0.6;
   }
   .nav-link:hover {
      color: var(--focus-color);
   }
   .disabled-link:hover {
      opacity: 0.6;
      color: var(--text-main-color);
   }

</style>
