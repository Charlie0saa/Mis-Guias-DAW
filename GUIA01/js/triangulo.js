var base = parseFloat(prompt('Introduzca la base del triángulo:', ''));
var altura = parseFloat(prompt('Introduzca la altura del triángulo:', ''));
var area;

// Fórmula del área del triángulo: (base * altura) / 2
area = (base * altura) / 2;

document.write("<header><h1>El área del triángulo es: " + area + "</h1><hr><br></header>");