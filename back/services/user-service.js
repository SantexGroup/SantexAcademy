const { User } = require('../models');
const { Products } = require('../models');

async function login(alias, password) {
  
  const users = await User.findOne({
    where: {
      alias,
      password,
    },
    include: [{model: Products}]
  });

  if (!users) {
    throw new Error('Alias o Contraseña incorrectos');
  }

  return users;
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
