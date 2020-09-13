const Globals = {
   Page : {type: String, default: "index"},

   set_page: function(value){
      this.Page = value;
   },
   get_page: function(){
      return Page;
   }
}

export default Globals
