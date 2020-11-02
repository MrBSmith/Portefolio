const GlobalsFunc = {
   Page : {type: String, default: "index"},
   set_page: function(value){
      this.Page = value;
   },
   get_page: function(){
      return this.Page;
   },
   get_current_page: function(){
      var page_name = document.getElementsByTagName("title")[0].innerHTML;
      var page_name_without_spaces = page_name.replaceAll(' ', '');
      return page_name_without_spaces;
   }
}

export default GlobalsFunc
