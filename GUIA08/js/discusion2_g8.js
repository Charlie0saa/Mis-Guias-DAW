window.onload = function() {
    var formulario = document.getElementById("frmContacto");

    if (formulario.addEventListener) {
        formulario.addEventListener("submit", validarFormulario, false);
    } else if (formulario.attachEvent) {
        formulario.attachEvent("onsubmit", validarFormulario);
    }
};

function validarFormulario(e) {
    var esValido = true;

    // Captura de elementos
    var txtNombre = document.getElementById("txtNombre");
    var txtCorreo = document.getElementById("txtCorreo");
    var txtMensaje = document.getElementById("txtMensaje");

    // Elementos de error
    var errorNombre = document.getElementById("errorNombre");
    var errorCorreo = document.getElementById("errorCorreo");
    var errorMensaje = document.getElementById("errorMensaje");

    // Ocultar mensajes de error previos
    errorNombre.style.display = "none";
    errorCorreo.style.display = "none";
    errorMensaje.style.display = "none";

    // 1. Validación del Nombre (únicamente caracteres alfabéticos y espacios)
    var regNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (txtNombre.value.trim() === "") {
        errorNombre.textContent = "El campo nombre es obligatorio.";
        errorNombre.style.display = "block";
        esValido = false;
    } else if (!regNombre.test(txtNombre.value.trim())) {
        errorNombre.textContent = "El nombre solo debe contener caracteres alfabéticos.";
        errorNombre.style.display = "block";
        esValido = false;
    }

    // 2. Validación del Correo (formato válido y exactamente un solo '@')
    var regCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var conteoArroba = (txtCorreo.value.match(/@/g) || []).length;

    if (txtCorreo.value.trim() === "") {
        errorCorreo.textContent = "El correo electrónico es obligatorio.";
        errorCorreo.style.display = "block";
        esValido = false;
    } else if (conteoArroba !== 1) {
        errorCorreo.textContent = "La dirección de correo debe contener exactamente un solo signo de arroba (@).";
        errorCorreo.style.display = "block";
        esValido = false;
    } else if (!regCorreo.test(txtCorreo.value.trim())) {
        errorCorreo.textContent = "Ingrese una dirección de correo electrónico válida.";
        errorCorreo.style.display = "block";
        esValido = false;
    }

    // 3. Validación del Mensaje (admite letras, números, espacios y símbolos gramaticales)
    var regMensaje = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,;:¡!¿?()\-"'\n\r]+$/;
    if (txtMensaje.value.trim() === "") {
        errorMensaje.textContent = "El mensaje no puede estar vacío.";
        errorMensaje.style.display = "block";
        esValido = false;
    } else if (!regMensaje.test(txtMensaje.value.trim())) {
        errorMensaje.textContent = "El mensaje contiene caracteres no permitidos.";
        errorMensaje.style.display = "block";
        esValido = false;
    }

    // Si hay algún error, detiene el envío
    if (!esValido) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    } else {
        alert("¡Formulario enviado correctamente!");
    }
}