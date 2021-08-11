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
    <!-- <i class="fa fa-bars" id="botonHamburguesa"></i> -->
    <!-- <img id="botonHamburguesa" src="./images/hb.png" /> -->

    <!-- BURGER -->
    <div class="menu-hamburguesa">
      <span class="boton-hamburguesa"></span>
      <span class="boton-hamburguesa"></span>
      <span class="boton-hamburguesa"></span>
    </div>

    <div class="menuLateral" id="menuLateral">
      <!-- <i class="fa fa-times" id="botonCerrar"></i> -->
      <a href="web.html">Web</a>
      <a href="design.html">Diseño gráfico</a>
      <a href="index.html#seccionContacto">Contacto</a>
    </div>
  </div>`;

/* Insertar NAV */
const navContenedor = document.querySelector("#nav");
navContenedor.innerHTML = nav;

/* Navegación */
const botonHamburguesa = document.querySelector(".menu-hamburguesa");
const menuLateral = document.getElementById("menuLateral");
// const linksMobile = document.querySelectorAll("#menuLateral a");
// const botonCerrar = document.getElementById("botonCerrar");

function toggleNav() {
  menuLateral.classList.toggle("abierto");
}

function toggleHamburguesa() {
  botonHamburguesa.classList.toggle("open");
}

botonHamburguesa.addEventListener("click", toggleNav);
botonHamburguesa.addEventListener("click", toggleHamburguesa);

// botonCerrar.addEventListener("click", toggleNav);

// linksMobile.forEach(link => {
//   link.addEventListener("click", toggleNav);
// });
