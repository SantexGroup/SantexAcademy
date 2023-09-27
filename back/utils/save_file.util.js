const fs = require('fs').promises; // Utilizamos fs.promises para trabajar con promesas
const path = require('path');
const CustomException = require('../exceptions/custom.exeption');

/**
 * Guarda un archivo en el sistema de archivos.
 *
 * @param {string} file - Archivo que se va a guardar.
 * @param {string} filePath - Ruta donde se va a guardar el archivo, relativa a la carpeta 'public'.
 * @return {Promise<void>} Una promesa que resuelve cuando el archivo se ha guardado correctamente.
 */
const saveFile = async (file, filePath) => {
  try {
    const pathStorage = path.resolve(__dirname, '../', filePath);

    const dirName = path.dirname(pathStorage);
    await fs.mkdir(dirName, { recursive: true });

    await fs.writeFile(pathStorage, file);
  } catch (error) {
    throw new CustomException(
      `Error al guardar el archivo: ${error.message}`,
      400,
    );
  }
};

module.exports = saveFile;
