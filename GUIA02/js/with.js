'use strict';
// Solicitar el valor para el radio del círculo
const radio = parseInt(prompt('Ingrese un número', ''), 10);
if (Number.isNaN(radio)) {
 alert('Debe ingresar un número válido');
} else {
 // Área de un círculo de radio "radio"
 const area = Math.PI * radio * radio;
 // Valor del lado horizontal definido por el radio
 const coorx = Math.abs(radio * Math.cos(Math.PI / 4));
 // Valor del lado vertical definido por el radio
 const coory = Math.abs(radio * Math.sin(Math.PI / 4));
 const pericir = 2 * Math.PI * radio;
 const perirec = 2 * coorx + 2 * coory;
 const resultados = document.getElementById('resultados');
 resultados.innerHTML = `
 <p>El área del circulo es: ${area.toFixed(2)}</p>
 <p>El lado x del rectángulo generado es: ${coorx.toFixed(2)}</p>
 <p>El lado y del rectángulo generado es: ${coory.toFixed(2)}</p>
 <p>El perímetro del círculo es: ${pericir.toFixed(2)}</p>
 <p>El perímetro del rectángulo es: ${perirec.toFixed(2)}</p>
 `;
}