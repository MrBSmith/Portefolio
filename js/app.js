
class Categorie {
   constructor(name, link, description){
      this.name = name;
      this.link = link;
      this.description = description;
   }
}

let GameDevCat = new Categorie("Game Dev", "GameDev.html", "The games I have made so far");
let PixelArtCat = new Categorie("Pixel Art", "PixelArt.html", "Some of my best pieces of PixelArt");
let MusicCat = new Categorie("Music", "Music.html", "The musics that I am proud of");

function get_page_title(){
   return document.getElementsByTagName("title")[0].innerHTML;
}

let navbar_cat = {
   props : {
      categorie: Categorie
   },
   methods: {
      get_page_title
   },
   template :
  `<li v-if="get_page_title() == categorie.name" class="nav-item active">
      <a class="nav-link" :href="categorie.link">{{ categorie.name }}
         <span class="sr-only">(current)</span>
      </a>
   </li>

   <li v-else class="nav-item">
       <a class="nav-link" :href="categorie.link">{{ categorie.name }}</a>
    </li>`
}

let navbar = {
   props: {
      categories: Array
   },
   components: { navbar_cat: navbar_cat },
   template :
   `<nav class="navbar navbar-expand-lg navbar-dark bg-info">
       <a class="navbar-brand" href="Home.html">Baba des Bois</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
               <navbar_cat v-for="cat in categories" :categorie="cat"></navbar_cat>
            </ul>
          </div>
    </nav>`
}


// The vue of a card component
let card = {
   props: {
      categorie : Categorie
   },
   template:
   `<div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
         <h5 class="card-title"> {{categorie.title}} </h5>
         <p class="card-text"> {{categorie.description}} </p>
         <a href="categorie.link" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`
}


let vm = new Vue({
   el: "#app",
   components : {navbar: navbar, card: card},
   data:{
      categories_array: [GameDevCat, PixelArtCat, MusicCat]
   }
});
