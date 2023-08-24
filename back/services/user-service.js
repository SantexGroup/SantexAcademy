const { User } = require('../models');

async function login(alias, password) {
  const users = await User.findOne({
    where: {
      alias,
      password,
    },
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

// cambiar estado de vendedor

async function cambiarEstadoVendedor(id, estadoDeVendedor) {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  user.estadoDeVendedor = estadoDeVendedor;
  await user.save();

  return user;
}

module.exports = { login, userRegister, cambiarEstadoVendedor };
