const jwtConstructor = require('../providers/jwt_constructor');

/**
 * Función para generar un JWT
 *
 * @param {any} payload - El payload del JWT
 * @returns {string} El JWT
 */
const handleJWT = (payload) => {
  const encoder = new TextEncoder();

  const key = encoder.encode(process.env.JWT_PRIVATE_KEY);

  return jwtConstructor(payload, key);
};

module.exports = handleJWT;
