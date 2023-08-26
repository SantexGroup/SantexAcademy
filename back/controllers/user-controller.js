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

// logout
async function logout(req, res) {
  console.log('eliminando token');
  res.cookie('jwt', '', {maxAge: 1});
  res.redirect('/');
};

// crear usuario
async function createUser(req, res) {
  const {
    idDireccion, firstName, lastName, dni, mail, password, estadoDeVendedor, alias,
  } = req.body;

  const user = await userService.userRegister(idDireccion, firstName, lastName, dni, mail,
    password, estadoDeVendedor, alias);

  res.status(201).send(user);
}

module.exports = { login, createUser, logout };
