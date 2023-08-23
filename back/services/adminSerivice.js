const jwt = require('jsonwebtoken');
const { Admin } = require('../models/Admin');

// Crear un usuario
async function createAdmin(firstname, lastname, dni, phone, adress, email) {
  const admin = new Admin();
  admin.firstname = firstname;
  admin.lastname = lastname;
  admin.dni = dni;
  admin.phone = phone;
  admin.adress = adress;
  admin.email = email;
  const adminCreate = await admin.save();
  return adminCreate;
}

// login
async function login(email, password) {
  const admin = await Admin.findOne({
    where: {
      email,
      password,
    },
  });

  if (!admin) {
    throw new Error('El email o la contraseña son incorrectos');
  }

  const token = jwt.sign(
    {
      id: admin.id,
      email: admin.email,
      name: admin.name,
    },
    'ClaveSecreta',
  );

  return {
    accessToken: token,
  };
}

module.exports = { login, createAdmin };
