
class Categorie {
   constructor(name, image, description){
      this.name = name;
      this.image = image;
      this.description = description;
   }
}

let GameDevCat = new Categorie("GameDev", "", "The games I have made so far");
let PixelArtCat = new Categorie("PixelArt", "", "Some of my best pieces of PixelArt");
let MusicCat = new Categorie("Music", "", "The musics that I am proud of");

let navbar_cat = {
   props : {
      name: {type: String, default: "Name"},
      current: {type: Boolean, default: false},
      link: {type: String, default: "#"}
   },
   template :
  `<li v-if="current" class="nav-item active">
      <a class="nav-link" :href="link">{{ name }}
         <span class="sr-only">(current)</span>
      </a>
   </li>

   <li v-else class="nav-item">
       <a class="nav-link" :href="link">{{ name }}</a>
    </li>

   `
}

let navbar = {
   props: {
      categories: Array
   },
   components: {navbar_cat: navbar_cat},
   template :
   `<nav class="navbar navbar-expand-lg navbar-dark bg-info">
       <a class="navbar-brand" href="Home.php">Baba des Bois</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
               <navbar_cat v-for="cat in categories" :name="cat.name" :link="cat.link"></navbar_cat>
            </ul>
          </div>
    </nav>`
}


// The vue of a card component
let card = {
   props: {
      title : {type: String, default: "default"},
      description : {type: String, default: ""},
      img : {type: String, default: ""}
   },
   template:
   `<div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
         <h5 class="card-title">{{title}}</h5>
         <p class="card-text">{{description}}</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
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
