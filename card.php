<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Website</title>
    
    <link rel="stylesheet" href="./css/cards.css?<?php echo time(); ?>">
    <link rel="stylesheet" href="./css/popup.css">
    <link rel="stylesheet" href="./css/buttons.css?<?php echo time(); ?>">
    <link rel="stylesheet" href="./css/navbar.css?<?php echo time(); ?>">
    <script src="./jss/dragndrop.js"></script> 
    <link rel="icon" href="./favicon.ico" type="image/x-icon">
  </head>
  <header>
  <?php session_start();
  
  if(ISSET($_SESSION['username']) && ISSET($_SESSION['password'])){
    // Schaue ob der Nutzer bereits eingeloggt ist
  }else{
    header("Location: login.php");
  }?>
        <img src="css/media/TestLogo.png" alt="Girl in a jacket" width="200" height="100">
        <input type="checkbox" id="nav-toggle" class="nav-toggle">
        <nav>
          <ul>
          <li><a href="klassen.php">Klassen</a></li>
            <li><a href="selection.php">Spielmodi</a></li>
            <li><a href="faq.php">FaQ</a></li>
            <li><a href="abmelden">Abmelden</a></li>
          </ul>
        </nav>
        <label for="nav-toggle" class="nav-toggle-label">
          <span></span>
        </label>
        <span class="underline"></span>
      </header>
  <body>
  <?php 
        if(ISSET($_SESSION['login'])){
        }else{
          header("login.php")
        }

        ?>
    <main>
      <span class="br"></span>
      <section class="BR-Math-Title">
        <h1>Cards</Mathespiel></h1>
      </section>
    </main>
    <div class="popup" id="popup1">
      <h1>Error</h1>
      <p>Du kannst keine weiteren Antworten in diese "Dropzone" packen!.</p>
      <a href="#" onclick="hide('popup1')">Ok!</a>
    </div>
    <section class="game" id="game">
        <?php
        /*
        [X ist das blabalba] - [Was ist X?]
        [Y ist das blabalba] \ [Was ist Y?]
        [Z ist das blabalba] / [Was ist Z?]
        */
        ?>    

<table class="tftable" border="1">
        <tr><th>Cards</th><th>Cards2</th></tr>
        <tr><td><button class="card" id="1">Test</button></td><td><button class="card" id="2">Test2</button></td></tr>
        <tr><td><button class="card" id="1">Test</button></td><td><button class="card" id="2">Test2</button></td></tr>
        <tr><td><button class="card" id="1">Test</button></td><td><button class="card" id="2">Test2</button></td></tr>
        <tr><td><button class="card" id="1">Test</button></td><td><button class="card" id="2">Test2</button></td></tr>
        <tr><td><button class="card" id="1">Test</button></td><td><button class="card" id="2">Test2</button></td></tr>
        <tr><td><button class="card" id="1">Test</button></td><td><button class="card" id="2">Test2</button></td></tr>
    </table>

</section>

    <div class="popup tutorial" id="popup2">
      <h1>Tutorial</h1>
      <p>Verbinde die richtigen Karten miteinander!</p>
      <a href="#" onclick="read('popup2')">Verstanden!</a>
    </div>
  </body>
</html>
