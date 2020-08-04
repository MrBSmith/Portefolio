<template>
   <li v-if="get_page_title() == categorie.name" class="nav-item active">
       <a class="nav-link" :href="categorie.link">{{ categorie.name }}
          <span class="sr-only">(current)</span>
       </a>
    </li>

    <li v-else class="nav-item">
        <a class="nav-link" :href="categorie.link">{{ categorie.name }}</a>
     </li>
</template>

<script>
   export default {
      props : {
         categorie : {type: Object, default: null}
      },
      methods: {
         get_page_title: function(){
            return document.getElementsByTagName("title")[0].innerHTML;
         }
      }
   }
</script>

<style>
   .nav-link {
      opacity: 70%;
      color: var(--text-main-color);
      transition: var(--main-transition);
   }

   .nav-link:hover {
      opacity: 100%;
      color: var(--focus-color);
   }
</style>
