<?php
include_once '../php/configuraciones/bd.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre_tabla = $_POST["nom_basedatos"];
    $nom_alum = $_POST["nom_alum"];
    $matricula = $_POST["matricula"];
    
    // Seleccionar la base de datos
    $conn->select_db($dbname);

    // Crear la tabla
    $sql = "CREATE TABLE IF NOT EXISTS nom_basedatos (
        id_matricula INT NOT NULL PRIMARY KEY,
        nombre VARCHAR(1000) NOT NULL
    )";
    $conn->query($sql);

    // Preparar y ejecutar la inserción
    $stmt = $conn->prepare("INSERT INTO $nombre_tabla ('id_matricula', 'nombre') VALUES ($matricula, $nom_alum)");
    
    foreach ($nombre_tabla as $nom_basedatos) {
        $stmt->bind_param("s", $nom_basedatos);
        $stmt->execute();
    }
    $stmt->close();
    echo "se ha creado la base de datos y se han guardado los datos ";
}else{

    // Si el formulario no se envió por POST, redirige a la página del formulario
    header("Location: basedatos.html");
    exit();

}

include_once '../php/configuraciones/close.php';
?>
