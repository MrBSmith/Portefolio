class Game {
   constructor(title, link, short_desc, description, thumbnail, video){
      this.title = title;
      this.link = link;
      this.short_desc = short_desc;
      this.description = description;
      this.thumbnail = thumbnail;
      this.video = video;
   }
}

let XionLeak = new Game("XionLeak", "", "A two players, platformer/runner under steroïds", "", "./src/assets/PixelArt/Screenshots/XionLeak.png", "https://www.youtube.com/embed/aZKuo-pjtrs");
let Trpg = new Game("Tactical RPG", "", "A tactical RPG in isometric view", "", "./src/assets/PixelArt/Screenshots/TRPG.png", "");


export default [XionLeak, Trpg];
