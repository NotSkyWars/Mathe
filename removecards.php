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
    <script src="./jss/card.js?<?php echo time(); ?>"></script> 

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
        <textarea  class="question" name="question" id="question" type="text" placeholder="Frage" readonly></textarea>
        <svg id="arrows" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 14v2l-4-3 4-3v2h12v2H4zm8-12V0l4 3-4 3V4H0V2h12z" fill-rule="evenodd"/>
</svg>
        <textarea  class="answer" name="answer" id="answer" type="text" placeholder="Antwort" readonly></textarea>
        <select  class="klasse" name="cards" id="cards" type="text" placeholder="asdsad" onchange="writeAnswers(this)" required >
        <option value="0" selected>----------KARTEN----------</option>
          <?php 
          include "Database.php";
          $db = new Database;
$db->connect();

$list = $db->getAllCards();
//echo "<script>";
for($i = 0; $i< count($list); $i++){
  echo '<option value="'. $list[$i]['CID'] .'">'. $list[$i]['CID'] .'</option>';
}
echo "</select>";



echo "<script>
var antworten = new Map();
var fragen = new Map(); console.log(fragen);";

for($i = 0; $i< count($list); $i++){
  echo 'fragen.set('. $list[$i]['CID'] .' + "", "'. $list[$i]['FRAGE'] .'");';
  echo 'antworten.set('. $list[$i]['CID'] .' + "", "'. $list[$i]['ANTWORT'] .'");';
}


echo "console.log(fragen);
console.log(antworten);
</script>";

          ?>

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
    session_start();
  
  if(ISSET($_SESSION['username']) && ISSET($_SESSION['password']) && ISSET($_SESSION['lehrer'])){
    // Schaue ob der Nutzer bereits eingeloggt ist

    if(isset($_POST['answer'])){
      $db->removeCard($_POST['cards']);
      header("Refresh:0");
    }
    
  
  }else{
    header("Location: selection.php");
  }?>
 
  </body>
</html>