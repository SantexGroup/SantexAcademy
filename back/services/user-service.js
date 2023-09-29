require('dotenv').config();

const jwt = require('jsonwebtoken');
const { User, Direccion } = require('../models');

// login
async function login(mail, password) {
  const users = await User.findOne({
    where: {
      mail,
      password,
    },
    // include: [{model: Products}]
  });

  if (!users) {
    throw new Error('Correo o Contraseña incorrectos');
  }

  const token = jwt.sign({
    id: users.id,
    mail: users.mail,
  }, process.env.JWT_CLAVE);

  return [{ token }, { users }];
}

// creacion de usuario
async function userRegister(
  firstName, lastName, dni, mail, password, alias, idLocalidad, calleYAltura,
) {
  const direction = new Direccion();

  direction.idLocalidad = idLocalidad;
  direction.calleYAltura = calleYAltura;

  const direccionCreated = await direction.save();

  const user = new User();

  user.idDireccion = direccionCreated.id;
  user.firstName = firstName;
  user.lastName = lastName;
  user.dni = dni;
  user.mail = mail;
  user.password = password;
  user.alias = alias;

  const users = await user.save();

  const token = jwt.sign({
    id: users.id,
    mail: users.mail,
  }, process.env.JWT_CLAVE);

  return [{ token }, { users }];
}

// usuario por id

async function getUserFromId(id) {
  const user = await User.findByPk(id);

  return user;
}

// cambiar estado de vendedor

async function cambiarEstadoVendedor(id) {
  const user = await User.findByPk(id);

  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  user.estadoDeVendedor = true;
  const users = await user.save();

  const token = jwt.sign({
    id: users.id,
    mail: users.mail,
  }, process.env.JWT_CLAVE);

  return [{ token }, { users }];
}

// editar usuario

async function editUsuario(id, firstName, lastName, dni, mail, password, alias,
  idLocalidad, calleYAltura) {
  const user = await getUserFromId(id);

  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }

  if (dni) {
    user.dni = dni;
  }

  if (mail) {
    user.mail = mail;
  }

  if (password) {
    user.password = password;
  }

  if (alias) {
    user.alias = alias;
  }

  if (idLocalidad) {
    user.idLocalidad = idLocalidad;
  }

  if (calleYAltura) {
    user.calleYAltura = calleYAltura;
  }

  const userEdited = await user.save();

  return userEdited;
}

module.exports = {
  login, userRegister, cambiarEstadoVendedor, getUserFromId, editUsuario,
};
