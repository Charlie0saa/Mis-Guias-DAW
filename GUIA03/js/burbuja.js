// Inicialización de variables
var numeros = [];
var i, j, max, temp;

// Validación de la cantidad de números
do {
    max = prompt("¿Cuántos números va a ingresar?");

    if (isNaN(max)) {
        alert("El valor digitado no es numérico.");
        continue;
    }

    max = parseInt(max);

    if (max < 2) {
        alert("El arreglo debe ser de dimensión 2 o superior.");
    }

} while (isNaN(max) || max < 2);

// Capturar los números
for (i = 0; i < max; i++) {
    numeros[i] = parseInt(prompt("Número " + (i + 1)));
}

// Mostrar números ingresados
var contenido = "<h1>Números ingresados</h1>";
contenido += "<hr>";
contenido += "<table class='table table-bordered table-hover'><tr>";

for (i = 0; i < max; i++) {
    contenido += "<td class='Off' onmouseover=\"this.className='On'\" onmouseout=\"this.className='Off'\">" + numeros[i] + "</td>";
}

contenido += "</tr></table>";

// Ordenamiento por burbuja
for (i = 0; i < max - 1; i++) {
    for (j = i + 1; j < max; j++) {

        if (numeros[i] > numeros[j]) {
            temp = numeros[i];
            numeros[i] = numeros[j];
            numeros[j] = temp;
        }

    }
}

// Mostrar números ordenados
contenido += "<h1 class='mt-5'>Números ordenados ascendentemente</h1>";
contenido += "<hr>";
contenido += "<table class='table table-bordered table-hover'><tr>";

for (i = 0; i < max; i++) {
    contenido += "<td class='Off' onmouseover=\"this.className='On'\" onmouseout=\"this.className='Off'\">" + numeros[i] + "</td>";
}

contenido += "</tr></table>";

// Mostrar resultado
document.getElementById("resultado").innerHTML = contenido;