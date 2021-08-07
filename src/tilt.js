import "vanilla-tilt";

VanillaTilt.init(document.querySelector(".tituloDiseño"), {
  scale: 1.1,
  startX: -4,
  startY: -3,
  gyroscope: true,
  // perspective: 1100,
  // max: 45,
  // gyroscopeMinAngleX: -70, // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
  // gyroscopeMaxAngleX: 70, // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
  // gyroscopeMinAngleY: -70, // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
  // gyroscopeMaxAngleY: 70, // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
  "mouse-event-element": "#cabeceraTrabajosDiseño",
});

VanillaTilt.init(document.querySelector("#cvLink"), {
  scale: 1.1,
  glare: true,
  // perspective: 1100,
  max: 40,
});
