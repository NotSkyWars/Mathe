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
      <?php 
        if(ISSET($_SESSION['login'])){
        }else{
          header("login.php");
        }

        ?>
      <section class="BR-Math-Title">
        <h1>Term</h1>
      </section>
    </main>
    <div class="popup" id="popup1">
      <h1>Error</h1>
      <p>Du kannst keine weiteren Antworten in diese "Dropzone" packen!.</p>
      <a href="#" onclick="hide('popup1')">Ok!</a>
    </div>
    <section class="game" id="game">
    <section class="BR-Math-TermZone" >
    <section class="term">
        <div class="BR-Math-DropZone" ondrop="drop(event)" ondragover="allowDrop(event)"> </div><div class="BR-Math-DropZone" ondrop="drop(event)" ondragover="allowDrop(event)"> </div>
       
    </section>
        <div class="submit"><input type="submit" value="Abgeben" id="submit-button" onclick="check()">  </div>
      </section>
        <section class="BR-Math-PickZone" id="BR-Math-PickZone" ondrop="drop(event)" ondragover="allowDrop(event)"> 
<div class="BR-Math-Variable" id="0" draggable="true" type="Frage" ondragstart="drag(event)"><h1 name="Frage" id="drag1">x^2</h1></div>
<div class="BR-Math-Variable" id="1" draggable="true"  type="Antwort" ondragstart="drag(event)"><h1 name="Antwort" id="drag1">x^2</h1></div>
       </section>
        </section>
    <div class="popup tutorial" id="popup2">
      <h1>Tutorial</h1>
      <p>Löse die Gleichung richtig auf! Schiebe hierbei die Karten in das richtige Feld!</p>
      <a href="#" onclick="read('popup2')">Verstanden!</a>
    </div>
    <script src="./jss/cards.js"></script> 
    <script src="./jss/dragndrop.js"></script> 
  </body>
