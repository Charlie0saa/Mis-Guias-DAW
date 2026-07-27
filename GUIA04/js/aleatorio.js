var aleatorios;
var min, max, cantidad;
var disparador, listado;

function init() {

    aleatorios = [];

    disparador = document.getElementById("generador");
    listado = document.getElementById("listanumeros");

    disparador.addEventListener("click", function (evt) {

        evt.preventDefault();

        capturaDatos();

    });

}

function capturaDatos() {

    aleatorios = [];

    min = parseInt(document.getElementById("min").value);
    max = parseInt(document.getElementById("max").value);
    cantidad = parseInt(document.getElementById("cantidad").value);

    aleatorio(min, max, cantidad);

    listado.innerHTML = "<h4>Los números aleatorios son:</h4>" + aleatorios.join(", ");

}

function aleatorio(minimo, maximo, cantidad) {

    if (aleatorios.length >= cantidad) {
        return;
    }

    var numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

    aleatorios.push(numero);

    aleatorio(minimo, maximo, cantidad);

}

window.onload = init;