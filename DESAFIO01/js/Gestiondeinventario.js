
//a. Retorna un objeto literal con nombre, precio y cantidad
function crearProducto(nombre, precio, cantidad) {
  return {
    nombre: nombre,
    precio: parseFloat(precio),
    cantidad: parseInt(cantidad)
  };
}
// b. Calcula y retorna el subtotal de un producto
function getValorTotal(producto) {
  return producto.precio * producto.cantidad;
}
// c. Retorna el formato descriptivo solicitado[cite: 6]
function getDescripcion(producto) {
  return `Nombre: ${producto.nombre} | Precio: $${producto.precio.toFixed(2)} | Stock: ${producto.cantidad} unidades`;
}


// a. Arreglo global de productos[cite: 6]
let productos = [];

// b. Agrega producto al arreglo[cite: 6]
function agregarProducto(producto) {
  productos.push(producto);
}

// c. Retorna el arreglo completo[cite: 6]
function obtenerProductos() {
  return productos;
}
// d. Recorre con un ciclo for/while (sin usar reduce) para sumar el total[cite: 6]
function calcularValorInventario() {
  let total = 0;
  for (let i = 0; i < productos.length; i++) {
    total += getValorTotal(productos[i]); // Suma el valor de cada producto[cite: 6]
  }
  return total;
}


// Elementos del DOM[cite: 6]
const formProducto = document.getElementById("formProducto");
const inputNombre = document.getElementById("nombre");
const inputPrecio = document.getElementById("precio");
const inputCantidad = document.getElementById("cantidad");
const mensajeError = document.getElementById("mensajeError");
const listaProductos = document.getElementById("listaProductos");
const valorTotalInventario = document.getElementById("valorTotalInventario");

// Requerimiento 3.c: Validación en tiempo real con event onchange[cite: 6]
function validarCampoNumerico(input) {
  const valor = parseFloat(input.value);
  // Revisa si es número y mayor a cero[cite: 6]
  if (isNaN(valor) || valor <= 0) {
    input.classList.add("is-invalid"); // Marca campo rojo en Bootstrap[cite: 6]
  } else {
    input.classList.remove("is-invalid");
  }
}

// Requerimiento 3.b: Manejo del evento submit del formulario[cite: 6]
formProducto.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que la página se recargue[cite: 6]

  // Requerimiento 3.d: Validación final recorriendo los campos con un ciclo for[cite: 6]
  const campos = [inputNombre, inputPrecio, inputCantidad];
  let hayError = false;
  let textoError = "";
   // Ocultamos mensajes previos de error
  mensajeError.classList.add("d-none");
  mensajeError.innerHTML = "";
  // Ciclo obligatorio exigido por la rúbrica para verificar validez[cite: 6]
  for (let i = 0; i < campos.length; i++) {
    const campo = campos[i];
    const valor = campo.value.trim();

    // Verificación 1: Que no esté vacío[cite: 6]
    if (valor === "") {
      hayError = true;
      textoError = "Todos los campos son obligatorios.";
      campo.classList.add("is-invalid");
      break;
    }
    // Verificación 2: Precio y Cantidad deben ser números válidos > 0[cite: 6]
    if (campo.id === "precio" || campo.id === "cantidad") {
      const num = parseFloat(valor);
      if (isNaN(num) || num <= 0) {
        hayError = true;
        textoError = "El precio y la cantidad deben ser valores numéricos mayores a cero.";
        campo.classList.add("is-invalid");
        break;
      }
    }
    // Si todo está bien en este campo, se remueve la marca de error
    campo.classList.remove("is-invalid");
  }
// Si el ciclo detectó un error, muestra la alerta Bootstrap sin usar alert()[cite: 6]
  if (hayError) {
    mensajeError.textContent = textoError;
    mensajeError.classList.remove("d-none");
    return; // Cancela el registro
  }
  // Si todo está correcto:
  // 1. Crear producto[cite: 6]
  const nuevoProducto = crearProducto(
    inputNombre.value.trim(),
    inputPrecio.value,
    inputCantidad.value
    );
     // 2. Agregar al arreglo[cite: 6]
  agregarProducto(nuevoProducto);

  // 3. Renderizar vista[cite: 6]
  renderizarProductos();
  // 4. Limpiar el formulario tras registro exitoso (Requerimiento 3.e)[cite: 6]
  formProducto.reset();
  
  // Limpia estilos de invalidación que hayan quedado[cite: 6]
  inputNombre.classList.remove("is-invalid");
  inputPrecio.classList.remove("is-invalid");
  inputCantidad.classList.remove("is-invalid");
});
// Requerimiento 4: Renderizar Productos[cite: 6]
function renderizarProductos() {
  const lista = obtenerProductos(); // Obtiene el arreglo[cite: 6]
  listaProductos.innerHTML = ""; // Limpia la lista del HTML

  // Requerimiento 4.c: Si el arreglo está vacío[cite: 6]
  if (lista.length === 0) {
    listaProductos.innerHTML = '<li class="list-group-item text-muted">No hay productos aún.</li>';
    valorTotalInventario.textContent = "Valor total del inventario: $0.00";
    return;
  }
   // Requerimiento 4.b: Recorrer arreglo con ciclo (for) para pintar cada producto[cite: 6]
  for (let i = 0; i < lista.length; i++) {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = getDescripcion(lista[i]); // Llama a getDescripcion()[cite: 6]
    listaProductos.appendChild(li);
  }

  // Requerimiento 4.d: Calcular y mostrar el valor total[cite: 6]
  const total = calcularValorInventario();
  valorTotalInventario.textContent = `Valor total del inventario: $${total.toFixed(2)}`;
}