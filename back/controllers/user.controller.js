// Importacion de userService para inyectar en el controlador.

const bcrypt = require('bcrypt');
const userService = require('../services/user.service');
//
// controlador que redirige al servicio para registrar un usuario
async function recordUser(req, res) {
  const {
    /*  Extraer los datos del cuerpo de la solicitud */
    rolesId,
    nick,
    password,
    name,
    lastName,
    email,
    phone,
  } = req.body;

  const salt = await bcrypt.genSalt();
  const passwordCrypt = await bcrypt.hash(password, salt);

  // Llamas al servicio para registrar un usuario
  const user = await userService.recordUser(rolesId, nick, passwordCrypt, name, lastName, email,
    phone);
  // Enviar respuesta con el usuario registrado
  res.status(200).send(user);
}

// Controlador que redirige al servicio para Login

async function login(req, res, next) {
  const {
    // Extraer el nick y password de la solicitud
    nick,
    password,
  } = req.body;
  try {
    // LLamar al service para hacer el login de un usuario
    const result = await userService.login(nick, password);
    res.status(201).send(result);
  } catch (error) {
    // en caso de error, lanzarlo
    next(error);
  }
}

//* agregado
async function getUser(req, res, next) {
  const { id } = req.params;

  try {
    const user = await userService.getUser(id);
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
}

// Controlador que redirige al servicio para actulizar un usuario
async function updateUser(req, res, next) {
  try {
    // Extraer el ID del usuario de los parámetros de la solicitud
    const { id } = req.params;
    const userData = req.body;
    // Llamar al servicio para actualizar los datos del usuario
    const user = await userService.updateUser(id, userData);

    // Enviar la respuesta con el usuario actualizado
    res.status(200).send(user);
  } catch (error) {
    // Manejo de errores en caso de que ocurra algún problema
    next(error);
  }
}

async function userDeleted(req, res, next) {
  const { id } = req.params;
  try {
    await userService.deleteUser(id);
    res.status(201).send('Usuario eliminado correctamente');
  } catch (error) {
    next(error);
  }
}
// Modulos a exportar para inyectar en routes
module.exports = {
  recordUser,
  updateUser,
  getUser, //* agregado
  login,
  userDeleted,
};
