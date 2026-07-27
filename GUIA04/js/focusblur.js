// Elemento donde se mostrará la ayuda
var textoAyuda;

// Mensajes de ayuda
var arregloAyuda = [
    "Ingrese su nombre en este campo de texto",
    "Ingrese su apellido en este campo de texto",
    "Ingrese su dirección de correo en el formato usuario@dominio.com",
    "Ingrese su número de teléfono",
    "Ingrese una descripción breve",
    "Seleccione su profesión",
    "Seleccione su país de origen",
    "Restablezca el formulario",
    "Envíe el formulario",
    ""
];

// Inicialización
function inic() {

    textoAyuda = document.getElementById("textoAyuda");

    textoAyuda.style.visibility = "hidden";

    registrarEscuchas(document.getElementById("firstname"), 0);
    registrarEscuchas(document.getElementById("lastname"), 1);
    registrarEscuchas(document.getElementById("email"), 2);
    registrarEscuchas(document.getElementById("phone"), 3);
    registrarEscuchas(document.getElementById("describe"), 4);
    registrarEscuchas(document.getElementById("profesion"), 5);
    registrarEscuchas(document.getElementById("selpais"), 6);
    registrarEscuchas(document.getElementById("resetbtn"), 7);
    registrarEscuchas(document.getElementById("submitbtn"), 8);

}

// Registrar eventos
function registrarEscuchas(objeto, numeroMensaje) {

    objeto.addEventListener("focus", function () {

        textoAyuda.style.visibility = "visible";
        textoAyuda.innerHTML = arregloAyuda[numeroMensaje];

    });

    objeto.addEventListener("blur", function () {

        textoAyuda.style.visibility = "hidden";
        textoAyuda.innerHTML = "";

    });

}

// Ejecutar al cargar
window.addEventListener("load", inic);