<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Website</title>
    
    <link rel="stylesheet" href="./css/triade.css?<?php echo time(); ?>">
    <link rel="stylesheet" href="./css/buttons.css?<?php echo time(); ?>">
    <link rel="stylesheet" href="./css/popup.css">
    <link rel="stylesheet" href="./css/navbar.css?<?php echo time(); ?>">
    <link rel="icon" href="./favicon.ico" type="image/x-icon">
  </head>
  <header>
        <img src="css/media/TestLogo.png" alt="Girl in a jacket" width="200" height="100">
        <input type="checkbox" id="nav-toggle" class="nav-toggle">
        <nav>
          <ul>
            <li><a href="selection.php">Spielmodi</a></li>
            <li><a href="faq.php">FaQ</a></li>
            <li><form action="login.php" method="post" ><input type="submit" name="signout" id="signout" value="Abmelden"></form></li>
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
        <h1>Triade</Mathespiel></h1>
        <h2 id="score">Score: </h2>
      </section>
    </main>
    <!--- 
    
    Popup-Sektion
    Hier sind alle Popups, welche über das Spiel ausgelöst werden können.

    !--->
    <div class="popup tutorial" id="popup0">
      <h1>Tutorial</h1>
      <p>In der Mitte des Bildschirmes steht eine Aufgabe. Klicke die richtige Lösung und erhöre deine Punktzahl!</p>
      <a href="#" onclick="hide('popup0')">Verstanden!</a>
    </div>
    <div class="popup" id="popup1">
      <h1>Error</h1>
      <p>Du kannst keine weiteren Antworten in diese "Dropzone" packen!</p>
      <a href="#" onclick="hide('popup1')">Ok!</a>
    </div>
    <div class="popup" id="popup2">
      <h1>Falsch!</h1>
      <p>Deine Triade ist falsch!</p>
      <a href="#" onclick="hide('popup2')">Ok!</a>
    </div>

    <!--- 
    
    Spiel-Sektion
    Hier ist der Container für alle Spielrelevanten Ereignisse

    !--->
    <section class="BR-Math-TermZone" id="BR-Math-TermZone">
        <section class="term">
        <div class="BR-Math-DropZone" ondrop="drop(event)" ondragover="allowDrop(event)"> </div><div class="BR-Math-DropZone" ondrop="drop(event)" ondragover="allowDrop(event)"> </div><div class="BR-Math-DropZone" ondrop="drop(event)" ondragover="allowDrop(event)"> </div>
       
    </section>
    <div class="submit"><input type="submit" value="Abgeben" id="submit-button" onclick="check()">  </div>
      </section>
        <section class="BR-Math-PickZone" id="BR-Math-PickZone" ondrop="drop(event)" ondragover="allowDrop(event)"> 
      </section>
          </section>
          <?php session_start();
  
  if(ISSET($_SESSION['username']) && ISSET($_SESSION['password'])){
    // Schaue ob der Nutzer bereits eingeloggt ist
  }else{
    header("Location: login.php");
  }?>
    <script src="./jss/triade.js?<?php echo time(); ?>"></script>   
    <script src="./jss/dragndrop.js?<?php echo time(); ?>"></script> 
  </body>

</html>
