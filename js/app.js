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


// The vue of a card component
Vue.component('card', {
   props: [`title`, `description`, `img`],
   template: `<div class="card" style="width: 18rem;">
                 <img src="..." class="card-img-top" alt="...">
                 <div class="card-body">
                   <h5 class="card-title">{{title}}</h5>
                   <p class="card-text">{{description}}</p>
                   <a href="#" class="btn btn-primary">Go somewhere</a>
                 </div>
               </div>`
})

let vm = new Vue({
   el: "#app",
   data:{
      categories_array: [GameDevCat, PixelArtCat, MusicCat]
   }
});
