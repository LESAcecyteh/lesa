<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <script src="assets/plugins/qrCode.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body>
  <div class="row justify-content-center mt-5">
    <div class="col-sm-4 shadow p-3">
      <h5 class="text-center">Escanear codigo QR</h5>
      <div class="row text-center">
        <a id="btn-scan-qr" href="#">
          <img src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/07/1499401426qr_icon.svg" class="img-fluid text-center" width="175">
</a>
        <canvas hidden="" id="qr-canvas" class="img-fluid"></canvas>
        </div>
        <div class="row mx-5 my-3">
        <button class="btn btn-success btn-sm rounded-3 mb-2" onclick="encenderCamara()">Encender camara</button>
        <button class="btn btn-danger btn-sm rounded-3" onclick="cerrarCamara()">Detener camara</button>
      </div>
    </div>
  </div>
  <audio id="audioScaner" src="C:\wamp64\www\proyectoint - copia\js\lector_entrada\sonido.mp3"></audio>
  <script src="C:\wamp64\www\proyectoint - copia\js\lector_entrada\js\index.js"></script>
  <?php
            echo 'La fecha de hoy es: <b>' . date('Y/m/d') . '</b> y su dia es: <b>'.date('l').'</b>!';
        ?>
  <?php include ('../php/registro.php'); ?>
</body>
</html>