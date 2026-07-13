'use strict';
function init() {
 const form = document.getElementById('form');
 form.addEventListener('submit', (event) => {
 event.preventDefault();
 createForm(form.selcontrol.value, form.txtnum.value);
 });
}
function createForm(control, numero) {
 const cantidad = parseInt(numero, 10);
 const formView = document.getElementById('view');
 if (!control) {
 alert('No ha seleccionado el tipo de control');
 return;
 }
 if (!Number.isInteger(cantidad) || cantidad <= 0) {
 alert('Debe ingresar un número de controles válido');
 return;
 }
 let htmlForm = '<div class="row position-relative">';
 htmlForm += '<form name="miform">\n';
 htmlForm += '<h1 class="display-1 text-center">Formulario dinámico</h1>';
 for (let i = 0; i < cantidad; i++) {
 const id = `${control}${i + 1}`;
 switch (control) {
 case 'text':
 case 'password':
 htmlForm += `<input class="form-control" type="${control}" 
name="${id}" required
 placeholder="Ingrese los datos en el campo ${control}" 
/><br>\n`;
 break;
 case 'textarea':
 htmlForm += `<textarea class="form-control" name="${id}" 
required
 placeholder="Ingrese los datos en el campo 
${control}"></textarea><br />\n`;
break;
 case 'checkbox':
 htmlForm += `<div>
 <input class="form-check-input" type="checkbox" 
name="${id}" id="${id}" />
 <label class="form-check-label" for="${id}">${id}</label>
 </div>\n`;
 break;
 case 'radio':
 htmlForm += `<div>
 <label class="form-check-label" for="${id}">
 <input class="form-check-input" type="radio" 
name="${control}" id="${id}" />
 <span>${id}</span>
 </label>
 </div>\n`;
 break;
 case 'file':
 htmlForm += `<label class="custom-file-input file-blue"><br />
 <input class="form-control" type="file" name="${id}" /><br 
/>
 </label><br />\n`;
 break;
 case 'button':
 htmlForm += `<button class="btn btn-primary m-1" 
name="${id}">${id}</button><br />\n`;
 break;
 }
 }
 htmlForm += '</form>\n</div>';
 formView.innerHTML = htmlForm;
}
window.addEventListener('load', init);