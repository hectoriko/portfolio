import { infoProyectos } from "./info-proyectos.js";

function cargarProyectos() {
  const area = trabajos.dataset.area;
  const proyectos = infoProyectos.filter(proyecto => proyecto.area === area);
  // const contenedor = document.querySelector(`[data-area="${area}"]`);

  const html = proyectos
    .map(proyecto => {
      return /* html */ `
      <div class="contenedorMiniatura" id=${proyecto.id} data-aos="fade-up" data-aos-offset="200" >
        <img src="${proyecto.miniatura}"/>
      </div>
      `;
    })
    .join("");
  trabajos.innerHTML = html;
}

const trabajos = document.querySelector('[id^="trabajos"]');
if (typeof trabajos != "undefined" && trabajos != null) cargarProyectos();
