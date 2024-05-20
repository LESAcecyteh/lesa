
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
    const container = document.getElementById('labelsContainer');
    container.innerHTML = ''; // Clear existing labels and inputs

    const numAlumnos = document.getElementById('numberInput').value;
    const number = parseInt(numAlumnos);

    if (isNaN(number) || number < 0) {
        alert('Por favor, ingrese un número válido');
        return;
    }


    for (let i = 0; i < number; i++) {
        const labelInputPair = document.createElement('div');    
        labelInputPair.className = 'label-input-pair';

        const alum = document.createElement('label');
        alum.textContent = `Alumno Num. ${i + 1}: `;
                
        const nom_alum = document.createElement('input');    
        nom_alum.type = 'text';

        const label_matricula = document.createElement('label');
        label_matricula.textContent = `Matricula Num. ${i + 1}: `;
                
        const matricula = document.createElement('input');
        matricula.type = 'text';
                    
        labelInputPair.appendChild(alum);
        labelInputPair.appendChild(nom_alum);

        labelInputPair.appendChild(label_matricula);
        labelInputPair.appendChild(matricula);    

        container.appendChild(labelInputPair);
    
    }
    
}

        //guardar datos  
        function guardarDatos() {
            const formData = new FormData(document.getElementById('formulario'));
            
            fetch('php/basedatos.php', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                console.log('Success:', data);
                alert('Datos guardados exitosamente');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Error al guardar los datos');
            });
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
            slides[outgoingIndex].style.opacity=0;
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