require('dotenv').config();

const { User, Products, direccion } = require('../models');
const jwt = require('jsonwebtoken');

// login
async function login(mail, password) {

  const users = await User.findOne({
    where: {
      mail: mail,
      password: password
    },
    //include: [{model: Products}]
  });

  if (!users) {
    throw new Error('email o contraseña incorrectos');
  }

  const token = jwt.sign({
    id: users.id,
    mail: users.mail
  }, process.env.JWT_CLAVE, {expiresIn: process.env.JWT_EXPIRATION_TOKEN});

  return token;
}

// creacion de usuario
async function userRegister(firstName, lastName, dni, mail, password, alias, idLocalidad, calleYAltura) {

  const direction = new direccion();

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

  const userCreated = await user.save();
  console.log(userCreated);

  const token = jwt.sign({
    id: userCreated.id,
    mail: userCreated.mail
  }, process.env.JWT_CLAVE, {expiresIn: process.env.JWT_EXPIRATION_TOKEN});

  return {token};
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
