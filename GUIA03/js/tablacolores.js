// Crear tabla de colores hexadecimales
 var contenido = "<h1>Tabla de colores hexadecimales</h1>";
 contenido += "<hr>";
 contenido += "<table class=\"table table-bordered table-hover\" align='center'><tr>";

 // Creamos tres arreglos con valores de cadena que representan valores hexadecimales
 var ncel = 0;
 var r = ["00", "11", "22", "33", "44", "55", "66", "77", "88", "99", "AA", "BB", "CC", "DD", "EE",
"FF"];
 var g = ["00", "11", "22", "33", "44", "55", "66", "77", "88", "99", "AA", "BB", "CC", "DD", "EE",
"FF"];
 var b = ["00", "11", "22", "33", "44", "55", "66", "77", "88", "99", "AA", "BB", "CC", "DD", "EE",
"FF"];
 // Creamos tres bucles anidando uno dentro de otro
 for (var i = 0; i < r.length; i++) {
 for (var j = 0; j < g.length; j++) {
 for (var k = 0; k < b.length; k++) {
 // Se crea el color
 var nuevocol = "#" + r[i] + g[j] + b[k];
 if (ncel % 7 == 0) {
 contenido += "<tr>";
 }
 // Se imprime el color
 contenido += "<td style='text-align:center; background-color:" + nuevocol + "'>" +
nuevocol + "</td>";
 ncel++;
 if (ncel % 7 == 0) {
 contenido += "</tr>";
 }
 }
 }
 }
 contenido += "</tr></table>";
 // Insertar el contenido en el div#resultado
 document.getElementById("resultado").innerHTML = contenido;