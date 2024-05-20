<?php
// Permitir el acceso desde cualquier origen (puedes especificar tu dominio de Netlify en lugar de '*')
header('Access-Control-Allow-Origin: https://lesa-tau.vercel.app');
// Permitir los métodos HTTP
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT");
// Permitir los encabezados personalizados
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Respuesta a las solicitudes OPTIONS
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}
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
