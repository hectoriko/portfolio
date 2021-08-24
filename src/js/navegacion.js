const navHTML =
  /* html */
  `<!-- Navegación -->
  <nav id="nav">
    <a href="index.html" id="logo">
      Héctor
    </a>

    <div id="menuDesktop">
      <a href="web.html">Maquetador web</a>
      <a href="design.html">Diseño gráfico</a>
      <a href="index.html#seccionContacto">Contacto</a>
    </div>

    <div class="menuMobile" id="menuMobile">

      <!-- BURGER -->
      <div class="menu-hamburguesa">
        <span class="boton-hamburguesa"></span>
        <span class="boton-hamburguesa"></span>
        <span class="boton-hamburguesa"></span>
      </div>

      <div class="menuLateral" id="menuLateral">
        <a href="web.html">Maquetador web</a>
        <a href="design.html">Diseño gráfico</a>
        <a href="index.html#seccionContacto">Contacto</a>
      </div>
    </div>
  </nav>`;

/* Insertar NAV */
// const nav = document.querySelector("#nav");
// nav.innerHTML = navHTML;

const nav = document.createRange().createContextualFragment(navHTML);
document.querySelector("body").prepend(nav);
// document.querySelector("body").appendChild(nav);

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
