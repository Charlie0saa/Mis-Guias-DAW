var thisPic = 0;

// Arreglo con 10 imágenes
var myPix = new Array(
    "img/leopard.jpg",
    "img/lince.jpg",
    "img/lion.jpg",
    "img/puma.jpg",
    "img/tigger.jpg"
);

var imgCt = myPix.length - 1;

window.onload = init;

function init() {
    var btnAnterior = document.getElementById("btnAnterior");
    var btnSiguiente = document.getElementById("btnSiguiente");

    // Eventos para los botones de formulario
    if (btnAnterior.addEventListener) {
        btnAnterior.addEventListener("click", function() { chgSlide(-1); }, false);
        btnSiguiente.addEventListener("click", function() { chgSlide(1); }, false);
    } else if (btnAnterior.attachEvent) {
        btnAnterior.attachEvent("onclick", function() { chgSlide(-1); });
        btnSiguiente.attachEvent("onclick", function() { chgSlide(1); });
    }

    // Evento para la captura de teclado
    document.onkeydown = keyHit;
}

function keyHit(evt) {
    var ltArrow = 37;
    var rtArrow = 39;

    var thisKey = (evt) ? evt.which : window.event.keyCode;

    if (thisKey == ltArrow) {
        chgSlide(-1);
    } else if (thisKey == rtArrow) {
        chgSlide(1);
    }
}

function chgSlide(direction) {
    thisPic = thisPic + direction;

    // Comportamiento cíclico: de la última pasa a la primera y viceversa
    if (thisPic > imgCt) {
        thisPic = 0;
    }
    if (thisPic < 0) {
        thisPic = imgCt;
    }

    document.getElementById("myPicture").src = myPix[thisPic];
    document.getElementById("infoCounter").innerHTML = "Imagen " + (thisPic + 1) + " de " + (imgCt + 1);
}