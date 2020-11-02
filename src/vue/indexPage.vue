<template lang="html">
   <div class="page">
      <div class="d-flex justify-content-center" style="padding-top: 1rem;">
         <card v-for="cat in categories" :key="cat.name" :categorie="cat"></card>
      </div>
      <separation></separation>

      <div class= "AboutMe">
         <div class="container">
            <h5 class="AboutMe-title">About Me</h5>
            <p>Hello there, I'm Mr Baba - Also known as Baba des Bois.</p>
            <p> I'm a french indie game developer & pixel artist.</p>
            <br>
            <p>
               I'm working right now, mostly on two games of my own as a developer and/or as a pixel artist; both with a small team.
               You can find more infos about the games in the <a class="link_to" href="#">Game Dev</a> section of this website.
               I am also streaming a lot of my work, every afternoon during the week on my <a class="link_to" href="https://www.twitch.tv/babadesbois" target="_blank">twitch channel</a>.
            </p>

            <p>
               I work mostly with <a class="link_to" href="https://godotengine.org/" target="_blank">Godot Engine</a> for the game dev part, and with <a class="link_to" href="https://www.aseprite.org/" target="_blank">Aseprite</a> for the pixeling.
               I love music (and I write some sometimes), specialy nobody-listen-to kind of music. I love drinking coffee, board games, and learning new stuff on my own.
            </p>
            <br>
            <p>
               If you want some custom Pixel Art pieces, you can contact me <a class="link_to" href="mailto:hugobarette@gmail.com" target="_blank">here</a>.
            </p>

            <div class="d-flex justify-content-end">
               <img class="BabaPortrait" src="../assets/PixelArt/MrBaba.png" alt="MrBaba">
            </div>

         </div>
      </div>
      <separation></separation>
   </div>
</template>

<script>
   import card from '../vue/card.vue'
   import categories from '../js/categorie.js'
   import separation from '../vue/separation.vue'
   import GlobalsFunc from '../js/GlobalsFunc.js'

   export default {
      name: "indexPage",
      components: { card, separation },
      data: function(){
        return { categories, GlobalsFunc }
      }
   }
</script>

<style lang="css" scoped>

   .link_to {
      color: var(--text-soft-white);
      transition: var(--main-transition);
   }
   .link_to:hover {
      color: var(--focus-color);
   }
   .AboutMe{
      padding-bottom: 2rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
      background-color: var(--main-color);
      color: var(--dark-color);
   }
   .AboutMe-title{
      margin: 2rem;
      margin-top: 3rem;
      color: var(--text-main-color);
      font-size: 3rem;
   }
   .BabaPortrait{
      display: flex;
      justify : flex-end;
      border-radius: 50%;
      width: 128px;
      height: 128px;
   }
</style>
