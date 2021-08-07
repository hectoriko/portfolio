export const nav =
  /* html */
  `<a href="index.html" id="logo">
    Héctor
  </a>

  <div id="menuDesktop">
    <a href="web.html">Web</a>
    <a href="design.html">Diseño gráfico</a>
    <a href="index.html#seccionContacto">Contacto</a>
  </div>

  <div class="menuMobile" id="menuMobile">
    <i class="fa fa-bars" id="botonHamburguesa"></i>
    <div class="menuLateral" id="menuLateral">
      <i class="fa fa-times" id="botonCerrar"></i>
      <a href="web.html">Web</a>
      <a href="design.html">Diseño gráfico</a>
      <a href="index.html#seccionContacto">Contacto</a>
    </div>
  </div>`;

/* Insertar NAV */
const navContenedor = document.querySelector("#nav");
navContenedor.innerHTML = nav;
