// Inicialización de variables
var numeros = [];
var i, j, max, temp;
var orden; // Nueva variable para almacenar el tipo de ordenamiento

// 1. Validación para la cantidad de elementos (Igual al de la guía)
do {
    max = prompt("Cuántos números va a ingresar (valor entero):", "");
    if (isNaN(max)) {
        alert("El valor digitado no es numérico.");
        continue;
    }
    if (max < 2) {
        alert("El arreglo debe ser de dimensión 2 o superior");
    }
} while (isNaN(max) || max < 2);

// NUEVO: Validación para elegir el tipo de ordenamiento (Ascendente o Descendente)
do {
    orden = prompt("¿Cómo desea ordenar los números?\nDigite 'A' para Ascendente\nDigite 'D' para Descendente", "").toUpperCase();
    if (orden !== 'A' && orden !== 'D') {
        alert("Opción inválida. Por favor, digite únicamente 'A' o 'D'.");
    }
} while (orden !== 'A' && orden !== 'D');

// 2. Lazo para solicitar el ingreso de los elementos (Igual al de la guía)
for (i = 0; i < max; i++) {
    numeros[i] = parseInt(prompt("Número " + (parseInt(i) + 1), ""));
}

// 3. Crear el contenido HTML para los números originales (Igual al de la guía)
var contenido = "<h1>Números ingresados</h1>";
contenido += "<hr>";
contenido += "<table class=\"table table-bordered table-hover\"><tr>";
for (i = 0; i < max; i++) {
    contenido += "<td class=\"Off\" onmouseover=\"this.className='On'\" onmouseout=\"this.className='Off'\">" + numeros[i] + "</td>";
}
contenido += "</tr></table>";

// 4. Lazo modificado que ordena mediante el método de la burbuja según la elección
for (i = 0; i < max - 1; i++) {
    for (j = i + 1; j < max; j++) {
        // Si eligió 'A', ordena de menor a mayor (>). Si eligió 'D', ordena de mayor a menor (<)
        if ((orden === 'A' && numeros[i] > numeros[j]) || (orden === 'D' && numeros[i] < numeros[j])) {
            temp = numeros[j];
            numeros[j] = numeros[i];
            numeros[i] = temp;
        }
    }
}

// NUEVO: Cambiar el título final dinámicamente según la elección
if (orden === 'A') {
    contenido += "<h1 class=\"mt-5\">Números ordenados ascendentemente</h1>";
} else {
    contenido += "<h1 class=\"mt-5\">Números ordenados descendentemente</h1>";
}

contenido += "<hr>";
contenido += "<table class=\"table table-bordered table-hover\"><tr>";
for (i = 0; i < max; i++) {
    contenido += "<td class=\"Off\" onmouseover=\"this.className='On'\" onmouseout=\"this.className='Off'\">" + numeros[i] + "</td>";
}
contenido += "</tr></table>";

// 5. Insertar el contenido en el div#resultado (Igual al de la guía)
document.getElementById("resultado").innerHTML = contenido;