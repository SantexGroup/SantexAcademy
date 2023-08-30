/* eslint-disable prefer-const */
// const jwt = require('jsonwebtoken');
const Admin = require('../models');
const db = require('../models');
const password = require('./passwordService');

// Buscar todos los administradores
async function getAll() {
  const adminList = await db.admin.findAll();

  return adminList;
}

// Buscar administrador por id
async function getById(id) {
  const admin = await db.admin.findByPk(id);

  if (admin == null) {
    throw new Error('Administrador no encontrado');
  }

  return admin;
}

// Crear un administrador
async function createAdmin(
  firstname,
  lastname,
  dni,
  phone,
  adress,
  email,
  roll,
) {
  const admin = new Admin();
  admin.firstname = firstname;
  admin.lastname = lastname;
  admin.dni = dni;
  admin.phone = phone;
  admin.adress = adress;
  admin.email = email;
  admin.roll = roll;
  const adminCreate = await db.admin.save();
  return adminCreate;
}

//  Editar un administrador
async function editAdmin(id, firstname, lastname, dni, phone, adress, email) {
  const admin = await db.admin.getById();

  if (firstname) {
    admin.firstname = firstname;
  }

  if (lastname) {
    admin.lastname = lastname;
  }

  if (dni) {
    admin.dni = dni;
  }

  if (phone) {
    admin.phone = phone;
  }

  if (adress) {
    admin.adress = adress;
  }

  if (email) {
    admin.email = email;
  }

  const adminEdited = await db.admin.save();
  return adminEdited;
}

// Eliminar un administrador
async function deleteAdmin(id) {
  const admin = await getById(id);

  await admin.destroy();
}

// login
async function emailLogin(email) {
  let existeAdmin;

  const admin = await db.admin.findOne({
    where: {
      email,
    },
  });

  if (!admin) {
    throw new Error('El email es incorrecto');
  }

  // Llamar función generadora de OTP
  // code here
  const pwd = password.generarOtp();

  // Llamar al método que genera limite de tiempo de uso del OTP
  // obtenerHoraActual(); Es un ejemplo, no es limite de uso
  // eslint-disable-next-line camelcase
  const limit_time = password.limiTime();

  // Llamar al método que hace el Insert a la tabla del password
  password.createPassword(pwd, limit_time);

  // Llamar al método que actualiza el password_id en la tabla de admin
  editAdmin(/* completar aqui */);

  // Confirmar variable de control
  existeAdmin = true;

  // Llama al sendgrid
  // code here

  return { existeAdmin };
}

/* const token = jwt.sign(
    {
      id: admin.id,
      email: admin.email,
      name: admin.name,
    },
    'ClaveSecreta',
  );

  return {
    accessToken: token,
  }; */

module.exports = {
  emailLogin,
  createAdmin,
  editAdmin,
  getAll,
  getById,
  deleteAdmin,
};
