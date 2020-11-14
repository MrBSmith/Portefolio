class Game {
   constructor(title, link, short_desc, description, thumbnail, screenshots, video){
      this.title = title;
      this.link = link;
      this.short_desc = short_desc;
      this.description = description;
      this.thumbnail = thumbnail;
      this.screenshots = screenshots;
      this.video = video;
   }
}

let XionLeak = new Game("Xion Leak",
   "",
   "A two players, platformer/runner on steroids",
   ["Xion Leak is a two players, 2D platformer/runner on steroids where you play two robots trying to run away from a factory, in instance of destruction. The game is fun and nervous. It requires dexterity and cooperation. Each robot have its own capabilities, and you will need a cool head and a good teamwork to make your way out of that rusty hell.",
   "I develop the game with Weact, my teammate. He is working on programming and level design, and I am working on music, graphics and programming as well. We are hoping to have an alpha version ready in 2021.",
   ""],
   "./src/assets/PixelArt/Screenshots/XionLeak.png",
   ["./src/assets/PixelArt/Screenshots/XionLeak.png"],
   "https://www.youtube.com/embed/aZKuo-pjtrs");

let Trpg = new Game("Tactical RPG",
   "",
   "A tactical RPG in isometric view",
   ["A tactical RPG in isometric view I develop when I have some free time. I work on this project alone so I'm doing everything from code to pixel art, music included. The idea is to have a tactical RPG with strong gameplay mechanics (fog of war, characters senses exploited in combat, original area of effect spells, destructible environment...), and a powerful story, splitted in two timelines.", ""],
   "./src/assets/PixelArt/Screenshots/TRPG.png",
   ["./src/assets/PixelArt/Screenshots/TRPG.png"],
   "");

let Havre = new Game("Havre",
   "",
   "A mobile, ecosystem management game",
   ["Havre -which means haven in french-, is a mobile game where you manage a garden by choosing its weather conditions. Your goal is to build a favorable ecosystem for animals and plants to live in & to discover a maximum of different species.",
   "I develop the game with Quentin, a friend of mine, which works on the graphics. I work on code, design and music.",
   "The game is in the early stages of development, but the process is fast, so we have good hopes to release a beta version in the first half of 2021."],
   "./src/assets/PixelArt/Screenshots/Havre1(16-9).png",
   ["./src/assets/PixelArt/Screenshots/Havre1.png"],
   "");

export default [XionLeak, Havre, Trpg];
