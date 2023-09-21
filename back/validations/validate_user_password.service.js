const { compare } = require('bcrypt');

/**
 * Valida la contraseña de un usuario
 *
 * @param {string} password - La contraseña a validar
 * @param {string} hashedPassword - La contraseña encriptada
 * @returns {Promise<boolean>} Una promesa que resuelve con la contraseña valida
 */
const validateUserPassword = async (password, hashedPassword) => {
  const result = await compare(password, hashedPassword);

  return result;
};

module.exports = validateUserPassword;
