// Declarando e inicializando variables
var i;
var promedio = 0;
var alumno;
var tabla = "";
var notas = [];

// Cantidad de notas
var n = parseInt(prompt("¿Cuántas notas va a ingresar?"));

// Nombre del alumno
alumno = prompt("Ingrese el nombre del alumno:");

// Capturar notas
for (i = 0; i < n; i++) {
    notas[i] = parseFloat(prompt("Ingrese la nota " + (i + 1)));
}

// Construcción de la tabla
tabla += "<div class='container mt-4'>";
tabla += "<table class='table table-bordered'>";
tabla += "<caption><strong>Evaluaciones y promedio de " + alumno + "</strong></caption>";
tabla += "<thead class='table-dark'>";
tabla += "<tr>";
tabla += "<th>Evaluaciones</th>";
tabla += "<th>Notas</th>";
tabla += "</tr>";
tabla += "</thead>";
tabla += "<tbody>";

// Recorrer notas
for (i = 0; i < notas.length; i++) {
    promedio += notas[i];

    tabla += "<tr>";
    tabla += "<td>Evaluación " + (i + 1) + "</td>";
    tabla += "<td class='nota'>" + notas[i] + "</td>";
    tabla += "</tr>";
}

// Calcular promedio
promedio = promedio / notas.length;
promedio = promedio.toFixed(2);

// Mostrar promedio
tabla += "<tr>";
tabla += "<th>Promedio</th>";
tabla += "<td class='nota'><strong>" + promedio + "</strong></td>";
tabla += "</tr>";

tabla += "</tbody>";
tabla += "</table>";
tabla += "</div>";

// Mostrar en la página
document.write(tabla);