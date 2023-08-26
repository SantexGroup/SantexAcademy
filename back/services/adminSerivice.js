// const jwt = require('jsonwebtoken');
const Admin = require('../models');
const db = require('../models');

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
  const admin = await db.admin.findAll({
    where: {
      email,
    },
  });

  if (!admin) {
    throw new Error('El email o la contraseña son incorrectos');
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
}

module.exports = {
  emailLogin,
  createAdmin,
  editAdmin,
  getAll,
  getById,
  deleteAdmin,
};
