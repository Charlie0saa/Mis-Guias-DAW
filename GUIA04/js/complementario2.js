// --- FUNCIONES MATEMÁTICAS CON PARÁMETROS ---

function sumar(a, b) {
  return a + b; // Devuelve la suma de dos números
}

function restar(a, b) {
  return a - b; // Devuelve la resta de dos números
}

function multiplicar(a, b) {
  return a * b; // Devuelve la multiplicación de dos números
}

function dividir(a, b) {
  if (b === 0) return "Error (Div/0)"; // Evita la división entre cero para que no crashee
  return a / b; // Devuelve la división
}

function obtenerResiduo(a, b) {
  if (b === 0) return "Error (Div/0)"; // Evita calcular residuo si se divide entre cero
  return a % b; // Devuelve el residuo de la división (operador módulo)
}

function obtenerInversa(num) {
  if (num === 0) return "Error (Div/0)"; // Evita la división 1/0
  return 1 / num; // Devuelve el resultado de 1 dividido entre el número
}

function obtenerCuadrado(num) {
  return num * num; // Multiplica el número por sí mismo (num²)
}

function obtenerRaiz(num) {
  if (num < 0) return "Error (Negativo)"; // Evita calcular raíces de números negativos
  return Math.sqrt(num); // Calcula la raíz cuadrada usando la librería Math de JS
}

// --- LÓGICA DEL CONTROL DE PANTALLA Y ESTADO ---

let valorActual = "0"; // Guarda lo que se muestra actualmente en la pantalla
let primerOperando = null; // Guarda el primer número digitado antes de elegir operador (+, -, *, etc.)
let operacionPendiente = null; // Guarda la operación seleccionada ('+', '-', '*', '/', '%')
let reiniciarPantalla = false; // Bandera (booleano) que avisa si el próximo digito debe borrar la pantalla

const display = document.getElementById("display"); // Captura el <input id="display"> de tu HTML

function actualizarPantalla() {
  display.value = valorActual; // Escribe el contenido de valorActual dentro del input del HTML
}

function agregarNumero(numero) {
  // Si en pantalla hay solo "0" o toca reiniciar pantalla tras presionar un operador:
  if (valorActual === "0" || reiniciarPantalla) {
    valorActual = numero; // Reemplaza el texto completamente con el nuevo número
    reiniciarPantalla = false; // Apaga la bandera para seguir escribiendo dígitos a la par
  } else {
    valorActual += numero; // Concatena (pega) el nuevo número al final del texto actual
  }
  actualizarPantalla(); // Refresca la pantalla del HTML
}

  

// Para operaciones de dos operandos: +, -, *, /, %
function seleccionarOperacion(op) {
  // Si ya había una operación encadenada pendiente (ej. 5 + 3 + ...), calcula lo previo
  if (operacionPendiente !== null && !reiniciarPantalla) {
    procesarResultado();
  }
  primerOperando = parseFloat(valorActual); // Convierte el texto de la pantalla a número decimal
  operacionPendiente = op; // Guarda qué operación se presionó
  reiniciarPantalla = true; // Activa la bandera para que el siguiente número limpie la pantalla
}

// Ejecuta las operaciones binarias llamando a las funciones con parámetros
function procesarResultado() {
  // Si no hay operación o primer número guardado, no hace nada al presionar '='
  if (operacionPendiente === null || primerOperando === null) return;

  const segundoOperando = parseFloat(valorActual); // Toma el número que está en pantalla como segundo dato
  let resultado = 0; // Variable temporal para guardar la respuesta

  // Evalúa cuál operador se guardó previamente
  switch (operacionPendiente) {
    case "+":
      resultado = sumar(primerOperando, segundoOperando); // Llama a la función sumar
      break;
    case "-":
      resultado = restar(primerOperando, segundoOperando); // Llama a la función restar
      break;
    case "*":
      resultado = multiplicar(primerOperando, segundoOperando); // Llama a la función multiplicar
      break;
    case "/":
      resultado = dividir(primerOperando, segundoOperando); // Llama a la función dividir
      break;
    case "%":
      resultado = obtenerResiduo(primerOperando, segundoOperando); // Llama a la función del residuo
      break;
  }

  valorActual = resultado.toString(); // Convierte el número resultado a texto para mostrarlo
  operacionPendiente = null; // Limpia la operación pendiente
  primerOperando = null; // Limpia el primer número guardado
  reiniciarPantalla = true; // El próximo número que toque el usuario limpiará la pantalla
  actualizarPantalla(); // Muestra el resultado en el HTML
}

// Operaciones unarias (se aplican directamente sobre el número actual en pantalla)
function calcularInversa() {
  const num = parseFloat(valorActual); // Convierte la pantalla a número
  valorActual = obtenerInversa(num).toString(); // Aplica 1/x y lo convierte a texto
  reiniciarPantalla = true; // Marca que el próximo número reinicie la pantalla
  actualizarPantalla(); // Muestra el resultado en pantalla
}

function calcularCuadrado() {
  const num = parseFloat(valorActual); // Convierte la pantalla a número
  valorActual = obtenerCuadrado(num).toString(); // Eleva al cuadrado y lo convierte a texto
  reiniciarPantalla = true; // Marca que el próximo número reinicie la pantalla
  actualizarPantalla(); // Muestra el resultado en pantalla
}

function calcularRaiz() {
  const num = parseFloat(valorActual); // Convierte la pantalla a número
  valorActual = obtenerRaiz(num).toString(); // Calcula la raíz y la convierte a texto
  reiniciarPantalla = true; // Marca que el próximo número reinicie la pantalla
  actualizarPantalla(); // Muestra el resultado en pantalla
}