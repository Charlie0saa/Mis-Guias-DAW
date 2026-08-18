// --- VARIABLES DE ESTADO Y ELEMENTOS DOM ---
let listaPreguntas = []; // Guardará el arreglo traído del archivo JSON
let indicePreguntaActual = 0; // Índice de la pregunta que se está mostrando
let puntaje = 0; // Contactor de respuestas correctas

const textoPregunta = document.getElementById("textoPregunta"); // Elemento <h5> donde va la pregunta
const contenedorOpciones = document.getElementById("contenedorOpciones"); // <div> para los botones
const btnSiguiente = document.getElementById("btnSiguiente"); // Botón para avanzar
const barraProgreso = document.getElementById("barraProgreso"); // Barra de progreso
const contenedorJuego = document.getElementById("contenedorJuego"); // Tarjeta del juego
const contenedorResultado = document.getElementById("contenedorResultado"); // Tarjeta final
const textoPuntaje = document.getElementById("textoPuntaje"); // Texto de resultado final

// --- FUNCIÓN CLAVE: Cargar preguntas desde el archivo JSON ---
function cargarPreguntasJSON() {
  fetch("preguntas.json") // Pide el archivo JSON al servidor/navegador
    .then(respuesta => respuesta.json()) // Convierte el texto JSON recibido en un objeto/arreglo JS
    .then(datos => {
      listaPreguntas = datos; // Guarda las preguntas en nuestra variable
      mostrarPregunta(); // Muestra la primera pregunta
    })
    .catch(error => {
      textoPregunta.textContent = "Error al cargar las preguntas del JSON."; // Alerta en caso de fallo
    });
}

// Muestra la pregunta actual y genera sus botones de opción
function mostrarPregunta() {
  btnSiguiente.classList.add("d-none"); // Oculta el botón siguiente hasta que elijan respuesta
  contenedorOpciones.innerHTML = ""; // Limpia las opciones anteriores

  const preguntaActual = listaPreguntas[indicePreguntaActual]; // Trae la pregunta correspondiente
  textoPregunta.textContent = `${indicePreguntaActual + 1}. ${preguntaActual.pregunta}`; // Muestra el texto

  // Actualiza la barra de progreso de Bootstrap
  const porcentaje = ((indicePreguntaActual) / listaPreguntas.length) * 100;
  barraProgreso.style.width = `${porcentaje}%`;

  // Genera un botón dinámicamente por cada opción de la pregunta
  for (let i = 0; i < preguntaActual.opciones.length; i++) {
    const boton = document.createElement("button"); // Crea un elemento <button>
    boton.className = "btn btn-outline-primary text-start p-3"; // Aplica clases de estilo de Bootstrap
    boton.textContent = preguntaActual.opciones[i]; // Escribe el texto de la opción
    
    // Asigna el evento al hacer clic en una opción
    boton.onclick = function() {
      validarRespuesta(i); // Le pasa el índice seleccionado a la validación
    };

    contenedorOpciones.appendChild(boton); // Agrega el botón dentro del div contenedor
  }
}

// Evalúa si la opción seleccionada es correcta
function validarRespuesta(indiceSeleccionado) {
  const preguntaActual = listaPreguntas[indicePreguntaActual];
  const botones = contenedorOpciones.getElementsByTagName("button"); // Selecciona todos los botones mostrados

  // Bloquea todos los botones para que no se puedan presionar de nuevo
  for (let i = 0; i < botones.length; i++) {
    botones[i].disabled = true;
  }

  // Verifica si el índice seleccionado coincide con el índice correcto definido en el JSON
  if (indiceSeleccionado === preguntaActual.correcta) {
    botones[indiceSeleccionado].className = "btn btn-success text-start p-3"; // Pinta de verde el botón
    puntaje++; // Suma un punto
  } else {
    botones[indiceSeleccionado].className = "btn btn-danger text-start p-3"; // Pinta de rojo la opción incorrecta
    botones[preguntaActual.correcta].className = "btn btn-success text-start p-3"; // Pinta de verde la correcta
  }

  btnSiguiente.classList.remove("d-none"); // Hace visible el botón de siguiente
}

// Evento para avanzar a la siguiente pregunta o finalizar el juego
btnSiguiente.addEventListener("click", function() {
  indicePreguntaActual++; // Pasa a la siguiente pregunta

  if (indicePreguntaActual < listaPreguntas.length) {
    mostrarPregunta(); // Carga la nueva pregunta
  } else {
    mostrarResultadoFinal(); // Si no hay más preguntas, muestra el resultado final
  }
});

// Despliega la pantalla de fin del juego
function mostrarResultadoFinal() {
  barraProgreso.style.width = "100%"; // Barra llena
  contenedorJuego.classList.add("d-none"); // Oculta el juego
  contenedorResultado.classList.remove("d-none"); // Muestra el contenedor de resultados
  textoPuntaje.textContent = `Obtuviste ${puntaje} de ${listaPreguntas.length} respuestas correctas.`; // Mensaje final
}

// Inicia la carga del JSON al abrir la página
cargarPreguntasJSON();