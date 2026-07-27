document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos todos los enlaces con la clase 'external-link'
  const links = document.querySelectorAll(".external-link");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      // 1. Detenemos la navegación automática por defecto
      event.preventDefault();

      const url = link.getAttribute("href");
      // Extraemos solo el nombre visible para mostrarlo en el mensaje
      const siteName = link.querySelector("strong") ? link.querySelector("strong").innerText : url;

      // 2. Pedimos confirmación al usuario
      const confirmVisit = confirm(`¿Deseas salir de este sitio e ir a "${siteName}"?\n\nURL: ${url}`);

      // 3. Si confirma, se abre en una pestaña nueva
      if (confirmVisit) {
        window.open(url, "_blank");
      }
      // Si cancela, no se ejecuta nada y se queda en la página actual
    });
  });
});