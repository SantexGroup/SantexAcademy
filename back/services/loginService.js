const jwt = require('jsonwebtoken');
const admin = require('../models');
const password = require('./passwordService');
const adminService = require('./adminSerivice');
const db = require('../models');

async function emailLogin(email) {
  let existeAdmin;

  const adminEmail = await db.admin.findOne({
    where: {
      email,
    },
  });

  if (!adminEmail) {
    throw new Error('El email es incorrecto');
  }

  // Llamar función generadora de OTP
  const pwd = password.generarOtp();

  // Llamar al método que genera limite de tiempo de uso del OTP
  // eslint-disable-next-line camelcase
  const limit_time = password.limiTime();
  const passCreate = password.createPassword(pwd, limit_time);
  console.log(passCreate);

  // Llamar al método que hace el Insert a la tabla del password
  // Llamar al método que actualiza el password_id en la tabla de admin
  adminService.editAdmin(password);

  // Confirmar variable de control
  // eslint-disable-next-line prefer-const
  existeAdmin = true;

  // Llama al sendgrid
  // code here

  return { existeAdmin };
}

// Función para verificar password

async function verificarPassword(pwd) {
  const pass = await db.password.findOne({
    where: {
      pwd,
    },
  });

  if (!pass) {
    throw new Error('La contraseña es incorrecta');
  }

  const token = jwt.sign({
    id: admin.id,
    email: admin.email,
    name: admin.name,
    is_admin: false,
  });
  return {
    accessToken: token,
  };
}

// Con el id de password buscamos en la tabla de admin el password_id

module.exports = {
  emailLogin,
  verificarPassword,
};
