import { infoProyectos } from "./info-proyectos.js";

// Template modal
const templateModal = /* html */ `
  <div class="contenedorCerrar">
    <i class="fa fa-times" id="cerrarModal"></i>
  </div>

  <div class="modal">
    <div class="cuerpoModalTexto"></div>
    <div class="cuerpoModalGaleria"></div>
  </div>

  <nav class="navigation">
    <i class="fas fa-chevron-left" id="prev"></i>
    <section class="steps"></section>
    <i class="fas fa-chevron-right" id="next"></i>
  </nav>`;

//
// Insertar Template modal
const contenedorModal = document.querySelector(".contenedorModal");
contenedorModal.innerHTML = templateModal;

//
// Variables globales
const trabajos = document.querySelector('[id^="trabajos"]');
const area = trabajos.id.split("-").pop();
const proyectos = infoProyectos.filter(proyecto => proyecto.area === area);

//
// Creamos contador
const contador = {
  proyectoActual: 0,
  min: 0,
  max: proyectos.length - 1,
};

const cerrarModal = document.querySelector("#cerrarModal");
cerrarModal.addEventListener("click", toggleModal);

//
// Click en miniatura abre modal
const miniaturas = document.querySelectorAll(".contenedorMiniatura");
miniaturas.forEach(miniatura => {
  miniatura.addEventListener("click", toggleModal);
  miniatura.addEventListener("click", cargarInfoModal);
});

//
// Cargar proyecto previo/siguiente
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
prev.addEventListener("click", cargarInfoModal);
next.addEventListener("click", cargarInfoModal);

//
// Comprobamos si es el primer/último proyecto
function isEnd(num) {
  if (num == contador.min) {
    prev.classList.add("oculto");
    prev.disabled = true;
    return;
  }

  if (num == contador.max) {
    next.classList.add("oculto");
    next.disabled = true;
    return;
  }

  if (num > contador.min || num < contador.max) {
    prev.disabled = false;
    next.disabled = false;
    prev.classList.remove("oculto");
    next.classList.remove("oculto");
    return;
  }
}

function cargarInfoModal(e) {
  let proyecto;

  // Definimos en que proyecto estamos
  if (this.id == "next") {
    contador.proyectoActual++;
    proyecto = proyectos[contador.proyectoActual];
  } else if (this.id == "prev") {
    contador.proyectoActual--;
    proyecto = proyectos[contador.proyectoActual];
  } else {
    proyecto = proyectos.find(proyecto => proyecto.id === this.id);
    contador.proyectoActual = proyectos.indexOf(proyecto);
  }

  isEnd(contador.proyectoActual);

  // Texto modal
  const cuerpoModalTexto = document.querySelector(".cuerpoModalTexto");
  cuerpoModalTexto.innerHTML = /* html */ `
    <h2>${proyecto.titulo}</h2>
    <p>${proyecto.texto}</p>
  `;

  // Galería modal
  const cuerpoModalGaleria = document.querySelector(".cuerpoModalGaleria");
  cuerpoModalGaleria.innerHTML = proyecto.imagenes
    .map(imagen => {
      // Solo imágen
      if (!imagen.video && !imagen.caption) {
        return /*html*/ `
        <img src="${imagen.src}" alt="${imagen.alt}"/>
        `;
      }
      // Imágen y caption
      else if (!imagen.video && imagen.caption) {
        return /*html*/ `
        <img src="${imagen.src}" alt="${imagen.alt}"/>
        <p class="pieFoto">${imagen.caption}</p>
        `;
      }
      // Solo video
      else if (imagen.video && !imagen.caption) {
        return /*html*/ `
        <video controls>
          <source src="${imagen.src}" type="video/mp4" />
          <!-- <source src="./images/video_buganvillas.webm" type="video/webm"> -->
        </video>
        `;
        // Video y caption
      } else if (imagen.video && imagen.caption) {
        return /*html*/ `
        <video controls>
          <source src="${imagen.src}" type="video/mp4" />
          <source src="${imagen.src2}" type="video/webm">
        </video>
        <p class="pieFoto">${imagen.caption}</p>
        `;
      }
    })
    .join("");

  // Steps
  const steps = document.querySelector(".steps");
  steps.innerHTML = [...miniaturas]
    .map(miniatura => {
      if (miniatura.id === proyecto.id) {
        return /* html */ `<div class="step stepActivo"></div>`;
      } else {
        return /* html */ `<div class="step"></div>`;
      }
    })
    .join("");
}

function toggleModal() {
  contenedorModal.classList.toggle("visible");
}

isEnd(contador.pasoActual);
