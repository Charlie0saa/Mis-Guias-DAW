'use strict';

// Esperamos a que el HTML cargue y asignamos el evento al botón
document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btnPalabra');
    
    boton.addEventListener('click', () => {
        // Capturamos el texto de la caja de entrada
        const palabraInput = document.getElementById('txtPalabra').value;
        
        if (!palabraInput || palabraInput.trim().length === 0) {
            alert("Por favor, ingrese una palabra válida.");
            return;
        }
        
        analizarPalabra(palabraInput);
    });
});

function analizarPalabra(palabra) {
    // a) Contar vocales usando una expresión regular
    const coincidenciasVocales = palabra.match(/[aeiouáéíóúü]/gi);
    const cantidadVocales = coincidenciasVocales ? coincidenciasVocales.length : 0;

    // b) Invertir la palabra
    const palabraAlReves = palabra.split('').reverse().join('');

    // Determinar si es palíndromo (comparando en minúsculas y sin espacios)
    const limpiaOriginal = palabra.toLowerCase().replace(/\s+/g, '');
    const limpiaAlReves = palabraAlReves.toLowerCase().replace(/\s+/g, '');
    const esPalindromo = limpiaOriginal === limpiaAlReves;

    // Capturamos el contenedor del HTML para inyectar los datos
    const contenedor = document.getElementById('resPalabra');

    contenedor.innerHTML = `<strong>Análisis de "${palabra}":</strong>\n` +
        `a) Cantidad de vocales: ${cantidadVocales}\n` +
        `b) Palabra al revés: ${palabraAlReves}\n` +
        `¿Es palíndromo?: ${esPalindromo ? 'Sí, lo es.' : 'No, no lo es.'}`;
    
    // Mostramos el recuadro gris
    contenedor.classList.remove('d-none');
}