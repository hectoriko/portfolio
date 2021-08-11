export let infoProyectos = [];

/* Constructor de infoProyectos - Imagenes, alt y pies en un OBJETO*/
class Proyecto {
  constructor(area, id, titulo, texto, imagenes, miniatura, url = "") {
    this.area = area;
    this.id = id;
    this.titulo = titulo;
    this.texto = texto;
    this.imagenes = imagenes;
    this.miniatura = miniatura;
    this.infoProyectos = infoProyectos.push(this); // Con esto, cada nueva instancia se guarda automáticamente en el array llamado proyectos.
  }
}

// const pathProyectos = "resources/img/proyectos";
const pathProyectos = "./images";

const montajePagina = new Proyecto(
  "design",
  "montajePagina",
  "Montaje de página",
  "Diferentes páginas maquetadas para la revista Motor16.",
  [
    {
      src: `${pathProyectos}/pagina_sumario_mockup.jpg`,
      alt: "Montaje de páginas del sumario.",
    },
    {
      src: `${pathProyectos}/pagina_cuatro_ruedas_mockup.jpg`,
      alt: "Montaje de páginas de la sección cuatro ruedas.",
    },
    {
      src: `${pathProyectos}/pagina_enportada_mockup.jpg`,
      alt: "Montaje de páginas de la sección sumario en portada.",
    },
  ],
  `${pathProyectos}/pagina_enportada_thumb.jpg`,
);

const branding = new Proyecto(
  "design",
  "branding",
  "Branding",
  "Branding para un proyecto empresa dedicada a la animación 2D y 3D.",
  [
    {
      src: `${pathProyectos}/branding_inMotion_papeleria.jpg`,
      alt: "Papeleria de la empresa.",
    },
    {
      src: `${pathProyectos}/branding_inMotion_construccion_01.jpg`,
      alt: "Construcción del logo",
    },
    {
      src: `${pathProyectos}/branding_inMotion_construccion_02.jpg`,
      alt: "Detalle del logo",
    },
    {
      src: `${pathProyectos}/branding_inMotion_monigotes_01.jpg`,
      alt: "Monigotes de apoyo a la marca",
    },
    {
      src: `${pathProyectos}/branding_inMotion_monigotes_02.jpg`,
      alt: "Más monigotes de apoyo a la marca",
    },
  ],
  `${pathProyectos}/branding_inMotion_papeleria_thumb.jpg`,
);

const retoqueImagen = new Proyecto(
  "design",
  "retoqueImagen",
  "Retoque de imagen",
  "El cliente, una conocida cadena de restaurantes, iba a cambiar de proveedor de bebidas, por lo que necesitaba cambiar la foto del menú. Se hicieron dos versiones diferentes para realizar la transición de uno a otro. La primera es la original, las dos siguientes son los retoques realizados.",
  [
    {
      src: `${pathProyectos}/retoque_bebidas_cocacola.jpg`,
      alt: "Fotografía original donde aparece una coca-cola y una cerveza.",
    },
    {
      src: `${pathProyectos}/retoque_bebidas_alhambra.jpg`,
      alt: "Sustitución de la coca-cola por un tercio de cerveza.",
    },
    {
      src: `${pathProyectos}/retoque_bebidas_pepsi.jpg`,
      alt: "Sustitución de la coca-cola por una Pepsi",
    },
  ],
  `${pathProyectos}/retoque_bebidas_cocacola_thumb.jpg`,
);

const tarjetas = new Proyecto(
  "design",
  "tarjetas",
  "Tarjetas de negocio",
  "Rediseño de tarjetas y logo para una clínica veterinaria.",
  [
    {
      src: `${pathProyectos}/tarjetas_tucan_mosaico.jpg`,
      alt: "Mosaico de muchas tarjetas donde se ven anverso y reverso",
    },
    {
      src: `${pathProyectos}/tarjetas_tucan_frontal_trasera.jpg`,
      alt: "Tarjetas de pie donde se ven ambas caras",
    },
    {
      src: `${pathProyectos}/tarjetas_tucan_pila_trasera.jpg`,
      alt: "Pila de tarjetas con el reverso a la vista.",
    },
    {
      src: `${pathProyectos}/tarjetas_tucan_pila_frontal.jpg`,
      alt: "Pila de tarjetas con en avverso a la vista",
    },
  ],
  `${pathProyectos}/tarjetas_tucan_mosaico_thumb.jpg`,
);

const newsletter = new Proyecto(
  "design",
  "newsletter",
  "Diseño de Newsletter",
  "Rediseño de Newsletter para el conocido despacho de abogados Gómez-Acebo & Pombo.",
  [
    {
      src: `${pathProyectos}/newsletter_01.jpg`,
      alt: "Detalle del índice",
    },
    {
      src: `${pathProyectos}/newsletter_02.jpg`,
      alt: "Detalle de portadilla",
    },
    {
      src: `${pathProyectos}/newsletter_03.jpg`,
      alt: "Detalle de subtitular",
    },
    {
      src: `${pathProyectos}/newsletter_04.jpg`,
      alt: "Detalle de titular",
    },
    {
      src: `${pathProyectos}/newsletter_05.jpg`,
      alt: "Detalle de sección",
    },
    {
      src: `${pathProyectos}/newsletter_06.jpg`,
      alt: "Detalle de comienzo de sección",
    },
  ],
  `${pathProyectos}/newsletter_02_thumb.jpg`,
);

