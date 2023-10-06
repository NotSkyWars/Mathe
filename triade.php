<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Website</title>
    
    <link rel="stylesheet" href="./css/triade.css?<?php echo time(); ?>">
    <link rel="stylesheet" href="./css/buttons.css?<?php echo time(); ?>">
    <link rel="stylesheet" href="./css/popup.css">
    <link rel="stylesheet" href="./css/navbar.css?<?php echo time(); ?>">
    <script src="./jss/dragndrop.js"></script> 
    <script src="./jss/triade.js?<?php echo time(); ?>"></script> 
    <link rel="icon" href="./favicon.ico" type="image/x-icon">
  </head>
  <header>
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
        <h1>Mathespiel</Mathespiel></h1>
      </section>
    </main>
    <div class="popup" id="popup1">
      <h1>Error</h1>
      <p>Du kannst keine weiteren Antworten in diese "Dropzone" packen!.</p>
      <a href="#" onclick="hide('popup1')">Ok!</a>
    </div>
    <section class="BR-Math-TermZone" id="BR-Math-TermZone">
        <section class="term">
        <div class="BR-Math-DropZone" ondrop="drop(event)" ondragover="allowDrop(event)"> </div><div class="BR-Math-DropZone" ondrop="drop(event)" ondragover="allowDrop(event)"> </div><div class="BR-Math-DropZone" ondrop="drop(event)" ondragover="allowDrop(event)"> </div>
       
    </section>
    <div class="submit"><input type="submit" onclick="check()" value="Abgeben">  </div>
    
      </section>
        <section class="BR-Math-PickZone" id="BR-Math-PickZone" ondrop="drop(event)" ondragover="allowDrop(event)"> 
        <div class="BR-Math-Variable" id="0" draggable="true" ondragstart="drag(event)"> <div class="decor-border"><div class="BR-Math-Variable-decor"></div></div><h1 id="drag1">x^2</h1></div>
          <div class="BR-Math-Variable" id="1" draggable="true" ondragstart="drag(event)"> <div class="decor-border"><div class="BR-Math-Variable-decor"></div></div><h1 id="drag2">x=5</h1></div>  
          <div class="BR-Math-Variable" id="2" draggable="true" ondragstart="drag(event)"> <div class="decor-border"><div class="BR-Math-Variable-decor"></div></div><h1 id="drag3">25</h1></div>
          <div class="BR-Math-Variable" id="3" draggable="true" ondragstart="drag(event)"> <div class="decor-border"><div class="BR-Math-Variable-decor"></div></div><h1 id="drag1">x^2</h1></div>
          <div class="BR-Math-Variable" id="4" draggable="true" ondragstart="drag(event)"> <div class="decor-border"><div class="BR-Math-Variable-decor"></div></div><h1 id="drag2">x=5</h1></div>  
          <div class="BR-Math-Variable" id="5" draggable="true" ondragstart="drag(event)"> <div class="decor-border"><div class="BR-Math-Variable-decor"></div></div><h1 id="drag3">25</h1></div>
        </section>
    
  </body>
</html>
