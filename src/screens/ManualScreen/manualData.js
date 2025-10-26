// src/screens/ManualScreen/manualData.js

// --- INICIO DE LA MODIFICACIÓN ---
// Importamos las imágenes que están en src/assets/Manual/
// (La ruta es relativa desde este archivo)
const imgColocar = require('../../assets/Manual/Colocar.png');
const imgSeleccionar = require('../../assets/Manual/seleccionar.png');
const imgMover = require('../../assets/Manual/mover.png');
const imgEscalar = require('../../assets/Manual/escalar.png');
const imgRotar = require('../../assets/Manual/rotar.png');
// --- FIN DE LA MODIFICACIÓN ---

export const manualInstructions = [
  {
    imageName: 'colocar',
    title: '1. Colocar un Objeto',
    description: 'Abre el "Catálogo" (icono de carpeta), selecciona un modelo y simplemente toca el suelo (en la vista de AR) para posicionarlo.',
    imageSource: imgColocar, // <-- LÍNEA AÑADIDA
  },
  {
    imageName: 'seleccionar',
    title: '2. Seleccionar y Eliminar',
    description: 'Toca un objeto que ya esté en el suelo para seleccionarlo (se volverá amarillo). Al seleccionarlo, aparecerá el botón "Eliminar".',
    imageSource: imgSeleccionar, // <-- LÍNEA AÑADIDA
  },
  {
    imageName: 'mover',
    title: '3. Mover un Objeto',
    description: 'Una vez seleccionado, simplemente mantén presionado el objeto y arrástralo con tu dedo a una nueva ubicación.',
    imageSource: imgMover, // <-- LÍNEA AÑADIDA
  },
  {
    imageName: 'escalar',
    title: '4. Escalar (Tamaño)',
    description: 'Con un objeto seleccionado, usa dos dedos en un gesto de "pellizco" (pinch) para hacerlo más grande o más pequeño.',
    imageSource: imgEscalar, // <-- LÍNEA AÑADIDA
  },
  {
    imageName: 'rotar',
    title: '5. Rotar un Objeto',
    description: 'Con un objeto seleccionado, usa dos dedos y gíralos (como una perilla) para cambiar su orientación.',
    imageSource: imgRotar, // <-- LÍNEA AÑADIDA
  },
];