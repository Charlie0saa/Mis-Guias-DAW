'use strict';

// Esperamos a que el HTML cargue y asignamos el evento al botón
document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btnFactorial');
    
    boton.addEventListener('click', () => {
        // Capturamos el número ingresado por el usuario
        const inputFactorial = document.getElementById('numFactorial').value;
        
        if (inputFactorial.trim() === "") {
            alert("Por favor, ingrese un número entero.");
            return;
        }

        const numero = parseInt(inputFactorial, 10);

        if (isNaN(numero) || numero < 0) {
            alert("El número debe ser un entero no negativo.");
            return;
        }
        
        calcularFactorial(numero);
    });
});

function calcularFactorial(numero) {
    let resultado = 1;

    // Bucle para calcular el factorial multiplicando consecutivamente
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    // Capturamos el contenedor del HTML para inyectar el resultado
    const contenedor = document.getElementById('resFactorial');

    contenedor.innerHTML = `El factorial de <strong>${numero}!</strong> es: <strong>${resultado}</strong>`;
    
    // Mostramos el recuadro gris
    contenedor.classList.remove('d-none');
}