const jwtConstructor = require('../providers/jwt_constructor');

/**
 * Función para generar un JWT
 *
 * @param {any} payload - El payload del JWT
 * @returns {string} El JWT
 */
const handleJWT = async (payload) => {
  const encoder = new TextEncoder();

  const key = encoder.encode(process.env.JWT_PRIVATE_KEY);

  // eslint-disable-next-line no-return-await
  return await jwtConstructor(payload, key);
};

module.exports = handleJWT;
