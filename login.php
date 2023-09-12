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
    <main>
        <h1>Mathespiel</h1>
        <form method="post" action="selection.html">
        <input type="text" placeholder="username">
        <input type="password" placeholder="password">
        <input type="submit" value="Senden">
       </form>
    </main>
  </body>
</html>