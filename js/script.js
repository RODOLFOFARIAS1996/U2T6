// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const botonModal = document.getElementById('abrirModal');
    const modal = document.getElementById('modalContacto');
    const cerrarModal = document.querySelector('.cerrar-modal');
    const formulario = document.querySelector('.formulario-contacto');
    
    // Función para abrir el modal
    function abrirModal() {
        modal.classList.add('activo');
        document.body.style.overflow = 'hidden'; // Evitar scroll en el fondo
    }
    
    // Función para cerrar el modal
    function cerrarModalFunc() {
        modal.classList.remove('activo');
        document.body.style.overflow = ''; // Restaurar scroll
    }
    
    // Event listeners
    botonModal.addEventListener('click', abrirModal);
    cerrarModal.addEventListener('click', cerrarModalFunc);
    
    // Cerrar modal al hacer clic fuera del contenido
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            cerrarModalFunc();
        }
    });
    
    // Evitar que el formulario se envíe (para demostración)
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validación básica
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
        
        if (nombre && email && mensaje) {
            // Aquí iría el código para enviar el formulario
            alert('¡Formulario enviado con éxito!');
            cerrarModalFunc();
            formulario.reset();
        } else {
            alert('Por favor, complete todos los campos requeridos.');
        }
    });
    
    // Botones "GET IN TOUCH"
    const botonesContacto = document.querySelectorAll('.boton-contacto');
    botonesContacto.forEach(boton => {
        boton.addEventListener('click', abrirModal);
    });
    
    // Animación para los elementos al cargar la página
    function animarElementos() {
        const elementos = document.querySelectorAll('.info-equipo, .miembro');
        elementos.forEach((elemento, index) => {
            setTimeout(() => {
                elemento.style.opacity = '1';
                elemento.style.transform = 'translateY(0)';
            }, 200 * index);
        });
    }
    
    // Aplicar estilos iniciales para la animación
    const elementosAnimados = document.querySelectorAll('.info-equipo, .miembro');
    elementosAnimados.forEach(elemento => {
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(20px)';
        elemento.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Iniciar animación después de un breve retraso
    setTimeout(animarElementos, 300);
});