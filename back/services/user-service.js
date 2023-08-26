const { User, Products } = require('../models');
const jwt = require('jsonwebtoken');

// login
async function login(mail, password) {

  const users = await User.findOne({
    where: {
      mail,
      password,
    },
    //include: [{model: Products}]
  });

  if (!users) {
    throw new Error('Alias o Contraseña incorrectos');
  }

  const token = jwt.sign({
    id: users.id,
    mail: users.mail
  }, 'ClaveUltraSecreta', {expiresIn: '5m'});

  return {token};
}

// creacion de usuario
async function userRegister(idDireccion, firstName, lastName, dni, mail, password,
  estadoDeVendedor, alias) {
  const user = new User();

  user.idDireccion = idDireccion;
  user.firstName = firstName;
  user.lastName = lastName;
  user.dni = dni;
  user.mail = mail;
  user.password = password;
  user.estadoDeVendedor = estadoDeVendedor;
  user.alias = alias;

  const userCreated = await user.save();
  return userCreated;
}

module.exports = { login, userRegister };