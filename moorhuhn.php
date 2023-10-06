<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Website</title>
    
    <link rel="stylesheet" href="./css/huhn.css?<?php echo time(); ?>">
    <link rel="stylesheet" href="./css/popup.css">
    <link rel="stylesheet" href="./css/navbar.css">
    <script src="./jss/huhn.js?<?php echo time(); ?>"></script> 
    <link rel="icon" href="./favicon.ico" type="image/x-icon">
  </head>
  <header>
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
    <main>
      <span class="br"></span>
      <section class="BR-Math-Title">
        
      </section>
    </main>
    <section class="score" id="score">Score: 0</section>
    <section id="term" class="term">
</section> 
    <section class="game">
    </section>
    <div class="popup" id="popup1">
      <h1>Verloren</h1>
      <p>Du die richtige Antwort nicht gefunden!</p>
      <a href="#" onclick="hide('popup1')">Okay!</a>
    </div>

    <div class="popup tutorial" id="popup2">
      <h1>Tutorial</h1>
      <p>In der Mitte des Bildschirmes steht eine Aufgabe. Klicke die richtige Lösung und erhöre deine Punktzahl!</p>
      <a href="#" onclick="read('popup2')">Verstanden!</a>
    </div>
    
  </body>
</html>
