'use strict';

// 1. Esperamos a que el HTML cargue y asignamos el evento al botón
document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btnCifras');
    
    boton.addEventListener('click', () => {
        // Capturamos lo que el usuario escribió en el input
        const valorInput = document.getElementById('numCifras').value;
        
        if (valorInput.trim() === "") {
            alert("Por favor, ingrese un número entero.");
            return;
        }
        
        // Ejecutamos el análisis pasándole el número de la caja de texto
        analizarNumero(valorInput);
    });
});

// 2. Tu función lógica modificada para pintar en el HTML
function analizarNumero(numeroOriginal) {
    const numeroStr = Math.abs(parseInt(numeroOriginal, 10)).toString();
    
    if (isNaN(numeroStr)) {
        alert("Por favor, ingrese un número entero válido.");
        return;
    }

    let cifrasImpares = 0;
    let cifrasPares = 0;
    let sumaImpares = 0;
    let sumaPares = 0;
    let sumaTotal = 0;
    let cifraMayor = -Infinity;
    let cifraMenor = Infinity;

    for (let i = 0; i < numeroStr.length; i++) {
        const digito = parseInt(numeroStr[i], 10);
        sumaTotal += digito;
        
        if (digito > cifraMayor) cifraMayor = digito;
        if (digito < cifraMenor) cifraMenor = digito;
        
        if (digito % 2 === 0) {
            cifrasPares++;
            sumaPares += digito;
        } else {
            cifrasImpares++;
            sumaImpares += digito;
        }
    }

    // CAPTURA EL CONTENEDOR DEL HTML PARA MOSTRAR LOS DATOS EN PANTALLA
    const contenedor = document.getElementById('resCifras');
    
    contenedor.innerHTML = `<strong>Resultados para el número ${numeroOriginal}:</strong>\n` +
        `1) Cantidad de cifras: ${numeroStr.length}\n` +
        `2) Cantidad de cifras impares: ${cifrasImpares}\n` +
        `3) Cantidad de cifras pares: ${cifrasPares}\n` +
        `4) Suma de cifras impares: ${sumaImpares}\n` +
        `5) Suma de cifras pares: ${sumaPares}\n` +
        `6) Suma de todas las cifras: ${sumaTotal}\n` +
        `7) Cifra mayor: ${cifraMayor}\n` +
        `8) Cifra menor: ${cifraMenor}`;
    
    // Le quitamos la clase 'd-none' de Bootstrap para que el recuadro gris se vuelva visible
    contenedor.classList.remove('d-none');
}