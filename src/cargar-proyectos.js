import { infoProyectos } from "./info-proyectos.js";

function cargarProyectos() {
  // const area = trabajos.dataset.area;
  const area = trabajos.id.split("-").pop();
  const proyectos = infoProyectos.filter(proyecto => proyecto.area === area);
  // const contenedor = document.querySelector(`[data-area="${area}"]`);

  const html = proyectos
    .map(proyecto => {
      // return /* html */ `
      // <div class="contenedorMiniatura" id="${proyecto.id}" data-aos="fade-up" data-aos-offset="200" >
      //   <img src="${proyecto.miniatura}"/>
      // </div>
      // `;

      return /* html */ `
      <div class="contenedorMiniatura" id=${proyecto.id} data-aos="fade-up" data-aos-offset="200" >
        <div class="imgBx">
          <img src="${proyecto.miniatura}"/>
        </div>
        <div class="details">
          <h3>${proyecto.titulo}</h3>
        </div>
      </div>
      `;
    })
    .join("");
  trabajos.innerHTML = html;
}

const trabajos = document.querySelector('[id^="trabajos"]');
if (typeof trabajos != "undefined" && trabajos != null) cargarProyectos();
