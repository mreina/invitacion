// Selecciona el modelo (asegúrate de que el selector sea correcto)
const model = document.querySelector('a-entity');

// Asegúrate de que el componente 'animation-mixer' está presente
const mixer = model.components['animation-mixer'];

// Si el 'animation-mixer' está presente, puedes modificar su configuración
if (mixer) {
    // Detener cualquier animación en curso y reiniciar
    mixer.stop(); 
    
    // Cambiar la animación, por ejemplo, para reproducir todas las animaciones
    mixer.setAttribute('clip', '*');  // O puedes especificar una animación específica si lo deseas
    
    // Reanudar las animaciones
    mixer.play();
} else {
    console.log('No se encontró el componente animation-mixer.');
}
