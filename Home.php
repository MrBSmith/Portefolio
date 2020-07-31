<!doctype html>

<html lang="en">
   <head>
     <meta charset="utf-8">
     <title>Hugo Barette</title>
     <!-- Include Bootstrap -->
     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
     <!-- Include Vue.js -->
     <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
   </head>

   <body>
      <!-- Generate the navbar -->
      <?php
         require("navbar.php");
         generate_navbar();
      ?>


      <!-- Generate the card categories -->
      <div id="app" class="ui main container">
         <card v-for="cat in categories_array" :title="cat.name" :description="cat.description" :img="cat.img"></card>
      </div>

      <script src="js/app.js"> </script>
      <!-- Include Bootstrap -->
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
   </body>
</html>
