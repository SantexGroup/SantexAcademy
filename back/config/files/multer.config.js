/* Modulos requeridos */
const multer = require('multer');
const path = require('path');

/* Configuracion de Multer */
// Almacenamiento momentaneo
const localDisk = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', '..', 'public/subir'));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

module.exports = localDisk;
