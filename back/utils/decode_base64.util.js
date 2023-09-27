const CustomException = require('../exceptions/custom.exeption');

/**
 * Decodifica un base64.
 *
 * @param {string} data - Base64 a decodificar
 * @return {string} - Base64 decodificado
 */
const decodeBase64 = (data) => {
  try {
    const decoded = Buffer.from(data, 'base64').toString('utf-8');
    return decoded;
  } catch (error) {
    throw new CustomException('Error en la decodificación del Base64.', 500);
  }
};

module.exports = decodeBase64;
