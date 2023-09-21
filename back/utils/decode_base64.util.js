/**
 * Decodifica un base64.
 *
 * @param {string} data - Base64 a decodificar
 * @return {string} El buffer decodificado
 */
const decodeBase64 = (data) => Buffer.from(data, 'base64');

module.exports = decodeBase64;
