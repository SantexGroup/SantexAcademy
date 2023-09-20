const fs = require('fs');
const CustomException = require('../exceptions/custom.exeption');

/**
 * Guarda un archivo en el sistema de archivos.
 *
 * @param {string} fileName - Nombre del archivo que se va a guardar.
 * @param {string} filePath - Ruta donde se va a guardar el archivo.
 */
const saveFile = (fileName, filePath) => {
  try {
    fs.writeFileSync(filePath, fileName);
  } catch (error) {
    throw new CustomException(
      `Error al guardar el archivo: ${error.message}`,
      400,
    );
  }
};

module.exports = saveFile;
