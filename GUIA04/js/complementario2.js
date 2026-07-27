// --- FUNCIONES MATEMÁTICAS CON PARÁMETROS ---
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) return "Error (Div/0)";
  return a / b;
}

function obtenerResiduo(a, b) {
  if (b === 0) return "Error (Div/0)";
  return a % b;
}

function obtenerInversa(num) {
  if (num === 0) return "Error (Div/0)";
  return 1 / num;
}

function obtenerCuadrado(num) {
  return num * num;
}

function obtenerRaiz(num) {
  if (num < 0) return "Error (Negativo)";
  return Math.sqrt(num);
}

// --- LÓGICA DEL CONTROL DE PANTALLA Y ESTADO ---
let valorActual = "0";
let primerOperando = null;
let operacionPendiente = null;
let reiniciarPantalla = false;

const display = document.getElementById("display");

function actualizarPantalla() {
  display.value = valorActual;
}

function agregarNumero(numero) {
  if (valorActual === "0" || reiniciarPantalla) {
    valorActual = numero;
    reiniciarPantalla = false;
  } else {
    valorActual += numero;
  }
  actualizarPantalla();
}

function limpiar() {
  valorActual = "0";
  primerOperando = null;
  operacionPendiente = null;
  reiniciarPantalla = false;
  actualizarPantalla();
}

// Para operaciones de dos operandos: +, -, *, /, %
function seleccionarOperacion(op) {
  if (operacionPendiente !== null && !reiniciarPantalla) {
    procesarResultado();
  }
  primerOperando = parseFloat(valorActual);
  operacionPendiente = op;
  reiniciarPantalla = true;
}

// Ejecuta las operaciones binarias llamando a las funciones con parámetros
function procesarResultado() {
  if (operacionPendiente === null || primerOperando === null) return;

  const segundoOperando = parseFloat(valorActual);
  let resultado = 0;

  switch (operacionPendiente) {
    case "+":
      resultado = sumar(primerOperando, segundoOperando);
      break;
    case "-":
      resultado = restar(primerOperando, segundoOperando);
      break;
    case "*":
      resultado = multiplicar(primerOperando, segundoOperando);
      break;
    case "/":
      resultado = dividir(primerOperando, segundoOperando);
      break;
    case "%":
      resultado = obtenerResiduo(primerOperando, segundoOperando);
      break;
  }

  valorActual = resultado.toString();
  operacionPendiente = null;
  primerOperando = null;
  reiniciarPantalla = true;
  actualizarPantalla();
}

// Operaciones unarias (de un solo número)
function calcularInversa() {
  const num = parseFloat(valorActual);
  valorActual = obtenerInversa(num).toString();
  reiniciarPantalla = true;
  actualizarPantalla();
}

function calcularCuadrado() {
  const num = parseFloat(valorActual);
  valorActual = obtenerCuadrado(num).toString();
  reiniciarPantalla = true;
  actualizarPantalla();
}

function calcularRaiz() {
  const num = parseFloat(valorActual);
  valorActual = obtenerRaiz(num).toString();
  reiniciarPantalla = true;
  actualizarPantalla();
}s