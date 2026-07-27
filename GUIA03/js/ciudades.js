function iniciar() {

    // Elementos
    var selcountry = document.getElementById("country");
    var addcity = document.getElementById("btnagregar");

    // Arreglo asociativo
    var cities = [];

    cities["Italia"] = ["Roma", "Turín", "Milán", "Venecia", "Verona"];
    cities["Francia"] = ["París", "Lyon", "Niza", "Mónaco"];
    cities["España"] = ["Madrid", "Barcelona", "Valencia", "Sevilla"];
    cities["Estados Unidos"] = ["Washington", "Florida", "San Francisco", "New York", "Houston"];

    // Cambiar país
    selcountry.onchange = function () {

        addOptions(
            cities[this.options[this.selectedIndex].text],
            document.testform.city
        );

    };

    // Agregar ciudad
    addcity.onclick = function () {

        addCity(
            cities[document.testform.country.options[document.testform.country.selectedIndex].text],
            document.testform.city
        );

    };

}

// Elimina las opciones
function removeOptions(optionMenu) {

    optionMenu.options.length = 0;

}

// Agrega nuevas opciones
function addOptions(optionList, optionMenu) {

    removeOptions(optionMenu);

    for (var i = 0; i < optionList.length; i++) {

        optionMenu[i] = new Option(optionList[i], optionList[i]);

    }

}

// Agrega una ciudad
function addCity(optionList, optionMenu) {

    var newcity;

    do {

        newcity = prompt("Ingrese la ciudad que desea agregar:");

    } while (newcity == null || newcity.trim() === "");

    optionList.push(newcity);

    addOptions(optionList, optionMenu);

}

window.onload = iniciar;