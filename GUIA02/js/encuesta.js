'use strict';
// Declaración de variables (sin globales implícitas)
let voto;
let seguirVotando = true;
let cont1 = 0, cont2 = 0, cont3 = 0;
let total;
let per1, per2, per3;
const app = document.getElementById('app');
// Mostrar las instrucciones para responder
app.innerHTML = `
 <div class="container">
 <div class="row">
 <h1 class="text-center">
 Encuesta para determinar cuántas personas están a favor de la
 portabilidad numérica de teléfonos celulares.
 </h1>
 </div>
 <div class="row">
 <ul class="list-group list-group-flush">
 <li class="list-group-item fw-bold">Digite "1" si esta a 
favor</li>
 <li class="list-group-item fw-bold">Digite "2" si esta en 
contra</li>
 <li class="list-group-item fw-bold">Digite "3" si se abstiene 
de opinar</li>
 </ul>
 </div>
 </div>
`;
// Ciclo repetitivo donde se captura voto por voto
// en tanto no se dé por terminado el ingreso de respuestas de la encuesta
while (seguirVotando) {
 voto = parseInt(prompt('¿Cuál es su voto?', ''), 10);
 switch (voto) {
 case 1:
 cont1++;
 break;
 case 2:
 cont2++;
 break;
 case 3:
 cont3++;
 break;
 default:
 alert('¡Voto no válido!');
 }
 // Se pregunta si se desea terminar la encuesta o continuar
 seguirVotando = confirm('¿Desea continuar s/n?');
}
// Obtener el total de respuestas de la encuesta
total = cont1 + cont2 + cont3;
// Obtener los porcentajes (protegido contra división entre cero)
per1 = total > 0 ? Math.round((cont1 / total) * 10000) / 100 : 0;
per2 = total > 0 ? Math.round((cont2 / total) * 10000) / 100 : 0;
per3 = total > 0 ? Math.round((cont3 / total) * 10000) / 100 : 0;
// Mostrar los resultados de la encuesta (sin with, con template literal)
app.innerHTML += `
 <div class="container">
 <div class="row">
 <table class="table table-primary table-striped table-hover">
 <thead>
 <tr>
 <th>Resultado de los votos</th>
 <th>Votos obtenidos</th>
 <th>Porcentaje</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>Votos a favor</td>
 <td>${cont1}</td>
 <td>${per1} %</td>
 </tr>
 <tr>
 <td>Votos en contra</td>
 <td>${cont2}</td>
 <td>${per2} %</td>
 </tr>
 <tr>
 <td>Se abstienen de opinar</td>
 <td>${cont3}</td>
 <td>${per3} %</td>
 </tr>
 </tbody>
 <tfoot>
 <tr>
 <th>Totales</th>
 <th>${total}</th>
 <th>${(per1 + per2 + per3).toFixed(2)} %</th>
 </tr>
 </tfoot>
 </table>
 </div>
 </div>
`;