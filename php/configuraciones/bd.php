<?php
$servername = "localhost";  // Cambia esto si tu servidor MySQL no está en localhost
$username = "root";      // Nombre de usuario de MySQL
$password = "";   // Contraseña de MySQL
$dbname = "lesa";      // Nombre de la base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
echo "Conexión exitosa";

?>
