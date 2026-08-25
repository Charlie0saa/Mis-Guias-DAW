function iniciar() {
    var classname, tag = "";
    var btnfind = document.getElementById("btnSend");

    if (btnfind.addEventListener) {
        btnfind.addEventListener("click", function() {
            classname = document.frmclass.txtname.value;
            tag = document.frmclass.selelement[document.frmclass.selelement.selectedIndex].value;

            if (classname.trim() === "" || tag === "") {
                alert("Por favor ingrese una clase y seleccione una etiqueta válida.");
                return;
            }

            alert("Se han encontrado " + findClassInElements(classname, tag) + " elementos " + tag.toString() + " con la clase " + classname);
        }, false);
    } else if (btnfind.attachEvent) {
        btnfind.attachEvent("onclick", function() {
            classname = document.frmclass.txtname.value;
            tag = document.frmclass.selelement[document.frmclass.selelement.selectedIndex].value;

            if (classname.trim() === "" || tag === "") {
                alert("Por favor ingrese una clase y seleccione una etiqueta válida.");
                return;
            }

            alert("Se han encontrado " + findClassInElements(classname, tag) + " elementos " + tag.toString() + " con la clase " + classname);
        });
    }
}

function findClassInElements(className, type) {
    // Detectar el elemento sobre el que se realizará la búsqueda de la clase (un tipo específico o todos '*').
    var elems = document.getElementsByTagName(type || "*");
    
    // Crear el patrón dinámico de RegExp para validar si el elemento contiene la clase dada.
    var regex = new RegExp("(^|\\s)" + className + "(\\s|$)");
    var results = new Array();

    // Recorrer los elementos comprobando con test() sobre className.
    for (var i = 0, length = elems.length; i < length; i++) {
        if (regex.test(elems[i].className)) {
            results.push(elems[i]);
        }
    }

    // Devuelve el total encontrado
    return results.length;
}

// Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}