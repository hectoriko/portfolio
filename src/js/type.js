import Typed from "typed.js";

const pagActual = window.location.pathname.split("/").pop();

if (pagActual == "web.html") {
  var typed = new Typed(".tituloWeb", {
    stringsElement: "#strings",
    typeSpeed: 80, // Velocidad de escritura
    startDelay: 1500, // Retraso al empezar a escribir
    backSpeed: 40, //Velocidad de borrado
    backDelay: 3500, // Retraso para empezar el bucle
    loop: true,
    loopCount: Infinity,
    showCursor: false,
  });
}
