<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mathespiel</title>
    
    <link rel="stylesheet" href="./css/term.css?<?php echo time(); ?>">
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
        <h1>Term</Mathespiel></h1>
      </section>
      <h2 id="score">Score: </h2>
    </main>
    <div class="popup" id="popup1">
      <h1>Error</h1>
      <p>Du kannst keine weiteren Antworten in diese "Dropzone" packen!.</p>
      <a href="#" onclick="hide('popup1')">Ok!</a>
    </div>
    <div class="popup" id="popup4">
      <h1>Error</h1>
      <p>Die Eingabe ist keine Zahl!</p>
      <a href="#" onclick="read('popup4')">Ok!</a>
    </div>
    <section class="game" id="game">
    <section class="BR-Math-TermZone" >
        <section class="term" id="termZone">
       </section> 
       <div class="submit"><button type="submit" value="Abgeben" id="submit-button" onclick="check()"> Abgeben </div>
      </section>
        <?php 
        if(ISSET($_SESSION['login'])){
        }else{
          header("login.php");
        }

        ?>



        </section>
    <div class="popup tutorial" id="popup2">
      <h1>Tutorial</h1>
      <p>Löse die Gleichung richtig auf! Schreibe hierbei das Feld die richtige Lösung!</p>
      <a href="#" onclick="read('popup2')">Verstanden!</a>
    </div>
        <script src="./jss/term.js?<?php echo time(); ?>"></script> 
  </body>
</html>
