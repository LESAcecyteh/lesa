<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ENTRADA</title>
    <script src="C:\wamp64\www\proyectoint - copia\js\lesa(beta).js"type="text/javascript"></script>
    <link rel="stylesheet" href="C:\wamp64\www\proyectoint - copia\assets\css\diseno.css">
</head>
<body>
    <nav>

        <input type="checkbox" id="toggle">
          <div class="logo">
              Lector de Entrada y Salida de Alumnos
          </div>
          <ul class="list">
          <li><a href="C:\wamp64\www\proyectoint - copia\index.php">inicio</a></li>
            <li><a href="C:\wamp64\www\proyectoint - copia\html\registro.php">Registro</a></li>
            <li><a href="C:\wamp64\www\proyectoint - copia\html\ayuda.php">Ayuda</a></li>
            <li><a href="C:\wamp64\www\proyectoint - copia\html\vista.php">Vista</a></li>
          </ul>
              <label for="toggle" class="icon-bars">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
          </label>
  
  </nav>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
    <h1>Bienvenido al sistema de entrada de alumnos</h1>
    <h2>Para iniciar con el registro de acceso de alunmos al plantel se necesita de:</h2>
    <ul>
        <li><h2>Ultimos 3 digitos de la matricula del alumno</h2></li>
        <li><h2>(En el caso de llegar tade) tener el correo del padre de familia</h2> </li>
    </ul>
    <form>
        Ingrese los tres ultimos digitos de la matricula:
        <input type="text" id="matricula">
    </br>
        <br>
        <input type="button" value="Confirmar" onClick="verificarmatricula()">
        
    </form>
</body>
</html>