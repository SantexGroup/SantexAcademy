// const Admin = require('../models');
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
  password,
  // eslint-disable-next-line camelcase
  poll_id,
  roll,
) {
  // eslint-disable-next-line new-cap
  const admin = new db.admin();
  admin.firstname = firstname;
  admin.lastname = lastname;
  admin.dni = dni;
  admin.phone = phone;
  admin.adress = adress;
  admin.email = email;
  admin.password = password;
  // eslint-disable-next-line camelcase
  admin.poll_id = poll_id;
  admin.roll = roll;
  const adminCreate = await admin.save();
  return adminCreate;
}

//  Editar un administrador
// eslint-disable-next-line camelcase
async function editAdmin(id, firstname, lastname, dni, phone, adress, email, password_id) {
  console.log(id);
  const admin = await getById(id);

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

  // eslint-disable-next-line camelcase
  if (password_id) {
    // eslint-disable-next-line camelcase
    admin.password_id = password_id;
  }

  const adminEdited = await admin.save();
  return adminEdited;
}

// Eliminar un administrador
async function deleteAdmin(id) {
  const admin = await getById(id);

  await admin.destroy();
}

module.exports = {
  createAdmin,
  editAdmin,
  getAll,
  getById,
  deleteAdmin,
};
