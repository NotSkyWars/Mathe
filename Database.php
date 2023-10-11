
<?php
class Database {

    protected $connection;
	protected $query;
    protected $show_errors = TRUE;
    protected $query_closed = TRUE;
	public $query_count = 0;

	public function __construct() {
        // Daten aus der Configurationsdatei bekommen.
        $file = json_decode('config.json', true);


        // Verbindung zur Datenbank herstellen.
        $this->connection = new mysqli($file['database'], $file['name'], $file['password'], $file['tablename']);


        // Schauen, ob es einen Fehler gibt. 
		if ($this->connection->connect_error) {
			$this->error('Konnte keine Verbindung zur Datenbank herstellen ->  ' . $this->connection->connect_error);
		}
		$this->connection->set_charset($charset);
	}

    public function query($query) {
        // Schauen, ob die Datenbankverbindung geschlossen ist.
        if (!$this->query_closed) {
            $this->query->close();
        }

		if ($this->query = $this->connection->prepare($query)) {
            // Schauen, ob die Argumente passen
            if (func_num_args() > 1) {
                $x = func_get_args();
                $args = array_slice($x, 1);
				$types = '';
                $args_ref = array();
                foreach ($args as $k => &$arg) {
					if (is_array($args[$k])) {
						foreach ($args[$k] as $j => &$a) {
							$types .= $this->_gettype($args[$k][$j]);
							$args_ref[] = &$a;
						}
					} else {
	                	$types .= $this->_gettype($args[$k]);
	                    $args_ref[] = &$arg;
					}
                }
				array_unshift($args_ref, $types);
                call_user_func_array(array($this->query, 'bind_param'), $args_ref);
            }
            $this->query->execute();
           	if ($this->query->errno) {
				$this->error('Unable to process MySQL query (check your params) - ' . $this->query->error);
           	}
            $this->query_closed = FALSE;
			$this->query_count++;
        } else {
            $this->error('Unable to prepare MySQL statement (check your syntax) - ' . $this->connection->error);
        }
		return $this;
    }


	public function fetchAll($callback = null) {
	    $params = array();
        $row = array();
	    $meta = $this->query->result_metadata();
	    while ($field = $meta->fetch_field()) {
	        $params[] = &$row[$field->name];
	    }
	    call_user_func_array(array($this->query, 'bind_result'), $params);
        $result = array();
        while ($this->query->fetch()) {
            $r = array();
            foreach ($row as $key => $val) {
                $r[$key] = $val;
            }
            if ($callback != null && is_callable($callback)) {
                $value = call_user_func($callback, $r);
                if ($value == 'break') break;
            } else {
                $result[] = $r;
            }
        }
        $this->query->close();
        $this->query_closed = TRUE;
		return $result;
	}

	public function fetchArray() {
	    $params = array();
        $row = array();
	    $meta = $this->query->result_metadata();
	    while ($field = $meta->fetch_field()) {
	        $params[] = &$row[$field->name];
	    }
	    call_user_func_array(array($this->query, 'bind_result'), $params);
        $result = array();
		while ($this->query->fetch()) {
			foreach ($row as $key => $val) {
				$result[$key] = $val;
			}
		}
        $this->query->close();
        $this->query_closed = TRUE;
		return $result;
	}

	public function close() {
		return $this->connection->close();
	}

	private function _gettype($var) {
	    if (is_string($var)) return 's';
	    if (is_float($var)) return 'd';
	    if (is_int($var)) return 'i';
	    return 'b';
    }
    
    public function validateUser($username,$password){
        // Schaue, ob der Nutzer in der Datenbank ist und das Password übereinstimmt.
        
        $result = query("SELECT * FROM accounts WHERE USERNAME = ?",$username)->fetchArray;
        if($result['PASSWORD'] == $password){
            $_SESSION['username'] = $username;
            $_SESSION['password'] = $password;
            if($result['LEHRER'] == "Yes"){
                $_SESSION['lehrer'] = true;
            }
        }else{
        }
    }

}
?>