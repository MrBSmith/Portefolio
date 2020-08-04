class Categorie {
   constructor(name, link, description, thumbnail){
      this.name = name;
      this.link = link;
      this.description = description;
      this.thumbnail = thumbnail;
   }
}

let GameDevCat = new Categorie("Game Dev", "GameDev.html", "The games I have made so far", "./src/assets/PixelArt/TwitchBannerCropped.png");
let PixelArtCat = new Categorie("Pixel Art", "PixelArt.html", "Some of my best pieces of PixelArt", "./src/assets/PixelArt/Hart.png");
let MusicCat = new Categorie("Music", "Music.html", "The musics that I am proud of", "./src/assets/PixelArt/DTS.png");

export default [GameDevCat, PixelArtCat, MusicCat];
