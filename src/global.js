
function abrirModal() {
  const proyecto = infoProyectos.find(proyecto => proyecto.id === this.id);

  /* Modal */
  const modal = document.createElement("section");
  modal.classList.add("modal");
  modal.id = proyecto.id;

  /* Cabecera */
  const cabeceraModal = document.createElement("div");
  cabeceraModal.classList.add("cabeceraModal");

  const cerrar = document.createElement("i");
  cerrar.classList.add("fa", "fa-times", "cerrarModal");
  cabeceraModal.appendChild(cerrar);

  /* Cuerpo */
  const cuerpoModal = document.createElement("div");
  cuerpoModal.classList.add("cuerpoModal");

  const cuerpoModalTexto = document.createElement("div");
  cuerpoModalTexto.classList.add("cuerpoModalTexto");
  cuerpoModalTexto.innerHTML = ` <h2>${proyecto.titulo}</h2>
      <p>${proyecto.texto}</p>`;

  const cuerpoModalGaleria = document.createElement("div");
  cuerpoModalGaleria.classList.add("cuerpoModalGaleria");

  proyecto.imagenes.forEach(imagen => {
    let img = document.createElement("img");
    img.src = imagen.src;
    img.alt = imagen.alt;
    cuerpoModalGaleria.appendChild(img);

    if (imagen.pie) {
      let p = document.createElement("p");
      p.classList.add("pieFoto");
      p.textContent = imagen.pie;
      cuerpoModalGaleria.appendChild(p);
    }
  });

  /* Footer */
  const footerModal = document.createElement("div");
  footerModal.classList.add("footerModal");

  /* Append todo lo creado  */
  cuerpoModal.appendChild(cuerpoModalTexto);
  cuerpoModal.appendChild(cuerpoModalGaleria);
  modal.appendChild(cabeceraModal);
  modal.appendChild(cuerpoModal);
  modal.appendChild(footerModal);
  document.body.appendChild(modal);

  // Cerrar el modal
  cerrar.addEventListener("click", () => {
    modal.remove();
  });

  // Cerrar el modal si se hace click fuera de el
  window.onclick = e => {
    if (e.target == modal) {
      modal.remove();
    }
  };
}

/* Click en miniatura abre modal */
const miniaturas = document.querySelectorAll(".contenedorMiniatura");
miniaturas.forEach(miniatura => {
  miniatura.addEventListener("click", abrirModal);
});

/* Navegación */
const botonHamburguesa = document.getElementById("botonHamburguesa");
const botonCerrar = document.getElementById("botonCerrar");
const menuLateral = document.getElementById("menuLateral");
const linksMobile = document.querySelectorAll("#menuLateral a");

function toggleNav() {
  menuLateral.classList.toggle("abierto");
}

botonHamburguesa.addEventListener("click", toggleNav);
botonCerrar.addEventListener("click", toggleNav);

linksMobile.forEach(link => {
  link.addEventListener("click", cerrarNav);
});
