const jwt = require('jsonwebtoken');
// const admin = require('../models');
const passwordService = require('./passwordService');
// const adminService = require('./adminSerivice');
const db = require('../models');

async function emailLogin(email) {
  let existeAdmin = false;

  const admin = await db.admin.findOne({
    where: {
      email,
    },
  });

  if (!admin) {
    throw new Error('El email es incorrecto');
  }

  // Llamar función generadora de OTP
  const pwd = passwordService.generarOtp();

  // Llamar al método que genera limite de tiempo de uso del OTP
  // eslint-disable-next-line camelcase
  const limit_time = passwordService.limiTime();
  const passCreate = await passwordService.createPassword(pwd, limit_time);
  console.log('passCreate', passCreate);
  admin.password_id = passCreate.id;
  console.log('pass', passCreate.id);
  console.log('admin', admin);
  await admin.save();

  // Llamar al método que hace el Insert a la tabla del password
  // Llamar al método que actualiza el password_id en la tabla de admin
  // adminService.editAdmin();

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
    id: db.admin.id,
    email: db.admin.email,
    name: db.admin.name,
    is_admin: false,
  });
  return {
    accessToken: token,
  };
}

// Con el id de password buscamos en la tabla de admin el password_id
// SELECT roll, password_id FROM admins a WHERE id = 1

module.exports = {
  emailLogin,
  verificarPassword,
};
