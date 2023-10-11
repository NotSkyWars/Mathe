<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
    <link rel="stylesheet" href="./css/login.css?<?php echo time(); ?>">
    <script src="./jss/login.js?<?php echo time(); ?>"></script> 
  </head>
  <body>
  <?php session_start(); ?>
    <main>
        <h1>Mathespiel</h1>
        <form method="post" action="selection.php">
       <div class="login-form"> 
        <input class="login" id="username" type="text" placeholder="username">
        <input class="login" id="password" type="password" placeholder="password">
      </div>
      <div class="submit"><input type="submit" value="Senden"></div>
        
       </form>
    </main>
  </body>
</html>