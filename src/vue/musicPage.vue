<template lang="html">
   <div class="page">
      <h1 class="title">Game Musics</h1>
      <div class="bloc">
         <p class="desc">Some of the game music I composed over the years.</p>
         <br style="margin: 0.5rem;">
         <iframe width="70%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/128496193&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
         <iframe width="70%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/125342847&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
         <iframe width="70%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/178073969&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
         <iframe width="70%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/165222948&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
         <iframe width="70%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/110819738&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
         <iframe width="70%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/110812631&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      </div>
      <separation></separation>
      <h2 class="title">Draw the Sky</h2>
      <div class="bloc" style="margin-bottom: 5rem;">
         <p class="desc">Draw the Sky is a progressive rock & jazz rock band I used to play for as a guitarist.</p>
         <p class="desc">I composed some of the songs and produced the album.</p>
         <br style="margin: 0.5rem;">
         <iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=album&id=15366525&app_id=1" width="700" height="350"></iframe>
      </div>

   </div>
</template>

<script>
   import separation from '../vue/separation.vue'
   export default {
      components: { separation }
   }
</script>

<style lang= "css">
   .bloc {
      display: flex;
      padding: 3rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      background-color: var(--main-color);
   }
   iframe{
      margin: 0.5rem;
      color: var(--main-color);
      background-color: var(--main-color);
      align-self: center;
   }
   .desc{
      color: var(--dark-color);
      font-size: 1.3rem;
   }
</style>
