const multer = require('multer');
const localDisk = require('../../config/files/multer.config');

// Se subiran los archivos al server local
const upload = multer({
  storage: localDisk,
}).single('pictureLink');

module.exports = upload;
