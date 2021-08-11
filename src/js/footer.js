export const footer =
  /* html */
  `<p>Made with <i class="fas fa-heart"></i> by me</p>
   <p>&#169; Héctor Martín López ${new Date().getFullYear()}</p>`;

/* Insertar FOOTER */
const footerContenedor = document.querySelector("#footer");
footerContenedor.innerHTML = footer;
