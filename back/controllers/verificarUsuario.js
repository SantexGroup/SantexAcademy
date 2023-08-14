/* eslint-disable no-unused-vars */
// const services = require('../services')
// const { verificarUsuarioService } = services;
const jwt = require('jsonwebtoken');
const userService = require('../services/user');
const { secret } = require('../middleware/authentication-jwt');

const verificarUsuario = async (req, res) => {
  const { nombreusuario, contrasena } = req.body;
  // Verificación de que los datos del usuario son correctos
  const dbUser = await userService.validateUser;
  if (dbUser) {
    const token = jwt.sign({ nombreusuario: dbUser.nombreusuario }, secret);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Autenticación fallida' });
  }
};

module.exports = { verificarUsuario };
