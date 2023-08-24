// const jwt = require('jsonwebtoken');
// const byscriptjs = require('bcrypt');
// const conexion = require('../config/files/sequelize.config');
const userService = require('../services/userServices');

// Traer todos los usuarios
async function getAllUsers(req, res) {
  const users = await userService.getAll();
  res.status(200).send(users);
}

// Traer un usuario por id

async function getUserById(req, res, next) {
  const { id } = req.params;

  try {
    const user = await userService.getById(id);
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
}

// Crear un user
async function createUser(req, res) {
  try {
    const {
      firstname,
      lastname,
      dni,
      phone,
      adress,
      email,
      roll,
    } = req.body;
    const user = await userService.createUser(firstname, lastname, dni, phone, adress, email, roll);
    res.status(200).send(user);
  } catch (error) {
    throw Error('error');
  }
}

// Editar un usuario

async function editUser(req, res) {
  const { id } = req.params;
  const {
    firstname,
    lastname,
    dni,
    phone,
    adress,
    email,
  } = req.body;
  const user = await userService.editUser(id, firstname, lastname, dni, phone, adress, email);

  res.status(200).send(user);
}

// Eliminar Usuario

async function deleteUser(req, res) {
  const { id } = req.params;
  await userService.deleteUser(id);

  res.status(200).send(`EL usuario con el id: ${id}, ha sido eliminado correctamente`);
}

// Login

async function login(req, res, next) {
  const { email, password } = req.body;
  try {
    const result = await userService.login(email, password);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  editUser,
  deleteUser,
  login,
};
