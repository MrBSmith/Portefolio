<?php

   // Generate the navbar
   function generate_navbar(){
      echo(
         '<nav class="navbar navbar-expand-lg navbar-dark bg-info">
          <a class="navbar-brand" href="Home.php">Baba des Bois</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav mr-auto">');

            generate_navbar_options();

      echo( '</ul>
          </div>
         </nav>'
      );
   }

   // Generate the options of the navbar
   function generate_navbar_options(){
      $options_array = array("Game Dev", "Pixel Art", "Musique");
      $page_title = get_page_title();

      foreach ($options_array as $option) {
         $script_name = str_replace(" ", "", $option);
         $is_current = strcmp($script_name, $page_title);

         echo('<li class="nav-item');
            if($is_current == true){
               echo(' active');
            }
         echo('"');
         echo('>
            <a class="nav-link" href="'.$script_name.".php".'">'.$option);
         if($is_current == true){
            echo('<span class="sr-only">(current)</span>');
         }

         echo(
            '</a>
            </li>'
         );
      }
   }

   // Return the title of the current script
   function get_page_title() {
      $title = substr($_SERVER["SCRIPT_NAME"], strrpos($_SERVER["SCRIPT_NAME"], "/") + 1 );
      $title = explode(".", $title)[0];
      return $title;
   }
?>
