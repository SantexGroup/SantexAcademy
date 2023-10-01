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
    firstName, lastName, dni, mail, password, alias, idLocalidad, calleYAltura,
  } = req.body;

  const user = await userService.userRegister(firstName, lastName, dni, mail,
    password, alias, idLocalidad, calleYAltura);
  res.status(201).send(user);
}

// usuario por id

async function getUserById(req, res) {
  const { id } = req.params;

  try {
    const usuario = await userService.getUserFromId(id);

    if (usuario) {
      res.status(200).send(usuario);
    } else {
      res.status(404).send({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Error al buscar el usuario' });
  }
}

// cambiar estado de vendedor

async function cambiarEstadoVendedorUser(req, res, next) {
  const { id } = req.params;

  try {
    const user = await userService.cambiarEstadoVendedor(id);
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
}

// editar usuario
/* async function editUser(req, res) {
  const { id } = req.params;
  const {
    firstName, lastName, dni, mail, password, alias,
    idLocalidad, calleYAltura,
  } = req.body;

  const usuario = await userService.editUsuario(id, firstName, lastName, dni, mail, password,
    alias, idLocalidad, calleYAltura);

  res.status(201).send(usuario);
} */

module.exports = {
  login, createUser, cambiarEstadoVendedorUser, getUserById,
};