const tresDe = new Proyecto(
  "design",
  "tresDe",
  "3D",
  "Modelado, texturizado, iluminación, render y composiición. También integración con imagen real.",
  [
    {
      src: `${pathProyectos}/render_silla.jpg`,
      alt: "Render de una silla de madera",
    },
    {
      src: `${pathProyectos}/render_donuts.jpg`,
      alt: "Render de un donuts y una taza de café",
    },
    {
      video: true,
      src: `${pathProyectos}/render_donuts_video.mp4`,
      src2: `${pathProyectos}/render_donuts_video.webm`,
      caption: "Animación donde todos los elementos están realizados en 3D.",
    },
    {
      video: true,
      src: `${pathProyectos}/render_donuts_integracion.mp4`,
      src2: `${pathProyectos}/render_donuts_integracion.webm`,
      caption: "Integración de animación, con imagen real.",
    },
  ],
  `${pathProyectos}/render_silla_thumb.jpg`,
);

const lettering = new Proyecto(
  "design",
  "lettering",
  "Lettering",
  "Proyectos personales de lettering.",
  [
    {
      src: `${pathProyectos}/lettering_coffee.jpg`,
      alt: "Lettering de la palabra Coffee",
      caption: "",
    },
    {
      src: `${pathProyectos}/lettering_bolsa.jpg`,
      alt: "Lettering de la frase 'Do what you love'",
    },
    {
      src: `${pathProyectos}/lettering_buganvillas.jpg`,
      alt: "Lettering de la palabra Buganvillas",
      caption:
        "Lettering realizado como parte de la creación de la identidad de un gastrobar.",
    },
  ],
  `${pathProyectos}/lettering_bolsa_thumb.jpg`,
);

const otros = new Proyecto(
  "design",
  "otros",
  "Otros",
  "Selección de otros proyectos.",
  [
    {
      src: `${pathProyectos}/montaje_mano_comparacion.jpg`,
      alt: "Antes y después del montaje de una mano metálica",
    },
    {
      src: `${pathProyectos}/montaje_busto_comparacion.jpg`,
      alt: "Antes y después del montaje de un busto de piedra",
    },
  ],
  `${pathProyectos}/montaje_mano_final_thumb.jpg`,
);

const video = new Proyecto(
  "design",
  "video",
  "Videos",
  "Montaje de videos.",
  [
    {
      video: true,
      src: `${pathProyectos}/video_buganvillas.mp4`,
      src2: `${pathProyectos}/video_buganvillas.webm`,
      caption:
        "Video montado durante mi paso por el estudio ajusteFinal, para promocionar un nuevo negocio dedicado a la hostelería.",
    },
    {
      video: true,
      src: `${pathProyectos}/video_mascuatro.mp4`,
      src2: `${pathProyectos}/video_mascuatro.webm`,
      caption:
        "Video montado durante mi paso por el estudio ajusteFinal, para promocionar la creación de la marca de una empresa de acabados.",
    },
  ],
  `${pathProyectos}/timeline_video_thumb.jpg`,
);

/* const webNoe = new Proyecto(
  "web",
  "webNoe",
  "Web mochilas",
  "Diseño y maquetado de esta web para dar a conocer el proyecto de una persona, que en sus ratos libres le gusta dedicarse a la costura.",
  [
    {
      src: `${pathProyectos}/web_noe.jpg`,
      alt: "",
      caption: "Proyecto en construcción.",
    },
  ],
  `${pathProyectos}/web_noe.jpg`,
  "https://hectormartindesign.com/resources/webs/mochilas_noe/index.html",
); */

const triger = new Proyecto(
  "web",
  "web-triger",
  "Triger asesores",
  "Diseño y maquetado de esta web para una asesoría fiscal y gestoría que quería ampliuar su negocio y darse a conocer via web.",
  [
    {
      src: `${pathProyectos}/web_triger.png`,
      alt: "Portada web de Triger",
    },
  ],
  `${pathProyectos}/web_triger.png`,
  "https://trigerasesores.com/",
);

const webAjuste = new Proyecto(
  "web",
  "web-ajuste",
  "Web ajusteFinal",
  "Rediseño de la web de este estudio de diseño donde trabajé durante varios años. Se realizó en wordpress con el tema Divi.",
  [
    {
      src: `${pathProyectos}/web_ajustefinal.jpg`,
      alt: "Portada web Ajuste Final",
    },
  ],
  `${pathProyectos}/web_ajustefinal.jpg`,
  "http://www.ajustefinal.com/",
);

const presupuesto = new Proyecto(
  "web",
  "webAjuste",
  "Presupuesto",
  "Diseño y programación de una página para calcular el presupuesto de un ordenador en base a las opciones elegidas mediante los formularios.",
  [
    {
      src: `${pathProyectos}/web_presupuesto.png`,
      alt: "Portada presupuesto",
    },
  ],
  `${pathProyectos}/web_presupuesto.png`,
  ".webs/presupuesto",
);

/* Generar array de forma manual que contiene los proyectos*/
/* const proyectos = [montajePagina, branding, retoqueImagen, tarjetas, newsletter, tresDe, lettering, otros]; */
