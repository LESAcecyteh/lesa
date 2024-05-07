
//CONTRASEÑA
function verificar() {
    let clave = document.getElementById('clave').value;
    let usuario = document.getElementById('usuario').value;
    if (clave==="LESA" && usuario==="Samuel") {
    location.href="C:/wamp64/www/proyectoint/html/entsal.html";
    } else {
    alert('clave incorrecta');
    }
    }
//SISTEMA DE ENTRADA    
function entrada(){
    location.href="C:/wamp64/www/proyectoint/php/lectoren.php";
}
//SISTEMA DE SALIDA
function salida(){
    location.href="C:/wamp64/www/proyectoint/php/lectorsal.php";
}
//SISTEMA DE nueva base de datos 
function registro(){
    location.href="C:/wamp64/www/proyectoint/php/basedatos.php";
}
//ALUMNOS
function verificarmatricula() {
    let matricula = document.getElementById('matricula').value;
    let contrasenamatricula = document.getElementById('contrasenamatricula').value;
    if (matricula==="Samuel" && contrasenamatricula==="LESA") {
    location.href="C:/wamp64/www/proyectoint/html/alumnos.html";
    } else {
    alert('clave incorrecta');
    }
    }
//REGISTRO DE ENTRADA DE ALUMNOS
function Entradalumno(){
    location.href="C:/wamp64/www/proyectoint/html/entralumno.html"
}
//REGISTRO DE SALIDA DE ALUMNOS   
function Salidalumno(){
    location.href="C:/wamp64/www/proyectoint/html/salidalumno.html"
} 