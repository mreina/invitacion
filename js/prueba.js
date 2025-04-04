// Selecciona el modelo en tu escena
const model = document.querySelector('a-entity');

// Verifica si el modelo tiene el componente 'animation-mixer'
const mixer = model.getAttribute('animation-mixer');

// Si el 'animation-mixer' está presente, intenta reproducir la animación
if (mixer) {
    mixer.play();  // Inicia la animación
} else {
    console.log('No se encontró el componente animation-mixer.');
}
