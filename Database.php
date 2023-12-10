<?php
class Database{
    private $con;
    function connect(){
        $this->getConnection();
        $this->con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);;
        $this->createDatabase();
    }
    public function getConnection(){
        $file = json_decode(file_get_contents("config.config"),true);
        $this->con = new PDO("mysql:host=". $file['database'] .";dbname=". $file['tablename'] ."",$file['name'], $file['password']);
    }
    public function exists(string $name):bool{
        $output =$this->con->prepare("SELECT NAME FROM nutzer WHERE NAME=:name");
        $output->execute(['name' => $name]); 
        $result = $output->fetch();
        return $result['NAME'] != null;
    }




    public function set(string $uuid)
    {
        $output = $this->con->prepare("SELECT UUID FROM Core.profile WHERE name=:uuid");
        $output->execute(['uuid' => $uuid]); 
        $result = $output->fetch();
    }

    public function removeCard(string $uuid)
    {
        $output = $this->con->prepare("DELETE FROM `cards` WHERE CID=:uuid");
        $output->execute(['uuid' => $uuid]); 
    }

    public function removeUser(string $uuid)
    {
        $output = $this->con->prepare("DELETE FROM `nutzer` WHERE NAME=:uuid");
        $output->execute(['uuid' => $uuid]); 
    }

    public function get(string $type ,string $row, string $value): string{
        $output = $this->con->prepare("SELECT ". $type ." FROM nutzer WHERE ". $row ."=:value");
        $output->execute(['value' => $value]); 
        $result = $output->fetch();
        return $result[$type];
    }

    public function getCards(string $klasse){
        $output = $this->con->prepare("SELECT * FROM cards WHERE KLASSE=:uuid");
        $output->execute(['uuid' => $klasse]); 
        $result = $output->fetchAll();
        return $result;
    }

    public function getAllCards(){
        $output = $this->con->prepare("SELECT * FROM cards");
        $output->execute(); 
        $result = $output->fetchAll();
        return $result;
    }

    private function getHighestNID(): int{
        $result = $this->con->prepare("SELECT MAX(NID) as max_items
        FROM nutzer;");
        $result->execute();
        $result = $result->fetch();
        $result = $result[0]+1;
        return $result;
    }

    private function getHighestCID(): int{
        $result = $this->con->prepare("SELECT MAX(CID) as max_items
        FROM cards;");
        $result->execute();
        $result = $result->fetch();
        $result = $result[0]+1;
        return $result;
    }

    public function addUser(string $name, string $password, string $klasse,string $teacher){
        $this->con->prepare("INSERT INTO `nutzer`(`NID`, `NAME`, `PASSWORD`, `KLASSE` , `LEHRER`) VALUES (:value1,:value2,:value3,:value4,:value5);")->execute(
        ['value1' => $this->getHighestNID(), 'value2' => $name, 'value3' => $password,'value4' => $klasse, 'value5' => $teacher]
        );
    }

    public function addCard(string $klasse, string $frage, string $antwort){
        $this->con->prepare("INSERT INTO `cards`(`CID`, `KLASSE`, `FRAGE`, `ANTWORT`) VALUES (:value1,:value2,:value3,:value4);")->execute(
        ['value1' => $this->getHighestCID(), 'value2' => $klasse, 'value3' => $frage,'value4' => $antwort]
        );
        echo '    <div class="popup success" id="popup2" style="display:block";>
            <h1>Erfolgreich!</h1>
            <p>Die Karte wurde erfolgreich hinzugefügt! </p>
            <a href="#" onclick="hide();">Verstanden!</a>
          </div>';
    }

    private function createDatabase(){
        $this->con->prepare("CREATE TABLE IF NOT EXISTS `nutzer` ( `NID` INT NOT NULL , `NAME` Text NOT NULL , `PASSWORD` TEXT NOT NULL, `KLASSE` TEXT NOT NULL, `LEHRER` TEXT NOT NULL, PRIMARY KEY(`NID`) );")->execute();
        $this->con->prepare("CREATE TABLE IF NOT EXISTS `cards` ( `CID` INT NOT NULL , `KLASSE` Text NOT NULL , `FRAGE` TEXT NOT NULL, `ANTWORT` TEXT NOT NULL, PRIMARY KEY(`CID`) );")->execute();
        if(!$this->exists("admin")){
            $file = json_decode(file_get_contents("config.config"),true);
            $this->con->prepare("INSERT INTO `nutzer`(`NID`, `NAME`, `PASSWORD`, `KLASSE`, `LEHRER`) VALUES (0,'". $file['adminname'] ."','". $file['adminpassword'] ."','7a','Lehrer');")->execute();
        }
    }

    public function validateUser(string $name, string $password){
        if($this->exists($name)){
            if($password == $this->get("PASSWORD","NAME",$name)){
                $_SESSION['username'] = $name;
                $_SESSION['password'] = $password;
                $_SESSION['KLASSE'] = $this->get("KLASSE","NAME",$name);
               if($this->get("LEHRER","NAME",$name) == "Lehrer"){
                $_SESSION['lehrer'] = true;
               }
    
               header("Location: selection.php");
            }else{
                echo '    <div class="popup loginfehler" id="popup2" style="display:block;">
                <h1>Loginfehler</h1>
                <p>Schaue, ob das Passwort und der Nutzername übereinstimmt! </p>
                <a href="#" onclick="hide();">Verstanden!</a>
              </div>';
            }
        }else{
            echo '    <div class="popup loginfehler" id="popup2" style="display:block";>
            <h1>Loginfehler</h1>
            <p>Schaue, ob das Passwort und der Nutzername übereinstimmt! </p>
            <a href="#" onclick="hide();">Verstanden!</a>
          </div>';
        }
    }
}



?>
