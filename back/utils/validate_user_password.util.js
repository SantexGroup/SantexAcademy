const { compare } = require('bcrypt');
const CustomException = require('../exceptions/custom.exeption');

/**
 * Compara la contraseña de un usuario con la contraseña encriptada
 *
 * @param {string} password - La contraseña a validar
 * @param {string} hashedPassword - La contraseña encriptada
 * @returns {Promise<void>}
 */
const validateUserPassword = async (password, hashedPassword) => {
  const result = await compare(password, hashedPassword);

  if (!result) {
    throw new CustomException('Credenciales Invalidas', 401);
  }
};

module.exports = validateUserPassword;
