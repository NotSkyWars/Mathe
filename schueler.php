<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
    <link rel="stylesheet" href="./css/schueler.css?<?php echo time(); ?>">
    <link rel="stylesheet" href="./css/navbar.css?<?php echo time(); ?>">
    <script src="./jss/login.js?<?php echo time(); ?>"></script> 
  </head>
  <header>

<img src="css/media/TestLogo.png" alt="Girl in a jacket" width="200" height="100">
<input type="checkbox" id="nav-toggle" class="nav-toggle">
<nav>
  <ul>
    <li><a href="dashboard.php">Dashboard</a></li>
    <li><a href="cards.php">Cards</a></li>
    <li><a href="selection.php">Selektion</a></li>
    <li><a href="abmelden">Abmelden</a></li>
  </ul>
</nav>
<label for="nav-toggle" class="nav-toggle-label">
  <span></span>
</label>
<span class="underline"></span>
</header>
  <body>
  <span class="br"></span>
  <?php session_start();
  
  if(ISSET($_SESSION['username']) && ISSET($_SESSION['password']) && ISSET($_SESSION['lehrer'])){
    // Schaue ob der Nutzer bereits eingeloggt ist
  }else{
    header("login.php");
  }?>
    <main>
        <h1>Schüler hinzufügen</h1>
        <form method="post" action="schueler.php">
       <div class="login-form"> 
        <input class="login" type="text" placeholder="username">
        <input class="login" type="password" placeholder="password">
        <input class="login" type="text" placeholder="klasse">
        <input class="login" type="text" placeholder="type">
      </div>
      <div class="submit"><input type="submit" value="Senden"></div>
        
       </form>
    </main>
  </body>
</html>