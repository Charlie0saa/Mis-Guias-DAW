// Arreglo de objetos con 80 palabras en español y sus definiciones
var diccionario = [
    { palabra: "Abnegación", definicion: "f. Sacrificio voluntario de los afectos o intereses personales en bien del prójimo." },
    { palabra: "Báculo", definicion: "m. Bastón alto, con la parte superior curva, que usan los obispos como símbolo de su autoridad." },
    { palabra: "Caballo", definicion: "m. Mamífero perisodáctilo, de cuello y cola poblados de cerdas largas, empleado como cabalgadura." },
    { palabra: "Cabaña", definicion: "f. Construcción rústica hecha con troncos o cañas, cubierta de ramas o paja." },
    { palabra: "Cabina", definicion: "f. Recinto pequeño destinado a ciertos usos, como hablar por teléfono o alojar el pasaje de un avión." },
    { palabra: "Cadáver", definicion: "m. Cuerpo muerto de una persona o de un animal." },
    { palabra: "Cadena", definicion: "f. Serie de eslabones enlazados entre sí, normalmente de metal." },
    { palabra: "Cadmio", definicion: "m. Elemento químico metálico, blanco, dúctil y maleable, semejante al zinc." },
    { palabra: "Cuarto", definicion: "adj. Que sigue al tercero en orden. m. Habitación de una casa." },
    { palabra: "Cuarzo", definicion: "m. Mineral formado por dióxido de silicio, muy duro y transparente o translúcido." },
    { palabra: "Culpa", definicion: "f. Falta que se comete a sabiendas o por negligencia. Imputación de un delito." },
    { palabra: "Cultivo", definicion: "m. Acción de cultivar la tierra o las plantas para obtener frutos." },
    { palabra: "Cultura", definicion: "f. Conjunto de modos de vida, costumbres y conocimientos de una época o grupo social." },
    { palabra: "Dádiva", definicion: "f. Cosa que se da gratuitamente con ánimo de hacer un beneficio a alguien." },
    { palabra: "Efímero", definicion: "adj. Que tiene la duración de un solo día o que es de muy corta duración." },
    { palabra: "Fascinación", definicion: "f. Atracción irresistible que ejerce algo o alguien sobre una persona." },
    { palabra: "Galaxia", definicion: "f. Conjunto de una gran cantidad de estrellas, gas y polvo que forman un sistema en el espacio." },
    { palabra: "Hábito", definicion: "m. Modo especial de proceder o conducirse adquirido por repetición de actos iguales." },
    { palabra: "Idiosincrasia", definicion: "f. Rasgos y carácter propios y distintivos de un individuo o colectividad." },
    { palabra: "Júbilo", definicion: "m. Viva alegría que se manifiesta con signos exteriores." },
    { palabra: "Kilogramo", definicion: "m. Unidad básica de masa del Sistema Internacional, equivalente a mil gramos." },
    { palabra: "Luminiscencia", definicion: "f. Propiedad de emitir luz sin elevar la temperatura." },
    { palabra: "Melancolía", definicion: "f. Tendencia a la tristeza permanente y sin causa aparente." },
    { palabra: "Nostalgia", definicion: "f. Pena de verse ausente de la patria o de los amigos y de la familia." },
    { palabra: "Ñandú", definicion: "m. Ave corredora del tamaño de la avestruz, propia de América del Sur." },
    { palabra: "Oasis", definicion: "m. Sitio poblado de vegetación aislado en un desierto." },
    { palabra: "Pacifismo", definicion: "m. Doctrina que busca mantener la paz entre las naciones y abolir la guerra." },
    { palabra: "Quimera", definicion: "f. Aquello que se propone a la imaginación como posible o verdadero, no siéndolo." },
    { palabra: "Resiliencia", definicion: "f. Capacidad de adaptación de un ser vivo frente a un agente perturbador o una situación adversa." },
    { palabra: "Sublime", definicion: "adj. Excelente, excelso, eminente, de elevado valor moral o estético." },
    { palabra: "Taciturno", definicion: "adj. Callado, silencioso, que le molesta hablar." },
    { palabra: "Utopía", definicion: "f. Plan, proyecto, doctrina o sistema deseable pero de muy difícil o imposible realización." },
    { palabra: "Vanguardia", definicion: "f. Parte de una fuerza armada que avanza a la cabeza. Movimiento renovador." },
    { palabra: "Wafle", definicion: "m. Pasta crujiente cocida entre dos planchas metálicas calientes." },
    { palabra: "Xenofobia", definicion: "f. Rechazo u odio a los extranjeros o a lo procedente de otros países." },
    { palabra: "Yacimiento", definicion: "m. Sitio donde se halla naturalmente una roca, un mineral o fósiles." },
    { palabra: "Zafiro", definicion: "m. Mineral cristalizado de color azul transparente, variedad del corindón." },
    { palabra: "Anhelo", definicion: "m. Deseo vehemente de conseguir algo." },
    { palabra: "Bravura", definicion: "f. Esfuerzo, energía y valor de una persona o de un animal." },
    { palabra: "Clepsidra", definicion: "f. Reloj de agua usado por los antiguos." },
    { palabra: "Desdén", definicion: "m. Indiferencia y desapego que denotan menosprecio." },
    { palabra: "Enigma", definicion: "m. Enunciado de sentido artificiosamente encubierto para que sea difícil de entender." },
    { palabra: "Furtivo", definicion: "adj. Que se hace a escondidas o con disimulo." },
    { palabra: "Generosidad", definicion: "f. Inclinación a dar a los demás más de lo que corresponde o se espera." },
    { palabra: "Hipótesis", definicion: "f. Suposición de algo posible o imposible para sacar de ello una consecuencia." },
    { palabra: "Ilustración", definicion: "f. Movimiento filosófico y cultural del siglo XVIII que acentuó el predominio de la razón." },
    { palabra: "Jaula", definicion: "f. Caja hecha con barrotes para encerrar animales." },
    { palabra: "Kiosco", definicion: "m. Construcción pequeña instalada en la calle o espacio público para vender productos." },
    { palabra: "Lógica", definicion: "f. Ciencia que expone las leyes, modos y formas de las proposiciones humanas." },
    { palabra: "Magnánimo", definicion: "adj. Que tiene nobleza de espíritu y grandeza de corazón." },
    { palabra: "Nébula", definicion: "f. Masa de gas y polvo cósmico en el espacio exterior." },
    { palabra: "Ñapa", definicion: "f. Propina o añadidura con que el vendedor obsequia al comprador." },
    { palabra: "Odisea", definicion: "f. Viaje largo en el que abundan las aventuras o contratiempos." },
    { palabra: "Pragmático", definicion: "adj. Que da preferencia al valor práctico de las cosas frente a lo teórico." },
    { palabra: "Quijote", definicion: "m. Hombre que antepone sus ideales al provecho propio y obra de forma desinteresada." },
    { palabra: "Rigor", definicion: "m. Severidad o exactitud estricta en el cumplimiento de algo." },
    { palabra: "Sobriedad", definicion: "f. Cualidad de ser moderado y ausente de adornos superfluos." },
    { palabra: "Tolerancia", definicion: "f. Respeto hacia las ideas, creencias o prácticas de los demás cuando son diferentes." },
    { palabra: "Unanimidad", definicion: "f. Coincidencia o acuerdo de todos los miembros de un grupo." },
    { palabra: "Vastedad", definicion: "f. Cualidad de ser muy extenso o amplio." },
    { palabra: "Xilófono", definicion: "m. Instrumento musical de percusión formado por láminas de madera." },
    { palabra: "Yelmo", definicion: "m. Parte de la armadura antigua que resguardaba la cabeza y el rostro." },
    { palabra: "Zodíaco", definicion: "m. Zona del celeste por cuyo centro pasa la eclíptica." },
    { palabra: "Altruismo", definicion: "m. Diligencia en procurar el bien ajeno aun a costa del propio." },
    { palabra: "Bitácora", definicion: "f. Libro en que se apunta el rumbo, velocidad y demás incidentes de la navegación." },
    { palabra: "Convicción", definicion: "f. Convencimiento pleno y firme acerca de algo." },
    { palabra: "Diligencia", definicion: "f. Cuidado, prontitud y agilidad en ejecutar una cosa." },
    { palabra: "Empatía", definicion: "f. Capacidad de identificarse con alguien y compartir sus sentimientos." },
    { palabra: "Filantropía", definicion: "f. Amor a la especie humana y a todo lo que a ella concierne." },
    { palabra: "Gratitud", definicion: "f. Sentimiento que nos obliga a estimar el beneficio o favor que se nos ha hecho." },
    { palabra: "Honradez", definicion: "f. Rectitud de ánimo, integridad en el obrar." },
    { palabra: "Inflexibilidad", definicion: "f. Incapacidad para doblarse o ser modificado." },
    { palabra: "Justicia", definicion: "f. Principio moral que lleva a dar a cada uno lo que le corresponde." },
    { palabra: "Lealtad", definicion: "f. Cumplimiento de lo que exigen las leyes de la fidelidad y del honor." },
    { palabra: "Nobleza", definicion: "f. Conjunto de los nobles de un Estado o provincia. Calidad de noble." },
    { palabra: "Optimismo", definicion: "f. Propensión a ver y juzgar las cosas en su aspecto más favorable." },
    { palabra: "Perseverancia", definicion: "f. Firmeza y constancia en la ejecución de los propósitos." },
    { palabra: "Prudencia", definicion: "f. Templanza y moderación en las acciones para evitar un daño o peligro." },
    { palabra: "Sabiduría", definicion: "f. Grado más elevado del conocimiento y la experiencia." },
    { palabra: "Templanza", definicion: "f. Moderación, sobriedad y continencia en los deseos o apetitos." }
];

