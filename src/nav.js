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
  link.addEventListener("click", toggleNav);
});
