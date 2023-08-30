// Importacion de userService para inyectar en el controlador.

const userService = require('../services/user');
//
// controlador que redirige al servicio para registrar un usuario
async function recordUser(req, res) {
  const {
    body,
  } = req.body;
  const user = await userService.recordUser(body);
  res.status(201).send(user);
}

// Controlador que redirige al servicio para Login

async function login(req, res, next) {
  const {
    email,
    password,
  } = req.body;
  try {
    const result = await userService.login(email, password);
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
}

// Controlador que redirige al servicio para actulizar un usuario

async function updateUser(req, res) {
  const {
    id,
  } = req.params;
  const {
    nick,
    password,
    name,
    lastName,
    email,
    phone,
  } = req.body;
  const user = await userService.updateUser(id, nick, password, name, lastName, email, phone);
  res.status(201).send(user);
}
// Modulos a exportar para inyectar en routes
module.exports = {
  recordUser,
  updateUser,
  login,
};
