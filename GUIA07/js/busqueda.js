// Definir la matriz o arreglo con los datos
var lista = new Array(
    'Aerobic', 'Ajedrez', 'Atletismo', 'Balonmano', 'Béisbol', 'Badminton',
    'Baloncesto', 'Boxeo', 'Ciclismo', 'Equitación', 'Esgrima', 'Footing',
    'Fútbol', 'Gimnasia artística', 'Gimnasia rítmica', 'Judo', 'Lanzamiento de disco',
    'Lanzamiento de jabalina', 'Levantamiento de pesas', 'Lucha', 'Natación',
    'Natación sincronizada', 'Patinaje', 'Pentatlón', 'Remo', 'Salto alto',
    'Salto largo', 'Tenis', 'Tenis de mesa', 'Tiro con arco', 'Voleibol', 'Waterpolo'
);

// Función iniciar desde donde se controlarán los manejadores de evento a utilizar
function iniciar() {
    // Creando el controlador de evento para el evento doble clic sobre los elementos del cuadro de lista
    var comboLista = document.getElementById("lstsports");
    
    // Cargando los datos en el cuadro de lista al cargar la página
    cargarLista();

    if (comboLista.addEventListener) {
        comboLista.addEventListener("dblclick", function() {
            if (this.selectedIndex !== -1) {
                cargarTexto(this.options[this.selectedIndex].text);
            }
        }, false);
    } else if (comboLista.attachEvent) {
        comboLista.attachEvent("ondblclick", function() {
            if (comboLista.selectedIndex !== -1) {
                cargarTexto(comboLista.options[comboLista.selectedIndex].text);
            }
        });
    }

    // Capturando el campo de texto sobre el que se ingresan los deportes mediante pulsación de tecla
    var texto = document.getElementById("txtsport");
    if (texto.addEventListener) {
        texto.addEventListener("keyup", buscar, false);
    } else if (texto.attachEvent) {
        texto.attachEvent("onkeyup", buscar);
    }
}

function cargarLista() {
    // Cargamos el combo
    for (var x = 0; x < lista.length; x++) {
        document.frmsearchsport.lstsports[x] = new Option(lista[x]);
    }
}

function cargarTexto(elemento) {
    if (elemento != null && elemento != undefined && elemento != "") {
        document.frmsearchsport.txtsport.value = elemento;
    }
}

function buscar() {
    limpiarLista();
    // Se obtiene el valor del texto
    var str = document.frmsearchsport.txtsport.value;
    // Crear la expresión regular (filtra coincidencias que comiencen con el texto ingresado)
    var expr = new RegExp("^" + str, "i");
    
    // Recorrer la lista. Si la expresión regular coincide, añade al select
    var y = 0;
    for (var x = 0; x < lista.length; x++) {
        if (expr.test(lista[x])) {
            document.frmsearchsport.lstsports[y] = new Option(lista[x], lista[x]);
            y++;
        }
    }
}

function limpiarLista() {
    for (var x = document.frmsearchsport.lstsports.length - 1; x >= 0; x--) {
        document.frmsearchsport.lstsports[x] = null;
    }
}

// Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}