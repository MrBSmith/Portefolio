class SocialMedia {
   constructor(name, link, description, svg = null){
      this.name = name;
      this.link = link;
      this.description = description;
      if(svg == null){
         this.svg = "./src/assets/Icons/" + name + ".svg";
      }
   }
}

let Twitter = new SocialMedia("Twitter", "https://twitter.com/BabaDesBois", "My Twitter profile");
let Twitch = new SocialMedia("Twitch", "https://www.twitch.tv/babadesbois", "My Twitch channel");
let SoundCloud = new SocialMedia("SoundCloud", "https://soundcloud.com/mr-b-smith", "My SoundCloud page");
let GitHub = new SocialMedia("GitHub", "https://github.com/MrBSmith", "My GitHub Page");
let Mail = new SocialMedia("Mail", "mailto:hugobarette@gmail.com", "Send me an email");

export default [Twitter, Twitch, SoundCloud, GitHub, Mail];
