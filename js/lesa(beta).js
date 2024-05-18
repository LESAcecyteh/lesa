
//CONTRASEÑA
function verificar() {
    let clave = document.getElementById('clave').value;
    let usuario = document.getElementById('usuario').value;
    if (clave==="LESA" && usuario==="Samuel") {
    location.href="entsal.html";
    } else {
    alert('clave incorrecta');
    }
    }

//SISTEMA DE ENTRADA    
function entrada(){
    location.href="lectoren.html";
}

//SISTEMA DE SALIDA
function salida(){
    location.href="lectorsal.html";
}

//SISTEMA DE nueva base de datos 
function registro(){
    location.href="basedatos.html";
}

//ALUMNOS
function verificarmatricula() {
    let matricula = document.getElementById('matricula').value;
    let contrasenamatricula = document.getElementById('contrasenamatricula').value;
    if (matricula==="Samuel" && contrasenamatricula==="LESA") {
    location.href="alumnos.html";
    } else {
    alert('clave incorrecta');
    }
    }

//REGISTRO DE ENTRADA DE ALUMNOS
function Entradalumno(){
    location.href="entralumno.html"
}

//REGISTRO DE SALIDA DE ALUMNOS   
function Salidalumno(){
    location.href="salidalumno.html"
} 

    function generarAlumnos() {
      const numeroInput = document.getElementById('numero');
      const numero = parseInt(numeroInput.value); // Obtener el número ingresado como entero

      const contenedorEtiquetas = document.getElementById('contenedor-etiquetas');
      contenedorEtiquetas.innerHTML = ''; // Limpiar el contenedor antes de agregar las etiquetas

      for (let i = 1; i <= numero; i++) {
        const etiqueta = document.createElement('label');
        etiqueta.textContent = 'Etiqueta ' + i;

        contenedorEtiquetas.appendChild(etiqueta); // Agregar la etiqueta al contenedor
        contenedorEtiquetas.appendChild(document.createElement('br')); // Agregar un salto de línea
      }
    }




    document.addEventListener('DOMContentLoaded', function () {
        const slides = document.querySelectorAll('.slide');
        let currentIndex = 0;
    
        // Preparamos cada slide con la configuración inicial apropiada.
        slides.forEach((slide, index) => {
            if (index === 0) {
                slide.style.opacity = 1;
                slide.style.transform = 'rotateY(0deg)'; // Diapositiva inicial visible
            } else {
                slide.style.opacity = 0;
                slide.style.transform = 'rotateY(180deg)'; // Preparadas para entrar rotando
            }
        });
    
        let slideInterval = setInterval(changeImage, 4000);
    
        function changeImage() {
            const outgoingIndex = currentIndex;
            currentIndex = (currentIndex + 1) % slides.length;
            const incomingIndex = currentIndex;
    
            // Anima la diapositiva saliente
            slides[outgoingIndex].style.opacity = 0;
            slides[outgoingIndex].style.transform = 'rotateY(-180deg)';
    
            // Prepara y anima la diapositiva entrante
            setTimeout(() => {
                slides[incomingIndex].style.opacity = 1;
                slides[incomingIndex].style.transform = 'rotateY(0deg)'; // Rota a la vista frontal
            }, 20); // Un pequeño retardo para permitir que la CSS transition tome efecto
        }
    
        function setupTouchEvents() {
            let touchStartX = 0;
            let touchEndX = 0;
            const carousel = document.querySelector('.carousel');
    
            carousel.addEventListener('touchstart', function (e) {
                touchStartX = e.changedTouches[0].screenX;
                clearInterval(slideInterval);
            });
    
            carousel.addEventListener('touchend', function (e) {
                touchEndX = e.changedTouches[0].screenX;
                let deltaX = touchEndX - touchStartX;
                if (Math.abs(deltaX) > 50) {
                    changeImage(deltaX < 0);
                }
                slideInterval = setInterval(changeImage, 6000);
            });
        }
    
        setupTouchEvents();
    });