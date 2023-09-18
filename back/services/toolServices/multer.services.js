const multer = require('multer');
const localDisk = require('../../config/files/multer.config');

// Se subiran los archivos al server local
const subir = multer({
  storage: localDisk,
}).single('imagen');

module.exports = subir;
