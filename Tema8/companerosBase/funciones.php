<?php

class Connection{
// Remember - iniciar servicio MySQL56 al acceder a phpmyadmin
    protected $conn;

    public function Connection(){

    $conn = NULL;

        try{
            $conn = new PDO("mysql:host=localhost;dbname=database","guloal","guloal");
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
           // $conn->setAttribute(PDO::MYSQL_ATTR_INIT_COMMAND,"SET NAMES utf8");
            }

        catch(PDOException $e){
            echo "Algo ha salido mal<br/>";
            echo 'ERROR: ' . $e->getMessage();
            }    
            $this->db = $conn;
        }
    
    
    public function getConnection(){
        return $this->db;
    }
}

$connect = new Connection();

$q = intval($_GET['q']);
$db = $connect -> getConnection();
    $consulta = "SELECT * FROM companeros where id='".$q."'";
    $result = $db->query($consulta);
    if(!$result){
        print "<p>Error en la consulta</p>";
    }
    else{
        foreach ($result as $value) {
            echo "<table>
                <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Edad</th>
                <th>Telefono</th>
                </tr>";
                    echo "<tr>";
                    echo "<td>" . $value['Nombre'] . "</td>";
                    echo "<td>" . $value['Apellidos'] . "</td>";
                    echo "<td>" . $value['Edad'] . "</td>";
                    echo "<td>" . $value['Telefono'] . "</td>";
                    echo "</tr>";
            echo "</table>";
        }
    }
?>
</body>
</html>