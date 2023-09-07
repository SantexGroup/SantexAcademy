const userService = require('../services/user-service');

// login
async function login(req, res, next) {
  const { mail, password } = req.body;

  try {
    const accesToken = await userService.login(mail, password);
    res.status(200).send(accesToken);
  } catch (error) {
    next(error);
  }
}

// crear usuario
async function createUser(req, res) {
  const {
    firstName, lastName, dni, mail, password, alias, idLocalidad, calleYAltura
  } = req.body;

  const user = await userService.userRegister(firstName, lastName, dni, mail, password, alias, idLocalidad, calleYAltura);
  res.status(201).send(user);
}

// cambiar estado de vendedor

async function cambiarEstadoVendedorUser(req, res, next) {
  const { id } = req.params;
  const { estadoDeVendedor } = req.body;
  try {
    const user = await userService.cambiarEstadoVendedor(id, estadoDeVendedor);
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
}

module.exports = { login, createUser, cambiarEstadoVendedorUser };
