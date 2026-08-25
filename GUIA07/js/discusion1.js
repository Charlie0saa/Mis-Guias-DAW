function iniciar() {
    var boton = document.getElementById("validar");
    if (boton.addEventListener) {
        boton.addEventListener("click", validar, false);
    } else if (boton.attachEvent) {
        boton.attachEvent("onclick", validar);
    }
}

function validar() {
    var tipo = document.frmdatos.seltipo.options[document.frmdatos.seltipo.selectedIndex].value;
    var dato = document.frmdatos.txtdato.value;
    var valido = false;
    var re = null;

    if (dato == null || dato.trim() === "" || dato.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de formulario");
        return 0;
    }

    switch (tipo) {
        // a) IPv4 de 0.0.0.0 hasta 255.255.255.255
        case "ipv4":
            re = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
            if (re.test(dato)) {
                valido = true;
            }
            break;

        // b) URLs con http, https, ftp o relativas al protocolo (//dominio/ruta)
        case "url":
            re = /^((http|https|ftp):)?\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+([\w\-\.,@?^=%&:\/~+#]*[\w\-\@?^=%&\/~+#])?$/;
            if (re.test(dato)) {
                valido = true;
            }
            break;

        // c) Correo electrónico estándar
        case "email":
            re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (re.test(dato)) {
                valido = true;
            }
            break;

        default:
            alert("El tipo de dato seleccionado no puede ser procesado");
            break;
    }

    if (valido == true) {
        alert("El valor " + dato + " de tipo " + tipo.toUpperCase() + " es VÁLIDO");
    } else if (valido == false) {
        alert("El valor " + dato + " de tipo " + tipo.toUpperCase() + " es INVÁLIDO");
    }
}

// Asociando función al cargar la página
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}