function iniciar() {
    var txtPalabra = document.getElementById("txtpalabra");
    var lstPalabras = document.getElementById("lstpalabras");
    var btnMostrar = document.getElementById("btnmostrar");

    // Cargar todas las palabras inicialmente
    cargarLista(diccionario);

    // Evento keyup para filtrar con expresiones regulares a medida que se escribe
    if (txtPalabra.addEventListener) {
        txtPalabra.addEventListener("keyup", buscar, false);
    } else if (txtPalabra.attachEvent) {
        txtPalabra.attachEvent("onkeyup", buscar);
    }

    // Evento doble clic en el cuadro de lista
    if (lstPalabras.addEventListener) {
        lstPalabras.addEventListener("dblclick", mostrarDefinicion, false);
    } else if (lstPalabras.attachEvent) {
        lstPalabras.attachEvent("ondblclick", mostrarDefinicion);
    }

    // Evento al presionar el botón
    if (btnMostrar.addEventListener) {
        btnMostrar.addEventListener("click", mostrarDefinicion, false);
    } else if (btnMostrar.attachEvent) {
        btnMostrar.attachEvent("onclick", mostrarDefinicion);
    }
}

function cargarLista(arregloPalabras) {
    limpiarLista();
    var combo = document.getElementById("lstpalabras");
    
    for (var i = 0; i < arregloPalabras.length; i++) {
        combo.options[i] = new Option(arregloPalabras[i].palabra, arregloPalabras[i].palabra);
    }
}

