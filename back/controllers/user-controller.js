const userService = require('../services/user-service');

// login
async function login(req, res, next) {
  const { alias, password } = req.body;

  try {
    const result = await userService.login(alias, password);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

// crear usuario
async function createUser(req, res) {
  const {
    idDireccion, firstName, lastName, dni, mail, password, estadoDeVendedor, alias,
  } = req.body;

  const user = await userService.userRegister(idDireccion, firstName, lastName, dni, mail,
    password, estadoDeVendedor, alias);

  res.status(201).send(user);
}

module.exports = { login, createUser };
