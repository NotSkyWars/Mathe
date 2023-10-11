<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Website</title>
    
    <link rel="stylesheet" href="./css/selection.css">
    <link rel="stylesheet" href="./css/popup.css">
    <link rel="stylesheet" href="./css/navbar.css?<?php echo time(); ?>">
    <link rel="icon" href="./favicon.ico" type="image/x-icon">
  </head>
  <header>
  <?php session_start(); ?>
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
      <h1>Wähle dein Spiel</h1>
      </section>
      <section class="selection">
      <a href="triade.php">Triade</a>
      <a href="term.php">Termspiel</a>
      <a href="moorhuhn.php">Moorhuhn</a>
      <?php
      include 'Database.php';
      if(ISSET($_POST['username']) && ISSET($_POST['password'])){
        // Initialisiere die Datenbank und schaue, ob der Nutzer in der DB ist und ob der Name und das Passwort übereinstimmt
        $db => new Database;
        $db->validateUser($_POST['username'],$_POST['password']);
      }else if(ISSET($_SESSION['username']) && ISSET($_SESSION['password'])){
        // Schaue ob der Nutzer bereits eingeloggt ist
      }else{
        header("login.php");
      }
      
      ?>
      </section>
    </main>
    
  </body>
</html>
