const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const steps = document.querySelectorAll(".step");

prev.addEventListener("click", restarPaso);
next.addEventListener("click", sumarPaso);

const contador = {
  pasoActual: 1,
  progreso: 0,
  min: 1,
  max: steps.length,
};

isEnd(contador.pasoActual);

function isEnd(num) {
  if (num == contador.min) {
    prev.classList.add("notAllowed");
    prev.disabled = true;
    return;
  }

  if (num == contador.max) {
    next.classList.add("notAllowed");
    next.disabled = true;
    return;
  }

  if (num > contador.min || num < contador.max) {
    prev.disabled = false;
    next.disabled = false;
    prev.classList.remove("notAllowed");
    next.classList.remove("notAllowed");
    return;
  }
}

function sumarPaso() {
  contador.pasoActual++;
  contador.progreso += 33;
  actualizarProgreso();
  activarPaso(contador.pasoActual);
  isEnd(contador.pasoActual);
}

function restarPaso() {
  contador.pasoActual--;
  contador.progreso -= 33;
  actualizarProgreso();
  desactivarPaso(contador.pasoActual);
  isEnd(contador.pasoActual);
}

function activarPaso(num) {
  let paso = steps[num - 1];
  paso.classList.add("activo");
}

function desactivarPaso(num) {
  let paso = steps[num];
  paso.classList.remove("activo");
}

function actualizarProgreso() {
  const bar = document.querySelector("#bar");
  bar.value = contador.progreso;
}
