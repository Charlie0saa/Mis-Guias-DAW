function iniciar() {
    var fileInput = document.getElementById("fileInput");
    var btnValidar = document.getElementById("btnvalidar");

    // Mostrar el nombre del archivo en pantalla en cuanto el usuario seleccione uno
    if (fileInput.addEventListener) {
        fileInput.addEventListener("change", mostrarNombreArchivo, false);
    } else if (fileInput.attachEvent) {
        fileInput.attachEvent("onchange", mostrarNombreArchivo);
    }

    // Evento para validar la extensión del archivo seleccionado al presionar el botón
    if (btnValidar.addEventListener) {
        btnValidar.addEventListener("click", validarArchivo, false);
    } else if (btnValidar.attachEvent) {
        btnValidar.attachEvent("onclick", validarArchivo);
    }
}

function mostrarNombreArchivo() {
    var fileInput = document.getElementById("fileInput");
    var fileNameSpan = document.getElementById("fileName");

    if (fileInput.files && fileInput.files.length > 0) {
        fileNameSpan.textContent = fileInput.files[0].name;
    } else {
        fileNameSpan.textContent = "Ningún archivo seleccionado";
    }
}

function validarArchivo() {
    var fileInput = document.getElementById("fileInput");

    // Verificar si se ha seleccionado algún archivo
    if (!fileInput.files || fileInput.files.length === 0) {
        alert("Por favor, seleccione un archivo antes de validar.");
        return;
    }

    var nombreArchivo = fileInput.files[0].name;

    // Expresión regular para validar extensiones de imagen web (.jpg, .jpeg, .png, .gif) sin importar mayúsculas/minúsculas
    var re = /\.(jpg|jpeg|png|gif)$/i;

    if (re.test(nombreArchivo)) {
        alert("El archivo '" + nombreArchivo + "' es una IMAGEN VÁLIDA para publicar en la web.");
    } else {
        alert("El archivo '" + nombreArchivo + "' es INVÁLIDO. Solo se permiten imágenes (.jpg, .jpeg, .png, .gif).");
    }
}

// Asociando evento load al cargar la página
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}