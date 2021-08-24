import {
  preciosModelo,
  preciosOs,
  preciosRam,
  preciosHdd,
  preciosExtras,
} from "./precios.js";

// const preciosModelo = {
//   desktop: 500,
//   laptop: 1000,
//   mensaje: 'Elige un modelo base.'
// }

// const preciosOs = {
//   w_7: 19,
//   w_8: 25,
//   w_10: 35,
//   linux: 0,
//   mensaje: 'No has añadido sitema operativo. Creemos que te vendría bien uno.',
// }

// const preciosRam = {
//   GB_2: 30,
//   GB_4: 45,
//   GB_8: 60,
//   GB_16: 99,
//   mensaje: 'No has añadido RAM. Creemos que te vendría bien aunque sea 2GB',
// }

// const preciosHdd = {
//   GB_250: 60,
//   GB_500: 80,
//   TB_1: 120,
//   TB_2: 150,
//   mensaje: 'No has añadido un disco duro. ¿Donde quieres instalar las cosas? Mejor elige uno...',
// }

// const preciosExtras = {
//   office: 30,
//   antivirus: 50,
//   servicio: 100,
//   mensaje: 'No hay mensaje',
// }

/* =============================================== */

/* Triggers */
const calcular = document.querySelector("#calcular");
const allInputs = document.querySelectorAll("[name]");

/* Cacheo formularios valores elegidos */
const images = document.querySelectorAll(".tipoModelo img");
const modelos = document.querySelectorAll("[name=modelo]");
const os = document.querySelector("[name=os]");
const ram = document.querySelector("[name=ram]");
const hdd = document.querySelector("[name=hdd]");
const extras = document.querySelectorAll(".extras [type=checkbox]");
const office = document.querySelector("[name=office]");
const antivirus = document.querySelector("[name=antivirus]");
const servicio = document.querySelector("[name=servicio]");
let precioFinal = 0;
let yaCalculado = false;

function resaltarSeleccionado() {
  images.forEach(image =>
    this.value == image.dataset.modelo
      ? image.classList.add("seleccionado")
      : image.classList.remove("seleccionado"),
  );
}

function calcularPrecio(e) {
  e.preventDefault();
  precioFinal = 0; // Si recalculan, pone el precio a cero

  modelos.forEach(modelo =>
    modelo.checked
      ? (precioFinal += preciosModelo[modelo.value])
      : (precioFinal += 0),
  ); // Incremento modelo
  if (preciosOs[os.value]) precioFinal += preciosOs[os.value]; // Incremento OS
  if (preciosRam[ram.value]) precioFinal += preciosRam[ram.value]; // Incremento RAM
  if (preciosHdd[hdd.value]) precioFinal += preciosHdd[hdd.value]; // Incremento HDD
  extras.forEach(extra =>
    extra.checked
      ? (precioFinal += preciosExtras[extra.value])
      : (precioFinal += 0),
  );
}

function dibujarTicket() {
  /*  if (modelos[0].value == 'desktop')      if (modelos[1].value == 'laptop')
      if (os.selectedIndex != 0)      if (ram.selectedIndex != 0)      if (hdd.selectedIndex != 0)
      if (office.checked)    if (antivirus.checked)     if (servicio.checked)    */

  function imprime(componente, eleccion, precio, mensaje, seleccionado) {
    let print = document.createElement("div");
    if (seleccionado) {
      /* console.log(componente, eleccion, precio); */
      print.innerHTML = `
      <p class="componente">${componente}:</p>  
      <p class="eleccion">${eleccion}</p> 
      <p class="precio">+${precio}€</p>
      `;
    } else {
      print.innerHTML = mensaje;
    }
    presu.appendChild(print);
    /* console.log(`Que componente: ${componente}\nQue han elegido: ${eleccion}\nQue precio: ${precio}\nQue mensaje: ${mensaje}`); */
  }

  /* Genera el ticket */
  const presu = document.querySelector(".presupuesto");
  presu.classList.add("presupuestoActivo");
  presu.innerHTML = "";

  /* Añade info */
  const infoEmpresa = document.createElement("div");
  infoEmpresa.classList.add("info");
  infoEmpresa.innerHTML = `MR. ROBOT. S.A. <br> CIF: 32434324-X <br> TFNO: 612 345 678 <br>`;
  presu.appendChild(infoEmpresa);

  /* Añade cada elemento */
  modelos.forEach(modelo => {
    if (modelo.checked)
      imprime(
        modelo.name,
        modelo.value,
        preciosModelo[modelo.value],
        preciosModelo.mensaje,
        modelo.checked,
      );
  });
  imprime(
    os.name,
    os.options[os.selectedIndex].text,
    preciosOs[os.value],
    preciosOs.mensaje,
    os.selectedIndex != 0,
  );
  imprime(
    ram.name,
    ram.options[ram.selectedIndex].text,
    preciosRam[ram.value],
    preciosRam.mensaje,
    ram.selectedIndex != 0,
  );
  imprime(
    hdd.name,
    hdd.options[hdd.selectedIndex].text,
    preciosHdd[hdd.value],
    preciosHdd.mensaje,
    hdd.selectedIndex != 0,
  );
  extras.forEach(extra => {
    if (extra.checked)
      imprime(
        "Extras",
        extra.name,
        preciosExtras[extra.value],
        preciosExtras.mensaje,
        extra.checked,
      );
  });

  /* Añade precio */
  const total = document.createElement("div");
  total.innerHTML = `<p class="precioFinal">Precio: ${precioFinal}€</p>`;
  presu.appendChild(total);
}

modelos.forEach(modelo =>
  modelo.addEventListener("click", resaltarSeleccionado),
);
calcular.addEventListener("click", calcularPrecio);
calcular.addEventListener("click", dibujarTicket);
allInputs.forEach(input => input.addEventListener("change", calcularPrecio));
allInputs.forEach(input => input.addEventListener("change", dibujarTicket));
