<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
    <link rel="stylesheet" href="./css/login.css?<?php echo time(); ?>">
    <link rel="stylesheet" href="./css/popup.css?<?php echo time(); ?>">
    <script src="./jss/login.js?<?php echo time(); ?>"></script> 
  </head>
  <body>
  <?php session_start(); ?>
    <main>
        <h1>Mathespiel</h1>
        <form method="post">
       <div class="login-form"> 
        <input class="login" name="username" id="username" type="text" placeholder="username">
        <input class="login" name="password" id="password" type="password" placeholder="password">
      </div>
      <div class="submit"><input type="submit" value="Senden"></div>
        
       </form>

       <?php
      include 'Database.php';

      if(isset($_POST['signout'])){
        unset($_SESSION['username']);
        unset($_SESSION['password']);
      }
      if(isset($_POST['username']) && isset($_POST['password'])){
        // Initialisiere die Datenbank und schaue, ob der Nutzer in der DB ist und ob der Name und das Passwort übereinstimmt
        echo "sadads";
        $db = new Database;
        $db->connect();
        $db->validateUser($_POST['username'],$_POST['password']);
 
      }else if(ISSET($_SESSION['username']) && ISSET($_SESSION['password'])){
        // Schaue ob der Nutzer bereits eingeloggt ist

      }else{
        header("login.php");
      }
      
      ?>

      <script>
        function hide(){
          document.getElementById("popup2").style.display ='none';
        }
      </script>
    </main>
  </body>
</html>