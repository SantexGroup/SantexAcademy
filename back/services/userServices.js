const jwt = require('jsonwebtoken');
const { User } = require('../models/user');

// Crear un usuario
async function createUser(firstname, lastname, dni, phone, adress, email, roll) {
  const user = new User();
  user.firstname = firstname;
  user.lastname = lastname;
  user.dni = dni;
  user.phone = phone;
  user.adress = adress;
  user.email = email;
  user.roll = roll;
  const userCreate = await user.save();
  return userCreate;
}

// Busqueda  de todos los usuarios
async function getAll() {
  const userList = await User.findAll();
  return userList;
}

// Busqueda usuario por id
async function getById(id) {
  const user = await User.findByPk(id);

  if (user == null) {
    throw new Error('Usuario no encongtrado');
  }
  return user;
}

// editar usuario
async function editUser(id, firstname, lastname, dni, phone, adress, email) {
  const user = await getById(id);

  if (firstname) {
    user.name = firstname;
  }
  if (lastname) {
    user.lastname = lastname;
  }
  if (email) {
    user.email = email;
  }
  if (dni) {
    user.dni = dni;
  }
  if (phone) {
    user.phone = phone;
  }
  if (adress) {
    user.adress = adress;
  }
  const userEdit = await user.save();
  return userEdit;
}

// Eliminar usuario

async function deleteUser(id) {
  const user = await getById(id);

  await user.destroy();
}

// login
async function login(email, password) {
  const user = await User.findOne({
    where: {
      email,
      password,
    },
  });

  if (!user) {
    throw new Error('El email o la contraseña son incorrectos');
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name,
    },
    'ClaveSecreta',
  );

  return {
    accessToken: token,
  };
}

module.exports = {
  login,
  createUser,
  editUser,
  getAll,
  getById,
  deleteUser,
};
