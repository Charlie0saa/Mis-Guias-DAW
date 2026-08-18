// Clase Venta con atributos y propiedad detalle
class Venta {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = parseInt(cantidad, 10);
        // Atributo detalle: multiplicación del precio venta y la cantidad
        this.detalle = this.precio * this.cantidad;
    }

    getNombre() {
        return this.nombre;
    }

    getPrecio() {
        return this.precio;
    }

    getCantidad() {
        return this.cantidad;
    }

    getDetalle() {
        return this.detalle;
    }
}

// Arreglo para almacenar la lista de objetos Venta
const listaVentas = new Array();

// Función para registrar los datos del producto en un objeto Venta
function agregarProducto() {
    var form = document.frmVenta;
    
    var nombre = form.txtProducto.value;
    var precio = form.txtPrecio.value;
    var cantidad = form.txtCantidad.value;

    if (nombre !== "" && precio !== "" && cantidad !== "") {
        // Instancia de la clase Venta
        var nuevaVenta = new Venta(nombre, precio, cantidad);
        
        // Agregar objeto al arreglo
        listaVentas.push(nuevaVenta);
        
        // Actualizar la vista de la tabla y resetear el formulario
        renderizarTabla();
        form.reset();
        form.txtProducto.focus();
    }
}

// Recorre la lista de productos y actualiza la tabla HTML y el total
function renderizarTabla() {
    var tbBody = document.getElementById("tbDetalleVenta");
    var lblTotal = document.getElementById("lblTotalVenta");
    var htmlTabla = "";
    var totalVenta = 0;

    let id = 1;
    let posicion = 0;

    // Recorrer la lista de productos agregados a la venta
    listaVentas.forEach(element => {
        htmlTabla += "<tr>\n";
        htmlTabla += "\t<td>" + id++ + "</td>\n";
        htmlTabla += "\t<td>" + element.getNombre() + "</td>\n";
        htmlTabla += "\t<td>$" + element.getPrecio().toFixed(2) + "</td>\n";
        htmlTabla += "\t<td>" + element.getCantidad() + "</td>\n";
        htmlTabla += "\t<td>$" + element.getDetalle().toFixed(2) + "</td>\n";
        htmlTabla += "\t<td><button type='button' onclick='eliminarProducto(" + posicion++ + ")' class='btn btn-danger btn-sm'>Eliminar</button></td>\n";
        htmlTabla += "</tr>\n";

        // Sumar los valores del atributo detalle
        totalVenta += element.getDetalle();
    });

    tbBody.innerHTML = htmlTabla;
    lblTotal.innerHTML = "$" + totalVenta.toFixed(2);
}

// Función para eliminar un registro del arreglo
function eliminarProducto(posicion) {
    var confirmacion = confirm("¿Desea eliminar este producto de la venta?");
    if (confirmacion) {
        listaVentas.splice(posicion, 1);
        renderizarTabla();
    }
}

// Registrar eventos
function iniciar() {
    var form = document.getElementById("frmVenta");
    
    if (form.addEventListener) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            agregarProducto();
        }, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", function(e) {
            e.returnValue = false;
            agregarProducto();
        });
    }
}

// Asociar inicio al evento load de la página
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}