<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LESA</title>
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
    <h1>Seleccione la accion que desee realizar</h1>
    <form>
        <input type="button" value="Registro de entrada de alumnos" onclick="entrada()">
    </br>
</br>

        <input type="button" value="Registrode salida de alumnos" onClick="salida()">
    <br>
</br>
</br>
</br>    
</br>
</br>
<h2>Crear Nuevo Registro</h2>
<input type="button" value="Nuevo Registro de Grupo" onclick="registro()">
    </br>
</br>
    </form>
</body>
</html>