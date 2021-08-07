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
      caption: "Pie sumario",
    },
    {
      src: `${pathProyectos}/pagina_cuatro_ruedas_mockup.jpg`,
      alt: "Montaje de páginas de la sección cuatro ruedas.",
      caption: "Pie cuatro ruedas",
    },
    {
      src: `${pathProyectos}/pagina_enportada_mockup.jpg`,
      alt: "Montaje de páginas de la sección sumario en portada.",
      caption: "Pie en portada",
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
      alt: "Papeleria 01",
      caption: "Pie papelería",
    },
    {
      src: `${pathProyectos}/branding_inMotion_construccion_01.jpg`,
      alt: "Papeleria 02",
      caption: "Pie papelería",
    },
    {
      src: `${pathProyectos}/branding_inMotion_construccion_02.jpg`,
      alt: "Papeleria 03",
      caption: "Pie papelería",
    },
    {
      src: `${pathProyectos}/branding_inMotion_monigotes_01.jpg`,
      alt: "Papeleria 04",
      caption: "Pie papelería",
    },
    {
      src: `${pathProyectos}/branding_inMotion_monigotes_02.jpg`,
      alt: "Papeleria 05",
      caption: "Pie papelería",
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
      alt: "",
      caption: "",
    },
    {
      src: `${pathProyectos}/retoque_bebidas_alhambra.jpg`,
      alt: "",
      caption: "",
    },
    {
      src: `${pathProyectos}/retoque_bebidas_pepsi.jpg`,
      alt: "",
      caption: "",
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
      alt: "",
      caption: "",
    },
    {
      src: `${pathProyectos}/tarjetas_tucan_frontal_trasera.jpg`,
      alt: "",
      caption: "",
    },
    {
      src: `${pathProyectos}/tarjetas_tucan_pila_trasera.jpg`,
      alt: "",
      caption: "",
    },
    {
      src: `${pathProyectos}/tarjetas_tucan_pila_frontal.jpg`,
      alt: "",
      caption: "",
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
      alt: "",
      caption: "",
    },
    {
      src: `${pathProyectos}/newsletter_02.jpg`,
      alt: "",
      caption: "",
    },
    {
      src: `${pathProyectos}/newsletter_03.jpg`,
      alt: "",
      caption: "",
    },
    {
      src: `${pathProyectos}/newsletter_04.jpg`,
      alt: "",
      caption: "",
    },
    {
      src: `${pathProyectos}/newsletter_05.jpg`,
      alt: "",
      caption: "",
    },
    {
      src: `${pathProyectos}/newsletter_06.jpg`,
      alt: "",
      caption: "",
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
      src: `${pathProyectos}/render_donuts.jpg`,
      alt: "",
      caption: "",
    },
    {
      src: `${pathProyectos}/render_donuts_video.mp4`,
      alt: "",
      caption: "Animación donde todos los elementos están reaizados en 3D.",
    },
    {
      src: `${pathProyectos}/render_donuts_integracion.mp4`,
      alt: "",
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
      alt: "",
      caption: "",
    },
    {
      src: `${pathProyectos}/lettering_bolsa.jpg`,
      alt: "",
      caption: "",
    },
    {
      src: `${pathProyectos}/lettering_buganvillas.jpg`,
      alt: "",
      caption: "",
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
      alt: "",
      caption: "",
    },
    {
      src: `${pathProyectos}/montaje_busto_comparacion.jpg`,
      alt: "",
      caption: "",
    },
  ],
  `${pathProyectos}/montaje_mano_final_thumb.jpg`,
);

const webNoe = new Proyecto(
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
);

const webAjuste = new Proyecto(
  "web",
  "webAjuste",
  "Web ajusteFinal",
  "Rediseño de la web de este estudio de diseño donde trabajé durante varios años. Se realizó en wordpress con el tema Divi.",
  [
    {
      src: `${pathProyectos}/web_ajustefinal.jpg`,
      alt: "",
      caption: "",
    },
  ],
  `${pathProyectos}/web_ajustefinal.jpg`,
  "http://www.ajustefinal.com/",
);

/* Generar array de forma manual que contiene los proyectos*/
/* const proyectos = [montajePagina, branding, retoqueImagen, tarjetas, newsletter, tresDe, lettering, otros]; */
