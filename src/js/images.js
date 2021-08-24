/*
import "./images/hector_portada_hoodie.png";
import "./images/logo_Behance.svg";
import "./images/logo_GitHub.svg";
import "./images/logo_LinkedIn.svg";
import "./images/CV_Hector_Martin_Lopez.png";
*/

// Importamos todas las imágenes. Independientemente de si se usan o no
// Estaría bien cargar solo las que se usan.
// El problema es que de momento solo he conseguido importar todas de golpe.
// O importarlas una a una como el código comentado de arriba

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("../", "")] = r(item);
  });
  return images;
}

export const images = importAll(
  require.context(
    "../images",
    false,
    /\.(png|jpe?g|svg|pdf|mp4|webm)$/,
  ),
);
