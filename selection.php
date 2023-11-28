<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Website</title>
    
    <link rel="stylesheet" href="./css/selection.css?<?php echo time(); ?>">
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
      <h1>Wähle dein Spiel</h1>
      </section>
      <section class="selection">
      <a href="triade.php" class="triade">Triade</a>
      <a href="term.php" class="term">Termspiel</a>
      <a href="moorhuhn.php" class="huhn">Moorhuhn</a>
      <a href="card.php" class="card">Cards</a>
      <?php session_start();
  
  if(ISSET($_SESSION['username']) && ISSET($_SESSION['password'])){
    // Schaue ob der Nutzer bereits eingeloggt ist
    if(ISSET($_SESSION['lehrer'])){
      echo ' <a href="dashboard.php" class="dashboard">Dashboard</a>';
    }
  }else{
    header("Location: login.php");
  }?>
      </section>
    </main>
    
  </body>
</html>
