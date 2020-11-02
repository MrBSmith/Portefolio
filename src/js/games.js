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

let XionLeak = new Game("Xion Leak",
   "",
   "A two players, platformer/runner under steroïds",
   ["Xion Leak is a two players, 2D platformer/runner under steroïds where you play two robots trying to run away from a factory, in instance of destruction. The game is fun, nervous and requires dexterity and cooperation. Each robot have its own capabilities, and you will need a cool head and a good team work to make your way out of that rusty hell.",
   "I develop the game with Weact: my teammate. He is working on programing and level design, and I am working on the music, graphics and on the programing as well. We are hoping to have an alpha version ready in 2021.",
   ""],
   "./src/assets/PixelArt/Screenshots/XionLeak.png",
   "https://www.youtube.com/embed/aZKuo-pjtrs");

let Trpg = new Game("Tactical RPG",
   "",
   "A tactical RPG in isometric view",
   ["A tactical RPG in isometric view I develop when I have some time left. I work on this project alone so I do everything from code to Pixel Art, and music included. The idea is to have a Tactical RPG with strong gameplay mechanics (fog of war, charcaters senses exploited in combat, original area of effect spells, destructible environement...), and an original story, splitted in two timelines.", ""],
   "./src/assets/PixelArt/Screenshots/TRPG.png",
   "");


export default [XionLeak, Trpg];
