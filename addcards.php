<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
    <link rel="stylesheet" href="./css/card.css?<?php echo time(); ?>">
    <link rel="stylesheet" href="./css/popup.css?<?php echo time(); ?>">
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
    <main>
    <span class="br"></span>
        <h1>Karte hinzufügen</h1>
        <form method="post">
       <div class="card-form"> 
        <textarea  class="question" name="question" id="question" type="text" placeholder="Frage" required></textarea>
        <svg id="arrows" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 14v2l-4-3 4-3v2h12v2H4zm8-12V0l4 3-4 3V4H0V2h12z" fill-rule="evenodd"/>
</svg>
        <textarea  class="answer" name="answer" id="answer" type="text" placeholder="Antwort" required></textarea>
        <select  class="klasse" name="klasse" id="klasse" type="text" placeholder="asdsad" required >
        <option value="0" selected>----------Klassen----------</option>
        <option value="7a">7a</option>
        <option value="7b">7b</option>
        <option value="7OS">7OS</option>
        <option value="7OS2">7OS2</option>
    <option value="8" >8a</option>
    <option value="8" >8b</option>
    <option value="8" >8c</option>
    <option value="8" >8OS</option>
    <option value="8" >8OS2</option>
    <option value="9">9a</option>
    <option value="9">9b</option>
    <option value="9">9OS</option>
    <option value="9">9OS2</option>
    <option value="10">10a</option>
    <option value="10">10b</option>
    <option value="10">10OS</option>
    <option value="10">10OS2</option>
</select>
      </div>
      <div class="submit"><input name="hollow" type="submit" value="Hinzufügen"></div>
        
       </form>

      <script>
        function hide(){
          document.getElementById("popup2").style.display ='none';
        }
      </script>
    </main>
    <?php 
    include "Database.php";
    session_start();
  
  if(ISSET($_SESSION['username']) && ISSET($_SESSION['password']) && ISSET($_SESSION['lehrer'])){
    // Schaue ob der Nutzer bereits eingeloggt ist

    if(isset($_POST['question'])){
      $db = new Database;
      $db->connect();
      $db->addCard($_POST['klasse'],$_POST['question'],$_POST['answer']);
    }
    
  
  }else{
    header("Location: selection.php");
  }?>
    <script src="./jss/card.js?<?php echo time(); ?>"></script> 
  </body>
</html>