function limpiarLista() {
    var combo = document.getElementById("lstpalabras");
    for (var i = combo.length - 1; i >= 0; i--) {
        combo.options[i] = null;
    }
}

function buscar() {
    var str = document.getElementById("txtpalabra").value;
    
    // Crear la expresión regular dinámicamente que empiece por la cadena escrita ("i" es insensible a mayúsculas)
    var expr = new RegExp("^" + str, "i");
    
    // Filtrar los elementos del diccionario que coincidan con la expresión regular
    var coincidencias = [];
    for (var i = 0; i < diccionario.length; i++) {
        if (expr.test(diccionario[i].palabra)) {
            coincidencias.push(diccionario[i]);
        }
    }
    
    // Recargar el select con las coincidencias encontradas
    cargarLista(coincidencias);
}

function mostrarDefinicion() {
    var combo = document.getElementById("lstpalabras");
    var txtDefinicion = document.getElementById("txtdefinicion");

    if (combo.selectedIndex === -1) {
        alert("Por favor, seleccione una palabra de la lista.");
        return;
    }

    var palabraSeleccionada = combo.options[combo.selectedIndex].text;

    // Buscar la definición exacta dentro del arreglo
    for (var i = 0; i < diccionario.length; i++) {
        if (diccionario[i].palabra === palabraSeleccionada) {
            txtDefinicion.value = diccionario[i].palabra + ":\n\n" + diccionario[i].definicion;
            break;
        }
    }
}

// Asociar la función iniciar al evento load de la ventana
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}