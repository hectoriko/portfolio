const preciosModelo = {
  desktop: 500,
  laptop: 1000,
  mensaje: 'Elige un modelo base.'
}

const preciosOs = {
  /* none: 0, */
  w_7: 19,
  w_8: 25,
  w_10: 35,
  linux: 0,
  mensaje: 'No has añadido sitema operativo. Creemos que te vendría bien uno.',
}

const preciosRam = {
  /* none: 0, */
  GB_2: 30,
  GB_4: 45,
  GB_8: 60,
  GB_16: 99,
  mensaje: 'No has añadido RAM. Creemos que te vendría bien aunque sea 2GB',
}

const preciosHdd = {
  /* none: 0, */
  GB_250: 60,
  GB_500: 80,
  TB_1: 120,
  TB_2: 150,
  mensaje: 'No has añadido un disco duro. ¿Donde quieres instalar las cosas? Mejor elige uno...',
}

const preciosExtras = {
  office: 30,
  antivirus: 50,
  servicio: 100,
  mensaje: 'No hay mensaje',
}

export {preciosModelo, preciosOs, preciosRam, preciosHdd, preciosExtras};