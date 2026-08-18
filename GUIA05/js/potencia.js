// Definición de la clase mediante función constructora
function Potencia(baseVal, potenciaVal) {
    // Las 3 propiedades requeridas
    this.base = parseFloat(baseVal);
    this.potencia = parseFloat(potenciaVal);
    this.resultado = 0;

    // Método 1: Retorna el cálculo de la potencia utilizando las propiedades
    this.calcular = function() {
        this.resultado = Math.pow(this.base, this.potencia);
        return this.resultado;
    };

    // Método 2: Muestra el resultado en la página mediante innerHTML
    this.mostrar = function(elementId) {
        var contenedor = document.getElementById(elementId);
        if (contenedor) {
            contenedor.classList.remove("d-none");
            contenedor.innerHTML = "El resultado de elevar <strong>" + this.base + 
                                   "</strong> a la potencia <strong>" + this.potencia + 
                                   "</strong> es: <strong>" + this.calcular() + "</strong>";
        }
    };
}

// Función encargada de registrar los eventos
function iniciar() {
    var formulario = document.getElementById("frmPotencia");

    function obtenerDatos(e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        
        var baseInput = document.getElementById("txtBase").value;
        var expInput = document.getElementById("txtExponente").value;

        if (baseInput !== "" && expInput !== "") {
            // Instancia del objeto pasando los dos argumentos a la función/clase
            var objPotencia = new Potencia(baseInput, expInput);
            
            // Llamada al método para mostrar el resultado
            objPotencia.mostrar("resPotencia");
        }
    }

    if (formulario.addEventListener) {
        formulario.addEventListener("submit", obtenerDatos, false);
    } else if (formulario.attachEvent) {
        formulario.attachEvent("onsubmit", obtenerDatos);
    }
}

// Asociar la inicialización al evento load
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}