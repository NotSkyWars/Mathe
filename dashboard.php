<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mathespiel</title>
    
    <link rel="stylesheet" href="./css/dashboard.css">
    <link rel="stylesheet" href="./css/popup.css">
    <link rel="stylesheet" href="./css/navbar.css?<?php echo time(); ?>">
    <link rel="icon" href="./favicon.ico" type="image/x-icon">
  </head>
  <header>

        <img src="css/media/TestLogo.png" alt="Girl in a jacket" width="200" height="100">
        <input type="checkbox" id="nav-toggle" class="nav-toggle">
        <nav>
          <ul>
          <li><a href="#">Dashboard</a></li>
            <li><a href="selection.php">Selektion</a></li>
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
      <h1>Dashboard</h1>
      </section>
      <section class="selection">
      <a href="schueler.php">Schüler hinzufügen</a>
      <a href="removeschueler.php">Schüler entfernen</a>
      <a href="addcards.php">Karten hinzufügen</a>
      <a href="removecards.php">Karten entfernen</a>
      </section>
    </main>
    <?php session_start();
  
  if(ISSET($_SESSION['username']) && ISSET($_SESSION['password']) && ISSET($_SESSION['lehrer'])){
    // Schaue ob der Nutzer bereits eingeloggt ist
  }else{
    header("Location: selection.php");
  }?>
  </body>
</html>
