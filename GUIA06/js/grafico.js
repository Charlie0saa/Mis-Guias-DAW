var datosNavegadores = [
    { nombre: "Google Chrome", porcentaje: 65 },
    { nombre: "Safari", porcentaje: 19 },
    { nombre: "Microsoft Edge", porcentaje: 5 },
    { nombre: "Mozilla Firefox", porcentaje: 3 },
    { nombre: "Otros", porcentaje: 8 }
];

var datosSistemas = [
    { nombre: "Android", porcentaje: 42 },
    { nombre: "Windows", porcentaje: 28 },
    { nombre: "iOS", porcentaje: 17 },
    { nombre: "macOS", porcentaje: 7 },
    { nombre: "Linux / Otros", porcentaje: 6 }
];

function generarGrafico() {
    var form = document.forms["frmGrafico"];
    var tipo = form.elements["tipoGrafico"].value;
    var color = form.elements["colorBarra"].value;
    var orientacion = form.elements["orientacion"].value;

    var datos = (tipo === "navegadores") ? datosNavegadores : datosSistemas;

    document.getElementById("tituloGrafico").textContent = 
        (tipo === "navegadores") ? "Uso de Navegadores Web" : "Uso de Sistemas Operativos";

    var contenedor = document.getElementById("contenedorGrafico");
    contenedor.innerHTML = "";

    if (orientacion === "horizontal") {
        dibujarHorizontal(datos, color, contenedor);
    } else {
        dibujarVertical(datos, color, contenedor);
    }
}

function dibujarHorizontal(datos, color, contenedor) {
    for (var i = 0; i < datos.length; i++) {
        var fila = document.createElement("div");
        fila.className = "d-flex align-items-center mb-3";

        var etiqueta = document.createElement("div");
        etiqueta.style.width = "140px";
        etiqueta.className = "fw-bold text-truncate";
        etiqueta.textContent = datos[i].nombre;

        var fondoBarra = document.createElement("div");
        fondoBarra.className = "flex-grow-1 bg-light rounded me-2 border";

        var barra = document.createElement("div");
        barra.className = "bar-h";
        barra.style.width = datos[i].porcentaje + "%";
        barra.style.backgroundColor = color;

        var textoPorcentaje = document.createElement("span");
        textoPorcentaje.className = "fw-bold small";
        textoPorcentaje.style.width = "45px";
        textoPorcentaje.textContent = datos[i].porcentaje + "%";

        fondoBarra.appendChild(barra);
        fila.appendChild(etiqueta);
        fila.appendChild(fondoBarra);
        fila.appendChild(textoPorcentaje);
        contenedor.appendChild(fila);
    }
}

function dibujarVertical(datos, color, contenedor) {
    var marcoVertical = document.createElement("div");
    marcoVertical.className = "bar-container-v border-bottom pb-2";

    var etiquetas = document.createElement("div");
    etiquetas.className = "d-flex justify-content-around mt-2";

    for (var i = 0; i < datos.length; i++) {
        var columna = document.createElement("div");
        columna.className = "d-flex flex-column align-items-center h-100 justify-content-end";

        var textoPorcentaje = document.createElement("span");
        textoPorcentaje.className = "fw-bold small mb-1";
        textoPorcentaje.textContent = datos[i].porcentaje + "%";

        var barra = document.createElement("div");
        barra.className = "bar-v";
        barra.style.height = datos[i].porcentaje + "%";
        barra.style.backgroundColor = color;

        columna.appendChild(textoPorcentaje);
        columna.appendChild(barra);
        marcoVertical.appendChild(columna);

        var etiqueta = document.createElement("div");
        etiqueta.className = "text-center fw-bold small text-truncate";
        etiqueta.style.width = "80px";
        etiqueta.textContent = datos[i].nombre;
        etiquetas.appendChild(etiqueta);
    }

    contenedor.appendChild(marcoVertical);
    contenedor.appendChild(etiquetas);
}

function init() {
    var form = document.getElementById("frmGrafico");

    if (form.addEventListener) {
        form.addEventListener("change", generarGrafico, false);
    } else if (form.attachEvent) {
        form.attachEvent("onchange", generarGrafico);
    }

    generarGrafico();
}

if (window.addEventListener) {
    window.addEventListener("load", init, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", init);
}