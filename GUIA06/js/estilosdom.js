// Función auxiliar para obtener la hoja de estilos de nuestro archivo CSS
function getCustomStyleSheet() {
    var sheets = document.styleSheets;
    for (var i = 0; i < sheets.length; i++) {
        if (sheets[i].href && sheets[i].href.indexOf("estilosdom.css") !== -1) {
            return sheets[i];
        }
    }
    // Si no se encuentra por nombre, retorna la última vinculada
    return sheets[sheets.length - 1];
}

function init() {
    var btnenabled = document.getElementById("enabled");
    var btndisabled = document.getElementById("disabled");
    var btnchange = document.getElementById("change");
    var btnremove = document.getElementById("remove");
    var btnadd = document.getElementById("add");

    // Habilitar reglas de estilo
    if (btnenabled.addEventListener) {
        btnenabled.addEventListener("click", function() {
            getCustomStyleSheet().disabled = false;
        }, false);
    } else if (btnenabled.attachEvent) {
        btnenabled.attachEvent("onclick", function() {
            getCustomStyleSheet().disabled = false;
        });
    }

    // Deshabilitar reglas de estilo
    if (btndisabled.addEventListener) {
        btndisabled.addEventListener("click", function() {
            getCustomStyleSheet().disabled = true;
        }, false);
    } else if (btndisabled.attachEvent) {
        btndisabled.attachEvent("onclick", function() {
            getCustomStyleSheet().disabled = true;
        });
    }

    // Modificar regla
    if (btnchange.addEventListener) {
        btnchange.addEventListener("click", modifyRule, false);
    } else if (btnchange.attachEvent) {
        btnchange.attachEvent("onclick", modifyRule);
    }

    // Eliminar regla
    if (btnremove.addEventListener) {
        btnremove.addEventListener("click", deleteRule, false);
    } else if (btnremove.attachEvent) {
        btnremove.attachEvent("onclick", deleteRule);
    }

    // Añadir regla
    if (btnadd.addEventListener) {
        btnadd.addEventListener("click", addRule, false);
    } else if (btnadd.attachEvent) {
        btnadd.attachEvent("onclick", addRule);
    }
}

function modifyRule() {
    var styleSheet = getCustomStyleSheet();
    var rules = styleSheet.cssRules || styleSheet.rules;

    if (rules && rules.length > 0) {
        rules[0].style.color = 'purple';
        rules[0].style.fontSize = '30pt';
        rules[0].style.backgroundColor = 'gold';
    }
}

function deleteRule() {
    var styleSheet = getCustomStyleSheet();
    var rules = styleSheet.cssRules || styleSheet.rules;

    if (rules && rules.length > 0) {
        if (styleSheet.deleteRule) {
            styleSheet.deleteRule(0);
        } else if (styleSheet.removeRule) {
            styleSheet.removeRule(0);
        }
    }
}

function addRule() {
    var styleSheet = getCustomStyleSheet();
    var rules = styleSheet.cssRules || styleSheet.rules;
    var index = rules ? rules.length : 0;

    if ("insertRule" in styleSheet) {
        styleSheet.insertRule('h3 { text-align: center; font-family: "Century Gothic"; font-size: 18pt; color: Brown; }', index);
    } else if ("addRule" in styleSheet) {
        styleSheet.addRule('h3', 'text-align: center; font-family: "Century Gothic"; font-size: 18pt; color: Brown;', index);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", init, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", init);
}