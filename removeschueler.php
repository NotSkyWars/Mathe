<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mathespiel</title>
    <link rel="stylesheet" href="./css/schueler.css?<?php echo time(); ?>">
    <link rel="stylesheet" href="./css/navbar.css?<?php echo time(); ?>">
  </head>
  <header>

<img src="css/media/TestLogo.png" alt="Girl in a jacket" width="200" height="100">
<input type="checkbox" id="nav-toggle" class="nav-toggle">
<nav>
  <ul>
    <li><a href="dashboard.php">Dashboard</a></li>
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
  <span class="br"></span>
  <?php
  include('Database.php');
  session_start();
  
  if(isset($_POST['username'])){
    $db = new Database;
    $db->connect();
    $db->removeUser($_POST['username']);
  }
  
  if(ISSET($_SESSION['username']) && ISSET($_SESSION['password']) && ISSET($_SESSION['lehrer'])){
    // Schaue ob der Nutzer bereits eingeloggt ist
  }else{
    header("Location: selection.php");
  }?>
    <main>
        <h1>Schüler entfernen</h1>
        <form method="post">
       <div class="login-form"> 
        <input class="login" id="username" name="username" type="text" placeholder="username">
      </div>
      <div class="submit"><input type="submit" value="Senden"></div>
        
       </form>
    </main>

  </body>
</html>
